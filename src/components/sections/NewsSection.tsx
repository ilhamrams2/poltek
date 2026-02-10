"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowRightLine, RiCalendarLine, RiArrowLeftSLine, RiArrowRightSLine, RiNewspaperLine } from "react-icons/ri";

const news = [
  {
    category: "Prestasi",
    title: "Juara Internasional Rekayasa Perangkat Lunak 2025",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "25 Nov 2025",
    excerpt: "Mahasiswa kami berhasil meraih medali emas dalam kompetisi desain aplikasi tingkat dunia.",
    link: "/news",
  },
  {
    category: "Akademik",
    title: "Workshop Digital Marketing untuk Mahasiswa",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "20 Nov 2025",
    excerpt: "Workshop ini memberikan wawasan terbaru dalam dunia digital marketing, khusus untuk mahasiswa.",
    link: "/news",
  },
  {
    category: "Karir",
    title: "Pendaftaran Magang Semester Ganjil Dibuka",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "15 Nov 2025",
    excerpt: "Mahasiswa bisa mendaftar untuk magang di perusahaan mitra kami dengan berbagai pilihan lokasi industri.",
    link: "/news",
  },
  {
    category: "Event",
    title: "Festival Budaya Kreatif Politeknik 2026",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "10 Jan 2026",
    excerpt: "Sebuah perayaan kreativitas tanpa batas yang menggabungkan teknologi dan kearifan lokal.",
    link: "/news",
  },
  {
    category: "Inovasi",
    title: "Kemenangan Lomba Inovasi Teknologi Tepat Guna",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "05 Jan 2026",
    excerpt: "Inovasi mahasiswa dalam bidang pertanian cerdas mendapat apresiasi tinggi dari para juri.",
    link: "/news",
  },
  {
    category: "Teknologi",
    title: "Seminar Teknologi Masa Depan: AI & Robotic",
    img: "/images/sections/news/newsdummy.jpeg",
    date: "12 Feb 2026",
    excerpt: "Mengahadirkan pakar industri global untuk membahas masa depan kecerdasan buatan.",
    link: "/news",
  },
];

