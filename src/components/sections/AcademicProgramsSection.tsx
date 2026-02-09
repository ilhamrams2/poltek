"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProgramItem {
  title: string;
  img: string;
  label: string;
  description: string;
  link: string;
}

import { PROGRAMS_DATA } from "@/data/programs";

export default function AcademicProgramsSection() {
  const [activeTab, setActiveTab] = useState<"D3" | "D4">("D3");

  const programs = {
    D3: [
      {
        ...PROGRAMS_DATA["d3_administrasi_perkantoran"],
        label: "Program D3",
        img: PROGRAMS_DATA["d3_administrasi_perkantoran"].heroImage,
        link: "/site/program/d3_administrasi_perkantoran",
      },
      {
        ...PROGRAMS_DATA["d3_manajemen_pemasaran"],
        label: "Program D3",
        img: PROGRAMS_DATA["d3_manajemen_pemasaran"].heroImage,
        link: "/site/program/d3_manajemen_pemasaran",
      },
      {
        ...PROGRAMS_DATA["d3_rekayasa_perangkat_lunak"],
        label: "Program D3",
        img: PROGRAMS_DATA["d3_rekayasa_perangkat_lunak"].heroImage,
        link: "/site/program/d3_rekayasa_perangkat_lunak",
      },
    ],
    D4: [
      {
        ...PROGRAMS_DATA["d4_bisnis_digital"],
        label: "Program D4",
        img: PROGRAMS_DATA["d4_bisnis_digital"].heroImage,
        link: "/site/program/d4_bisnis_digital",
      },
      {
        ...PROGRAMS_DATA["d4_teknologi_rekayasa_jaringan_komputer"],
        label: "Program D4",
        img: PROGRAMS_DATA["d4_teknologi_rekayasa_jaringan_komputer"].heroImage,
        link: "/site/program/d4_teknologi_rekayasa_jaringan_komputer",
      },
      {
        ...PROGRAMS_DATA["d4_teknologi_rekayasa_multimedia"],
        label: "Program D4",
        img: PROGRAMS_DATA["d4_teknologi_rekayasa_multimedia"].heroImage,
        link: "/site/program/d4_teknologi_rekayasa_multimedia",
      },
    ],
  };

  return (
    <section className="w-full py-12 sm:py-24 lg:py-32 bg-white flex flex-col items-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
      <div className="absolute top-48 right-0 w-96 h-96 bg-orange-50/50 rounded-full blur-[100px] -z-10" />

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 mb-16 lg:mb-20"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#FF6B00]/5 border border-[#FF6B00]/10 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
          <span className="text-[#FF6B00] font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px]">Academic Overview</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-black text-[#020617] leading-[1.05] mb-6 sm:mb-8 tracking-tighter">
          Pilihan Program <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-500">Studi Unggulan</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed font-semibold">
          Kuasai keahlian masa depan dengan kurikulum vokasi yang dirancang khusus untuk mencetak profesional siap kerja di era ekonomi digital.
        </p>
      </motion.div>

      {/* Tabs Container */}
      <div className="flex bg-[#050A1F] p-1.5 sm:p-2 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_20px_50px_rgba(2,6,23,0.15)] mb-12 md:mb-20 relative z-10">
        {(["D3", "D4"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative min-w-[120px] sm:min-w-[140px] md:min-w-[180px] py-3 sm:py-4 px-4 sm:px-8 rounded-[1rem] sm:rounded-[1.5rem] transition-all duration-500 font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-widest z-10
              ${activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            {activeTab === tab && (
              <motion.div 
                layoutId="activeTabBg"
                className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-orange-500 rounded-[1rem] sm:rounded-[1.5rem] -z-10 shadow-lg shadow-[#FF6B00]/20"
                transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
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
              <ProgramCard key={`${activeTab}-${idx}`} prog={prog} idx={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProgramCard({ prog, idx }: { prog: ProgramItem; idx: number }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.7 }}
      onClick={(e) => {
        // On mobile, first click activates "hover state", second click navigates
        if (window.innerWidth < 1024) {
          if (!isClicked) {
            e.preventDefault();
            setIsClicked(true);
          }
        }
      }}
      onMouseLeave={() => setIsClicked(false)}
      className={`group relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.1)] aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4.2] flex items-end p-6 md:p-8 text-white cursor-pointer ${
        isClicked ? "active-card" : ""
      }`}
    >
      {/* Background Image with Zoom */}
      <div
        className={`absolute inset-0 transition-transform duration-1000 ${
          isClicked ? "scale-110" : "group-hover:scale-110"
        }`}
        style={{
          backgroundImage: `url(${prog.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlays */}
      <div
        className={`absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent transition-all duration-700 ${
          isClicked ? "opacity-95" : "opacity-80 group-hover:opacity-95"
        }`}
      />
      <div
        className={`absolute inset-0 bg-linear-to-tr from-[#FF6B00]/70 via-transparent to-transparent transition-opacity duration-1000 ${
          isClicked ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Badge */}
      <div className="absolute top-6 left-6 overflow-hidden z-20">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="inline-block bg-[#FF6B00] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-xl"
        >
          {prog.label}
        </motion.span>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 w-full transform transition-all duration-700 ${
          isClicked ? "-translate-y-4" : "lg:translate-y-0 lg:group-hover:-translate-y-4"
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight drop-shadow-xl">
          {prog.title}
        </h3>

        <div
          className={`grid transition-all duration-700 ease-in-out overflow-hidden ${
            isClicked
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]"
          }`}
        >
          <div className="min-h-0">
            <p
              className={`text-gray-100 text-sm md:text-base leading-relaxed mb-6 transition-all duration-500 delay-100 font-medium ${
                isClicked ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"
              }`}
            >
              {prog.description}
            </p>

            <a
              href={prog.link}
              className="inline-flex items-center gap-3 text-white font-black text-[10px] md:text-xs bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] px-6 py-4 rounded-xl hover:scale-105 transition-all shadow-xl uppercase tracking-widest"
            >
              Detail Program <i className="ri-arrow-right-up-line text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Corner Decorative Element */}
      <div
        className={`absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-tl-xl backdrop-blur-xl transition-transform duration-1000 ${
          isClicked
            ? "translate-x-0 translate-y-0"
            : "translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0"
        }`}
      />
    </motion.div>
  );
}
