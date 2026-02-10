"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiPlayCircleLine,
  RiCloseLine,
  RiGridLine,
  RiCalendarLine,
  RiEyeLine,
  RiArrowRightLine,
  RiVideoLine,
  RiImageLine,
} from "react-icons/ri";

/* ============================================
   DUMMY DATA - YouTube Videos & Images
============================================ */

const categories = [
  { id: "all", label: "Show All", icon: RiGridLine },
  { id: "kegiatan-sekolah", label: "Kegiatan Sekolah", icon: RiVideoLine },
  { id: "wisuda", label: "Wisuda", icon: RiVideoLine },
  { id: "lomba", label: "Lomba", icon: RiVideoLine },
  { id: "kewirausahaan", label: "Kewirausahaan", icon: RiVideoLine },
  { id: "prestasi", label: "Prestasi", icon: RiImageLine },
];

const galleryItems = [
  {
    id: 1,
    type: "video",
    category: "kegiatan-sekolah",
    title: "PRA-MPLS Sekolah Prestasi Prima - 2025",
    youtubeId: "dQw4w9WgXcQ", // Replace with real YouTube ID
    thumbnail: "/images/sections/news/newsdummy.jpeg",
    date: "10 Jan 2025",
    views: "1.2K",
  },
  {
    id: 2,
    type: "video",
    category: "kewirausahaan",
    title: "Profil Perpustakaan SMA Prestasi Prima | 2024",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/sections/news/newsdummy.jpeg",
    date: "05 Des 2024",
    views: "890",
  },
  {
    id: 3,
    type: "video",
    category: "prestasi",
    title: "Film Pendek - UTARAKAN - SMK Prestasi Prima - AVC 2023",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/sections/news/newsdummy.jpeg",
    date: "20 Nov 2024",
    views: "2.5K",
  },
  {
    id: 4,
    type: "video",
    category: "lomba",
    title: "GENIALE DANCER - SMAN Prestasi Prima JKT",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/sections/news/newsdummy.jpeg",
    date: "15 Okt 2024",
    views: "3.1K",
  },
  {
    id: 5,
    type: "video",
    category: "kewirausahaan",
    title: "Wisuda Sekolah Prestasi Prima 2025",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/sections/news/newsdummy.jpeg",
    date: "01 Sep 2024",
    views: "5.2K",
  },
  {
    id: 6,
    type: "video",
    category: "kegiatan-sekolah",
    title: "Nonton Bersama Film Believe Takdir, Mimpi, dan Cinta",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/sections/news/newsdummy.jpeg",
    date: "25 Agu 2024",
    views: "1.8K",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30 pb-32 pt-11 md:pt-11">
      {/* ==========================================
          HERO HEADER SECTION - SPLIT LAYOUT
      ========================================== */}
      <section className="relative px-6 pt-16 pb-20 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN - Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            {/* Small Label */}
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-lg mb-6 font-black text-xs uppercase tracking-[0.3em] border border-orange-200">
              Visual Archives
            </div>

            {/* Main Title - Strong Typography */}
            <h1 className="mb-6">
              <span className="block text-5xl md:text-7xl font-black text-[#1D234E] leading-[0.95] mb-2 tracking-tight">
                Dokumentasi
              </span>
              <span className="block text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent leading-[0.95] tracking-tight">
                Prestasi Prima
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Menangkap setiap detik perjalanan, keberhasilan, dan semangat
              kebersamaan dalam visual yang memukau. Dari kegiatan harian
              hingga momen kemenangan.
            </p>

            {/* Stats or Quick Info */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <RiVideoLine className="text-orange-600 text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#1D234E]">50+</div>
                  <div className="text-xs text-gray-500 font-medium">Video Dokumentasi</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <RiImageLine className="text-purple-600 text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#1D234E]">200+</div>
                  <div className="text-xs text-gray-500 font-medium">Foto Kegiatan</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Featured Video Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative group">
              {/* Main Video Card */}
              <div
                className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-900/10 cursor-pointer transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]"
                onClick={() => setSelectedVideo(galleryItems[0].youtubeId)}
              >
                {/* Video Thumbnail */}
                <div className="relative h-[320px] md:h-[400px] overflow-hidden bg-gray-900">
                  <Image
                    src={galleryItems[0].thumbnail}
                    alt={galleryItems[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Giant Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 w-20 h-20 bg-white/30 rounded-full animate-ping items-center justify-center" />
                      {/* Main Button */}
                      <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <RiPlayCircleLine className="text-orange-500 text-5xl" />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-orange-500 text-white text-xs font-black rounded-xl uppercase tracking-wider shadow-lg">
                    Kegiatan Sekolah
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                      Kegiatan Sekolah
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      10 Oct 2025
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#1D234E] leading-tight">
                    PRA-MPLS SEKOLAH PRESTASI PRIMA - 2025
                  </h3>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2rem] -z-10 blur-2xl opacity-40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          CATEGORY FILTERS
      ========================================== */}
      <section className="px-6 mb-12">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    group relative px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-orange-300 hover:text-orange-600"
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="text-lg" />
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          GALLERY GRID
      ========================================== */}
      <section className="px-6 mb-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedVideo(item.youtubeId)}
                >
                  {/* Thumbnail */}
                  <div className="relative h-64 overflow-hidden bg-gray-900">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
                        <RiPlayCircleLine className="text-white text-4xl" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                      {categories.find((c) => c.id === item.category)?.label ||
                        "Video"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1D234E] leading-snug mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <RiCalendarLine /> {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <RiEyeLine /> {item.views} views
                      </span>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-[2rem] transition-all duration-300 pointer-events-none" />
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <RiVideoLine className="text-5xl text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Tidak Ada Konten
              </h3>
              <p className="text-gray-500">
                Belum ada video untuk kategori ini.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ==========================================
          CTA SECTION
      ========================================== */}
      <section className="px-6 mb-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-[#1D234E] to-purple-900 rounded-[3rem] p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ingin Melihat Lebih Banyak?
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Kunjungi channel YouTube resmi kami untuk dokumentasi lengkap
                dan update terbaru seputar kegiatan kampus.
              </p>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1D234E] font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <RiVideoLine className="text-xl" />
                Explore More Documents
                <RiArrowRightLine className="text-xl" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          VIDEO MODAL (YouTube Player)
      ========================================== */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <RiCloseLine className="text-2xl" />
              </button>

              {/* YouTube iFrame */}
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
