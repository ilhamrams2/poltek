"use client";

import { useState, useRef, useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useMotionTemplate,
  AnimatePresence 
} from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google"; // Corrected import
import Image from "next/image";
import Link from "next/link";
import { 
  RiCodeBoxLine, 
  RiMacbookLine, 
  RiBarChartGroupedLine,
  RiDashboardLine,
  RiServerLine,
  RiVideoLine,
  RiArrowRightUpLine,
  RiFlashlightLine,
  RiGlobalLine,
  RiTeamLine
} from "react-icons/ri";

// Font Configuration
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

// --- DATA ---
const PROGRAMS = {
  D3: [
    {
      title: "Administrasi Perkantoran",
      code: "D3-AP",
      desc: "Mastering Modern Office Administration",
      longDesc: "Menghasilkan ahli madya yang kompeten dalam pengelolaan administrasi perkantoran berbasis teknologi digital, korespondensi bahasa Inggris, dan public relations.",
      image: "/images/sections/program/programdummy.png",
      link: "/program/d3_administrasi_perkantoran",
      icon: RiDashboardLine,
      color: "#3B82F6", // Blue
      stats: { employable: "98%", salary: "Start 5-7jt" }
    },
    {
      title: "Manajemen Pemasaran",
      code: "D3-MP",
      desc: "Digital Marketing & Consumer Behavior Strategy",
      longDesc: "Fokus pada strategi pemasaran digital, branding, analisis pasar, dan e-commerce management untuk memenangkan persaingan bisnis global.",
      image: "/images/sections/program/programdummy.png",
      link: "/program/d3_manajemen_pemasaran",
      icon: RiBarChartGroupedLine,
      color: "#F59E0B", // Amber
      stats: { employable: "95%", salary: "Start 5-8jt" }
    },
    {
      title: "Rekayasa Perangkat Lunak",
      code: "D3-RPL",
      desc: "Full Stack Development & System Architecture",
      longDesc: "Mencetak developer handal yang menguasai pengembangan aplikasi web, mobile, dan desktop dengan standar industri terkini.",
      image: "/images/sections/program/programdummy.png",
      link: "/program/d3_rekayasa_perangkat_lunak",
      icon: RiCodeBoxLine,
      color: "#10B981", // Emerald
      stats: { employable: "99%", salary: "Start 6-10jt" }
    },
  ],
  D4: [
    {
      title: "Bisnis Digital",
      code: "D4-BD",
      desc: "Digital Business Transformation & Fintech",
      longDesc: "Program sarjana terapan yang menggabungkan manajemen bisnis, analisis data, dan teknologi finansial untuk menciptakan entrepreneur digital.",
      image: "/images/sections/program/programdummy.png",
      link: "/program/d4_bisnis_digital",
      icon: RiMacbookLine,
      color: "#8B5CF6", // Violet
      stats: { employable: "96%", salary: "Start 6-9jt" }
    },
    {
      title: "Teknologi Rekayasa Jaringan",
      code: "D4-TRJK",
      desc: "Cloud Computing & Cyber Security",
      longDesc: "Mendalami infrastruktur jaringan skala besar, keamanan siber, cloud computing, dan administrasi sistem server enterprise.",
      image: "/images/sections/program/programdummy.png",
      link: "/program/d4_teknologi_rekayasa_jaringan_komputer",
      icon: RiServerLine,
      color: "#EF4444", // Red
      stats: { employable: "97%", salary: "Start 7-12jt" }
    },
    {
      title: "Teknologi Rekayasa Multimedia",
      code: "D4-TRM",
      desc: "Creative Tech, 3D Animation & UI/UX",
      longDesc: "Menggabungkan seni dan teknologi untuk produksi konten kreatif, animasi 3D, game development, dan desain pengalaman pengguna.",
      image: "/images/sections/program/programdummy.png",
      link: "/program/d4_teknologi_rekayasa_multimedia",
      icon: RiVideoLine,
      color: "#EC4899", // Pink
      stats: { employable: "94%", salary: "Start 5-9jt" }
    },
  ],
};

interface ProgramItem {
  title: string;
  code: string;
  desc: string;
  longDesc: string;
  image: string;
  link: string;
  icon: React.ElementType;
  color: string;
  stats: { employable: string; salary: string };
}

