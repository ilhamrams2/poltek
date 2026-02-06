"use client";

import { Calendar, MapPin, Clock } from "lucide-react";

const agendaData = [
  {
    date: "12 Jan 2025",
    title: "Seminar AI: Teknologi Masa Depan",
    time: "09:00 - 12:00",
    location: "Aula Politeknik Prestasi Prima",
  },
  {
    date: "22 Jan 2025",
    title: "Pembukaan PMB Gelombang 1",
    time: "08:00",
    location: "Website Pendaftaran Online",
  },
  {
    date: "03 Feb 2025",
    title: "Wisuda Politeknik Prestasi Prima 2025",
    time: "07:00",
    location: "Balai Sudirman",
  },
];

export default function AgendaPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0e162e] via-[#1a2647] to-[#0e162e] pt-24 pb-24 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 right-0 w-[350px] h-[350px] bg-[#7D42FD]/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 left-0 w-[300px] h-[300px] bg-[#5320C0]/20 rounded-full blur-[110px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-[#7D42FD] to-[#FF6700] bg-clip-text text-transparent">
          Agenda Kampus
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Informasi kegiatan terbaru Politeknik Prestasi Prima
        </p>
      </div>

      {/* Agenda List */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
        {agendaData.map((item, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-[#7D42FD]/10"
          >
            <div className="flex items-start justify-between">
              
              {/* Date */}
              <div className="flex items-center gap-3">
                <Calendar className="text-[#7D42FD] group-hover:text-[#FF6700] transition" />
                <p className="font-semibold text-lg">{item.date}</p>
              </div>

            </div>

            {/* Title */}
            <h2 className="mt-3 text-2xl font-semibold group-hover:text-[#FF6700] transition">
              {item.title}
            </h2>

            {/* Info */}
            <div className="mt-4 space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <Clock size={18} /> {item.time}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} /> {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
