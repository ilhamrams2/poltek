"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function DirectorMessageSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const titleWords = "Mempersiapkan Generasi Digital Masa Depan".split(" ");

  return (
    <section className="relative py-12 sm:py-24 lg:py-32 overflow-hidden bg-[#020617]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B00]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* === IMAGE SIDE === */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "0px" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-[#0A1128] w-full max-w-[500px] mx-auto lg:max-w-full">
              <Image 
                src="/images/direktur.png" 
                alt="Direktur Politeknik" 
                width={600} 
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 brightness-110 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A1F] via-transparent to-transparent opacity-40" />
            </div>
            
          </motion.div>

          {/* === TEXT SIDE === */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
              <span className="text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.2em]">Sambutan Direktur Utama</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-black text-white leading-[1.05] tracking-tight">
              {titleWords.map((word, i) => (
                <span key={i} className="inline-block mr-[0.2em]">
                  {word === "Digital" || word === "Masa" || word === "Depan" ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400 drop-shadow-[0_5px_15px_rgba(255,107,0,0.2)]">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </motion.h2>

            <motion.div variants={itemVariants} className="relative">
              <RiDoubleQuotesR className="absolute -top-8 sm:-top-12 -left-4 sm:-left-12 text-[6rem] sm:text-[12rem] text-white/5 pointer-events-none" />
              <div className="space-y-6 text-gray-300 text-lg lg:text-xl leading-relaxed font-medium relative z-10">
                <p className="italic border-l-4 border-[#FF6B00] pl-6 py-2 bg-white/[0.02] rounded-r-2xl">
                  &ldquo;Selamat datang di Politeknik Prestasi Prima. Kami berkomitmen untuk menyelenggarakan pendidikan vokasi 
                  yang tidak hanya fokus pada teori, tetapi menitikberatkan pada penguasaan teknologi terkini.&rdquo;
                </p>
                <p className="opacity-80">
                  Melalui kolaborasi erat dengan sektor industri dan kurikulum yang adaptif, kami memastikan setiap 
                  lulusan memiliki daya saing tinggi, mentalitas inovatif, serta integritas profesional.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 border-t border-white/10">
              <div className="flex flex-col text-center sm:text-left">
                <p className="text-white font-black text-xl sm:text-2xl tracking-tighter">Dr. Wannen Pakpahan, MM.</p>
                <div className="flex items-center justify-center sm:justify-start gap-3 mt-1">
                  <div className="h-[2px] w-8 bg-[#FF6B00]" />
                  <p className="text-[#FF6B00] font-black text-[11px] tracking-[0.3em] uppercase">Direktur Utama</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/10" />
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10"
              >
                <Image 
                  src="/images/logo_politeknik.png" 
                  alt="Logo" 
                  width={60} 
                  height={60} 
                  className=""
                />
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
