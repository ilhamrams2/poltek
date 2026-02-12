"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RiWallet3Line, 
  RiCheckLine, 
  RiInformationLine, 
  RiWhatsappLine, 
  RiBankCardLine,
  RiCopperCoinLine,
  RiArrowRightUpLine,
  RiSparklingLine,
  RiTShirtLine,
  RiCalculatorLine
} from "react-icons/ri";

export default function BiayaKuliahPage() {
  const [activeTab, setActiveTab] = useState("reguler");

  const fees = {
    reguler: [
      {
        title: "Biaya Pendaftaran",
        price: "Rp 200.000",
        period: "Sekali Bayar",
        description: "Biaya administrasi awal untuk pendaftaran mahasiswa baru Politeknik Prestasi Prima.",
        features: ["Proses Cepat", "Konsultasi Jurusan", "Jas Almamater"],
        icon: <RiBankCardLine />,
        accent: "from-blue-500 to-indigo-600"
      },
      {
        title: "Pengembangan (G1)",
        price: "Rp 2.000.000",
        period: "Investasi Sekali",
        description: "Biaya Pengembangan Sarana Prasarana (PSP) dengan subsidi khusus Gelombang 1.",
        features: ["Discount 80%", "Dapat Dicicil 2x", "Akses Fasilitas Camas"],
        icon: <RiSparklingLine />,
        accent: "from-orange-500 to-brand-orange",
        popular: true
      },
      {
        title: "Biaya Kuliah",
        price: "Rp 500.000",
        period: "Per Bulan",
        description: "Biaya kuliah tetap bulanan. Bisa juga dibayar sekaligus per semester di awal.",
        features: ["Include SKS", "Flat Rate", "Praktikum Berbasis Proyek"],
        icon: <RiCopperCoinLine />,
        accent: "from-emerald-500 to-teal-600"
      },
    ],
    kemahasiswaan: [
       {
        title: "Kemahasiswaan",
        price: "Rp 1.500.000",
        period: "Sekali Selamanya",
        description: "Mencakup Jaket Almamater, Orientasi Akademik, dan Kartu Mahasiswa.",
        features: ["Hanya 1x Bayar", "Bisa Dicicil 2x", "Paket Atribut Lengkap"],
        icon: <RiTShirtLine />,
        accent: "from-purple-500 to-pink-600",
        popular: true
      },
      {
        title: "UTS & UAS",
        price: "Rp 25.000",
        period: "Per SKS",
        description: "Biaya operasional untuk pelaksanaan Ujian Tengah Semester & Ujian Akhir Semester.",
        features: ["Berbasis Digital", "Transparansi Nilai", "Laporan Hasil Studi"],
        icon: <RiCalculatorLine />,
        accent: "from-amber-500 to-orange-400"
      },
    ]
  };

  const gelombangData = [
    { name: "Gelombang 1", price: "Rp 2.000.000", discount: "80%" },
    { name: "Gelombang 2", price: "Rp 2.500.000", discount: "75%" },
    { name: "Gelombang 3", price: "Rp 3.000.000", discount: "70%" },
    { name: "Gelombang 4", price: "Rp 3.500.000", discount: "65%" },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand-orange/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03] bg-repeat" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Update Biaya Akademik 2026/2027</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tighter">
              Rincian <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-white">Pembiayaan</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Pendidikan berkualitas yang terjangkau. Fokus pada pertumbuhan kompetensi tanpa kendala biaya.
            </p>
          </motion.div>

          {/* Interactive Toggle */}
          <div className="mt-16 inline-flex p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem]">
            <button 
              onClick={() => setActiveTab("reguler")}
              className={`px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 ${activeTab === "reguler" ? "bg-brand-orange text-white shadow-xl shadow-brand-orange/20 scale-105" : "text-gray-500 hover:text-white"}`}
            >
              Komponen Utama
            </button>
            <button 
              onClick={() => setActiveTab("beasiswa")}
              className={`px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 ${activeTab === "beasiswa" ? "bg-brand-orange text-white shadow-xl shadow-brand-orange/20 scale-105" : "text-gray-500 hover:text-white"}`}
            >
              Biaya Ops & Lainnya
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-10 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {(activeTab === "reguler" ? fees.reguler : fees.kemahasiswaan).map((fee, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "backOut" }}
                className={`relative group p-10 rounded-[3rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 flex flex-col items-start overflow-hidden ${fee.popular ? "ring-2 ring-brand-orange/50" : ""}`}
              >
                {/* Visual Flair */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${fee.accent}`} />
                <div className={`absolute -right-20 -top-20 w-64 h-64 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none rounded-full bg-gradient-to-br ${fee.accent}`} />

                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 text-white text-4xl shadow-2xl bg-gradient-to-br ${fee.accent}`}>
                  {fee.icon}
                </div>

                <div className="mb-8">
                  <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.4em] mb-2">{fee.period}</h3>
                  <div className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-2">{fee.price}</div>
                  <h4 className="text-2xl font-bold text-gray-200">{fee.title}</h4>
                </div>

                <p className="text-gray-400 font-medium mb-10 leading-relaxed text-[15px]">
                  {fee.description}
                </p>

                <ul className="space-y-4 mb-12 w-full">
                  {fee.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-300">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-brand-orange`}>
                        <RiCheckLine />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`mt-auto w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest transition-all duration-300 ${fee.popular ? "bg-brand-orange text-white hover:bg-orange-600" : "bg-white/5 text-white border border-white/10 hover:bg-white/10"}`}>
                  Detail Pembayaran <RiArrowRightUpLine className="text-xl" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Gelombang Discount Table Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="p-12 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-black mb-6 leading-tight">Subsidi <br/><span className="text-brand-orange">Pengembangan</span> (PSP)</h2>
              <p className="text-gray-400 font-medium">Investasi pengembangan sarana prasarana sebesar Rp 10.000.000 menjadi lebih ringan dengan skema benefit gelombang pendaftaran.</p>
              <div className="mt-8 p-6 rounded-3xl bg-white/5 border border-white/10">
                 <p className="text-xs font-bold uppercase tracking-widest text-[#53C79F]">Fleksibilitas</p>
                 <p className="text-gray-400 text-sm mt-2 font-medium">Bisa dicicil 2x setiap semester untuk setiap gelombang.</p>
              </div>
            </div>
            
            <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
               {gelombangData.map((g, i) => (
                 <div key={i} className="group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-brand-orange/50 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 bg-brand-orange/20 text-brand-orange text-[10px] font-black uppercase rounded-bl-3xl">
                       Save {g.discount}
                    </div>
                    <h5 className="text-gray-500 font-black text-[10px] uppercase tracking-widest mb-2">{g.name}</h5>
                    <div className="text-3xl font-black text-white">{g.price}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
               Metode <br />
               <span className="text-brand-orange">Pembayaran</span> Fleksibel
             </h2>
             <p className="text-gray-400 text-lg font-medium leading-relaxed mb-12">
               Biaya Kuliah (SPP) juga dapat dibayar sekaligus per semester di awal untuk kemudahan administrasi.
             </p>
             
             <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Transfer Bank", sub: "Virtual Account" },
                  { label: "Cicilan Flat", sub: "Tanpa Bunga" },
                  { label: "E-Wallet", sub: "QRIS All Payment" },
                  { label: "Tunai", sub: "Admissions Center" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                    <h5 className="text-white font-black text-xs uppercase mb-1 tracking-widest">{item.label}</h5>
                    <p className="text-gray-500 text-[10px] font-bold uppercase">{item.sub}</p>
                  </div>
                ))}
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 bg-gradient-to-br from-brand-orange to-red-600 rounded-[4rem] text-white shadow-3xl shadow-brand-orange/20 relative overflow-hidden"
          >
             <RiInformationLine className="absolute -bottom-10 -right-10 text-[20rem] opacity-5 pointer-events-none" />
             <h3 className="text-4xl font-black mb-8 leading-tight">Punya Pertanyaan Mengenai Sistem Cicilan?</h3>
             <p className="text-white/80 font-semibold text-lg mb-12">
               Tim keuangan kami siap menjelaskan rincian angsuran per semester untuk membantu rencana studi Anda.
             </p>
             <a 
               href="https://wa.me/6281380008079"
               className="inline-flex items-center gap-4 bg-white text-brand-orange px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
             >
               Konsultasi Keuangan <RiWhatsappLine className="text-2xl" />
             </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
