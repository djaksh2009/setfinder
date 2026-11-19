
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SETFINDER — Discover Every Track",
  description:
    "Identify tracks, mashups and IDs hidden inside DJ sets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

