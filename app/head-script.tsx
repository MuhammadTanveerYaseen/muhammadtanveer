"use client";

import { useEffect } from "react";

export default function HeadScript() {
  useEffect(() => {
    // Ensure manifest link exists
    if (!document.querySelector('link[rel="manifest"]')) {
      const manifestLink = document.createElement("link");
      manifestLink.rel = "manifest";
      manifestLink.href = "/site.webmanifest";
      document.head.appendChild(manifestLink);
    }

    // Add Apple-specific meta tags
    const metaTags = [
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Areej Fatima" },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-TileColor", content: "#1a1a2e" },
      { name: "msapplication-config", content: "/browserconfig.xml" },
    ];

    metaTags.forEach(({ name, content }) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement("meta");
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    });

    // Add apple-touch-startup-image link
    if (!document.querySelector('link[rel="apple-touch-startup-image"]')) {
      const link = document.createElement("link");
      link.rel = "apple-touch-startup-image";
      link.href = "/apple-touch-icon.png";
      document.head.appendChild(link);
    }

    // Add theme-color meta tag for Android
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColor = document.createElement("meta");
      themeColor.name = "theme-color";
      themeColor.content = "#1a1a2e";
      document.head.appendChild(themeColor);
    }
  }, []);

  return null;
}

