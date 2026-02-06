"use client";

import Image from "next/image";
import Link from "next/link";
import { Building2 } from "lucide-react";

type ProgramType = "rpl" | "manajemen" | "administrasi";

interface Props {
  program?: ProgramType;
}

// ===============================
// DATA UNTUK SETIAP PROGRAM
// ===============================
const tourData: Record<
  ProgramType,
  {
    title: string;
    image: string;
    link: string;
  }
> = {
  rpl: {
    title: "Virtual Tour Lab RPL",
    image: "/images/sections/360/v360-1.jpg",
    link: "https://your-tour-link-rpl.com",
  },

  manajemen: {
    title: "Virtual Tour Studio Manajemen Pemasaran",
    image: "/images/sections/360/v360-1.jpg",
    link: "https://your-tour-link-manajemen.com",
  },

  administrasi: {
    title: "Virtual Tour Ruang Administrasi Perkantoran",
    image: "/images/sections/360/v360-1.jpg",
    link: "https://your-tour-link-ap.com",
  },
};

export default function Tour({ program = "rpl" }: Props) {
  const data = tourData[program];

  return (
    <section
      id="virtual-tour"
      className="py-20 relative bg-[#0F1B3D] overflow-hidden"
      style={{
        backgroundImage: "url('/images/program/patern_start2.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

        {/* Title */}
        <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-12">
          {data.title}
        </h2>

        {/* Card */}
        <div className="mx-auto max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Tour Image */}
          <div className="relative w-full h-64 lg:h-72">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />

            {/* HD Badge */}
            <span className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              HD Quality
            </span>
          </div>

          {/* Info */}
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex flex-col text-left">
              <span className="text-sm text-gray-600 flex items-center gap-2">
                <Building2 size={20} stroke="#0F1B3D" strokeWidth={2.2} />
                Kampus Politeknik
              </span>

              <span className="text-[#0F1B3D] font-semibold text-base">
                Prestasi Prima
              </span>
            </div>

            {/* Play Button */}
            <Link
              href={data.link}
              className="w-12 h-12 rounded-full bg-[#0F1B3D] text-white flex items-center justify-center shadow-md hover:bg-[#152757] transition"
            >
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
