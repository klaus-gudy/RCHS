import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./authentication.css";
import AuthProvider from "@/utils/SessionProvider";
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
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

