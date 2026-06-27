import type { Metadata, Viewport } from "next";
import { bebas, manrope, mono } from "./fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  title: "SuperOver - Premium Box Cricket & Football Turf, Hyderabad",
  description: "Premium box cricket & football turf in Hyderabad. Fast online booking, professional coaching, a playing experience worth showing up for.",
  openGraph: {
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SuperOver Turf",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${manrope.variable} ${mono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col hide-scrollbar">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
