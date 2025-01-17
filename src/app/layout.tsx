import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const spartan = League_Spartan({
    weight: '400',
    subsets: ['latin'],
  })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
      <html lang="en">
      <body className={spartan.className }>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
