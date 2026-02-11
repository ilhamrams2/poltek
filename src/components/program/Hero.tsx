"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  program: "manajemen" | "administrasi" | "rpl";
}

const heroData = {
  manajemen: {
    title: "Manajemen Pemasaran",
    subtitle: "Diploma III — Manajemen Pemasaran",
    description:
      "Program studi vokasi yang mempersiapkan profesional muda di bidang pemasaran dengan keterampilan praktis dan siap kerja.",
    image: "/images/program/hero-manajemen.png",
    color: "#F15A24",
  },
  administrasi: {
    title: "Administrasi Perkantoran",
    subtitle: "Diploma III — Administrasi Perkantoran",
    description:
      "Program studi vokasi yang mempersiapkan profesional muda untuk menjadi tenaga administrasi handal dan siap kerja.",
    image: "/images/program/hero-administrasi.png",
    color: "#F15A24",
  },
  rpl: {
    title: "Rekayasa Perangkat Lunak",
    subtitle: "Diploma III — Rekayasa Perangkat Lunak",
    description:
      "Program studi vokasi yang mempersiapkan profesional muda untuk menjadi software engineer handal dengan keterampilan praktis dan siap kerja.",
    image: "/images/program/hero-rpl.png",
    color: "#F15A24",
  },
};

export default function Hero({ program }: HeroProps) {
  const data = heroData[program];

  return (
    <section
      className="relative overflow-hidden pt-16 pb-24 text-white"
      style={{
        backgroundColor: "#0F1B3D",
        backgroundImage: "url('/images/program/patern_box.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "1500px",
      }}
    >
      <div className="absolute inset-0 bg-[#0F1B3D]/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span
            className="inline-block bg-[#F15A24]/10 text-[#F15A24] text-sm px-4 py-1 rounded-full border border-[#F15A24]/30"
          >
            Program Vokasi Teknologi
          </span>

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            {data.subtitle.includes("—") ? (
              <>
                {data.subtitle.split("—")[0]} —
                <span className="block" style={{ color: data.color }}>
                  {data.subtitle.split("—")[1]}
                </span>
              </>
            ) : (
              <span style={{ color: data.color }}>{data.subtitle}</span>
            )}
          </h1>

          <p className="text-gray-300 leading-relaxed max-w-lg">{data.description}</p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#about"
              className="bg-[#F15A24] px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-orange-600 transition"
            >
              Pelajari Lebih Lanjut
            </Link>

            <Link
              href="/brosur.pdf"
              className="bg-white text-[#0F1B3D] px-6 py-3 rounded-xl font-semibold shadow-md border hover:bg-gray-100 transition"
            >
              Download Brosur
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full"
        >
          <div
            className="absolute -top-4 -right-4 bg-[#F15A24] text-white p-3 rounded-full shadow-lg z-10"
          >
            <span className="text-xl">&lt;/&gt;</span>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={data.image}
              alt={data.title}
              width={720}
              height={480}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative mt-16 text-center space-y-3">
        <p className="text-gray-300 text-sm">Scroll ke bawah</p>

        <div className="w-5 h-8 mx-auto border-2 border-gray-300 rounded-full flex items-start justify-center overflow-hidden relative">
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-scrollDown" />
        </div>
      </div>
    </section>
  );
}
