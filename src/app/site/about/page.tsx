"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { 
  RiLeafLine, 
  RiLightbulbFlashLine, 
  RiTeamLine, 
  RiShieldCheckLine,
  RiPieChartLine,
  RiArrowRightLine,
  RiBuilding2Line,
  RiHonourLine
} from "react-icons/ri";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function AboutPage() {
  return (
    <main className={`${jakarta.className} min-h-screen bg-white overflow-hidden`}>
      
      {/* 1. ULTRA MODERN HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0E1333] overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F15A24]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1A2B5F]/40 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/4" />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-white"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 mb-8">
              <RiBuilding2Line className="text-[#F15A24] text-xl" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]">Tentang Institusi kami</span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black leading-[1.1] mb-8">
              Membangun <span className="text-[#F15A24]">Generasi</span> <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Digital Masa Depan</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Politeknik Prestasi Prima adalah kawah candradimuka bagi para inovator muda. Kami menggabungkan kurikulum industri dengan teknologi terkini untuk menciptakan lulusan yang tidak hanya siap kerja, tapi siap memimpin.
            </p>

            <div className="flex flex-wrap gap-4">
               <button className="bg-[#F15A24] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#F15A24]/30 hover:scale-105 transition-all">
                  Informasi Pendaftaran
               </button>
               <div className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#F15A24] flex items-center justify-center text-white shadow-xl shadow-[#F15A24]/20">
                    <RiHonourLine className="text-2xl" />
                  </div>
                  <div>
                    <div className="text-lg font-black leading-none">2023</div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mt-1">Estatblished</div>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-[550px] mx-auto">
              {/* Animated Circles */}
              <div className="absolute inset-0 border-2 border-dashed border-[#F15A24]/30 rounded-full animate-spin-slow" />
              <div className="absolute inset-8 border border-white/10 rounded-full" />
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image
                  src="/images/model2.png"
                  alt="Profile Politeknik"
                  width={600}
                  height={600}
                  className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  unoptimized
                />
              </div>

              {/* Float Tags */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-10 bg-white p-4 rounded-2xl shadow-3xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#F15A24]">
                    <RiPieChartLine className="text-xl" />
                  </div>
                  <div className="text-black">
                    <div className="text-xs font-black tracking-tight">Vokasi Digital</div>
                    <div className="text-[10px] text-gray-400 font-bold">Standard Kurikulum</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="relative z-20 -mt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Mahasiswa Aktif", val: "1000+", icon: RiTeamLine, color: "#F15A24" },
            { label: "Mitra Industri", val: "50+", icon: RiLeafLine, color: "#1A2B5F" },
            { label: "Dosen & Staff", val: "40+", icon: RiBuilding2Line, color: "#F15A24" },
            { label: "Lab Praktikum", val: "15+", icon: RiShieldCheckLine, color: "#1A2B5F" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-[#1A2B5F]/5 border border-gray-100 text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-white text-2xl" style={{ backgroundColor: stat.color }}>
                <stat.icon />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#0E1333] mb-2">{stat.val}</div>
              <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CORE PHILOSOPHY / VISI MISI - SYMMETRIC SPLIT */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Mission Section (Visual Left) */}
            <div className="flex-1 order-2 lg:order-1 relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-3xl">
                  <Image
                    src="/images/modelstudent.png"
                    alt="Visi Misi"
                    width={550}
                    height={650}
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1333] via-transparent to-transparent opacity-60" />
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#F15A24]/10 rounded-full blur-[100px]" />
            </div>

            {/* Vision & Mission Content */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="mb-14">
                <div className="inline-flex items-center gap-2 text-[#F15A24] font-black uppercase tracking-widest text-xs mb-4">
                  <span className="w-8 h-[2px] bg-[#F15A24]" />
                  Arah & Tujuan
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-[#0E1333] mb-8">Visi & Misi <br /> <span className="text-[#F15A24]">Politeknik</span></h2>
              </div>

              <div className="space-y-12">
                {/* Vision Card */}
                <div className="relative group">
                   <div className="flex gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-[1.5rem] bg-[#0E1333] text-white flex items-center justify-center text-3xl shadow-xl shadow-[#0E1333]/20">
                         <RiFocus2Line />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-[#0E1333] mb-4">Visi Utama</h4>
                        <p className="text-gray-500 leading-relaxed font-medium">
                          Menjadi politeknik vokasi terdepan yang unggul, terpercaya, dan mampu mencetak insan terampil berakhlak dengan penguasaan teknologi serta kontribusi global.
                        </p>
                      </div>
                   </div>
                </div>

                {/* Mission Wrapper */}
                <div className="bg-[#1D234E]/5 p-8 sm:p-10 rounded-[2.5rem] border border-[#1D234E]/5 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 text-[#1D234E]/5">
                      <RiLightbulbFlashLine className="text-8xl" />
                   </div>
                   <h4 className="text-xl font-black text-[#0E1333] mb-8 flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-[#F15A24]" />
                      Misi Strategis
                   </h4>
                   <ul className="space-y-6">
                      {[
                        "Menyelenggarakan pendidikan vokasi berkualitas melalui kurikulum Merdeka dan pembelajaran digital.",
                        "Menyiapkan lulusan yang kompeten untuk bersaing pada era revolusi industri 4.0.",
                        "Mendorong kreativitas, inovasi, dan jiwa kewirausahaan lulusan.",
                        "Mewujudkan tata kelola kampus yang adaptif, berkelanjutan, dan selaras dengan teknologi."
                      ].map((misi, idx) => (
                        <li key={idx} className="flex gap-4">
                           <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-black text-[#F15A24] shadow-sm">{idx+1}</div>
                           <p className="text-sm font-bold text-gray-700 leading-snug">{misi}</p>
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. STRUKTUR ORGANISASI - PREMIUM DISPLAY */}
      <section className="py-32 bg-[#F9FAFB] px-6">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 text-[#1A2B5F] font-black uppercase tracking-widest text-xs mb-4">
                Management System
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-[#0E1333] mb-6">Struktur <span className="text-[#F15A24]">Organisasi</span></h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                Komitmen kami terhadap tata kelola yang transparan dan profesional diwakili oleh struktur manajemen yang kokoh dan koordinasi antar unit yang harmonis.
              </p>
           </div>

           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative p-6 sm:p-10 md:p-16 bg-white rounded-[4rem] shadow-3xl overflow-hidden border border-gray-100"
           >
              {/* Image with zoom on hover effect */}
              <div className="relative group/org cursor-zoom-in">
                 <Image
                   src="/images/about/struktur-organisasi-poltek-presma.jpg"
                   alt="Struktur Organisasi"
                   width={1200}
                   height={800}
                   className="w-full h-auto rounded-3xl transition-transform duration-700 group-hover/org:scale-[1.02]"
                   unoptimized
                 />
                 <div className="absolute inset-0 bg-transparent group-hover/org:bg-[#0E1333]/5 transition-colors duration-500 rounded-3xl" />
                 
                 {/* Action Overlay */}
                 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl opacity-0 group-hover/org:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-xs font-black uppercase tracking-widest text-[#0E1333] flex items-center gap-3">
                       <RiFocus2Line className="text-lg text-[#F15A24]" />
                       Lihat Detail Struktur
                    </span>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 5. CTA - JOIN THE FUTURE */}
      <section className="py-40 px-6 relative overflow-hidden bg-[#0E1333]">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F15A24]/10 blur-[100px] rounded-full -translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
           >
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-tight">
                Mulai Masa Depan <br /> Di <span className="text-[#F15A24]">Poltek Kami</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
                Jangan hanya jadi penonton perubahan. Jadilah bagian dari inovasi yang kami bangun setiap harinya.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="https://wa.me/6285199328825" className="bg-[#F15A24] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#F15A24]/30 hover:scale-105 transition-transform">
                    Daftar Sekarang
                  </Link>
                  <Link href="/site/news" className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                    Berita Kampus
                  </Link>
              </div>
           </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .shadow-3xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </main>
  );
}

// Icons integration for the stat items
function RiFocus2Line(props: any) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
      <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
      <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
      <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
    </svg>
  );
}