// 1. Simple Card Component (Refined)
const ProgramCard = ({ item, index }: { item: ProgramItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={item.link} className="block h-full">
        <motion.div
          whileHover={{ y: -10 }}
          className="group relative h-full bg-[#0E1333] border border-white/5 rounded-[2rem] overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(241,90,36,0.3)] transition-all duration-300"
        >
          {/* Subtle Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F15A24]/0 to-[#F15A24]/0 group-hover:from-[#F15A24]/10 group-hover:to-transparent transition-all duration-500" />
          
          <div className="relative p-8 h-full flex flex-col justify-between z-10">
            {/* Header */}
            <div>
              <div className="flex justify-between items-start mb-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white shadow-inner bg-[#151b3b] group-hover:scale-110 transition-transform duration-300"
                  style={{ color: item.color }}
                >
                  <item.icon />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-white/30 border border-white/10 px-3 py-1 rounded-full group-hover:border-[#F15A24]/50 group-hover:text-[#F15A24] transition-colors">
                  {item.code}
                </span>
              </div>

              <h3 className="text-xl font-black text-white mb-3 leading-snug group-hover:text-[#F15A24] transition-colors uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 font-medium mb-6 line-clamp-2 leading-relaxed">{item.desc}</p>
            </div>

            {/* Content that is always visible but highlighted on hover */}
            <div className="space-y-5">
              <div className="w-full h-[1px] bg-white/5 group-hover:bg-[#F15A24]/30 transition-colors" />
              
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <p className="text-[10px] uppercase text-gray-600 mb-1 tracking-widest">Employability</p>
                  <p className="font-bold text-white group-hover:text-[#F15A24] transition-colors">{item.stats.employable}</p>
                </div>
                <div>
                   <p className="text-[10px] uppercase text-gray-600 mb-1 tracking-widest">Avg. Salary</p>
                   <p className="font-bold text-white">{item.stats.salary}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-bold text-white/40 group-hover:text-[#F15A24] transition-colors uppercase tracking-[0.2em]">
                <span>View Details</span>
                <RiArrowRightUpLine className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

// 2. Marquee Component
const Marquee = ({ text, direction = 1 }: { text: string, direction?: number }) => {
  return (
    <div className="relative flex overflow-hidden py-4 opacity-5 pointer-events-none select-none">
      <motion.div
        className="flex whitespace-nowrap font-black text-8xl md:text-[12rem] leading-none"
        animate={{ x: direction * -1000 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8 text-transparent stroke-text">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function StudyProgramPage() {
  const [activeTab, setActiveTab] = useState<"D3" | "D4">("D3");
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Logic
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main ref={containerRef} className={`${jakarta.variable} font-sans min-h-screen bg-[#080C1B] text-white selection:bg-[#F15A24] selection:text-white overflow-x-hidden`}>
      
      {/* 1. ULTRA HERO SECTION */}
      <section className="relative h-[92vh] flex items-start justify-center pt-16 md:pt-20 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#F15A24]/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]" />
          
          {/* Abstract Circuit Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Marquee Background */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 mix-blend-overlay">
           <Marquee text="FUTURE READY " direction={1} />
           <Marquee text="DIGITAL SKILLS " direction={-1} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full pb-20">
          <motion.div style={{ y: y1, opacity: heroOpacity }} className="z-20 lg:col-span-7">
            <motion.div 
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, ease: "easeOut" }}
            >
               <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-8">
                 CRAFT <br/>
                 <span className="stroke-text text-transparent">YOUR</span> <br/>
                 <span className="text-white">LEGACY</span>
               </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 font-medium max-w-lg mb-10 border-l-4 border-[#F15A24] pl-6"
            >
              Politeknik Prestasi Prima menyiapkan Anda bukan hanya untuk bekerja, tapi untuk 
              <span className="text-white font-bold"> memimpin revolusi digital</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mb-12"
            >
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                 className="group relative px-10 py-5 bg-[#F15A24] text-white rounded-2xl font-black text-xl uppercase tracking-widest overflow-hidden shadow-[0_10px_40px_-10px_rgba(241,90,36,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(241,90,36,0.6)] transition-all duration-300"
               >
                 <span className="relative z-10 flex items-center gap-3">
                   Explore Programs <RiArrowRightUpLine className="text-2xl" />
                 </span>
                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
               </motion.button>
               
               {/* Clean Stats Row */}
               <div className="flex items-center gap-8 pl-4 border-l border-white/10">
                  <div>
                     <p className="text-3xl font-black text-white leading-none">50+</p>
                     <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Partners</p>
                  </div>
                  <div>
                     <p className="text-3xl font-black text-[#F15A24] leading-none">98%</p>
                     <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Job Rate</p>
                  </div>
               </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="hidden lg:block relative z-10 lg:col-span-5 flex justify-center">
             <div className="relative w-full max-w-[420px] aspect-[3/4]">
                {/* Decorative Back Layer */}
                <motion.div 
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-[#F15A24] to-purple-600 rounded-[2rem] blur-xl opacity-40 translate-x-4 translate-y-4"
                />
                
                {/* Main Card */}
                <motion.div
                  className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-[#0E1333]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/images/facility/poltek-presma5-1024x768.jpg"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                  />
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C1B] via-transparent to-transparent opacity-90" />
                  
                  {/* Tech/Grid Overlay */}
                  <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10 mix-blend-overlay" />
                </motion.div>

                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white text-[#080C1B] p-4 rounded-xl shadow-xl border border-white/50"
                >
                   <RiFlashlightLine className="text-2xl text-[#F15A24]" />
                </motion.div>
             </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference z-30"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>


      {/* 2. INTERACTIVE PROGRAM SECTION */}
      <section id="programs" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header with Toggle */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
             <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-[#F15A24]" />
                  <span className="text-[#F15A24] font-mono text-xs tracking-[0.3em] uppercase">Curriculum</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter text-white mb-6">
                  Academic <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">Disciplines</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                  Pilih jalur keahlian yang spesifik dan relevan dengan kebutuhan industri masa depan.
                </p>
             </div>

             {/* 3D Switch Toggle */}
             <div className="bg-[#0E1333] p-2 rounded-2xl border border-white/10 flex relative w-full md:w-auto overflow-hidden">
                <div 
                  className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-[#F15A24] rounded-xl transition-all duration-500 ease-out shadow-[0_0_30px_#F15A24] ${activeTab === 'D3' ? 'left-2' : 'left-[calc(50%+4px)]'}`}
                />
                {(['D3', 'D4'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative z-10 flex-1 px-10 py-4 font-black text-xl md:text-2xl uppercase tracking-wider transition-colors duration-300 md:min-w-[200px]"
                  >
                    Diploma {tab.replace('D', '')}
                  </button>
                ))}
             </div>
          </div>

          {/* Cards Grid with AnimatePresence */}
          <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {PROGRAMS[activeTab].map((item, idx) => (
                  <ProgramCard key={item.title} item={item} index={idx} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* 3. FEATURE SHOWCASE */}
      <section className="py-32 bg-[#F15A24] text-[#080C1B] relative overflow-hidden">
        {/* Background Noise/Pattern */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-multiply" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <div>
                 <h2 className="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter mb-8">
                    Why <br/> Choose <br/> Us?
                 </h2>
                 <div className="w-32 h-2 bg-[#080C1B]" />
              </div>
              <div className="flex items-end pb-4">
                 <p className="text-2xl font-bold leading-tight max-w-md">
                   Kami tidak hanya menawarkan gelar, tapi <span className="underline decoration-4 underline-offset-4">jaminan kompetensi</span> yang dicari dunia kerja.
                 </p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: RiCodeBoxLine, 
                  title: "Real Projects", 
                  desc: "Belajar dengan mengerjakan proyek nyata dari partner industri kami sejak semester awal."
                },
                { 
                  icon: RiGlobalLine, 
                  title: "Global Standard", 
                  desc: "Kurikulum mengacu pada standar internasional dan sertifikasi vendor ternama (Cisco, Mikrotik, Adobe)."
                },
                { 
                  icon: RiTeamLine, 
                  title: "Expert Mentors", 
                  desc: "Dibimbing langsung oleh praktisi yang masih aktif bekerja di perusahaan teknologi top level."
                },
              ].map((feat, i) => (
                <motion.div 
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#080C1B] p-8 md:p-10 rounded-[2rem] text-white hover:-translate-y-2 transition-transform duration-300"
                >
                   <div className="w-16 h-16 bg-white text-[#080C1B] rounded-2xl flex items-center justify-center text-3xl mb-8">
                      <feat.icon />
                   </div>
                   <h3 className="text-xl font-black mb-4 uppercase tracking-wider">{feat.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. FOOTER / CTA */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[#080C1B]" />
         <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-[800px] h-[800px] border-[100px] border-[#F15A24] rounded-full animate-[spin_20s_linear_infinite]" />
         </div>

         <div className="relative z-10 text-center px-6">
            <motion.div
               initial={{ scale: 0.5, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8, type: "spring" }}
            >
              <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-8">
                 JOIN THE <br/> ELITE
              </h2>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
               Seats are limited for the upcoming academic year. Secure your future today.
            </p>

            <Link 
              href="https://pmb.politeknikpratama.ac.id" 
              className="inline-block px-12 py-6 bg-[#F15A24] text-white rounded-2xl font-black text-2xl uppercase tracking-widest hover:bg-white hover:text-[#F15A24] transition-all duration-300 shadow-[0_0_50px_#F15A24]"
            >
              Register Now
            </Link>
         </div>
      </section>

      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          color: transparent;
        }
      `}</style>
    </main>
  );
}
