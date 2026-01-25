import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: " ChainVeil - Blockchain Analytics Platform",
  description:
    "Take control of your product analytics with real-time insights, low overhead, and next-level security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-neutral-950">
      <body
        className={`${inter.variable} font-sans antialiased text-white h-full`}
      >
        {children}
      </body>
    </html>
  );
}
