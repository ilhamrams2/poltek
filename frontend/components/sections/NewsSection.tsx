"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiCalendarLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const news = [
  {
    category: "Prestasi",
    title: "Juara Internasional Rekayasa Perangkat Lunak 2025",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "25 Nov 2025",
    excerpt: "Mahasiswa kami berhasil meraih medali emas dalam kompetisi desain aplikasi tingkat dunia.",
    link: "/site/news",
  },
  {
    category: "Prestasi",
    title: "Workshop Digital Marketing untuk Mahasiswa",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "20 Nov 2025",
    excerpt: "Workshop ini memberikan wawasan terbaru dalam dunia digital marketing, khusus untuk mahasiswa.",
    link: "/site/news",
  },
  {
    category: "Prestasi",
    title: "Pendaftaran Magang Semester Ganjil Dibuka",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "15 Nov 2025",
    excerpt: "Mahasiswa bisa mendaftar untuk magang di perusahaan mitra kami dengan berbagai pilihan lokasi industri.",
    link: "/site/news",
  },
  {
    category: "Prestasi",
    title: "Festival Budaya Kreatif Politeknik 2026",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "10 Jan 2026",
    excerpt: "Sebuah perayaan kreativitas tanpa batas yang menggabungkan teknologi dan kearifan lokal.",
    link: "/site/news",
  },
  {
    category: "Prestasi",
    title: "Kemenangan Lomba Inovasi Teknologi Tepat Guna",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "05 Jan 2026",
    excerpt: "Inovasi mahasiswa dalam bidang pertanian cerdas mendapat apresiasi tinggi dari para juri.",
    link: "/site/news",
  },
  {
    category: "Prestasi",
    title: "Seminar Teknologi Masa Depan: AI & Robotic",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "12 Feb 2026",
    excerpt: "Mengahadirkan pakar industri global untuk membahas masa depan kecerdasan buatan.",
    link: "/site/news",
  },
];

const categoryColors: { [key: string]: string } = {
  Prestasi: "bg-purple-600",
  Event: "bg-orange-500",
  Berita: "bg-blue-600",
};

export default function NewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = news.length;
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Auto-sliding logic
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const scrollLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const scrollRight = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const scrollTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24 md:py-32 bg-gray-50/30 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Centered as per screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-gray-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Prestasi Kami</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1D234E] leading-tight">
            Mengabadikan momen di balik setiap <span className="text-purple-600">kemenangan</span>
          </h2>
        </motion.div>

        {/* Carousel Wrapper with Side Arrows */}
        <div 
          className="relative group px-16 md:px-20 lg:px-24"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Side Navigation Arrows */}
          <div className="absolute top-1/2 -left-2 md:-left-12 lg:-left-20 -translate-y-1/2 z-20">
            <button 
              onClick={scrollLeft} 
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center transition-all duration-300 shadow-xl hover:bg-purple-600 hover:text-white hover:border-purple-600"
            >
              <RiArrowLeftSLine size={28} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-2 md:-right-12 lg:-right-20 -translate-y-1/2 z-20">
            <button 
              onClick={scrollRight} 
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center transition-all duration-300 shadow-xl hover:bg-purple-600 hover:text-white hover:border-purple-600"
            >
              <RiArrowRightSLine size={28} />
            </button>
          </div>

          {/* Slider Content */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8 px-2"
              animate={{ x: `calc(-${activeIndex * (100 / itemsPerView)}% - ${activeIndex * (32 - (32 / itemsPerView))}px)` }}
              transition={{ type: "spring", stiffness: 180, damping: 24, mass: 1 }}
            >
              {news.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="min-w-full md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-21.33px)] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden flex flex-col group border border-gray-50/50"
                >
                  {/* Image Section - Frame Style */}
                  <div className="relative h-[220px] md:h-[240px] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-5 left-5 z-10">
                      <span className="px-5 py-2.5 rounded-full text-[11px] font-bold text-white shadow-lg bg-[#B06BFF]">
                        Akademik
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8 pt-5 flex flex-col flex-1 bg-white relative">
                    <div className="flex items-center gap-2.5 text-gray-400 text-[12px] font-medium mb-3">
                      <RiCalendarLine className="text-[#B06BFF] text-base" />
                      {item.date || "Belum dipublikasikan"}
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-black text-[#1D234E] mb-3 leading-[1.3] group-hover:text-[#B06BFF] transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                      {item.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                       <a
                        href={item.link}
                        className="group/link inline-flex items-center gap-2 font-bold text-[14px] text-[#B06BFF] hover:text-[#9A4DFF] transition-all"
                      >
                        Selengkapnya <RiArrowRightSLine className="text-xl group-hover/link:translate-x-1 transition-transform" />
                      </a>
                      
                      {/* Decorative Purple Bar */}
                      <div className="w-12 h-2.5 bg-[#B06BFF]/40 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-500 rounded-full h-1.5 ${
                  activeIndex === idx 
                    ? "w-10 bg-purple-600 shadow-md" 
                    : "w-1.5 bg-gray-200"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Footer Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <a
            href="/site/news"
            className="group inline-flex items-center gap-3 bg-purple-50 text-purple-600 px-10 py-5 rounded-full font-black text-sm transition-all duration-300 hover:bg-purple-600 hover:text-white shadow-sm border border-purple-100/50"
          >
            Lihat Semua Prestasi
            <RiArrowRightSLine className="text-xl group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
