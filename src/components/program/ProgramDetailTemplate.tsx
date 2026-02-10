"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import * as RiIcons from "react-icons/ri";
import { ProgramDetail } from "@/data/programs";
import { useRef } from "react";
import { FiArrowRight, FiTarget, FiBriefcase, FiZap, FiDatabase } from "react-icons/fi";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function ProgramDetailTemplate({ data }: { data: ProgramDetail }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <main ref={containerRef} className={`${jakarta.className} min-h-screen bg-[#080C1B] text-white selection:bg-[#F15A24]/30 overflow-hidden`}>
      
      {/* 1. CINEMATIC SPLIT HERO */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        {/* Massive Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.03, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="text-[40vw] font-black leading-none text-white whitespace-nowrap"
            >
              {data.degree}
            </motion.h1>
        </div>

        {/* Decorative HUD & Orbits */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#F15A24]/10 rounded-full"
          />
          
          {/* Gradients */}
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#F15A24]/10 blur-[150px] rounded-full" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-[#1A2B5F]/30 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Deep Info */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-6 py-2 rounded-full border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#F15A24] animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F15A24]">World-Class Curriculum</span>
              </div>

              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                {data.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 0 ? "text-white" : "text-transparent bg-clip-text bg-gradient-to-r from-[#F15A24] to-[#FF8A00] ml-2"}>
                    {word}{' '}
                  </span>
                ))}
              </h1>

              <p className="text-gray-400 text-lg md:text-2xl leading-relaxed mb-12 max-w-2xl font-medium">
                {data.description} Dirancang khusus untuk membentuk <span className="text-white italic">expert digital</span> masa depan.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <Link
                  href="https://wa.me/6285199328825"
                  className="group relative bg-[#F15A24] text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#F15A24]/30 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Path <FiArrowRight className="text-xl transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0 opacity-10" />
                </Link>
                
                {/* Stats Pill */}
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#080C1B] overflow-hidden bg-gray-800">
                      <Image src={`/images/facility/facility${i}.png`} alt="User" width={48} height={48} className="object-cover" unoptimized />
                    </div>
                  ))}
                  <div className="h-12 flex items-center pl-8 text-xs font-bold text-gray-400">
                    Trusted by 500+ Industry Leaders
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Immersive Card */}
          <div className="lg:col-span-5 h-[600px] relative">
            <motion.div
              style={{ scale }}
              className="relative w-full h-full"
            >
              {/* Image Frame with perspective shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F15A24] to-[#1A2B5F] rounded-[3.5rem] p-[2px] transform rotate-3 scale-95 shadow-2xl opacity-50" />
              <div className="absolute inset-0 bg-[#080C1B] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                 <Image
                    src={data.heroImage}
                    alt={data.title}
                    fill
                    className="object-cover opacity-80 brightness-75 group-hover:scale-105 transition-transform duration-1000"
                    unoptimized
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080C1B] via-transparent to-transparent" />
                 
                 {/* Floating Detail Badge on Image */}
                 <div className="absolute bottom-10 left-10 p-6 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 max-w-[240px]">
                    <div className="flex items-center gap-3 mb-3">
                       <div className="w-10 h-10 rounded-xl bg-[#F15A24] text-white flex items-center justify-center text-xl">
                          <FiZap />
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest">Core Focus</span>
                    </div>
                    <p className="text-xs text-gray-300 font-bold leading-relaxed">{data.subtitle}</p>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. STATS BAR - High-End Glassmorphism */}
      <section className="relative z-20 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 p-12 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-3xl">
           {data.stats.map((stat, i) => (
             <div key={i} className="flex-1 min-w-[150px] text-center lg:text-left">
                <div className="text-xs font-black text-[#F15A24] uppercase tracking-widest mb-2 opacity-60">{stat.label}</div>
                <div className="text-4xl lg:text-6xl font-black tracking-tighter">{stat.value}</div>
             </div>
           ))}
           <div className="hidden lg:block w-[1px] h-20 bg-white/10 self-center" />
           <div className="flex-1 flex items-center justify-center lg:justify-end gap-6">
              <div className="text-right hidden md:block">
                 <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Accredited by</div>
                 <div className="text-sm font-black text-white">BAN-PT / LAM</div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">
                 <RiIcons.RiShieldStarLine />
              </div>
           </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION - Unique Horizontal Stack */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-4xl lg:text-6xl font-black mb-10 leading-none">
                  Explorasi <br /> <span className="text-[#F15A24]">Potensi</span> <br /> Anda
                </h2>
                <div className="w-20 h-2 bg-[#F15A24] rounded-full mb-10" />
                <p className="text-gray-400 text-xl font-medium leading-relaxed">
                   {data.longDescription}
                </p>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-8">
              {data.competencies.map((comp, i) => {
                const IconComp = (RiIcons as any)[comp.icon] || RiIcons.RiCheckboxCircleLine;
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 20 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative p-12 bg-[#1A2B5F]/20 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row gap-10 items-center overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-700">
                      <IconComp className="text-[12rem]" />
                    </div>
                    
                    <div className="w-24 h-24 rounded-3xl bg-[#F15A24] text-white flex items-center justify-center text-5xl shadow-2xl shadow-[#F15A24]/30 relative z-10">
                       <IconComp />
                    </div>
                    <div className="relative z-10 text-center md:text-left flex-1">
                       <h4 className="text-2xl font-black mb-4 group-hover:text-[#F15A24] transition-colors">{comp.title}</h4>
                       <p className="text-gray-400 font-medium leading-relaxed">{comp.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAREER FLOW - Massive Dynamic Sphere */}
      <section className="py-40 bg-[#0a0e24] px-6 relative overflow-hidden">
        {/* Animated Background Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] z-0 blur-[2px]">
            <Image src="/images/logo_politeknik.png" alt="Logo" width={1000} height={1000} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
           <div className="text-center mb-24">
              <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none">
                Masa Depan <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15A24] to-[#FF8A00]">Tanpa Batas</span>
              </h2>
              <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.5em] text-[#F15A24]">
                Career Opportunities Breakdown
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.careers.map((career, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-10 bg-white/5 rounded-[2rem] border border-white/5 hover:border-[#F15A24]/40 hover:bg-[#F15A24]/5 transition-all duration-500"
                >
                   <div className="flex items-center gap-6">
                      <div className="text-4xl text-[#F15A24] group-hover:scale-125 transition-transform"><FiBriefcase /></div>
                      <div className="h-0.5 flex-1 bg-white/10" />
                   </div>
                   <h3 className="mt-8 text-2xl font-black group-hover:translate-x-3 transition-transform">{career}</h3>
                   <p className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Professional Sector</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. TECH ECOSYSTEM - "Modular" Grid */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 text-[#F15A24] font-black uppercase tracking-widest text-[10px] mb-6">
                  <span className="w-10 h-[1px] bg-[#F15A24]" /> Professional Stack
                </div>
                <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-tight">Expertize <br /> <span className="text-white/20 italic">Validated</span></h2>
                <div className="space-y-6 text-gray-400 text-lg font-medium leading-relaxed">
                   <p>Kami memastikan kurikulum tidak hanya berbicara tentang teori, tetapi juga memberikan akses penuh ke <span className="text-white font-bold">Standard Tools</span> yang digunakan raksasa industri hari ini.</p>
                   <div className="flex items-center gap-4 text-[#F15A24]">
                      <FiZap className="text-3xl animate-pulse" />
                      <span className="text-sm font-black uppercase tracking-widest">Industry-Ready in 2 semesters</span>
                   </div>
                </div>
             </div>

             <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6">
                {data.tools.map((tool, i) => {
                  const ToolIcon = (RiIcons as any)[tool.icon] || FiDatabase;
                  return (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
                      className="aspect-square bg-[#1A2B5F]/20 rounded-[2.5rem] border border-white/5 p-8 flex flex-col items-center justify-center text-center group"
                    >
                       <div className="text-5xl mb-6 text-white group-hover:text-[#F15A24] transition-colors"><ToolIcon /></div>
                       <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white">{tool.name}</div>
                    </motion.div>
                  );
                })}
             </div>
          </div>
        </div>
      </section>

      {/* 6. IMMERSIVE OUTRO - The "Wow" Finish */}
      <section className="relative py-60 px-6 bg-gradient-to-b from-transparent to-[#0E1333] overflow-hidden">
         {/* Parallax Background */}
         <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#F15A24]/10 blur-[150px] rounded-full" />
         </div>

         <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
               <h2 className="text-5xl md:text-9xl font-black mb-12 tracking-tighter leading-none">
                 ARE YOU <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">READY TO LEAD?</span>
               </h2>
               <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-20">
                  <Link href="https://wa.me/6285199328825" className="w-full sm:w-auto bg-white text-[#0E1333] px-16 py-8 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:scale-105 transition-all">
                    Register Now
                  </Link>
                  <Link href="/facility-tour" className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-4 hover:gap-8 transition-all group">
                     Virtual Tour <FiArrowRight className="text-[#F15A24] text-2xl" />
                  </Link>
               </div>
            </motion.div>
         </div>
      </section>

      <style jsx global>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(0%); opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-scrollDown {
          animation: scrollDown 2s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.4);
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 100s linear infinite;
        }
      `}</style>
    </main>
  );
}
