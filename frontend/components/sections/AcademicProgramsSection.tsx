"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProgramItem {
  title: string;
  img: string;
  label: string;
  desc: string;
  link: string;
}

interface ProgramGroup {
  [key: string]: ProgramItem[];
}

export default function AcademicProgramsSection() {
  const [activeTab, setActiveTab] = useState<"D3" | "D4">("D3");

  const programs: ProgramGroup = {
    D3: [
      {
        title: "Administrasi Perkantoran",
        img: "/images/sections/program/programdummy.png",
        label: "Program D3",
        desc: "Mempelajari tata kelola administrasi perkantoran modern berbasis teknologi informasi.",
        link: "#",
      },
      {
        title: "Manajemen Pemasaran",
        img: "/images/sections/program/programdummy.png",
        label: "Program D3",
        desc: "Fokus pada strategi pemasaran digital, riset pasar, dan perilaku konsumen di era modern.",
        link: "#",
      },
      {
        title: "Manajemen Perangkat Lunak",
        img: "/images/sections/program/programdummy.png",
        label: "Program D3",
        desc: "Pengembangan dasar-dasar perangkat lunak dan arsitektur sistem informasi enterprise.",
        link: "#",
      },
    ],
    D4: [
      {
        title: "Teknologi Rekayasa Perangkat Lunak",
        img: "/images/sections/program/programdummy.png",
        label: "Program D4",
        desc: "Studi mendalam tentang rekayasa perangkat lunak skala besar dan manajemen proyek IT.",
        link: "#",
      },
      {
        title: "Teknologi Produksi Multimedia",
        img: "/images/sections/program/programdummy.png",
        label: "Program D4",
        desc: "Menciptakan konten digital kreatif, produksi video, dan desain interaktif berstandar industri.",
        link: "#",
      },
    ],
  };

  return (
    <section className="w-full py-24 md:py-32 bg-gray-50/50 flex flex-col items-center overflow-hidden">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center px-6 mb-16 md:mb-20"
      >
        <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4 block">Our Curriculum</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1D234E] leading-tight mb-6">
          Program <span className="text-orange-500">Akademik</span>
        </h2>
        <div className="w-16 h-1.5 bg-orange-500 mx-auto rounded-full mb-6" />
        <p className="max-w-2xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed font-medium">
          Dapatkan keunggulan kompetitif dengan pilihan program studi vokasi yang selaras dengan perkembangan industri global masa kini.
        </p>
      </motion.div>

      {/* Tabs Container */}
      <div className="flex bg-white p-1.5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.05)] mb-16 md:mb-20 relative z-10 border border-gray-100">
        {(["D3", "D4"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative min-w-[120px] md:min-w-[160px] py-3.5 px-6 rounded-xl transition-all duration-300 font-black text-base z-10
              ${activeTab === tab ? "text-white" : "text-[#1D234E] hover:text-orange-600"}`}
          >
            {activeTab === tab && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-orange-500 rounded-xl -z-10 shadow-lg shadow-orange-500/40"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            Diploma {tab.replace("D", "")}
          </button>
        ))}
      </div>

      {/* Program Grid */}
      <div className="w-full max-w-7xl px-6 md:px-10 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          >
            {programs[activeTab].map((prog, idx) => (
              <motion.div
                key={`${activeTab}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                className="group relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.1)] aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4.2] flex items-end p-6 md:p-8 text-white cursor-pointer"
              >
                {/* Background Image with Zoom */}
                <div 
                  className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${prog.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-all duration-700" />
                <div className="absolute inset-0 bg-linear-to-tr from-orange-600/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Badge */}
                <div className="absolute top-6 left-6 overflow-hidden z-20">
                  <motion.span
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="inline-block bg-orange-500 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-xl"
                  >
                    {prog.label}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full transform transition-all duration-700 group-hover:-translate-y-4">
                  <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight drop-shadow-xl">
                    {prog.title}
                  </h3>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out overflow-hidden">
                    <div className="min-h-0">
                      <p className="text-gray-100 text-sm md:text-base leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 font-medium">
                        {prog.desc}
                      </p>
                      
                      <a
                        href={prog.link}
                        className="inline-flex items-center gap-3 text-white font-black text-[10px] md:text-xs bg-orange-600 px-5 py-3 rounded-xl hover:bg-white hover:text-orange-600 transition-all shadow-xl uppercase tracking-widest"
                      >
                        Detail Program <i className="ri-arrow-right-up-line text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Corner Decorative Element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-tl-xl backdrop-blur-xl translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
