import "./globals.css";
import "./styles/program/animations.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layouts/Header";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/layouts/Footer";
import GlobalLoader from "@/components/GlobalLoader";

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
  {/* Remix Icon */}
  <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />

  {/* AOS */}
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer></script>

  {/* Swiper */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" defer></script>

  {/* Font Awesome */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  {/* Tabler Icons Webfont (WAJIB untuk ti ti-badge-check) */}
  <link
    rel="stylesheet"
    href="https://unpkg.com/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
  />

  {/* Lucide (kalau tetap ingin pakai data-lucide) */}
  <script src="https://unpkg.com/lucide@latest"></script>
</head>

      <body className={inter.className}>
        <GlobalLoader />
        <Header />
        <main>{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
