import type { Metadata } from "next";
import "./globals.css";
import { NetflixFont } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "A Netflix clone for learning purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NetflixFont.className}`}>{children}</body>
    </html>
  );
}
