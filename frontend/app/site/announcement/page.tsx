"use client";

import React, { useState } from "react";
import { Search, Calendar, Tag } from "lucide-react";

export default function AnnouncementPage() {
  const [search, setSearch] = useState("");

  const announcements = [
    {
      id: 1,
      title: "Pengumuman Penerimaan Mahasiswa Baru Gelombang 1",
      date: "10 Januari 2025",
      category: "Penerimaan",
      description:
        "Pendaftaran mahasiswa baru gelombang 1 telah resmi dibuka. Silakan cek persyaratan dan jadwal lengkap.",
    },
    {
      id: 2,
      title: "Libur Nasional: Tahun Baru Imlek 2025",
      date: "28 Januari 2025",
      category: "Informasi",
      description:
        "Kegiatan perkuliahan diliburkan sementara dalam rangka perayaan Tahun Baru Imlek.",
    },
    {
      id: 3,
      title: "Seminar Nasional Teknologi Informasi 2025",
      date: "15 Februari 2025",
      category: "Agenda",
      description:
        "Mahasiswa diundang menghadiri seminar nasional bertema Transformasi Digital di Era AI.",
    },
  ];

  const filtered = announcements.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0e162e] text-white">
      {/* ==== HERO SECTION ==== */}
      <section className="relative py-24 bg-gradient-to-br from-[#5320C0] via-[#7D42FD] to-[#0e162e]">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Announcement & Updates
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Temukan informasi terbaru, pengumuman resmi, dan update penting
            terkait kegiatan Politeknik Prestasi Prima.
          </p>
        </div>
      </section>

      {/* ==== SEARCH & FILTER ==== */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 pb-8">
        <div className="bg-[#1b2442] border border-white/10 shadow-xl rounded-2xl p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Search className="text-gray-300" size={20} />
            <input
              type="text"
              placeholder="Cari pengumuman..."
              className="w-full bg-transparent outline-none text-white placeholder:text-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ==== LIST ANNOUNCEMENTS ==== */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {filtered.length === 0 && (
            <p className="text-gray-300">Tidak ada pengumuman ditemukan.</p>
          )}

          {filtered.map((a) => (
            <div
              key={a.id}
              className="bg-[#12192e] border border-white/10 p-6 rounded-2xl shadow-lg transition hover:shadow-2xl hover:border-[#7D42FD]/50"
            >
              <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <Calendar size={16} />
                {a.date}
              </div>

              <h3 className="text-xl font-bold mb-2">{a.title}</h3>
              <p className="text-gray-300 mb-4">{a.description}</p>

              <div className="inline-flex items-center gap-2 bg-[#5320C0]/30 px-3 py-1 rounded-full text-sm text-[#7D42FD]">
                <Tag size={14} />
                {a.category}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
