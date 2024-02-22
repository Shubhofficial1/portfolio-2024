import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Kumar | Portfolio",
  description: "Shubham Kumar's Portfolio - 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
