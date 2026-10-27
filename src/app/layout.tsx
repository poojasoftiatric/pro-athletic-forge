import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.proathleticgyms.in"),
  title: {
    default: "Pro Athletic | Best Gym in Zirakpur — VIP Road Fitness Center",
    template: "%s | Pro Athletic Gyms Zirakpur",
  },
  description:
    "Join Pro Athletic, Punjab's premier gym in Zirakpur on VIP Road. 7+ certified trainers, 18-hr access, CrossFit, Strength Training & Yoga. Book your free trial!",
  authors: [{ name: "Pro Athletic" }],
  creator: "Pro Athletic",
  publisher: "Pro Athletic",
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=2", type: "image/png" },
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon.png?v=2" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: "Pro Athletic",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@proathletic",
  },
  other: {
    "geo.region": "IN-PB",
    "geo.placename": "Zirakpur, Punjab, India",
    "geo.position": "30.6435;76.8177",
    ICBM: "30.6435, 76.8177",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="dark">
      <head>
        <link rel="preconnect" href="https://basemaps.cartocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.web3forms.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://basemaps.cartocdn.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <link
          rel="preload"
          href="/fonts/bebas-neue-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
