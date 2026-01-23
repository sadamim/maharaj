import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./index.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maraja Soap | Pure, Natural & Premium  Experience",
  description:
    "Maraja Soap offers premium natural soaps crafted with care for healthy skin. Experience purity, freshness, and luxury in every bath.",
  keywords: [
    "Maraja Soap",
    "Natural Soap",
    "Herbal Soap",
    "Premium Bath Soap",
    "Organic Soap",
    "Skin Care",
  ],
  authors: [{ name: "Maraja Soap" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
