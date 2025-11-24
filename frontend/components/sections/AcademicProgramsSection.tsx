"use client";

import { useState } from "react";

export default function AcademicProgramsSection() {
  const [activeTab, setActiveTab] = useState("D3");

  const programs = {
    D3: [
      {
        title: "Administrasi Perkantoran",
        img: "/images/sections/program/programdummy.png",
        label: "Program D3",
        desc: "Administrasi Perkantoran Modern",
        link: "#",
      },
      {
        title: "Manajemen Pemasaran",
        img: "/images/sections/program/programdummy.png",
        highlight: true,
        label: "Program D3",
        desc: "Pemasaran Digital & Modern",
        link: "#",
      },
      {
        title: "Manajemen Perangkat Lunak",
        img: "/images/sections/program/programdummy.png",
        label: "Program D3",
        desc: "Software Development Foundation",
        link: "#",
      },
    ],
    D4: [
      {
        title: "Teknologi Rekayasa Perangkat Lunak",
        img: "/images/sections/program/programdummy.png",
        label: "Program D4",
        desc: "Advanced Software Engineering",
        link: "#",
      },
      {
        title: "Teknologi Produksi Multimedia",
        img: "/images/sections/program/programdummy.png",
        label: "Program D4",
        desc: "Creative Digital Content",
        link: "#",
      },
    ],
  };

  return (
    <section className="w-full py-24 bg-white flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center">
        Program <span className="text-orange-500">Akademik</span>
      </h2>
      <p className="max-w-xl text-center text-gray-500 mt-3 text-sm">
        Menjadi politeknik vokasi terdepan yang unggul, terpercaya, dan mampu mencetak
        insan terampil berakhlak dengan penguasaan teknologi serta kontribusi global
      </p>

      {/* Tabs */}
      <div className="flex gap-4 mt-10">
        {['D3', 'D4'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-10 py-2 rounded-full border transition-all duration-300 font-semibold text-sm ${
              activeTab === tab
                ? "bg-orange-500 text-white border-orange-500 shadow"
                : "border-orange-500 text-orange-500 hover:bg-orange-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Program Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-14 w-full max-w-6xl px-6">
        {programs[activeTab].map((prog, idx) => (
          <div
            key={idx}
            className={`relative rounded-3xl overflow-hidden shadow-md group cursor-pointer h-[360px] flex items-end p-6 text-white ${
              prog.highlight ? "" : ""
            }`}
            style={{
              backgroundImage: `url(${prog.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* If highlight card */}
            {prog.highlight && (
              <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
                {prog.label}
              </span>
            )}

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold drop-shadow-lg">{prog.title}</h3>

              {prog.desc && (
                <p className="text-sm opacity-80 mt-1">{prog.desc}</p>
              )}

              {prog.link && (
                <a
                  href={prog.link}
                  className="text-sm mt-4 inline-block underline decoration-1 hover:text-orange-300 transition"
                >
                  Pelajari Lebih Lanjut ↗
                </a>
              )}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
