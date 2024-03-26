'use client'
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import PageWrapper from "@/components/pagewrapper";
import Header from "@/components/header";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "RCHS System",
//   description: "Reproductive Child Health Sservices System",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [toggleCollapse, setToggleCollapse] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
        <Sidebar toggleCollapse={toggleCollapse}></Sidebar>
        <Header toggleCollapse={toggleCollapse} setToggleCollapse={setToggleCollapse}></Header>
        <PageWrapper toggleCollapse={toggleCollapse}>{children}</PageWrapper>
        </div>
      </body>
    </html>
  );
}
