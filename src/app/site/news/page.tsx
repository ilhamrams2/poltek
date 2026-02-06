"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RiSearchLine,
  RiFireLine,
  RiTimeLine,
  RiArrowRightLine,
  RiPlayFill,
  RiHashtag,
  RiMailSendLine,
  RiBookmarkLine,
  RiShareBoxLine,
  RiCloseLine
} from "react-icons/ri";

/* ----------------------------------------------------
   DUMMY DATA
----------------------------------------------------- */

// 1. Highlight Utama (Kiri Atas)
const mainHighlight = {
  id: 1,
  title: "Hindia Ramaikan Pembukaan Exponer 2025 di Poltek Prestasi Prima",
  category: "Event",
  date: "25 Feb 2026",
  img: "/images/sections/news/newsdummy.jpeg", // Replace with real asset
  author: "Humas Poltek",
};

// 2. Trending (Kanan Atas)
const trendingItems = [
  { 
    id: 1, 
    title: "SMK Prestasi Prima: Sekolah Residential & Dengan Kurikulum...", 
    category: "Akademik",
    img: "/images/sections/news/newsdummy.jpeg" 
  },
  { 
    id: 2, 
    title: "Pekan Kokurikulum Poltek: Mengasah Skill Non-Akademik...", 
    category: "Teknologi",
    img: "/images/sections/news/newsdummy.jpeg" 
  },
  { 
    id: 3, 
    title: "Kunjungan Industri ke Google Indonesia: Membuka Wawasan...", 
    category: "Industri",
    img: "/images/sections/news/newsdummy.jpeg" 
  },
  { 
    id: 4, 
    title: "Mahasiswa D4 RPL Raih Gold Medal di Gemastik 2025...", 
    category: "Prestasi",
    img: "/images/sections/news/newsdummy.jpeg" 
  },
];

// 3. Grid Berita (Tengah)
const gridNews = [
  {
    id: 101,
    title: "Workshop UI/UX: Mendesain Masa Depan Digital",
    category: "Akademik",
    date: "20 Feb 2026",
    img: "/images/sections/news/newsdummy.jpeg",
    excerpt: "Mahasiswa diajak mendalami prinsip desain user-centric bersama mentor dari Gojek."
  },
  {
    id: 102,
    title: "Pekan Olahraga Kampus: Semangat 'Fair Play'",
    category: "Kemahasiswaan",
    date: "18 Feb 2026",
    img: "/images/sections/news/newsdummy.jpeg",
    excerpt: "Ratusan mahasiswa berkompetisi dalam 10 cabang olahraga untuk memperebutkan piala bergilir."
  },
  {
    id: 103,
    title: "Inovasi Robotik: Lengan Robot Penuang Kopi Otomatis",
    category: "Teknologi",
    date: "15 Feb 2026",
    img: "/images/sections/news/newsdummy.jpeg",
    excerpt: "Karya tugas akhir mahasiswa Teknik Mekatronika yang viral di media sosial."
  },
  {
    id: 104,
    title: "Seminar Kewirausahaan: Membangun Start-up Sejak Kuliah",
    category: "Bisnis",
    date: "12 Feb 2026",
    img: "/images/sections/news/newsdummy.jpeg",
    excerpt: "Tips dan trik dari founder alumni yang sukses membangun bisnis senilai miliaran rupiah."
  }
];

// 4. Video Galeri
const videoGallery = [
  { id: 201, title: "Rekapitulasi Prestasi 2025!", duration: "03:45", thumb: "/images/sections/news/newsdummy.jpeg", youtubeId: "dQw4w9WgXcQ" },
  { id: 202, title: "Profil Lulusan Terbaik", duration: "05:12", thumb: "/images/sections/news/newsdummy.jpeg", youtubeId: "dQw4w9WgXcQ" }
];

// 5. Artikel Lainnya (Bawah - List Horizontal)
const listNews = [
  {
    id: 301,
    title: "Poltek Prestasi Prima Resmikan Kantin Baru di Belakang Sekolah",
    category: "Fasilitas",
    date: "10 Feb 2026",
    img: "/images/sections/news/newsdummy.jpeg",
  },
  {
    id: 302,
    title: "Sejarah Baru! Futsal Kampus Akhirnya Tembus Final Nasional",
    category: "Olahraga",
    date: "08 Feb 2026",
    img: "/images/sections/news/newsdummy.jpeg",
  },
  {
    id: 303,
    title: "Webinar 'AI for Good': Pemanfaatan Artificial Intelligence",
    category: "Webinar",
    date: "05 Feb 2026",
    img: "/images/sections/news/newsdummy.jpeg",
  },
  {
    id: 304,
    title: "Poltek Presma Gelar Kegiatan Kebaktian Minggu Penuh Berkah",
    category: "Rohani",
    date: "01 Feb 2026",
    img: "/images/sections/news/newsdummy.jpeg",
  },
];

