"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayCircle, Tag } from "lucide-react";

const categories = [
  "Kegiatan",
  "Acara",
  "Mahasiswa",
  "Lingkungan Kampus",
  "Prestasi",
  "Dokumentasi",
  "Semua",
];

const videos = [
  {
    title: "Galeri Kegiatan BELIEVE",
    duration: "4:32",
    image: "/images/news/thumbnail1.jpg",
  },
  {
    title: "Galeri Kegiatan BELIEVE",
    duration: "4:32",
    image: "/images/news/thumbnail1.jpg",
  },
  {
    title: "Galeri Kegiatan BELIEVE",
    duration: "4:32",
    image: "/images/news/thumbnail1.jpg",
  },
  {
    title: "Galeri Kegiatan BELIEVE",
    duration: "4:32",
    image: "/images/news/thumbnail1.jpg",
  },
  {
    title: "Galeri Kegiatan BELIEVE",
    duration: "4:32",
    image: "/images/news/thumbnail1.jpg",
  },
  {
    title: "Galeri Kegiatan BELIEVE",
    duration: "4:32",
    image: "/images/news/thumbnail1.jpg",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  return (
    <div className="w-full">
      {/* ===========================
          HERO SECTION
      ============================ */}
      <section className="bg-[#0F1B3D] py-20 px-4 text-center relative overflow-hidden">
        {/* Purple Glow */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[500px] h-[500px] bg-purple-600/40 blur-3xl rounded-full mt-10"></div>
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl md:text-4xl font-bold relative z-10">
          Dokumentasi Kegiatan Sekolah
        </h1>
        <p className="text-gray-300 text-sm mt-3 relative z-10">
          Lihat semua aktivitas dan prestasi siswa kami  
          <br />
          dalam berbagai kegiatan sekolah
        </p>

        {/* Featured Item */}
        <div className="relative z-10 mt-10 max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/news/featured.jpg"
            width={1000}
            height={600}
            alt="Featured Gallery"
            className="w-full object-cover rounded-3xl"
          />

          <button className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-20 h-20 text-white drop-shadow-xl hover:scale-110 transition" />
          </button>
        </div>
      </section>

      {/* ===========================
          CATEGORY FILTER
      ============================ */}
      <section className="py-12 flex flex-col items-center px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const active = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border text-sm flex items-center gap-2 transition
                  ${
                    active
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
              >
                <Tag className="w-4 h-4" />
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ===========================
          GRID GALLERY
      ============================ */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-20">
        {videos.map((v, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden relative group"
          >
            <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md z-20">
              {v.duration}
            </span>

            <Image
              src={v.image}
              alt={v.title}
              width={400}
              height={250}
              className="w-full h-52 object-cover group-hover:scale-105 transition"
            />

            <div className="p-5">
              <h3 className="font-semibold text-gray-800">{v.title}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* ===========================
          BUTTON SHOW ALL
      ============================ */}
      <div className="pb-20 flex justify-center">
        <button className="px-6 py-3 bg-[#0F1B3D] text-white rounded-full hover:bg-[#16285A] transition shadow-md">
          Lihat Semua Galeri
        </button>
      </div>
    </div>
  );
}
