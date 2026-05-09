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
  title: "SnipURL — Shorten, Share, and Track Your Links",
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
    title: "SnipURI - Shorten Links in Seconds",
    description: "The fastest way to shorten your URLs and track clicks",
    url: "https://snipuri.vercel.app",
    siteName: "SnipURI",
    images: [
      {
        url: "https://snipuri.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SnipURI - URL Shortener",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnipURI - Shorten Links in Seconds",
    description: "The fastest way to shorten your URLs and track clicks",
    images: ["https://snipuri.vercel.app/twitter-image.jpg"],
    creator: "@nhlanhlamalaza_",
  },
  icons: undefined,
  metadataBase: new URL("https://snipuri.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'dark' }}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
