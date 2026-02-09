"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background patterns - More Vibrant */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#FF6B00]/5 to-transparent -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute -bottom-24 right-0 w-80 h-80 bg-[#FF6B00]/5 rounded-full blur-[100px] -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24"
      >
        {/* ================= LEFT SIDE (IMAGE WITH EFFECTS) ================= */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center lg:justify-start"
        >
          <div className="relative group">
            <Image 
              src="/images/about/about.png" 
              alt="Tentang Politeknik" 
              width={600}
              height={700}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#FF6B00] to-orange-400 rounded-3xl -z-10 opacity-20 blur-2xl" />
          
          {/* Experience Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-10 -right-10 md:-right-6 lg:-right-10 z-20 bg-white p-8 rounded-[2.5rem] shadow-3xl border border-gray-50 flex items-center gap-5"
          >
             <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-[#FF6B00]/20">
                <i className="ri-shield-star-line"></i>
             </div>
             <div>
                <h4 className="text-4xl font-black text-[#020617] leading-none mb-1">10+</h4>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Tahun Berdiri</p>
             </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE (TEXT CONTENT) ================= */}
        <motion.div variants={itemVariants} className="relative z-10">
          <div className="inline-block px-5 py-2 bg-[#FF6B00]/5 border border-[#FF6B00]/10 rounded-full text-[#FF6B00] font-black text-[10px] uppercase tracking-widest mb-6">
            Kenali Kami Lebih Dekat
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-7xl font-black text-[#020617] mb-8 leading-[1.05] tracking-tighter">
            Membangun Generasi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-500">Digital Berkualitas</span>
          </h2>

          <div className="space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed font-semibold pr-4 italic border-l-4 border-[#FF6B00] pl-6">
              Politeknik Prestasi Prima adalah institusi yang berkomitmen mencetak pemimpin digital masa depan.
            </p>
            
            <p className="text-gray-500 leading-relaxed text-sm lg:text-base lg:pr-12">
              Dengan kurikulum yang selaras dengan industri global dan pengajaran oleh praktisi ahli, kami memastikan 
              setiap mahasiswa siap bersaing di era transformasi digital yang dinamis.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 items-center">
            <button className="group relative inline-flex items-center gap-4 bg-[#020617] text-white px-10 py-5 rounded-2xl shadow-xl shadow-[#020617]/20 hover:scale-[1.02] transition-all duration-300 active:scale-95 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
               <span className="relative z-10 font-black text-xs uppercase tracking-widest">Detail Kami</span>
               <i className="ri-arrow-right-line relative z-10 text-lg group-hover:translate-x-1 transition-transform"></i>
            </button>
            
            <div className="flex items-center gap-5">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-14 h-14 rounded-2xl border-4 border-white bg-gray-100 overflow-hidden shadow-lg rotate-3">
                    <img src={`https://i.pravatar.cc/150?img=${i+20}`} alt="Student" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-black text-[#020617] leading-none">1.000+</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Mahasiswa Bergabung</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
