"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-50/30 to-transparent -z-10" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
        {/* ================= LEFT SIDE (IMAGE WITH EFFECTS) ================= */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center lg:justify-start"
        >
          <div className="relative group">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border-2 border-orange-100 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 -z-10" />
            <div className="absolute -inset-4 border-2 border-blue-100 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-700 -z-20" />
            
            <Image
              src="/images/about/about.png"
              alt="Tentang Politeknik"
              width={520}
              height={600}
              className="object-contain drop-shadow-2xl group-hover:scale-[1.02] transition-transform duration-700"
              priority
            />

            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:right-0 bg-white shadow-2xl rounded-2xl p-6 border border-gray-100 z-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                  !
                </div>
                <div>
                  <div className="text-2xl font-black text-[#1D234E]">Terbaik</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Akreditasi Kampus</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE (TEXT CONTENT) ================= */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="inline-block px-4 py-2 bg-orange-50 border border-orange-100 rounded-full text-orange-600 font-bold text-xs uppercase tracking-widest mb-6">
            Kenali Kami Lebih Dekat
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1D234E] mb-8 leading-[1.1]">
            Membangun Generasi <br />
            <span className="text-orange-600">Digital Berkualitas</span>
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Politeknik Prestasi Prima adalah lembaga pendidikan yang berkomitmen mencetak generasi unggul,
              kreatif, dan siap menghadapi tantangan masa depan di era transformasi digital.
            </p>
            
            <p className="text-gray-500 leading-relaxed">
              Dengan dukungan tenaga pendidik profesional dari praktisi industri serta fasilitas laboratorium modern, 
              kami menghadirkan pengalaman belajar berbasis praktik nyata yang selaras dengan kebutuhan dunia kerja global.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <button className="group inline-flex items-center gap-4 bg-[#1D234E] text-white px-8 py-4 rounded-2xl shadow-xl shadow-blue-900/20 hover:bg-orange-600 transition-all duration-300 hover:-translate-y-1">
              <span className="font-bold">Selengkapnya</span>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <i className="ri-arrow-right-line"></i>
              </div>
            </button>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-black text-[#1D234E]">1000+ Students</div>
                <div className="text-xs font-bold text-gray-400">Join our community</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
