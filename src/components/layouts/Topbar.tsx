"use client";

import { useState } from "react";
import Link from "next/link";
import { RiPhoneLine, RiMailLine } from "react-icons/ri";

export default function Topbar() {
  const [currentLang, setCurrentLang] = useState<"id" | "en">("id");

  return (
    <div className="w-full bg-[#0E1333] text-white text-[15px] px-6 md:px-12 hidden md:block border-b border-white/10">
      {/* Mengubah justify-between menjadi justify-end agar semua konten terdorong ke kanan */}
      <div className="max-w-7xl mx-auto flex items-center justify-end py-3">

        {/* Contact + Links Container */}
        <div className="flex items-center gap-6 text-white/90">

          <div className="flex items-center gap-2 hover:text-white transition">
            <RiPhoneLine size={15} className="opacity-80" />
            <span>+62 851-9932-8825</span>
          </div>

          <div className="flex items-center gap-2 hover:text-white transition">
            <RiMailLine size={15} className="opacity-80" />
            <span>poltek.prestasiprima@gmail.id</span>
          </div>

          <Link
            href="/download-brosur"
            className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition"
          >
            Download Brosur
          </Link>

        </div>
      </div>
    </div>
  );
}