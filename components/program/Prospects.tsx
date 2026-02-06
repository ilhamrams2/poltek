"use client";

import {
  Cpu,
  Database,
  Code,
  Smartphone,
  Layout,
  Gamepad,
  Briefcase,
  ShoppingCart,
  BarChart3,
  Megaphone,
  Building2,
  FolderKanban,
  FileText,
  Users2,
  PhoneCall,
} from "lucide-react";

interface ProspectsProps {
  program: "rpl" | "manajemen" | "administrasi";
}

export default function Prospects({ program }: ProspectsProps) {
  const data = {
    // =========================
    // 1️⃣ RPL / PPLG
    // =========================
    rpl: [
      { icon: Cpu, title: "Front-End Developer", salary: "6–12 jt/bulan" },
      { icon: Database, title: "Back-End Developer", salary: "7–15 jt/bulan" },
      { icon: Code, title: "Full-Stack Developer", salary: "10–20 jt/bulan" },
      { icon: Smartphone, title: "Mobile Developer", salary: "8–15 jt/bulan" },
      { icon: Layout, title: "UI/UX Designer", salary: "6–12 jt/bulan" },
      { icon: Gamepad, title: "Game Developer", salary: "8–11 jt/bulan" },
    ],

    // =========================
    // 2️⃣ Manajemen Pemasaran
    // =========================
    manajemen: [
      { icon: Megaphone, title: "Digital Marketing Specialist", salary: "5–12 jt/bulan" },
      { icon: ShoppingCart, title: "Sales Executive", salary: "4–10 jt/bulan" },
      { icon: BarChart3, title: "Market Analyst", salary: "6–15 jt/bulan" },
      { icon: Briefcase, title: "Brand Manager", salary: "10–25 jt/bulan" },
      { icon: Layout, title: "Content Creator", salary: "4–12 jt/bulan" },
      { icon: Building2, title: "Business Development", salary: "6–20 jt/bulan" },
    ],

    // =========================
    // 3️⃣ Administrasi Perkantoran
    // =========================
    administrasi: [
      { icon: FileText, title: "Staff Administrasi", salary: "4–8 jt/bulan" },
      { icon: FolderKanban, title: "Admin Perkantoran", salary: "4–7 jt/bulan" },
      { icon: Users2, title: "Human Resource Assistant", salary: "5–10 jt/bulan" },
      { icon: PhoneCall, title: "Customer Service", salary: "4–8 jt/bulan" },
      { icon: Building2, title: "Sekretaris", salary: "5–12 jt/bulan" },
      { icon: Briefcase, title: "Office Manager", salary: "8–20 jt/bulan" },
    ],
  };

  const items = data[program];

  return (
    <section className="py-20 bg-[#0F1B3D] bg-[url('/images/program/patern_start.svg')] bg-no-repeat bg-contain bg-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Title */}
        <h3 className="text-3xl lg:text-4xl font-extrabold text-white text-center mb-12">
          Prospek Karir
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((d) => (
            <div
              key={d.title}
              className="group bg-white/10 backdrop-blur rounded-2xl p-6 text-white border border-white/10 hover:-translate-y-2 transition shadow-lg"
            >
              <div className="flex items-start gap-4">

                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:opacity-90 transition">
                  <d.icon className="w-6 h-6" />
                </div>

                {/* Text */}
                <div>
                  <div className="font-semibold text-white">
                    {d.title}
                  </div>
                  <div className="text-sm mt-1 text-orange-400 font-medium">
                    {d.salary}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
