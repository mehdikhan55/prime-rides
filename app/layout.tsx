import type { Metadata } from "next";

import "./globals.css";
import { Footer, Navbar } from "@/components";



export const metadata: Metadata = {
  title: "Prime Rides",
  description: "Discover the best cars out there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative `}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
