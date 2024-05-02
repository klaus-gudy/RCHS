"use client";
import { Karla } from "next/font/google";
import "./dashboard.css";
import { SideBar } from "@/components/sidebar";
import PageWrapper from "@/components/pagewrapper";
import Header from "@/components/header";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla",
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={karla.className + " h-screen overflow-hidden"}>
          <SideBar />
          <div className="flex flex-col h-full w-full">
            <Header />
            <PageWrapper children={children} />
          </div>
      </body>
    </html>
  );
}
