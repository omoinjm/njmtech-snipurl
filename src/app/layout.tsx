import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnipURL - Shorten, Share, and Track Your Links",
  description: "Free URL shortener with analytics. Create short, memorable links and track their performance in real-time.",
  keywords: [
    "URL shortener",
    "link shortener",
    "short links",
    "link analytics",
    "free URL shortener",
  ],
  authors: [{ name: "Nhlanhla malaza", url: "https://njmtech.vercel.app" }],
  creator: "Nhlanhla Malaza",
  publisher: "NJMTECH",
  openGraph: {
    title: "SnipURL - Shorten Links in Seconds",
    description: "The fastest way to shorten your URLs and track clicks",
    url: "https://snipurl.vercel.app",
    siteName: "SnipURL",
    images: [
      {
        url: "https://snipurl.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SnipURL - URL Shortener",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnipURL - Shorten Links in Seconds",
    description: "The fastest way to shorten your URLs and track clicks",
    images: ["https://snipurl.app/twitter-image.jpg"],
    creator: "@nhlanhlamalaza_",
  },
  icons: {
    icon: "https://res.cloudinary.com/dfta3fn6p/image/upload/v1676064193/public/favicon_zqeo1n.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
  // manifest: "/site.webmanifest", 
  // themeColor: "#6366f1",
  metadataBase: new URL("https://snipurl.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
