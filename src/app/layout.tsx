import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://agentic-f7e60c96.vercel.app"),
  title: {
    default: "Atelier Trousers | Men's Tailored Trousers",
    template: "%s · Atelier Trousers",
  },
  description:
    "Discover men's trousers engineered for movement—premium fabrics, tailored fits, and complimentary alterations from Atelier Trousers.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Atelier Trousers",
    description:
      "Tailored trousers crafted with performance fabrics and responsible materials.",
    url: "https://agentic-f7e60c96.vercel.app",
    siteName: "Atelier Trousers",
    images: [
      {
        url: "https://images.unsplash.com/photo-1531928351158-2f736078e0a1?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Atelier Trousers collection",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Trousers",
    description:
      "Elevated men's trousers engineered for comfort, performance, and style.",
    images: [
      "https://images.unsplash.com/photo-1531928351158-2f736078e0a1?auto=format&fit=crop&w=1200&q=80",
    ],
  },
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
      </body>
    </html>
  );
}
