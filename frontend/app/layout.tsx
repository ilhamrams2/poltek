import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Politeknik Prestasi Prima",
  description: "Website resmi Politeknik Prestasi Prima",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* CDN Remix Icon */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>
        {/* 🔥 Global Navbar */}
        <Navbar />

        {/* Halaman dinamis */}
        <main>{children}</main>

        {/* 🔥 Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
