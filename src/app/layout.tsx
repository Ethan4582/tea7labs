import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar/NavBar";
import BottomNav from "../components/NavBar/BottomNav";

import { SITE_METADATA } from "../lib/content_data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
   weight: "400",
   subsets: ["latin"],
   variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <NavBar />
        <BottomNav />
        {children}
      </body>
    </html>
  );
}