const topics = ["Akademik", "Beasiswa", "Teknologi", "Event", "Karir", "Alumni"];

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-32 pt-11 md:pt-16">
      
      {/* -------------------------------------------
          HEADER
      -------------------------------------------- */}
      <section className="px-6 mb-8 md:mb-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-6 border-b border-gray-200/60">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-8 bg-orange-500" />
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em]">Newsroom</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#1D234E] leading-[1.1]">
              Berita & Update <span className="text-orange-500">Terbaru</span>
            </h1>
          </motion.div>

          {/* Search Bar Aligned with Sidebar (Col Span 4) */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }} 
             animate={{ opacity: 1, x: 0 }}
             className="lg:col-span-4 w-full relative"
          >
            <input 
              type="text" 
              placeholder="Cari berita..." 
              className="w-full pl-12 pr-6 py-4 rounded-[2rem] bg-white border border-gray-200 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all text-sm font-bold placeholder-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <RiSearchLine className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 text-lg" />
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* ==========================================================
            LEFT COLUMN (Main Content) - Span 8
        ========================================================== */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          
          {/* 1. Highlight Big Card */}
          <Link href={`/site/news/${mainHighlight.id}`}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer"
            >
              <Image 
                src={mainHighlight.img} 
                alt="Highlight" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full md:w-4/5">
                <span className="px-3 py-1 bg-orange-500 text-white text-[10px] uppercase font-bold rounded mb-4 inline-block tracking-wider">
                  {mainHighlight.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4 group-hover:text-orange-300 transition-colors">
                  {mainHighlight.title}
                </h2>
                <div className="flex items-center gap-4 text-gray-300 text-xs md:text-sm font-medium">
                  <span className="flex items-center gap-1"><RiTimeLine /> {mainHighlight.date}</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full" />
                  <span>Oleh {mainHighlight.author}</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* 2. Middle Grid News */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridNews.map((news, idx) => (
              <Link key={news.id} href={`/site/news/${news.id}`}>
                <motion.article 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image 
                      src={news.img} 
                      alt={news.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#1D234E] text-xs font-extrabold px-3 py-1 rounded-lg shadow-sm">
                      {news.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#1D234E] leading-snug mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {news.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-400">
                      <span className="flex items-center gap-1"><RiTimeLine /> {news.date}</span>
                      <span className="flex items-center gap-1 text-[#1D234E] group-hover:text-orange-600 font-bold transition-colors">
                        Baca <RiArrowRightLine />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          {/* 3. Video Section (Break) */}
          <section className="relative">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                 <RiPlayFill className="text-xl" />
              </div>
              <h3 className="text-xl font-black text-[#1D234E]">Video Galeri Sekolah</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {videoGallery.map((vid, idx) => (
                 <div 
                   key={vid.id} 
                   onClick={() => setSelectedVideo(vid.youtubeId)}
                   className="group relative h-48 rounded-[1.5rem] overflow-hidden shadow-lg cursor-pointer"
                 >
                    <Image src={vid.thumb} alt={vid.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    
                    {/* Play Button Center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                       <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-orange-600 shadow-xl pl-1">
                          <RiPlayFill size={20} />
                       </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                       <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded font-bold mb-2 inline-block">VIDEO</span>
                       <h4 className="text-white font-bold leading-tight line-clamp-2">{vid.title}</h4>
                       <span className="text-white/80 text-xs mt-1 block font-mono">{vid.duration}</span>
                    </div>
                 </div>
               ))}
               {/* Button See All Videos */}
               <Link href="/dokumentasi/gallery">
                 <div className="h-48 rounded-[1.5rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50 transition-all cursor-pointer gap-2 group">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition">
                       <RiArrowRightLine size={24} />
                    </div>
                    <span className="font-bold text-sm">Lihat Semua Video</span>
                 </div>
               </Link>
            </div>
          </section>

          {/* 4. Bottom List (Artikel Lainnya) */}
          <section>
            <div className="flex items-center gap-3 mb-8">
               <span className="w-1 h-6 bg-[#1D234E] rounded-full" />
               <h3 className="text-xl font-black text-[#1D234E]">Artikel Lainnya</h3>
            </div>

            <div className="flex flex-col gap-6">
              {listNews.map((item, idx) => (
                <Link key={item.id} href={`/site/news/${item.id}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group bg-white p-4 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:shadow-gray-200/50 border border-gray-100 transition-all flex flex-col md:flex-row gap-5 items-center cursor-pointer"
                  >
                    <div className="relative w-full md:w-48 h-32 shrink-0 rounded-2xl overflow-hidden">
                      <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex items-center gap-3 mb-2">
                         <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 bg-orange-50 px-2 py-1 rounded">
                            {item.category}
                         </span>
                         <span className="text-xs text-gray-400 flex items-center gap-1">
                            <RiTimeLine size={12} /> {item.date}
                         </span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1D234E] leading-snug mb-2 group-hover:text-purple-600 transition-colors">
                         {item.title}
                      </h4>
                      <div className="flex items-center gap-4 mt-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                         <span className="text-xs font-bold text-gray-500 hover:text-orange-500 flex items-center gap-1">
                            <RiBookmarkLine /> Simpan
                         </span>
                         <span className="text-xs font-bold text-gray-500 hover:text-orange-500 flex items-center gap-1">
                            <RiShareBoxLine /> Bagikan
                         </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

        </div>

        {/* ==========================================================
            RIGHT COLUMN (Sidebar) - Span 4
        ========================================================== */}
        <div className="lg:col-span-4 space-y-10 relative">
           
           {/* Sticky Wrapper (Optional) */}
           <div className="sticky top-28 space-y-8">

              {/* 1. Trending Widget - Redesigned */}
              <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100">
                 <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dashed">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-xl">
                        <RiFireLine className="text-xl" />
                    </div>
                    <h3 className="font-black text-xl text-[#1D234E]">Sedang Trending</h3>
                 </div>
                 
                 <div className="flex flex-col gap-6">
                    {trendingItems.map((item, idx) => (
                       <Link key={item.id} href={`/site/news/${item.id}`}>
                          <article className="group flex items-start gap-4 cursor-pointer relative">
                          {/* Number & Image */}
                          <div className="relative shrink-0 w-20 h-20 rounded-2xl overflow-hidden shadow-md">
                             <Image 
                                src={item.img} 
                                alt={item.title} 
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                             />
                             {/* Unique Rank Badge */}
                             <div className="absolute top-0 left-0 w-7 h-7 bg-orange-600 rounded-br-xl flex items-center justify-center shadow-lg z-10 transition-colors group-hover:bg-[#1D234E]">
                                <span className="text-white font-black text-xs">{idx + 1}</span>
                             </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 py-1">
                             <span className="inline-block text-[9px] font-black tracking-widest text-orange-500 bg-orange-50 px-2 py-0.5 rounded mb-2 uppercase border border-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                {item.category}
                             </span>
                             <h4 className="text-sm font-bold text-[#1D234E] leading-snug group-hover:text-purple-600 transition-colors line-clamp-2">
                                {item.title}
                             </h4>
                          </div>

                          {/* Hover Effect Background */}
                          <div className="absolute -inset-3 bg-gray-50 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </article>
                       </Link>
                    ))}
                 </div>
              </div>

              {/* 2. Topics Tags */}
              <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100">
                 <div className="flex items-center gap-2 mb-5">
                    <RiHashtag className="text-purple-500 text-xl" />
                    <h3 className="font-black text-lg text-[#1D234E]">Topik Hangat</h3>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {topics.map((topic, idx) => (
                       <span 
                          key={idx} 
                          className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-lg border border-gray-200 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-colors cursor-pointer"
                       >
                          #{topic}
                       </span>
                    ))}
                 </div>
              </div>

              {/* 3. CTA Subscribe Box */}
              <div className="relative p-8 rounded-[2rem] overflow-hidden text-center text-white shadow-2xl">
                 {/* Background Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 z-0" />
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                 
                 <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                       <RiMailSendLine size={24} />
                    </div>
                    <h3 className="text-xl font-black leading-tight mb-2">Jangan Lewatkan Cerita Menarik!</h3>
                    <p className="text-white/80 text-xs mb-6">Dapatkan update seputar kegiatan kampus langsung di emailmu.</p>
                    
                    <div className="space-y-3">
                       <input 
                          type="email" 
                          placeholder="Email kamu..." 
                          className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:bg-white focus:text-gray-800 transition-colors text-sm text-center"
                       />
                       <button className="w-full py-3 bg-white text-orange-600 font-bold rounded-xl text-sm shadow-lg hover:bg-gray-50 transition-colors">
                          Gabung Sekarang
                       </button>
                    </div>
                 </div>
              </div>

           </div>
        </div>

      </div>

      {/* YouTube Modal Player */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-10 hover:scale-110"
            >
              <RiCloseLine size={24} />
            </button>

            {/* YouTube Iframe */}
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
    </main>
  );
}
