import "./globals.css";
import "./styles/program/animations.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalLoader from "@/components/GlobalLoader";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Politeknik Prestasi Prima",
  description: "Website resmi Politeknik Prestasi Prima",
};

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Remix Icon */}
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />

        {/* AOS */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

        {/* Swiper */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />

        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

        {/* Tabler Icons Webfont */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
      </head>

      <body className={inter.className}>
        <GlobalLoader />
        <AnalyticsTracker />
        {children}

        {/* Scripts moved here to use Next/Script Component */}
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />
      </body>
    </html>
  );
}
