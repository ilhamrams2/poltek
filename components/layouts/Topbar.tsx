"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Topbar() {
  const [currentLang, setCurrentLang] = useState<"id" | "en">("id");

  return (
    <div className="w-full bg-[#0E1333] text-white text-[15px] px-6 md:px-12 hidden md:block border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3">

        {/* Language Selector */}
        <div className="flex items-center gap-3">
          <button
            className={`transition hover:opacity-80 ${
              currentLang === "id" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setCurrentLang("id")}
          >
            <Image
              src="/flags/id.png"
              width={30}
              height={30}
              alt="ID Flag"
              className="rounded-sm shadow-sm"
            />
          </button>

          <button
            className={`transition hover:opacity-80 ${
              currentLang === "en" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setCurrentLang("en")}
          >
            <Image
              src="/flags/en.png"
              width={28}
              height={28}
              alt="EN Flag"
              className="rounded-sm shadow-sm"
            />
          </button>
        </div>

        {/* Contact + Links */}
        <div className="flex items-center gap-6 text-white/90">

          <div className="flex items-center gap-2 hover:text-white transition">
            <Phone size={15} className="opacity-80" />
            <span>+62 851-9932-8825</span>
          </div>

          <div className="flex items-center gap-2 hover:text-white transition">
            <Mail size={15} className="opacity-80" />
            <span>poltek.prestasiprima@gmail.id</span>
          </div>

          <Link
            href="/download-brosur"
            className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition"
          >
            Download Brosur
          </Link>

          <Link
            href="/portal"
            className="px-3 py-1.5 rounded-md bg-[#F59E0B]/20 text-[#FBBF24] hover:bg-[#F59E0B]/30 transition"
          >
            Portal Mahasiswa
          </Link>
        </div>
      </div>
    </div>
  );
}
