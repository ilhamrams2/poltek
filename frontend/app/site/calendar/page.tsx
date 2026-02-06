import AcademicCalendar from "@/components/calendar/AcademicCalendar";

export default function CalendarPage() {
  return (
    <main>
      <section className="relative bg-[#0e162e] text-white py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold">Kalender Akademik</h1>
          <p className="text-gray-300 mt-3 text-lg">
            Politeknik Prestasi Prima — Tahun Akademik 2025/2026
          </p>
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-6 left-6 w-20 h-20 border-t-8 border-l-8 rounded-tl-3xl border-[#5320C0]" />
        <div className="absolute bottom-6 right-6 w-20 h-20 border-b-8 border-r-8 rounded-br-3xl border-[#5320C0]" />
      </section>

      <AcademicCalendar />
    </main>
  );
}
