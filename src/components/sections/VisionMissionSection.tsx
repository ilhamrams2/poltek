"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  RiEye2Line, 
  RiBriefcase4Fill, 
  RiShieldCheckLine, 
  RiGlobalLine, 
  RiLightbulbLine, 
  RiSettings4Line,
  RiArrowRightSLine
} from "react-icons/ri";

export default function VisionMissionSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const listContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const floatingCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "backOut" }
    }
  };

  const missions = [
    { text: "Menyelenggarakan pendidikan vokasi yang berkualitas melalui kurikulum Merdeka dan pembelajaran digital.", icon: RiShieldCheckLine },
    { text: "Menyiapkan lulusan yang kompeten dan mampu bersaing pada era revolusi industri 4.0.", icon: RiGlobalLine },
    { text: "Mendorong kreativitas, inovasi, dan jiwa kewirausahaan bagi seluruh sivitas akademika.", icon: RiLightbulbLine },
    { text: "Mewujudkan tata kelola kampus yang adaptif, transparan, dan berkelanjutan.", icon: RiSettings4Line }
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      
      {/* Background patterns - More Energetic */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-orange/5 -skew-x-12 translate-x-32 -z-10" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-20 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px] -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col">
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="h-[3px] w-12 bg-brand-orange rounded-full" />
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs">
              Visi & Misi Kami
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-black text-brand-dark leading-[1.05] mb-10 sm:mb-12 tracking-tighter">
            Target <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-500">
              Masa Depan
            </span>
          </motion.h2>

          {/* ---- VISI (Highlight Card) ---- */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="mb-12 p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-brand-dark text-white relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(5,10,31,0.4)]"
          >
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-[5rem] transition-all duration-700 group-hover:scale-110 group-hover:bg-white/10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-orange/20 rounded-tr-[4rem] blur-xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-orange/50 group-hover:bg-brand-orange/10 transition-all duration-300">
                    <RiEye2Line className="text-3xl text-brand-orange" />
                 </div>
                 <div>
                   <h3 className="text-xs font-black tracking-[0.2em] uppercase text-white/50 mb-1">Visi Institusi</h3>
                   <div className="h-[2px] w-12 bg-brand-orange/50" />
                 </div>
              </div>
              
              <p className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight text-white/95 italic">
                &ldquo;Menjadi politeknik vokasi terdepan yang unggul, terpercaya, dan
                mampu mencetak insan terampil berakhlak dengan teknologi.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* ---- MISI (List) ---- */}
          <motion.div 
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
             {missions.map((item, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 group items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl border-2 border-brand-orange/20 flex items-center justify-center text-brand-orange bg-white group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-orange/5 mt-1">
                    <item.icon className="text-xl transition-transform group-hover:scale-110" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-brand-dark font-bold text-base sm:text-lg leading-relaxed group-hover:text-brand-orange transition-colors">
                      {item.text}
                    </h4>
                  </div>
                </motion.div>
             ))}
          </motion.div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative lg:h-full w-full flex items-center justify-center mt-10 lg:mt-0">
          <motion.div 
            variants={itemVariants} 
            className="relative w-full max-w-[500px]"
          >
            <div className="relative z-10 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-brand-dark/5 p-3 sm:p-4 border border-gray-100">
               <Image
                 src="/images/Model.png"
                 alt="Mahasiswa Prestasi Prima"
                 width={550}
                 height={700}
                 className="relative z-10 object-cover brightness-105 contrast-105 w-full h-auto rounded-[2rem] sm:rounded-[2.5rem]"
               />
            </div>
            
            {/* Floating Card: Global Standard */}
            <motion.div 
              variants={floatingCardVariants}
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-8 sm:top-16 -left-2 sm:-left-8 bg-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border-l-4 border-brand-orange z-20"
            >
               <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-black text-brand-dark">A+</span>
                  <span className="text-[8px] sm:text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mt-1">Akreditasi Unggul</span>
               </div>
            </motion.div>

            {/* Floating Card: Career */}
            <motion.div 
              variants={floatingCardVariants}
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              className="absolute bottom-8 sm:bottom-16 -right-2 sm:-right-8 bg-brand-orange shadow-[0_20px_50px_-10px_rgba(244,121,32,0.3)] p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] z-20"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm border border-white/20">
                    <RiBriefcase4Fill className="text-xl" />
                  </div>
                  <div>
                    <div className="text-white font-black text-sm leading-none">Siap Kerja</div>
                    <div className="text-white/80 text-[8px] font-black uppercase tracking-widest mt-1">Industri Ready</div>
                  </div>
               </div>
            </motion.div>

            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
