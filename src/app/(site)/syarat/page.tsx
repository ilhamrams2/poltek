"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RiFileTextLine, 
  RiUserLine, 
  RiVerifiedBadgeLine, 
  RiInformationLine,
  RiCheckDoubleLine,
  RiDownloadLine,
  RiGhostLine,
  RiNavigationLine,
  RiShieldCheckLine
} from "react-icons/ri";

export default function SyaratPendaftaranPage() {
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Identitas Utama",
      subtitle: "Personal Foundation",
      items: [
        "Warga Negara Indonesia (WNI).",
        "Lulusan SMA/SMK/MA sederajat sekelas.",
        "Sehat jasmani, rohani & bebas narkoba.",
        "Berkelakuan baik (Tanpa catatan kriminal)."
      ],
      icon: <RiUserLine />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Administrasi Digital",
      subtitle: "Cloud Validation",
      items: [
        "Fotokopi Ijazah & Transkrip (Legalisiir).",
        "Fotokopi KTP / Kartu Pelajar & KK.",
        "Pas Foto 3x4 & 4x6 (Back. Merah/Biru).",
        "SKCK Aktif & Surat Keterangan Sehat."
      ],
      icon: <RiFileTextLine />,
      color: "from-brand-orange to-red-500"
    },
    {
      id: 3,
      title: "Jalur Unggulan",
      subtitle: "Elite Achievement",
      items: [
        "Sertifikat Prestasi (Min. Tingkat Kota).",
        "Rapor Semester 1-5 (Nilai Rata-rata 80).",
        "Surat Keterangan Tidak Mampu (Subsidi).",
        "Tes Online & Wawancara Khusus."
      ],
      icon: <RiVerifiedBadgeLine />,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <main className="min-h-screen bg-[#02040a] text-white">
      {/* Background Ornaments */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#F15A2410,transparent_50%)]" />
        <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] bg-blue-600/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-brand-orange/5 blur-[100px] rounded-full" />
      </div>

      {/* Hero Header */}
      <section className="relative pt-40 pb-24 px-6 z-10 text-center overflow-hidden">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-3xl mb-12">
            <RiShieldCheckLine className="text-brand-orange animate-bounce" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Institutional Protocol 2026/2027</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            REKAYASA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">MASA DEPAN</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed italic">
            "Persyaratan bukan sekadar dokumen, melainkan bukti kesiapan Anda memasuki ekosistem digital kelas dunia."
          </p>
        </motion.div>
      </section>

      {/* Interactive Step Explorer */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              onMouseEnter={() => setHoveredCircle(step.id)}
              onMouseLeave={() => setHoveredCircle(null)}
              className="relative group h-full"
            >
              {/* Card Container */}
              <div className="relative z-20 h-full p-10 md:p-14 bg-white/[0.02] border border-white/5 backdrop-blur-3xl rounded-[4rem] flex flex-col items-start transition-all duration-700 group-hover:bg-white/[0.04] group-hover:border-white/10 group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                
                {/* ID Indicator */}
                <div className="absolute top-10 right-10 text-8xl font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none select-none">
                  0{step.id}
                </div>

                <div className={`w-24 h-24 rounded-[2.5rem] bg-gradient-to-br ${step.color} flex items-center justify-center text-4xl mb-12 shadow-2xl transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-110`}>
                  {step.icon}
                </div>

                <div className="mb-10">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-orange mb-3 group-hover:tracking-[0.6em] transition-all">{step.subtitle}</h5>
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">{step.title}</h2>
                </div>

                <ul className="space-y-6 flex-grow w-full">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-lg bg-orange-500/10 text-brand-orange group-hover/item:bg-brand-orange group-hover/item:text-white transition-all">
                        <RiCheckDoubleLine size={14} />
                      </div>
                      <span className="text-gray-400 font-semibold text-[15px] leading-relaxed group-hover/item:text-gray-200 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-16 w-full pt-10 border-t border-white/5 flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Status Dokumen</span>
                      <span className="text-[11px] font-bold text-emerald-500 group-hover:animate-pulse">Mandatory</span>
                   </div>
                   <RiNavigationLine className="text-2xl text-gray-600 group-hover:text-brand-orange transition-colors" />
                </div>
              </div>

              {/* Decorative Circle Background */}
              <div className={`absolute inset-0 z-10 transition-all duration-1000 blur-[80px] rounded-full bg-gradient-to-br ${step.color} ${hoveredCircle === step.id ? 'opacity-20 scale-125' : 'opacity-0 scale-50'}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section - Redesigned for Impact */}
      <section className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="relative p-12 md:p-24 rounded-[4rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 overflow-hidden group shadow-3xl">
           {/* Dynamic Background elements specific to CTA */}
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/20 blur-[100px] rounded-full group-hover:bg-brand-orange/30 transition-all duration-1000" />
           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all duration-1000" />
           
           <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-brand-orange mb-6">Take the Next Step</span>
                
                <h3 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase mb-8 leading-[1.1] md:leading-[1] tracking-tighter italic py-2">
                  SEMUA MULAI <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-white pb-2">DENGAN BERKAS LENGKAP</span>
                </h3>

                <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
                  Pastikan langkah Anda tidak terhambat. Unduh panduan resmi pengumpulan berkas atau konsultasikan melalui tim admisi kami.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <motion.a 
                    href="/Brosur.pdf" 
                    download 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl hover:shadow-brand-orange/20"
                  >
                    Download Manual <RiDownloadLine className="text-2xl" />
                  </motion.a>
                  
                  <motion.a 
                    href="https://wa.me/6281380008079" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-md"
                  >
                    Konsultasi Berkala <RiNavigationLine className="rotate-45 text-2xl" />
                  </motion.a>
                </div>
              </motion.div>
           </div>

           {/* Animated Background Icon */}
           <RiShieldCheckLine className="absolute -bottom-20 -right-20 text-[20rem] text-white/[0.02] rotate-12 group-hover:rotate-0 transition-transform duration-[2000ms] pointer-events-none" />
        </div>
      </section>

      <footer className="py-20 text-center text-gray-700 font-bold text-[10px] uppercase tracking-widest border-t border-white/[0.02] relative z-10">
        © {new Date().getFullYear()} Politeknik Prestasi Prima – Secure Academic Registration
      </footer>

      {/* Custom Styles for Glow Effects */}
      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </main>
  );
}
