"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconBoxVariants: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
    y: 0,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  hover: (isLight: boolean) => ({
    scale: 1.2,
    rotate: -4,
    y: -8,
    boxShadow: isLight
      ? "0 20px 40px -10px rgba(59,130,246,0.25)" // Soft Blue shadow for light
      : "0 20px 40px -10px rgba(0,0,0,0.4)", // Dark shadow for dark/orange
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      mass: 0.8,
    },
  }),
};

const iconInnerVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    rotate: 4, // Counter-rotate slightly to keep icon somewhat upright or add dynamic feel
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// Data for the cards
const cards = [
  {
    id: 1,
    theme: "light",
    title: "Daftar Kuliah Bisa Dari Mana Saja",
    desc: "Banyak pilihan beasiswa menarik sampai dengan beasiswa kuliah gratis 100%. Daftarkan dirimu sekarang!",
    linkText: "INFO LENGKAP",
    linkUrl: "/site/pendaftaran",
    icon: "ri-macbook-line",
  },
  {
    id: 2,
    theme: "dark",
    title: "Kuliah Berkualitas Tidak Harus Mahal",
    desc: "Cek rincian biaya perkuliahan dan skema pembayaran yang fleksibel sesuai kebutuhanmu.",
    linkText: "RINCIAN BIAYA",
    linkUrl: "/site/biaya",
    icon: "ri-wallet-3-line",
  },
  {
    id: 3,
    theme: "orange",
    title: "Sudah Siap Gabung Bersama Kami?",
    desc: "Klik tombol di bawah untuk memulai proses pendaftaran online yang cepat dan mudah.",
    linkText: "DAFTAR SEKARANG",
    linkUrl: "/site/daftar",
    icon: "ri-file-list-3-line",
  },
];

export default function QuickActionSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Optional Subtle Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-slate-50/50" />

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </motion.div>
    </section>
  );
}

// Sub-component for individual cards
function Card({ data }: { data: any }) {
  const isLight = data.theme === "light";
  const isDark = data.theme === "dark";
  const isOrange = data.theme === "orange";

  return (
    <motion.a
      href={data.linkUrl}
      variants={cardVariants}
      whileHover="hover"
      initial="rest"
      className={`
        group relative flex flex-col justify-between
        h-[420px] rounded-[2.5rem] p-10 overflow-hidden
        transition-all duration-500 ease-out
        ${
          isLight
            ? "bg-white text-[#1D234E] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
            : ""
        }
        ${
          isDark
            ? "bg-[#1D234E] text-white shadow-[0_10px_40px_-10px_rgba(29,35,78,0.4)] hover:shadow-[0_20px_60px_-15px_rgba(29,35,78,0.6)]"
            : ""
        }
        ${
          isOrange
            ? "bg-[#FF7A00] text-white shadow-[0_10px_40px_-10px_rgba(255,122,0,0.4)] hover:shadow-[0_20px_60px_-15px_rgba(255,122,0,0.6)]"
            : ""
        }
        transform hover:-translate-y-2
      `}
    >
      {/* === DECORATIVE BACKGROUND CIRCLE === */}
      <motion.div
        variants={{
          rest: { scale: 1, x: 0, y: 0, opacity: 1 },
          hover: { scale: 1.3, x: -15, y: -15 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          absolute -bottom-16 -right-16 w-64 h-64 rounded-full pointer-events-none
          ${isLight ? "bg-blue-50" : ""}
          ${isDark ? "bg-white/5" : ""}
          ${isOrange ? "bg-white/10" : ""}
        `}
      />

      {/* === CONTENT TOP === */}
      <div className="relative z-10">
        {/* ICON BOX ANIMATION */}
        <motion.div
          custom={isLight}
          variants={iconBoxVariants}
          className={`
            w-20 h-20 rounded-3xl flex items-center justify-center mb-8
            ${
              isLight
                ? "bg-slate-50 text-[#1D234E]"
                : "bg-white/10 text-white backdrop-blur-sm"
            }
          `}
        >
          <motion.i
            variants={iconInnerVariants}
            className={`${data.icon} text-[2.5rem]`}
          />
        </motion.div>

        {/* TITLE */}
        <h3 className="text-2xl font-black leading-tight mb-4 tracking-tight">
          {data.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className={`
            text-[15px] font-medium leading-relaxed
            ${isLight ? "text-slate-500" : "text-white/80"}
          `}
        >
          {data.desc}
        </p>
      </div>

      {/* === CONTENT BOTTOM (LINK) === */}
      <div className="relative z-10 mt-auto">
        <div
          className={`
            flex items-center gap-3 text-sm font-bold uppercase tracking-wider
            transition-all duration-300 group-hover:gap-5
            ${isLight ? "text-blue-600" : "text-white"}
          `}
        >
          <motion.span
             variants={{
               rest: { x: 0 },
               hover: { x: 5 } 
             }}
             transition={{ type: "spring", stiffness: 300}}
          >
            {data.linkText}
          </motion.span>
          <motion.i 
            variants={{
              rest: { x: 0, opacity: 0.7 },
              hover: { x: 10, opacity: 1 }
            }}
            transition={{ type: "spring", stiffness: 300}}
            className="ri-arrow-right-line text-lg" 
          />
        </div>
      </div>
    </motion.a>
  );
}
