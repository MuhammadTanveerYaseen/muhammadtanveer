"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detect device type
    const userAgent = navigator.userAgent || navigator.vendor;
    const android = /android/i.test(userAgent);
    const ios = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    
    setIsAndroid(android);
    setIsIOS(ios);
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches || 
                   (window.navigator as any).standalone === true);

    // Register service worker immediately
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => {
          console.log("SW registered: ", registration);
          // Check for updates
          registration.update();
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    }

    // Listen for beforeinstallprompt event (Android Chrome)
    const handler = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // For Android, show install button after a delay if prompt didn't fire
    if (android && !isStandalone) {
      const timer = setTimeout(() => {
        // Check if we have deferred prompt, if not, show manual install instructions
        if (!deferredPrompt) {
          setShowInstallButton(true);
        }
      }, 3000);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeinstallprompt", handler);
      };
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, [deferredPrompt, isStandalone]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Android Chrome - use the prompt
      try {
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === "accepted") {
          setShowInstallButton(false);
        }
      } catch (error) {
        console.log("Install prompt error:", error);
      }
      
      setDeferredPrompt(null);
    } else if (isAndroid) {
      // Manual instructions for Android
      alert("To install this app:\n\n1. Tap the menu (3 dots) in your browser\n2. Select 'Add to Home screen' or 'Install app'\n3. Tap 'Install'");
    }
  };

  // Don't show if already installed
  if (isStandalone) {
    return null;
  }

  // Show install button for Android or if we have deferred prompt
  if (!showInstallButton && !isAndroid && !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-4 shadow-2xl border border-primary/20">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm md:text-base">
                Install App
              </p>
              <p className="text-white/80 text-xs">
                {isAndroid ? "Add to home screen" : "Get the full app experience"}
              </p>
            </div>
          </div>
          <button
            onClick={handleInstallClick}
            className="bg-white text-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white/90 transition-all whitespace-nowrap"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
}

