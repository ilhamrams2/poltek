"use client";

import Link from "next/link";
import { RiPhoneLine, RiMailLine, RiDownload2Line } from "react-icons/ri";

export default function Topbar() {
  return (
    <div className="w-full bg-[#020617]/60 backdrop-blur-md text-white/50 text-[9px] font-black uppercase tracking-[0.3em] px-6 lg:px-12 hidden lg:block border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto flex items-center justify-end py-3">

        {/* Contact + Links Container */}
        <div className="flex items-center gap-10">

          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
            <RiPhoneLine size={12} className="text-[#FF6B00] group-hover:scale-110 transition-transform" />
            <span>+62 851-9932-8825</span>
          </div>

          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
            <RiMailLine size={12} className="text-[#FF6B00] group-hover:scale-110 transition-transform" />
            <span>info@politekpresma.ac.id</span>
          </div>

          <Link
            href="/download-brosur"
            className="flex items-center gap-2 text-[#FF6B00] hover:text-white transition-colors group"
          >
            <RiDownload2Line size={12} className="group-hover:translate-y-0.5 transition-transform" />
            <span>Download Brosur</span>
          </Link>

        </div>
      </div>
    </div>
  );
}