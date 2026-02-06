"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

// Sample data for masonry cards. Replace `image` paths with your real images in /public/images/cards/
const CARDS = [
  {
    id: 1,
    title: "Latar Belakang Yayasan",
    excerpt:
      "Berasal dari Yayasan Wahana Prestasi Prima yang telah mengembangkan SMA & SMK berakreditasi A.",
    image: "/images/cards/card1.jpg",
    tag: "Foundation",
  },
  {
    id: 2,
    title: "Pendirian Resmi",
    excerpt:
      "Resmi berdiri pada 19 Oktober 2023 melalui Keputusan Mendikbudristek No. 271/D/OT/2023.",
    image: "/images/cards/card2.jpg",
    tag: "Milestone",
  },
  {
    id: 3,
    title: "Visi & Identitas",
    excerpt:
      "Mencetak lulusan yang beriman, cerdas, percaya diri, dan kompeten digital.",
    image: "/images/cards/card3.jpg",
    tag: "Vision",
  },
  {
    id: 4,
    title: "Perkembangan & Ekspansi",
    excerpt:
      "Perluasan program studi, fasilitas modern, dan kemitraan industri strategis.",
    image: "/images/cards/card4.jpg",
    tag: "Growth",
  },
  {
    id: 5,
    title: "Program Studi",
    excerpt:
      "D3: RPL, Administrasi Perkantoran, Manajemen Pemasaran. D4: Bisnis Digital, TR Jaringan, TR Multimedia.",
    image: "/images/cards/card5.jpg",
    tag: "Academics",
  },
  {
    id: 6,
    title: "Filosofi Pendidikan",
    excerpt:
      "Komitmen mutu, karakter, integritas, dan inovasi berkelanjutan dalam pembelajaran.",
    image: "/images/cards/card6.jpg",
    tag: "Philosophy",
  },
  // add more cards if needed
];

export default function HistoryPage(): JSX.Element {
  return (
    <main className={`${jakarta.className} min-h-screen bg-[#080c1b] text-gray-100`}>
      {/* HERO */}
      <header className="relative h-[56vh] md:h-[60vh] lg:h-[64vh] overflow-hidden">
        <Image
          src="/images/carousel/carousel2.jpg"
          alt="Hero campus"
          fill
          priority
          className="object-cover brightness-[0.45] -z-10"
        />

        {/* decorative uploaded design image (will be transformed by system) */}
        <img
          src="/mnt/data/93c35b88-2eb9-432d-bdaf-1179a680d748.png"
          alt="design-collage"
          className="absolute right-6 top-6 w-44 opacity-10 pointer-events-none hidden lg:block"
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0e162e]/40 via-[#080c1b]/60 to-[#080c1b]/90"
          aria-hidden
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col items-center justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Image
              src="/images/logo_politeknik.png"
              alt="logo"
              width={110}
              height={110}
              className="drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 6, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide"
            style={{ lineHeight: 1.02 }}
          >
            <span className="text-[#FF6700]">Politeknik</span>{" "}
            <span className="text-[#442489]">Prestasi Prima</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-4 text-base md:text-lg italic text-gray-200 max-w-2xl"
          >
            “Perjalanan menuju institusi pendidikan tinggi yang unggul, modern, dan
            berdaya saing global.”
          </motion.p>
        </div>
      </header>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-12 pb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Sejarah & Perjalanan
            </h2>
            <p className="text-gray-300 mt-2 max-w-2xl">
              Ringkasan perjalanan Politeknik Prestasi Prima — highlight penting
              dan bukti perkembangan yang membentuk institusi sampai hari ini.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              className="bg-gradient-to-r from-[#FF6700] to-[#FF7C00] text-[#080c1b] font-semibold px-4 py-2 rounded-lg shadow-md hover:brightness-105 transition"
              aria-label="Download Timeline"
            >
              Download Timeline
            </button>

            <button
              className="border border-[#442489] text-[#442489] px-4 py-2 rounded-lg hover:bg-[#442489]/10 transition"
              aria-label="Explore Programs"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* PINTEREST MASONRY */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-20">
        {/* Masonry columns using CSS columns (simple and responsive) */}
        <div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
          style={{ columnGap: "1.25rem" }}
        >
          {CARDS.map((card, idx) => {
            // variation classes to make cards unique (rotate badge, slanted top, different shadows)
            const variant = idx % 5;
            const tiltClass =
              variant === 1
                ? "rotate-0" // normal
                : variant === 2
                ? "-rotate-[1deg] translate-y-0"
                : variant === 3
                ? "rotate-[1deg]"
                : variant === 4
                ? "-rotate-[0.6deg]"
                : "rotate-0";

            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`mb-6 break-inside-avoid ${tiltClass}`}
              >
                {/* Card wrapper with decorative left accent and gradient border */}
                <div
                  className="
                    relative overflow-hidden rounded-2xl 
                    bg-gradient-to-b from-[#0e162e]/80 to-[#080c1b]/80
                    border border-transparent p-0
                    shadow-[0_12px_40px_rgba(4,6,28,0.6)]
                    hover:shadow-[0_16px_60px_rgba(4,6,28,0.75)]
                    transition
                  "
                  style={{
                    borderImage: "linear-gradient(90deg, #FF6700, #442489) 1",
                  }}
                >
                  {/* Image (use next/image if you want optimized images) */}
                  <div className="w-full aspect-[4/3] relative">
                    {/* If you have many images, change to <Image /> with actual src. For now we use Image component */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover rounded-t-2xl"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={idx < 2}
                    />
                    {/* colorful overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080c1b]/60 via-transparent to-transparent" />
                    {/* tag badge */}
                    <div
                      className={`absolute left-4 top-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold`}
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255,103,0,0.15), rgba(68,36,137,0.12))",
                        backdropFilter: "blur(4px)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#FF6700] block" />
                      <span className="text-xs">{card.tag}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {card.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {card.excerpt}
                    </p>

                    {/* action row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(68,36,137,0.2), rgba(255,124,0,0.06))",
                            boxShadow: "inset 0 -6px 14px rgba(0,0,0,0.2)",
                          }}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                              stroke="#FFD8A8"
                              strokeWidth="0.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="text-sm">
                          <div className="text-white font-medium">Prestasi Prima</div>
                          <div className="text-xs text-gray-400">Politeknik</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          className="px-3 py-1 rounded-md text-sm font-semibold bg-[#FF6700] text-[#080c1b] hover:brightness-105 transition"
                          aria-label="Read more"
                        >
                          Read More
                        </button>
                        <button
                          className="p-2 rounded-md bg-transparent border border-white/6 hover:bg-white/3 transition"
                          aria-label="Share"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"
                              stroke="#fff"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 3v13"
                              stroke="#fff"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 7l4-4 4 4"
                              stroke="#fff"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* decorative slanted corner */}
                  <div
                    className="absolute -right-10 -top-6 w-28 h-28 rounded-full opacity-5 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(68,36,137,0.35), rgba(255,103,0,0.05))",
                    }}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#0e162e]/60 to-[#080c1b]/80 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg"
        >
          <div>
            <h4 className="text-xl font-bold text-white">Ingin tahu lebih jauh?</h4>
            <p className="text-gray-300 mt-1">
              Download profil lengkap atau hubungi tim penerimaan mahasiswa baru.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-[#FF6700] text-[#080c1b] px-4 py-2 rounded-lg font-semibold">
              Download Profil
            </button>
            <button className="border border-[#442489] text-[#442489] px-4 py-2 rounded-lg">
              Kontak Kami
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
