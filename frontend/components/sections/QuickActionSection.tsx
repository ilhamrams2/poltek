"use client";

import React from "react";

export default function QuickActionSection() {
  return (
    <section className="relative py-28 mt-12">

      {/* === BACKGROUND AURORA === */}
      <div className="absolute inset-0 -z-10">
        {/* Soft Dark Base */}
        <div className="absolute inset-0 bg-[#0e162e]" />

        {/* Purple Aurora Glow */}
        <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-[#5320C0]/30 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7D42FD]/20 blur-[200px] rounded-full" />

        {/* Light Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.07] bg-[url('/images/patterns/grid.svg')] bg-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ==============================
              CARD 1 — Glass Purple
          =============================== */}
          <a
            href="#"
            className="
              group relative h-[420px] rounded-2xl p-8
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_0_30px_rgba(82,33,192,0.15)]
              transition-all duration-500
              hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(82,33,192,0.35)]
              overflow-hidden flex flex-col
            "
          >
            {/* Glow Border Animation */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#7D42FD]/50 transition-all duration-700" />

            {/* Glow Shine */}
            <div className="absolute -inset-10 opacity-0 group-hover:opacity-30 bg-[radial-gradient(circle_at_top_left,#7D42FD,transparent_60%)] transition duration-700" />

            <div className="mb-6 mt-2">
              <div className="w-20 h-20 rounded-xl bg-[#7D42FD]/20 flex items-center justify-center group-hover:scale-110 transition duration-300">
                <i className="ri-macbook-line text-white text-5xl" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 leading-snug">
              Daftar Kuliah di Politeknik Prestasi Prima Bisa dari Mana Saja
            </h3>

            <p className="text-[15px] font-medium text-white/70 mb-4 leading-relaxed">
              Banyak pilihan beasiswa sampai dengan kuliah gratis 100%
            </p>

            <span className="mt-auto text-sm text-[#7D42FD] font-semibold group-hover:underline">
              Info Beasiswa →
            </span>
          </a>

          {/* ==============================
              CARD 2 — Deep Navy + Shine
          =============================== */}
          <a
            href="#"
            className="
              group relative h-[420px] rounded-2xl p-8
              bg-[#121A36]/90 backdrop-blur-xl
              border border-white/10
              shadow-[0_0_30px_rgba(255,255,255,0.08)]
              transition-all duration-500
              hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]
              overflow-hidden flex flex-col
            "
          >
            {/* Shine Border */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/30 transition-all duration-700" />

            {/* Glow */}
            <div className="absolute -inset-10 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_60%)] transition duration-700" />

            <div className="mb-6 mt-2">
              <div className="w-20 h-20 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition duration-300">
                <i className="ri-wallet-line text-white text-5xl" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 leading-snug">
              Kuliah di Politeknik Prestasi Prima Tidak Mahal
            </h3>

            <p className="text-[15px] font-medium text-white/70 mb-4 leading-relaxed">
              Cek biaya perkuliahan disini
            </p>

            <span className="mt-auto text-sm text-white/90 font-semibold group-hover:underline">
              Info Biaya Kuliah →
            </span>
          </a>

          {/* ==============================
              CARD 3 — Orange Premium
          =============================== */}
          <a
            href="#"
            className="
              group relative h-[420px] rounded-2xl p-8
              bg-gradient-to-br from-[#FF7700] to-[#FF8F2A]
              text-white shadow-lg backdrop-blur-xl
              transition-all duration-500
              hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(255,119,0,0.45)]
              overflow-hidden flex flex-col
            "
          >
            {/* Diagonal Shine */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-25 bg-linear-to-br from-white/30 to-transparent transition duration-700" />

            <div className="mb-6 mt-2">
              <div className="w-20 h-20 rounded-xl bg-black/20 flex items-center justify-center group-hover:scale-110 transition duration-300">
                <i className="ri-file-text-line text-white text-5xl" />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 leading-snug">
              Sudah Siap Daftar Kuliah di Politeknik Prestasi Prima?
            </h3>

            <p className="text-[15px] font-medium text-white/90 mb-4 leading-relaxed">
              Klik tombol di bawah ini untuk melakukan pendaftaran online
            </p>

            <span className="mt-auto text-sm font-semibold group-hover:underline">
              Info PMB Prestasi Prima →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
