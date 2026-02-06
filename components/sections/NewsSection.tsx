"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiCalendarLine, RiArrowLeftSLine, RiArrowRightSLine, RiNewspaperLine } from "react-icons/ri";

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
    category: "Akademik",
    title: "Workshop Digital Marketing untuk Mahasiswa",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "20 Nov 2025",
    excerpt: "Workshop ini memberikan wawasan terbaru dalam dunia digital marketing, khusus untuk mahasiswa.",
    link: "/site/news",
  },
  {
    category: "Karir",
    title: "Pendaftaran Magang Semester Ganjil Dibuka",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "15 Nov 2025",
    excerpt: "Mahasiswa bisa mendaftar untuk magang di perusahaan mitra kami dengan berbagai pilihan lokasi industri.",
    link: "/site/news",
  },
  {
    category: "Event",
    title: "Festival Budaya Kreatif Politeknik 2026",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "10 Jan 2026",
    excerpt: "Sebuah perayaan kreativitas tanpa batas yang menggabungkan teknologi dan kearifan lokal.",
    link: "/site/news",
  },
  {
    category: "Inovasi",
    title: "Kemenangan Lomba Inovasi Teknologi Tepat Guna",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "05 Jan 2026",
    excerpt: "Inovasi mahasiswa dalam bidang pertanian cerdas mendapat apresiasi tinggi dari para juri.",
    link: "/site/news",
  },
  {
    category: "Teknologi",
    title: "Seminar Teknologi Masa Depan: AI & Robotic",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "12 Feb 2026",
    excerpt: "Mengahadirkan pakar industri global untuk membahas masa depan kecerdasan buatan.",
    link: "/site/news",
  },
];

export default function NewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive logic
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

  const totalItems = news.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Auto-sliding logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000); 
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
    <section className="py-24 md:py-32 bg-gray-50/50 px-6 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none -z-10" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 font-bold text-xs uppercase tracking-widest mb-6">
            <RiNewspaperLine className="text-lg" />
            Berita Terkini
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1D234E] leading-tight tracking-tight">
            Ikuti informasi & perkembangan <br className="hidden md:block"/> terbaru seputar <span className="text-purple-600 underline decoration-purple-200 decoration-4 underline-offset-4">kampus</span>
          </h2>
        </motion.div>

        {/* Carousel Wrapper */}
        <div 
          className="relative px-4 md:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons (Outside on lg, inside on sm) */}
          <div className="absolute top-1/2 left-0 md:-left-4 lg:-left-12 -translate-y-1/2 z-20 hidden md:block">
            <button 
              onClick={scrollLeft} 
              className="w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-200 hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <RiArrowLeftSLine size={32} />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 md:-right-4 lg:-right-12 -translate-y-1/2 z-20 hidden md:block">
            <button 
              onClick={scrollRight} 
              className="w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-200 hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <RiArrowRightSLine size={32} />
            </button>
          </div>

          {/* Slider Content */}
          <div className="overflow-hidden py-10 -my-10 px-4 -mx-4">
            <motion.div 
              className="flex gap-8 md:gap-10"
              animate={{ x: `calc(-${activeIndex * (100 / itemsPerView)}% - ${activeIndex * (itemsPerView === 1 ? 0 : itemsPerView === 2 ? 20 : 26.66)}px)` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {news.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="min-w-full md:min-w-[calc(50%-20px)] lg:min-w-[calc(33.333%-27px)] 
                             bg-white rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] 
                             hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] 
                             transition-all duration-500 hover:-translate-y-3
                             overflow-hidden flex flex-col group/card border border-gray-100"
                >
                  {/* Image Section */}
                  <div className="relative h-[280px] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-6 py-2.5 rounded-full text-xs font-bold text-white shadow-lg bg-purple-600/90 backdrop-blur-md border border-white/20">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col flex-1 relative">
                    {/* Date Tag */}
                    <div className="absolute -top-6 right-8 bg-white shadow-lg rounded-2xl px-4 py-3 flex flex-col items-center border border-gray-100 group-hover/card:bg-purple-600 group-hover/card:text-white transition-colors duration-300">
                      <span className="text-xl font-black leading-none">{item.date.split(' ')[0]}</span>
                      <span className="text-[10px] font-bold uppercase mt-1">{item.date.split(' ')[1]}</span>
                    </div>

                    <div className="mt-4 mb-4">
                      <h3 className="text-2xl font-black text-[#1D234E] leading-snug group-hover/card:text-purple-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-gray-500 font-medium leading-relaxed line-clamp-3 mb-8">
                      {item.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                       <a
                        href={item.link}
                        // CTA STYLE UPDATED: Text + Purple Circle Arrow
                        className="group/link flex items-center gap-3 font-bold text-[15px] text-[#A020F0] hover:text-[#8000D0] transition-colors"
                      >
                        Selengkapnya 
                        <span className="w-10 h-10 rounded-full bg-[#A020F0] flex items-center justify-center text-white text-lg shadow-lg group-hover/link:bg-[#8000D0] group-hover/link:scale-110 transition-all duration-300">
                          <RiArrowRightLine />
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-16">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-500 rounded-full h-2 ${
                  activeIndex === idx 
                    ? "w-12 bg-purple-600" 
                    : "w-2 bg-gray-300 hover:bg-purple-400"
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
            className="group relative inline-flex items-center gap-4 bg-white text-[#1D234E] px-12 py-5 rounded-full font-black text-sm transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-purple-50 group-hover:bg-purple-600 transition-colors duration-500" />
            <span className="relative z-10 group-hover:text-white transition-colors">Lihat Semua Berita</span>
            <span className="relative z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
               <RiArrowRightLine />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
