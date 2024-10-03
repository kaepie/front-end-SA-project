import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/Header";

import RootLayout from "@/app/layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function HeaderOnlyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <RootLayout>
        <Header />
        {children}
    </RootLayout>
  );
}
