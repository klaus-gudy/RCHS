import { Karla } from "next/font/google";
import "./dashboard.css";
import { SideBar } from "@/components/sidebar";
import PageWrapper from "@/components/pagewrapper";
import Header from "@/components/header";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla",
});

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
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