export default function NewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [gap, setGap] = useState(40);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
        setGap(24);
      } else if (window.innerWidth < 1150) { // Keep 2 items for standard laptops (13-14 inch)
        setItemsPerView(2);
        setGap(32);
      } else {
        setItemsPerView(3);
        setGap(40);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = news.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const scrollLeft = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const scrollRight = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Auto-sliding logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(scrollRight, 5000); 
    return () => clearInterval(interval);
  }, [isPaused, scrollRight]);

  const scrollTo = (index: number) => {
    setActiveIndex(index);
  };

  // Calculate translation
  // If itemsPerView = 1: translate = index * (100% + gap)
  // If itemsPerView = 2: width = (100% - gap) / 2. Translation step = width + gap = 50% + gap/2
  // If itemsPerView = 3: width = (100% - 2*gap) / 3. Translation step = width + gap = 33.33% + gap/3
  const getTranslateX = () => {
    const percentage = 100 / itemsPerView;
    const offset = activeIndex * (percentage);
    const gapOffset = activeIndex * (gap / itemsPerView);
    return `calc(-${offset}% - ${gapOffset}px)`;
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50/50 px-4 sm:px-6 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none -z-10" />
      <div className="absolute right-0 top-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-6">
            <RiNewspaperLine className="text-base sm:text-lg" />
            Berita Terkini
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#1D234E] leading-[1.1] tracking-tight px-4">
            Ikuti informasi & perkembangan <br className="hidden sm:block"/> terbaru seputar <span className="text-purple-600 underline decoration-purple-200 decoration-4 underline-offset-4">kampus</span>
          </h2>
        </motion.div>

        {/* Carousel Wrapper */}
        <div 
          className="relative group/carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons (Outside on lg) */}
          <div className="absolute top-1/2 left-0 lg:-left-6 xl:-left-16 -translate-y-1/2 z-20 hidden lg:block opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <button 
              onClick={scrollLeft} 
              className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-200 hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="Previous slide"
            >
              <RiArrowLeftSLine size={32} />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 lg:-right-6 xl:-right-16 -translate-y-1/2 z-20 hidden lg:block opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <button 
              onClick={scrollRight} 
              className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-200 hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="Next slide"
            >
              <RiArrowRightSLine size={32} />
            </button>
          </div>

          {/* Slider Content */}
          <div className="overflow-hidden py-10 -my-10 px-4 -mx-4 mt-8 sm:mt-12">
            <motion.div 
              className="flex items-stretch cursor-grab active:cursor-grabbing"
              style={{ gap: `${gap}px` }}
              drag="x"
              dragConstraints={{ right: 0, left: -((news.length - itemsPerView) * (100 / itemsPerView + gap / itemsPerView)) }} // Approximate
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) scrollRight();
                if (info.offset.x > 100) scrollLeft();
              }}
              animate={{ x: getTranslateX() }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {news.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex-shrink-0 relative
                             bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] 
                             hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] 
                             transition-all duration-500 hover:-translate-y-2
                             overflow-hidden flex flex-col group/card border border-gray-100"
                  style={{ 
                    width: `calc(${100 / itemsPerView}% - ${(gap * (itemsPerView - 1)) / itemsPerView}px)` 
                  }}
                >
                  {/* Image Section */}
                  <div className="relative h-[220px] sm:h-[280px] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                      <span className="px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold text-white shadow-lg bg-purple-600/90 backdrop-blur-md border border-white/20">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1 relative">
                    {/* Date Tag */}
                    <div className="absolute -top-6 right-6 sm:right-8 bg-white shadow-lg rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 flex flex-col items-center border border-gray-100 group-hover/card:bg-purple-600 group-hover/card:text-white transition-colors duration-300">
                      <span className="text-lg sm:text-xl font-black leading-none">{item.date.split(' ')[0]}</span>
                      <span className="text-[8px] sm:text-[10px] font-bold uppercase mt-1">{item.date.split(' ')[1]}</span>
                    </div>

                    <div className="mt-2 sm:mt-4 mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-2xl font-black text-[#1D234E] leading-snug group-hover/card:text-purple-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed line-clamp-2 sm:line-clamp-3 mb-6 sm:mb-8">
                      {item.excerpt}
                    </p>

                    <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-100 flex items-center justify-between">
                       <motion.a
                        href={item.link}
                        whileHover="hover"
                        initial="initial"
                        className="group/link ml-auto relative flex items-center gap-3 font-bold text-sm sm:text-[15px] text-[#A020F0] overflow-hidden py-2 px-1"
                      >
                        {/* Interactive Text with reveal effect */}
                        <span className="relative z-10 flex flex-col overflow-hidden">
                          <motion.span 
                            variants={{
                              initial: { y: 0 },
                              hover: { y: -25 }
                            }}
                            className="transition-colors group-hover/link:text-purple-700"
                          >
                            Selengkapnya
                          </motion.span>
                          <motion.span 
                            variants={{
                              initial: { y: 25 },
                              hover: { y: 0 }
                            }}
                            className="absolute inset-0 text-purple-900"
                          >
                            Selengkapnya
                          </motion.span>
                        </span>

                        {/* Unique Circle Animation */}
                        <motion.div 
                          variants={{
                            initial: { x: 0, scale: 1 },
                            hover: { x: 5, scale: 1.1 }
                          }}
                          className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-600 flex items-center justify-center text-white text-base sm:text-lg shadow-[0_4px_15px_rgba(160,32,240,0.3)] group-hover/link:shadow-[0_8px_25px_rgba(160,32,240,0.5)] transition-shadow duration-300 overflow-hidden"
                        >
                          <motion.div
                            variants={{
                              initial: { x: 0 },
                              hover: { x: 35 }
                            }}
                            className="absolute transition-transform"
                          >
                            <RiArrowRightLine />
                          </motion.div>
                          <motion.div
                            variants={{
                              initial: { x: -35 },
                              hover: { x: 0 }
                            }}
                            className="absolute transition-transform"
                          >
                            <RiArrowRightLine />
                          </motion.div>
                        </motion.div>

                        {/* Background Slide Effect */}
                        <motion.div 
                          variants={{
                            initial: { scaleX: 0 },
                            hover: { scaleX: 1 }
                          }}
                          style={{ originX: 1 }}
                          className="absolute bottom-0 right-0 h-[2px] w-full bg-purple-200"
                        />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-10 sm:mt-16">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-500 rounded-full h-1.5 sm:h-2 ${
                  activeIndex === idx 
                    ? "w-8 sm:w-12 bg-purple-600" 
                    : "w-1.5 sm:w-2 bg-gray-300 hover:bg-purple-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex lg:hidden justify-center gap-4 mt-8">
            <button 
              onClick={scrollLeft} 
              className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 active:text-purple-600 active:scale-95 shadow-md transition-all"
              aria-label="Previous slide"
            >
              <RiArrowLeftSLine size={24} />
            </button>
            <button 
              onClick={scrollRight} 
              className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 active:text-purple-600 active:scale-95 shadow-md transition-all"
              aria-label="Next slide"
            >
              <RiArrowRightSLine size={24} />
            </button>
        </div>

        {/* Footer Button - MORE UNIQUE & INTERACTIVE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-24 flex justify-center"
        >
          <motion.a
            href="/news"
            whileHover="hover"
            whileTap="tap"
            className="group relative inline-flex items-center gap-4 sm:gap-6 bg-white px-10 sm:px-14 py-5 sm:py-6 rounded-full font-black text-xs sm:text-base tracking-wider uppercase transition-all duration-300 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(160,32,240,0.2)]"
          >
            {/* Liquid Background Effect */}
            <motion.div 
              variants={{
                hover: { scale: 1.5, rotate: 15, y: -40 },
              }}
              className="absolute -inset-4 bg-gradient-to-tr from-purple-600 via-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[40%] blur-2xl"
            />
            
            {/* Animated border/glow */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-full transition-colors duration-500" />

            {/* Content */}
            <span className="relative z-10 text-[#1D234E] group-hover:text-white transition-colors duration-300">
              Lihat Semua Berita
            </span>
            
            <motion.span 
              variants={{
                initial: { x: 0 },
                hover: { x: 5, scale: 1.2 }
              }}
              className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-white group-hover:text-purple-600 transition-all duration-300 shadow-md"
            >
               <RiArrowRightLine className="text-xl" />
            </motion.span>

            {/* Flying Particles/Stars on hover (using CSS pointers) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-75" />
               <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-200 rounded-full animate-pulse delay-150" />
               <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-indigo-200 rounded-full animate-bounce delay-100" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
