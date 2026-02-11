"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import React, { useRef } from "react";
import { RiRocket2Line, RiBuilding4Line, RiGroupLine, RiFlashlightLine, RiAwardLine, RiGlobalLine } from "react-icons/ri";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const TIMELINE_EVENTS = [
  {
    year: "2018",
    title: "Awal Mula Visi",
    description: "Yayasan Wahana Prestasi Prima meletakkan dasar visi untuk menghadirkan pendidikan tinggi vokasi yang modern dan relevan dengan industri digital global.",
    icon: RiFlashlightLine,
    image: "/images/facility/poltek-presma3-1024x768.jpg",
    tags: ["Foundation", "Vision"]
  },
  {
    year: "2020",
    title: "Pengembangan Infrastruktur",
    description: "Pembangunan gedung RPS (Hall) dan laboratorium komputer berstandar industri dimulai sebagai komitmen menghadirkan fasilitas kelas dunia.",
    icon: RiBuilding4Line,
    image: "/images/facility/facility1.png",
    tags: ["Infrastructure", "Modernization"]
  },
  {
    year: "2023",
    title: "Pendirian Resmi",
    description: "Tepat pada 19 Oktober 2023, Politeknik Prestasi Prima resmi berdiri melalui Keputusan Mendikbudristek No. 271/D/OT/2023, membuka babak baru pendidikan vokasi digital.",
    icon: RiRocket2Line,
    image: "/images/facility/poltek-presma5-1024x768.jpg",
    tags: ["Milestone", "Legal Authorization"]
  },
  {
    year: "2024",
    title: "Ekspansi Program & Kemitraan",
    description: "Meluncurkan program unggulan D3 dan D4 serta menjalin kemitraan strategis dengan berbagai raksasa teknologi dan industri nasional.",
    icon: RiAwardLine,
    image: "/images/facility/poltek-presma6-1024x768.jpg",
    tags: ["Growth", "Industry Partnership"]
  },
  {
    year: "Future",
    title: "Menuju Global Excellence",
    description: "Berkomitmen menjadi pusat keunggulan vokasi di Asia Tenggara, mencetak profesional digital yang berakhlak dan berdaya saing global.",
    icon: RiGlobalLine,
    image: "/images/facility/360.jpeg",
    tags: ["Vision 2030", "Innovation"]
  }
];

export default function HistoryPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className={`${jakarta.className} min-h-screen bg-[#080C1B] text-white selection:bg-[#F15A24]/30 overflow-hidden`}>
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Decorative Rings */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/[0.03] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/[0.05] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#F15A24]/10 rounded-full" />
          
          {/* Gradients */}
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#F15A24]/10 blur-[120px] rounded-full" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#1A2B5F]/30 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#F15A24]/10 text-[#F15A24] px-6 py-2 rounded-full border border-[#F15A24]/20 mb-8 font-black uppercase tracking-[0.3em] text-[10px]">
              Our Journey
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tight">
              Jejak Bersejarah <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15A24] via-[#ff7c3d] to-[#F15A24] bg-[length:200%_auto] animate-gradient">Politeknik Kami</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Dari sebuah visi besar menjadi institusi pendidikan vokasi terdepan. Simak setiap langkah yang membentuk Politeknik Prestasi Prima hari ini.
            </p>
          </motion.div>
        </div>

        {/* Scroll Prompt */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
           <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#F15A24] to-transparent" />
           <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40">Scroll to Explore</span>
        </div>
      </section>

      {/* 2. TIMELINE SECTION */}
      <section ref={containerRef} className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto relative">
          
          {/* Line - Hidden on Mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#F15A24] to-[#ff7c3d] origin-top"
            />
          </div>

          <div className="space-y-32">
            {TIMELINE_EVENTS.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                   <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#080C1B] border-4 border-[#F15A24] z-20 items-center justify-center shadow-[0_0_20px_rgba(241,90,36,0.3)]">
                      <Icon className="text-[#F15A24] text-xl" />
                   </div>

                  <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Text Platform */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "0px" }}
                      className="w-full lg:w-1/2"
                    >
                      <div className={`flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                        <span className="text-6xl md:text-8xl font-black text-white/5 mb-4 block leading-none">
                          {event.year}
                        </span>
                        
                        <div className="inline-flex gap-2 mb-6">
                          {event.tags.map(tag => (
                            <span key={tag} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-[#F15A24]">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-3xl md:text-4xl font-black mb-6 text-white group-hover:text-[#F15A24] transition-colors">
                          {event.title}
                        </h3>

                        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Image Platform */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "0px" }}
                      className="w-full lg:w-1/2"
                    >
                      <div className="relative group rounded-[2.5rem] overflow-hidden bg-[#1D234E]/20 border border-white/5 p-4 shadow-2xl">
                         <div className="relative aspect-video rounded-[1.5rem] overflow-hidden">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover transition-transform duration-1000 group-hover:scale-110"
                              unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#080C1B] via-transparent to-transparent opacity-60" />
                         </div>
                         
                         {/* Mobile Icon */}
                         <div className="lg:hidden absolute top-8 left-8 w-12 h-12 rounded-2xl bg-[#F15A24] text-white flex items-center justify-center shadow-xl">
                            <Icon className="text-2xl" />
                         </div>
                      </div>
                    </motion.div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. QUOTE / VALUES SECTION */}
      <section className="relative py-40 overflow-hidden bg-[#0a0f25]">
        <div className="absolute inset-0 opacity-10 blur-[100px] pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-[#F15A24] via-[#1A2B5F] to-orange-600 rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
           >
              <RiFlashlightLine className="text-6xl text-[#F15A24] mx-auto mb-10" />
              <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight italic">
                &ldquo;Sejarah bukan hanya tentang catatan masa lalu, <br /> 
                tapi tentang <span className="text-[#F15A24]">pondasi masa depan</span> yang kita bangun hari ini.&rdquo;
              </h2>
              <div className="w-20 h-1 bg-[#F15A24] mx-auto rounded-full" />
           </motion.div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] bg-gradient-to-br from-[#1D234E] to-[#080C1B] border border-white/10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-3xl"
          >
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F15A24]/10 blur-[100px] rounded-full -mr-48 -mt-48" />

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">Kini Giliran <span className="text-[#F15A24]">Anda</span></h2>
              <p className="text-gray-400 text-lg md:text-xl font-medium max-w-xl">
                Jadilah bagian dari sejarah besar kami berikutnya. Bergabunglah dengan Politeknik Prestasi Prima.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="https://wa.me/6285199328825"
                className="bg-[#F15A24] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#F15A24]/30 hover:scale-105 transition-all text-center"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="/facility"
                className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all text-center"
              >
                Explore Fasilitas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </main>
  );
}
