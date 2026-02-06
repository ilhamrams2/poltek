"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          {/* Title */}
          <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-900 font-bold text-xs uppercase tracking-widest mb-6">
            Future Goals
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#1A1A1A] leading-[1.1] mb-12">
            Visi & Misi <br />
            <span className="text-[#ff7a00]">Politeknik</span>
          </h2>

          {/* ---- VISI ---- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#1D234E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="12" r="8" />
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                </svg>
              </div>

              <h3 className="text-2xl font-black text-[#1A1A1A]">
                Visi Politeknik
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              Menjadi politeknik vokasi terdepan yang unggul, terpercaya, dan
              mampu mencetak insan terampil berakhlak dengan penguasaan
              teknologi serta kontribusi global.
            </p>
            
            <div className="absolute top-4 right-4 text-blue-900/5 text-6xl font-black select-none group-hover:text-orange-500/10 transition-colors">01</div>
          </motion.div>

          {/* ---- MISI ---- */}
          <div className="space-y-4">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[2px] bg-orange-500" />
                <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-widest">Misi Kami</h3>
             </div>
             
             {[
               "Menyelenggarakan pendidikan vokasi yang berkualitas melalui kurikulum Merdeka, pembelajaran digital, serta integrasi teori.",
               "Menyiapkan lulusan yang kompeten dan mampu bersaing pada era revolusi industri 4.0 dan globalisasi.",
               "Mendorong kreativitas, inovasi, dan jiwa kewirausahaan agar lulusan mampu menciptakan solusi baru.",
               "Mewujudkan tata kelola kampus adaptif, berkelanjutan, dan selaras dengan perkembangan teknologi."
             ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-6 rounded-2xl hover:bg-gray-50/80 transition-colors group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-600 font-black text-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed">{text}</p>
                </motion.div>
             ))}
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Background Blob */}
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-[100px] opacity-10 animate-pulse" />
            
            <Image
              src="/images/Model.png"
              alt="Visi Misi Politeknik"
              width={500}
              height={600}
              className="relative z-10 object-contain drop-shadow-2xl"
            />
            
            {/* Floating Tags */}
            <motion.div 
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-10 -left-10 bg-white shadow-2xl rounded-2xl py-3 px-6 z-20"
            >
               <span className="text-[#1D234E] font-black text-sm">Industrial Standard</span>
            </motion.div>
            
            <motion.div 
              animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 -right-6 bg-orange-600 shadow-2xl rounded-2xl py-3 px-6 z-20"
            >
               <span className="text-white font-black text-sm">Global Career</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
