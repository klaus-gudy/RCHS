import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import PageWrapper from "@/components/pagewrapper";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RCHS Dashboard",
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
        <Sidebar></Sidebar>
        <Header></Header>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
