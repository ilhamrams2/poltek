"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProgramRPLPage() {
  const faqs = [
    {
      q: "Bagaimana cara mendaftar ke Politeknik Prestasi Prima?",
      a: "Calon mahasiswa dapat mendaftar melalui website resmi atau datang langsung ke kampus untuk pendaftaran offline. Pastikan melengkapi semua berkas yang diminta.",
    },
    {
      q: "Apa syarat pendaftaran mahasiswa baru?",
      a: "Syarat umum meliputi ijazah SMA/SMK sederajat, identitas diri, pas foto, dan dokumen pendukung lain sesuai ketentuan masing-masing program studi.",
    },
    {
      q: "Program studi apa saja yang tersedia di Poltek Presma?",
      a: "Terdapat program vokasi D3/D4, termasuk Rekayasa Perangkat Lunak, Bisnis Digital, Multimedia, dan program lain sesuai pengumuman resmi.",
    },
    {
      q: "Apakah ada beasiswa?",
      a: "Ya; tersedia beasiswa prestasi dan bantuan lain. Informasi lengkap dapat dilihat pada halaman beasiswa atau menghubungi bagian kemahasiswaan.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="rounded-3xl overflow-hidden relative shadow-lg">
          <div className="w-full h-[320px] md:h-[520px] relative">
            <Image
              src="/images/hero/program-rpl-hero.jpg"
              alt="Program RPL Hero"
              fill
              className="object-cover"
              priority
            />
            {/* subtle overlay */}
            <div className="absolute inset-0 bg-black/35"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl">
                Diploma III — <span className="text-[#F15A24]">Rekayasa Perangkat Lunak</span>
              </h1>

              <p className="text-gray-100 mt-4 max-w-2xl text-sm md:text-base">
                Program vokasi yang mempersiapkan profesional muda menjadi software engineer handal
                melalui pembelajaran praktis, project-based learning, dan kurikulum industri.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="#about-program"
                  className="inline-block bg-[#F15A24] text-white px-5 py-2 rounded-md font-medium shadow hover:brightness-90 transition"
                >
                  Pelajari Lebih Lanjut
                </a>
                <a
                  href="#virtual-tour"
                  className="inline-block bg-white text-[#1A2B5F] px-5 py-2 rounded-md font-medium shadow hover:opacity-90 transition"
                >
                  Virtual Tour Lab
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PROGRAM */}
      <section id="about-program" className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A2B5F]">
              Tentang <span className="text-[#F15A24]">Program Studi</span>
            </h2>

            <p className="mt-4 text-gray-700 max-w-xl leading-relaxed">
              Program Diploma III Rekayasa Perangkat Lunak fokus pada penguasaan keterampilan praktis
              di bidang software engineering: pemrograman, manajemen basis data, pengembangan web & mobile,
              serta testing & deployment. Pembelajaran mengutamakan praktik langsung melalui proyek industri.
            </p>

            <div className="mt-6 flex gap-3">
              <a className="inline-flex items-center gap-2 bg-[#1A2B5F] text-white px-4 py-2 rounded-md" href="#curriculum">
                Download Brosur
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full md:w-[420px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/programs/rpl-card.jpg"
                alt="Tentang Program RPL"
                width={640}
                height={420}
                className="object-cover w-full h-60 md:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROSPEK KARIR */}
      <section className="bg-[#1A2345] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold">Prospek Karir</h3>
          <p className="text-sm text-gray-200 mt-2 mb-6 max-w-2xl mx-auto">
            Lulusan dapat berkarir sebagai front-end, back-end, mobile developer, UI/UX designer, hingga full-stack developer.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {[
              { title: "Front-End", sub: "React, Vue" },
              { title: "Back-End", sub: "Node, PHP" },
              { title: "Full-Stack", sub: "10-20 jt" },
              { title: "Mobile Dev", sub: "React Native" },
              { title: "UI/UX Designer", sub: "Figma" },
              { title: "Game Dev", sub: "Unity" },
            ].map((card, i) => (
              <div key={i} className="bg-white text-[#1A2345] rounded-lg p-4 shadow-sm flex flex-col items-start">
                <div className="rounded-md bg-[#E9EEF8] p-3 mb-3">
                  {/* simple SVG badge */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#1A2345" strokeWidth="1.2" />
                    <path d="M8 12h8" stroke="#1A2345" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h4 className="font-semibold text-base">{card.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & EQUIPMENT */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-center text-[#1A2B5F]">Tools dan Equipment</h3>
        <p className="text-center text-gray-600 mt-2 mb-6">Perangkat & tools yang sering digunakan pada pembelajaran RPL.</p>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            { name: "HTML", svg: "M3 3h18v18H3z" },
            { name: "CSS", svg: "M3 3h18v18H3z" },
            { name: "React", svg: "M12 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" },
            { name: "Node", svg: "M12 2l10 6v8l-10 6L2 16V8z" },
            { name: "MySQL", svg: "M12 2c4 0 8 3 8 6s-4 6-8 6-8-3-8-6 4-6 8-6z" },
          ].map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="bg-white rounded-xl p-3 shadow w-20 h-20 flex items-center justify-center">
                {/* placeholder svg icon */}
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <path d={t.svg} stroke="#1A2B5F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-xs text-gray-700">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY BELAJAR */}
      <section id="journey" className="max-w-6xl mx-auto px-6 py-12 bg-white">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#1A2B5F]">Journey Belajar</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Dasar Pemrograman",
              bullets: ["HTML, CSS, JS", "Algoritma & Logika", "Dasar Database"],
            },
            {
              title: "Pengembangan Aplikasi",
              bullets: ["React & Vue", "Node.js & Express", "UI/UX & Mobile"],
            },
            {
              title: "Magang & Proyek Akhir",
              bullets: ["Praktik di Industri", "Capstone Project", "Portofolio"],
            },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-6">
              <div className="h-12 w-12 rounded-full bg-[#F15A24] flex items-center justify-center text-white font-bold mb-4">
                {i + 1}
              </div>
              <h4 className="font-semibold text-lg text-[#1A2B5F]">{s.title}</h4>
              <ul className="mt-3 text-gray-600 space-y-2 list-disc list-inside">
                {s.bullets.map((b, idx) => (
                  <li key={idx} className="text-sm">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* VIRTUAL TOUR CARD */}
      <section id="virtual-tour" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-center text-[#1A2B5F] mb-6">Virtual Tour Lab Politeknik</h3>

        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          <div className="rounded-xl shadow overflow-hidden w-full md:w-[480px]">
            <Image
              src="/images/virtual/virtual-card.jpg"
              alt="Virtual Tour"
              width={800}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-[#1A2B5F]">Kampus Politeknik Prestasi Prima</div>
                <button className="bg-[#1A2B5F] text-white px-3 py-2 rounded-md">Play</button>
              </div>
            </div>
          </div>

          <p className="max-w-md text-gray-700">
            Jelajahi laboratorium, ruang praktik, dan fasilitas modern kami melalui virtual tour interaktif.
          </p>
        </div>
      </section>

      {/* FAQ SIMPLIFIED */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-center text-[#1A2B5F] mb-8">FAQ</h3>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="border rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full px-5 py-4 text-left flex items-center justify-between bg-white"
                  onClick={() => setOpen(isOpen ? null : idx)}
                >
                  <span className="font-medium text-gray-800">{item.q}</span>
                  <span className="ml-4">
                    {/* simple plus/minus SVG */}
                    {isOpen ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M18 12H6" stroke="#1A2B5F" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 6v12M6 12h12" stroke="#1A2B5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  className={`px-5 pb-5 transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 mt-2">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="h-24" />
    </main>
  );
}
