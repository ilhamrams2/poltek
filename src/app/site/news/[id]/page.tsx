"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  RiCalendarLine,
  RiUserLine,
  RiEyeLine,
  RiTimeLine,
  RiShareLine,
  RiFacebookFill,
  RiTwitterFill,
  RiWhatsappFill,
  RiLinkM,
  RiArrowLeftLine,
  RiFireLine,
  RiBookmarkLine,
} from "react-icons/ri";

/* ============================================
   DUMMY DATA - News Detail
============================================ */

const newsDetail = {
  id: 1,
  title: "Pekan Kokurikuler SMK Prestasi Prima 2025",
  category: "Teknologi",
  categoryColor: "orange",
  author: "Admin Presma",
  date: "13 Oct 2025",
  readTime: "5 min read",
  views: "1.2K",
  thumbnail: "/images/sections/news/newsdummy.jpeg",
  content: `
    <p>Pekan Kokurikuler SMK Prestasi Prima 2025 merupakan rangkaian kegiatan pembinaan berbasis proyek dan kreativitas yang melibatkan seluruh siswa kelas X dan XI dari berbagai jurusan — PPLG, TKJ, DKV, dan 3C. Kegiatan ini dirancang untuk mengasah kemampuan siswa dalam bekerja secara kolaboratif, berinovasi, dan menghasilkan karya nyata yang dapat diimplementasikan dalam berbagai sektor di dunia digital.</p>
    
    <p>Melalui Pekan Kokurikuler, SMK Prestasi Prima berupaya membangun karakter mandiri, bertanggung jawab, dan siap bersaing di dunia industri. Berbagai lomba dan workshop juga digelar.</p>
    
    <h2>Tujuan Kegiatan</h2>
    <ul>
      <li>Mengembangkan soft skill dan hard skill siswa</li>
      <li>Membangun jiwa kewirausahaan sejak dini</li>
      <li>Meningkatkan kreativitas dan inovasi</li>
      <li>Mempersiapkan siswa menghadapi dunia kerja</li>
    </ul>
    
    <h2>Rangkaian Acara</h2>
    <p>Kegiatan berlangsung selama 5 hari penuh dengan berbagai sesi workshop, kompetisi, dan pameran karya siswa. Setiap jurusan menampilkan project terbaik mereka yang telah dikerjakan selama semester ini.</p>
  `,
  tags: ["#SMKPrestasiPrima", "#Kokurikuler", "#Teknologi"],
};

const hotNews = [
  {
    id: 2,
    title: "Hindia Ramaikan Pembukaan Exponer 2025 di SMK Prestasi...",
    date: "9 Oct 2025",
    thumbnail: "/images/sections/news/newsdummy.jpeg",
  },
  {
    id: 3,
    title: "SMK Prestasi Prima: Sekolah Berkarakter & Kompeten...",
    date: "8 Oct 2025",
    thumbnail: "/images/sections/news/newsdummy.jpeg",
  },
  {
    id: 4,
    title: "Ulang Promo Raih Juara 1 Most Favorite Supporter DBL...",
    date: "6 Oct 2025",
    thumbnail: "/images/sections/news/newsdummy.jpeg",
  },
];

const relatedNews = [
  {
    id: 5,
    title: "SMK Prestasi Prima Kembangkan Sistem Akademik Berbasis AI",
    category: "Teknologi",
    date: "10 Oct 2025",
    thumbnail: "/images/sections/news/newsdummy.jpeg",
  },
  {
    id: 6,
    title: "Ulang Promo Raih Juara 1 Most Favorite Supporter DBL 2025 East Jakarta",
    category: "Prestasi",
    date: "8 Oct 2025",
    thumbnail: "/images/sections/news/newsdummy.jpeg",
  },
];

