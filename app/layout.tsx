import type { Metadata, Viewport } from "next";
import "./globals.css";
import HeadScript from "./head-script";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a1a2e" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" }
  ],
  colorScheme: "dark",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Areej Fatima - Go High Level Expert & Funnel Strategist",
    template: "%s | Areej Fatima"
  },
  description: "Professional Go High Level services by Areej Fatima. Expert integrations for GHL, ClickFunnels, Systeme.io, Kajabi, Kartra, n8n, Zapier, and Make.com. Transform your business with high-converting funnels and automation.",
  keywords: [
    "Areej Fatima",
    "Go High Level",
    "GHL Expert",
    "Funnel Strategist",
    "ClickFunnels",
    "Systeme.io",
    "Kajabi",
    "Kartra",
    "n8n",
    "Zapier",
    "Make.com",
    "Marketing Automation",
    "Sales Funnels",
    "Custom Dashboards",
    "Workflow Automation",
    "Business Automation"
  ],
  authors: [{ name: "Areej Fatima" }],
  creator: "Areej Fatima",
  publisher: "Areej Fatima",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://areejfatima.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Areej Fatima - Go High Level Expert & Funnel Strategist",
    description: "Professional Go High Level services by Areej Fatima. Expert integrations for GHL, ClickFunnels, Systeme.io, Kajabi, Kartra, n8n, Zapier, and Make.com.",
    siteName: "Areej Fatima",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Areej Fatima - Go High Level Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Areej Fatima - Go High Level Expert & Funnel Strategist",
    description: "Professional Go High Level services by Areej Fatima. Expert integrations and automation solutions.",
    images: ["/android-chrome-512x512.png"],
    creator: "@areejfatima",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Areej Fatima",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { rel: "mask-icon", url: "/apple-touch-icon.png", color: "#1a1a2e" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "Business",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overscroll-none">
        <HeadScript />
        {children}
      </body>
    </html>
  );
}


