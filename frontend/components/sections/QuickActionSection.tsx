"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function QuickActionSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6 mt-12 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* === CARD 1 === */}
        <motion.a
          href="/site/program"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{ y: -12, transition: { duration: 0.3 } }}
          className="
            group relative h-[420px] rounded-[2rem] p-9 bg-white/90 backdrop-blur-xl
            border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
            overflow-hidden flex flex-col transition-shadow hover:shadow-[0_20px_50px_rgba(29,35,78,0.1)]
          "
        >
          {/* Highlight Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute -inset-[100%] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
          </div>

          <div className="mb-8">
            <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 shadow-sm group-hover:shadow-blue-200">
              <i className="ri-macbook-line text-[#1D234E] text-4xl group-hover:text-white transition-colors duration-500" />
            </div>
          </div>

          <h3 className="text-2xl font-black text-[#1D234E] mb-4 leading-[1.2]">
            Daftar Kuliah Bisa Dari Mana Saja
          </h3>

          <p className="text-zinc-500 font-medium leading-relaxed mb-6">
            Banyak pilihan beasiswa menarik sampai dengan beasiswa kuliah gratis 100%. Daftarkan dirimu sekarang!
          </p>

          <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all uppercase tracking-tighter text-sm">
            Info Lengkap <i className="ri-arrow-right-line text-lg" />
          </div>

          {/* Abstract background shape */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
        </motion.a>

        {/* === CARD 2 === */}
        <motion.a
          href="#"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{ y: -12, transition: { duration: 0.3 } }}
          className="
            group relative h-[420px] rounded-[2rem] p-9
            bg-[#1D234E] text-white shadow-2xl shadow-blue-900/20
            overflow-hidden flex flex-col
          "
        >
          {/* Moving Gradient Light */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_50%)] transition-opacity duration-700" />
          
          <div className="mb-8">
            <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-500 shadow-sm">
              <i className="ri-wallet-line text-white text-4xl" />
            </div>
          </div>

          <h3 className="text-2xl font-black mb-4 leading-[1.2]">
            Kuliah Berkualitas Tidak Harus Mahal
          </h3>

          <p className="text-white/70 font-medium leading-relaxed mb-6">
            Cek rincian biaya perkuliahan dan skema pembayaran yang fleksibel sesuai kebutuhanmu.
          </p>

          <div className="mt-auto flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all uppercase tracking-tighter text-sm">
            Rincian Biaya <i className="ri-arrow-right-line text-lg" />
          </div>
          
          {/* Abstract background shape */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
        </motion.a>

        {/* === CARD 3 === */}
        <motion.a
          href="/site/program"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{ y: -12, transition: { duration: 0.3 } }}
          className="
            group relative h-[420px] rounded-[2rem] p-9
            bg-linear-to-br from-[#ff7a00] to-[#ffb36b]
            text-white shadow-2xl shadow-orange-500/20
            overflow-hidden flex flex-col
          "
        >
          <div className="mb-8">
            <div className="w-20 h-20 rounded-3xl bg-black/10 flex items-center justify-center group-hover:bg-[#1D234E] transition-colors duration-500 shadow-sm">
              <i className="ri-file-text-line text-white text-4xl" />
            </div>
          </div>

          <h3 className="text-2xl font-black mb-4 leading-[1.2]">
            Sudah Siap Gabung Bersama Kami?
          </h3>

          <p className="text-white/90 font-medium leading-relaxed mb-6">
            Klik tombol di bawah untuk memulai proses pendaftaran online yang cepat dan mudah.
          </p>

          <div className="mt-auto flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all uppercase tracking-tighter text-sm">
            Daftar Sekarang <i className="ri-arrow-right-line text-lg" />
          </div>

          {/* Abstract background shape */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
        </motion.a>
      </div>
    </section>
  );
}
