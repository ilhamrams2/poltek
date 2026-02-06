"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const months = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

export default function CalendarPage() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sun

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else setMonth(month - 1);
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else setMonth(month + 1);
  };

  const calendarCells = [];

  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(<div key={"empty-"+i}></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(
      <div
        key={day}
        className="
          p-4 rounded-xl border border-white/10 
          bg-white/5 backdrop-blur-xl
          hover:bg-white/10 hover:border-[#7D42FD]/40 
          transition-all duration-300 cursor-pointer
          hover:shadow-lg hover:shadow-[#7D42FD]/20
          flex items-center justify-center text-lg font-semibold
        "
      >
        {day}
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0e162e] via-[#1a2647] to-[#0e162e] pt-28 pb-20 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 left-0 w-[300px] h-[300px] bg-[#7D42FD]/30 rounded-full blur-[130px]" />
        <div className="absolute -bottom-10 right-0 w-[300px] h-[300px] bg-[#5320C0]/20 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-[#7D42FD] to-[#FF6700] bg-clip-text text-transparent">
          Kalender Agenda
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Lihat jadwal kegiatan Politeknik Prestasi Prima
        </p>
      </div>

      {/* Calendar Navigation */}
      <div className="relative z-10 max-w-4xl mx-auto flex items-center justify-between px-6 mb-6">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition"
        >
          <ChevronLeft />
        </button>

        <h2 className="text-2xl font-semibold">
          {months[month]} {year}
        </h2>

        <button
          onClick={nextMonth}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Days of Week */}
      <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-7 text-center text-gray-300 mb-3 px-6">
        {["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((d, i) => (
          <div key={i} className="py-2 font-medium">{d}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-7 gap-4 px-6">
        {calendarCells}
      </div>

    </section>
  );
}
