import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import CookieBanner from "./components/CookieBanner";
import PopUpWindow from "./components/PopUpWindow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Art By Sandra T",
  description: "Digital ateljé</",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <PopUpWindow />
        <main>{children}</main>
        <ScrollButton />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
