'use client'
import { Karla } from 'next/font/google'
import "./dashboard.css";
import { SideBar } from "@/components/sidebar";
import PageWrapper from "@/components/pagewrapper";
import Header from "@/components/header";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={karla.className}>
        <div className="flex min-h-screen">
        <SideBar/>
        <Header/>
        <PageWrapper children={children}/>
        </div>
      </body>
    </html>
  );
}
