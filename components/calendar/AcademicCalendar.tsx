"use client";

import { CalendarDays } from "lucide-react";
import { academicCalendar } from "@/data/calendar";

type CalendarSection = "ganjil" | "genap" | "pendek";

export default function AcademicCalendar() {
  const sections: { id: CalendarSection; title: string }[] = [
    { id: "ganjil", title: "Semester Ganjil" },
    { id: "genap", title: "Semester Genap" },
    { id: "pendek", title: "Semester Pendek" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0e162e]">
          Academic Calendar
        </h1>
        <p className="text-gray-600 text-lg mt-4">Tahun Akademik 2025 / 2026</p>
      </div>

      {/* Sections */}
      {sections.map((sec) => (
        <div key={sec.id} className="mb-16">
          <h2 className="text-2xl font-bold text-[#5320C0] mb-6">{sec.title}</h2>

          <div className="space-y-6">
            {academicCalendar[sec.id].map(
              (
                item: { title: string; date: string; type: string },
                index: number
              ) => (
                <div
                  key={index}
                  className="bg-white shadow-md border border-[#5320C0]/20 rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-all"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl shadow-md ${
                      item.type === "primary"
                        ? "bg-[#5320C0] text-white"
                        : "bg-[#FF6700] text-white"
                    }`}
                  >
                    <CalendarDays className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#0e162e]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.date}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ))}

      {/* Download Button */}
      <div className="text-center mt-16">
        <button className="px-8 py-3 bg-[#5320C0] text-white rounded-xl font-medium hover:bg-[#7D42FD] transition shadow-md">
          Download PDF Kalender
        </button>
      </div>
    </section>
  );
}
