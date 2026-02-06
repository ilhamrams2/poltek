"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-orange-50/40 -skew-x-12 translate-x-32 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-orange-500" />
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
              Future Goal
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1D234E] leading-[1.1] mb-12">
            Visi & Misi <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              Politeknik
            </span>
          </h2>

          {/* ---- VISI (Highlight Card) ---- */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="mb-14 p-8 rounded-[2rem] bg-[#1D234E] text-white relative overflow-hidden group shadow-2xl shadow-blue-900/20"
          >
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[4rem] transition-all duration-500 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/20 rounded-tr-[3rem]" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <i className="ri-eye-2-line text-xl text-orange-400" />
                 </div>
                 <h3 className="text-xl font-bold tracking-wide">VISI KAMI</h3>
              </div>
              
              <p className="text-lg md:text-xl font-medium leading-relaxed text-white/90">
                &ldquo;Menjadi politeknik vokasi terdepan yang unggul, terpercaya, dan
                mampu mencetak insan terampil berakhlak dengan penguasaan
                teknologi serta kontribusi global.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* ---- MISI (List with Unique Numbering) ---- */}
          <div className="relative">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[3px] bg-orange-500 rounded-full" />
                <h3 className="text-2xl font-black text-[#1D234E] uppercase tracking-wide">Misi Kami</h3>
             </div>
             
             <div className="flex flex-col gap-8">
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
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex gap-6 group items-start"
                  >
                    {/* Number Circle */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-600 font-black text-lg bg-white relative z-10 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                        {i + 1}
                      </div>
                      {/* Connector Line (except for last item) */}
                      {i !== 3 && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[2px] h-14 bg-gray-100 -z-0" />
                      )}
                    </div>

                    <p className="pt-2 text-gray-600 font-medium leading-relaxed text-[15px] md:text-base group-hover:text-gray-900 transition-colors">
                      {text}
                    </p>
                  </motion.div>
               ))}
             </div>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative lg:h-full flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px]">
            {/* Creative Backdrop */}

            
            <Image
              src="/images/Model.png"
              alt="Mahasiswa Prestasi Prima"
              width={550}
              height={700}
              className="relative z-10 object-cover drop-shadow-2xl"
            />
            
            {/* Floating Card: Global Standard */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-8 bg-white/90 backdrop-blur-md shadow-2xl p-4 rounded-2xl border-l-4 border-orange-500 z-20 max-w-[180px]"
            >
               <div className="flex flex-col">
                  <span className="text-3xl font-black text-[#1D234E]">A+</span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Akreditasi Unggul</span>
               </div>
            </motion.div>

            {/* Floating Card: Career */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -right-4 bg-orange-600 shadow-2xl p-5 rounded-2xl z-20"
            >
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                    <i className="ri-briefcase-4-fill" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Siap Kerja</div>
                    <div className="text-white/80 text-[10px] uppercase">Lulusan Kompeten</div>
                  </div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
