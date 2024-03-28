import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from './context/AuthProvider'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RCHS System",
  description: "Reproductive Child Health Sservices System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
