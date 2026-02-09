"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function VisionMissionSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
      
      {/* Background patterns - More Energetic */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-orange-50/50 -skew-x-12 translate-x-32 -z-10" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
      >
        {/* ================= LEFT CONTENT ================= */}
        <motion.div variants={itemVariants}>
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[3px] w-12 bg-[#FF6B00] rounded-full" />
            <span className="text-[#FF6B00] font-black uppercase tracking-[0.3em] text-[10px]">
              Visi & Misi Kami
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-7xl font-black text-[#020617] leading-[1.05] mb-12 tracking-tighter">
            Target <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-500">
              Masa Depan
            </span>
          </h2>

          {/* ---- VISI (Highlight Card) ---- */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="mb-14 p-10 rounded-[2.5rem] bg-[#050A1F] text-white relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(5,10,31,0.4)]"
          >
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[4rem] transition-all duration-500 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FF6B00]/20 rounded-tr-[3rem]" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#FF6B00]/30 transition-colors">
                    <i className="ri-eye-2-line text-2xl text-[#FF6B00]" />
                 </div>
                 <h3 className="text-xs font-black tracking-[0.2em] uppercase text-white/50">Visi Institusi</h3>
              </div>
              
              <p className="text-xl lg:text-2xl font-black leading-tight text-white italic">
                &ldquo;Menjadi politeknik vokasi terdepan yang unggul, terpercaya, dan
                mampu mencetak insan terampil berakhlak dengan penguasaan
                teknologi serta kontribusi global.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* ---- MISI (List) ---- */}
          <div className="space-y-8">
             {[
               "Menyelenggarakan pendidikan vokasi yang berkualitas melalui kurikulum Merdeka dan pembelajaran digital.",
               "Menyiapkan lulusan yang kompeten dan mampu bersaing pada era revolusi industri 4.0.",
               "Mendorong kreativitas, inovasi, dan jiwa kewirausahaan bagi seluruh sivitas akademika.",
               "Mewujudkan tata kelola kampus yang adaptif, transparan, dan berkelanjutan."
             ].map((text, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="flex gap-6 group items-center"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl border-2 border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] font-black text-lg bg-white group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 shadow-xl shadow-[#FF6B00]/10">
                    {i + 1}
                  </div>
                  <p className="text-gray-600 font-bold leading-relaxed text-sm md:text-base group-hover:text-[#020617] transition-colors">
                    {text}
                  </p>
                </motion.div>
             ))}
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div 
          variants={itemVariants}
          className="relative lg:h-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-[500px]">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-3xl bg-[#050A1F]/5 p-4 border border-gray-100">
               <Image
                 src="/images/Model.png"
                 alt="Mahasiswa Prestasi Prima"
                 width={550}
                 height={700}
                 className="relative z-10 object-cover brightness-105 contrast-105"
               />
            </div>
            
            {/* Floating Card: Global Standard */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-10 bg-white shadow-3xl p-6 rounded-[2rem] border-l-4 border-[#FF6B00] z-20"
            >
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-[#020617]">A+</span>
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mt-1">Akreditasi Unggul</span>
               </div>
            </motion.div>

            {/* Floating Card: Career */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-8 bg-gradient-to-br from-[#FF6B00] to-orange-500 shadow-3xl p-6 rounded-[2rem] z-20"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm">
                    <i className="ri-briefcase-4-fill text-xl" />
                  </div>
                  <div>
                    <div className="text-white font-black text-sm leading-none">Siap Kerja</div>
                    <div className="text-white/70 text-[9px] font-black uppercase tracking-widest mt-1">Industri Ready</div>
                  </div>
               </div>
            </motion.div>

            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FF6B00]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