export default function NewsDetailPage() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = newsDetail.title;

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
        break;
      case "whatsapp":
        window.open(`https://wa.me/?text=${text} ${url}`);
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        break;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30 pb-32 pt-11 md:pt-11">
      {/* ==========================================
          BREADCRUMB
      ========================================== */}
      <section className="px-6 pt-8 pb-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-500 transition">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/site/news" className="hover:text-orange-500 transition">
              Berita
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">
              {newsDetail.title}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* ==========================================
            LEFT COLUMN - MAIN CONTENT
        ========================================== */}
        <div className="lg:col-span-8">
          {/* Back Button */}
          <Link
            href="/site/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-orange-500 transition mb-6 group"
          >
            <RiArrowLeftLine className="text-lg group-hover:-translate-x-1 transition-transform" />
            Kembali ke Berita
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-xl text-xs font-black uppercase tracking-wider border border-orange-200">
              {newsDetail.category}
            </span>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#1D234E] leading-tight mb-6"
          >
            {newsDetail.title}
          </motion.h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <RiUserLine className="text-orange-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Ditulis oleh</div>
                <div className="text-sm font-bold text-gray-800">
                  {newsDetail.author}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <RiCalendarLine className="text-orange-500" />
              {newsDetail.date}
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <RiTimeLine className="text-purple-500" />
              {newsDetail.readTime}
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <RiEyeLine className="text-blue-500" />
              {newsDetail.views} views
            </div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden mb-10 shadow-2xl"
          >
            <Image
              src={newsDetail.thumbnail}
              alt={newsDetail.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: newsDetail.content }}
            style={{
              color: "#374151",
              lineHeight: "1.8",
            }}
          />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-sm font-bold text-gray-600">TAGS:</span>
            {newsDetail.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-orange-100 hover:text-orange-600 transition cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-[2rem] p-8 mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-black text-[#1D234E] mb-1">
                  Bagikan Berita
                </h3>
                <p className="text-sm text-gray-600">
                  Sebarkan informasi ini ke teman-temanmu
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleShare("facebook")}
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110"
                >
                  <RiFacebookFill className="text-xl" />
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="w-12 h-12 bg-sky-500 hover:bg-sky-600 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110"
                >
                  <RiTwitterFill className="text-xl" />
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110"
                >
                  <RiWhatsappFill className="text-xl" />
                </button>
                <button
                  onClick={() => handleShare("copy")}
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110"
                >
                  <RiLinkM className="text-xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Related News */}
          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#1D234E] mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-orange-500 rounded-full" />
              Eksplorasi Berita Terkait
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedNews.map((news) => (
                <Link
                  key={news.id}
                  href={`/site/news/${news.id}`}
                  className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={news.thumbnail}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-lg">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1D234E] leading-snug mb-3 line-clamp-2 group-hover:text-orange-600 transition">
                      {news.title}
                    </h3>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                      <RiCalendarLine /> {news.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================
            RIGHT COLUMN - SIDEBAR
        ========================================== */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            {/* Hot News Widget */}
            <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="p-2 bg-red-100 text-red-600 rounded-xl">
                  <RiFireLine className="text-xl" />
                </div>
                <h3 className="font-black text-xl text-[#1D234E]">Hot News</h3>
              </div>

              <div className="space-y-4">
                {hotNews.map((news, idx) => (
                  <Link
                    key={news.id}
                    href={`/site/news/${news.id}`}
                    className="group flex items-start gap-4 cursor-pointer relative p-3 rounded-2xl hover:bg-gray-50 transition"
                  >
                    <div className="relative shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                      <Image
                        src={news.thumbnail}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-1 left-1 w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center text-white text-xs font-black">
                        {idx + 1}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-[#1D234E] leading-snug mb-2 line-clamp-2 group-hover:text-orange-600 transition">
                        {news.title}
                      </h4>
                      <div className="text-xs text-gray-500">{news.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[2rem] p-8 text-white shadow-xl">
              <h3 className="text-2xl font-black mb-4">Akses Cepat</h3>
              <p className="text-white/90 text-sm mb-6">
                Jelajahi informasi penting lainnya
              </p>

              <div className="space-y-3">
                {["Akademik", "Olahraga", "Seni", "Sosial", "Teknologi"].map(
                  (cat) => (
                    <Link
                      key={cat}
                      href={`/site/news?category=${cat.toLowerCase()}`}
                      className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl transition group"
                    >
                      <span className="font-bold">{cat}</span>
                      <RiArrowLeftLine className="rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
