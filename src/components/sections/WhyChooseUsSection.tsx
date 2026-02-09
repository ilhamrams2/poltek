"use client";

import { motion } from "framer-motion";
import { 
  RiStarLine, 
  RiCompass3Line, 
  RiFocus2Line, 
  RiGroupLine, 
  RiShieldStarLine, 
  RiPriceTag3Line, 
  RiCommunityLine, 
  RiAwardLine, 
  RiMapPinLine, 
  RiRocketLine 
} from "react-icons/ri";

const reasons = [
  {
    title: "Kurikulum Industri",
    desc: "Program studi dirancang bersama industri untuk relevansi pasar kerja.",
    icon: <RiCompass3Line />,
    color: "bg-orange-500",
  },
  {
    title: "Fasilitas Modern",
    desc: "Laboratorium, bengkel, dan perpustakaan digital berstandar global.",
    icon: <RiFocus2Line />,
    color: "bg-blue-600",
  },
  {
    title: "Dosen Profesional",
    desc: "Tenaga pengajar praktisi industri dengan sertifikasi internasional.",
    icon: <RiStarLine />,
    color: "bg-[#1D234E]",
  },
  {
    title: "Magang Terpadu",
    desc: "Kesempatan magang di perusahaan ternama sebagai bagian kurikulum.",
    icon: <RiGroupLine />,
    color: "bg-purple-600",
  },
  {
    title: "Sertifikasi Global",
    desc: "Dapatkan sertifikasi profesi yang diakui standar internasional.",
    icon: <RiShieldStarLine />,
    color: "bg-emerald-600",
  },
  {
    title: "Biaya Fleksibel",
    desc: "Investasi kompetitif dengan skema beasiswa dan cicilan ringan.",
    icon: <RiPriceTag3Line />,
    color: "bg-rose-500",
  },
  {
    title: "Jaringan Alumni",
    desc: "Komunitas alumni kuat di berbagai sektor industri multinasional.",
    icon: <RiCommunityLine />,
    color: "bg-indigo-600",
  },
  {
    title: "Akreditasi Unggul",
    desc: "Program studi terakreditasi dengan standar kualitas tertinggi.",
    icon: <RiAwardLine />,
    color: "bg-amber-500",
  },
  {
    title: "Lokasi Strategis",
    desc: "Kampus mudah diakses dan dekat dengan pusat industri utama.",
    icon: <RiMapPinLine />,
    color: "bg-cyan-600",
  },
  {
    title: "Siap Kerja",
    desc: "Penyerapan lulusan tinggi di industri dalam waktu singkat.",
    icon: <RiRocketLine />,
    color: "bg-[#1D234E]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-12 sm:py-24 lg:py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Reason to Join</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#1D234E] leading-tight mb-4 sm:mb-6">
            Kenapa Memilih <span className="text-orange-500">Politeknik Kami?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-base sm:text-lg leading-relaxed font-medium">
            Membangun masa depan cerah melalui pendidikan vokasi berkualitas,
            siap kerja, dan berstandar internasional.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col items-center text-center h-full"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center text-3xl mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              
              <h3 className="text-lg font-black text-[#1D234E] mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
              
              {/* Highlight bar */}
              <div className={`absolute bottom-6 w-8 h-1 rounded-full ${item.color} opacity-20 group-hover:w-16 group-hover:opacity-100 transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
