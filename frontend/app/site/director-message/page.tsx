"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DirectorMessagePage() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* ================= IMAGE SECTION ================= */}
        <div className="relative w-full flex justify-center">
          {/* Decorative Corner */}
          <div className="absolute -top-6 -left-6 w-20 h-20 border-t-8 border-l-8 rounded-tl-3xl border-[#5320C0]"></div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-xl border-[6px] border-[#0e162e]/20">
            <Image
              src="/images/direktur.png"
              alt="Director"
              width={550}
              height={720}
              className="object-cover"
            />
          </div>

          {/* Bottom Right Decorative Corner */}
          <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-8 border-r-8 rounded-br-3xl border-[#5320C0]"></div>
        </div>

        {/* ================= TEXT SECTION ================= */}
        <div>
          <h2 className="text-[#0e162e] text-3xl md:text-4xl font-extrabold leading-snug">
            PESAN DIREKTUR <br />
            POLITEKNIK PRESTASI PRIMA
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-[#000000]">
            DR. WANNEN PAKPAHAN, MM.
          </h3>

          <p className="mt-6 text-gray-700 leading-relaxed">
            <span className="italic">
              Assalamu’alaikum Warahmatullahi Wabarakatuh.
            </span>
            <br />
            <br />
            Selamat datang di website resmi Politeknik Prestasi Prima. Kami
            percaya, lulusan unggul bukan hanya yang cakap teknologi, tetapi
            juga memiliki karakter, beriman, dan percaya diri.
            <br />
            <br />
            Melalui pendekatan abad 21 dan pembelajaran berbasis kompetensi,
            Poltek Presma mempersiapkan mahasiswa untuk siap bersaing di dunia
            kerja dan dunia global.
            <br />
            <br />
            Bagi kami, kampus bukan sekadar tempat belajar—tetapi tempat
            bertumbuh, mengembangkan potensi, dan mewujudkan mimpi.
            <br />
            <br />
            Terima kasih atas kunjungan Anda.
          </p>

          {/* BUTTON */}
          <button
            className="
              mt-8 bg-[#5320C0] hover:bg-[#7D42FD]
              text-white px-6 py-3 rounded-xl flex items-center gap-2
              font-medium shadow-md transition-all
            "
          >
            Daftar Sekarang
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
