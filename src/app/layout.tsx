import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar/NavBar";
import BottomNav from "../components/NavBar/BottomNav";

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
  title: "T7LABS",
  description: "CRAFTING OPEN-SOURCE INNOVATION & PREMIUM EXPERIENCES FOR DEVELOPERS",
  icons: {
    icon: "/logo/bluelogo.png",
    shortcut: "/logo/bluelogo.png",
    apple: "/logo/bluelogo.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <NavBar />
        <BottomNav />
        {children}
      </body>
    </html>
  );
}
