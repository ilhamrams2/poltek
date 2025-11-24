"use client";

import Image from "next/image";
import Link from "next/link";

export default function FacilityVirtualTourPage() {
  return (
    <div className="w-full">

      {/* ====================== HERO SECTION ====================== */}
<section className="relative w-full h-[360px] md:h-[520px] max-w-6xl mx-auto mt-4 rounded-3xl overflow-hidden">

  {/* Background Image */}
  <Image
    src="/images/tour360/hero.jpg"
    alt="Virtual Tour Politeknik"
    fill
    priority
    className="object-cover"
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/60"></div>

  {/* Hero Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-5xl leading-tight drop-shadow-lg">
      Jelajahi Kampus Lewat
      <span className="text-[#F15A24]"> Virtual Tour</span>
      <br className="hidden sm:block" />
      <span className="sm:hidden block mt-1">Politeknik Prestasi Prima</span>
      <span className="hidden sm:inline">Politeknik Prestasi Prima</span>
    </h1>

    <p className="text-gray-200 max-w-sm sm:max-w-xl mt-3 sm:mt-4 text-xs sm:text-sm md:text-base drop-shadow">
      Masuki lingkungan laboratorium dan ruang belajar modern yang dirancang
      untuk mengasah skill, kreativitas, dan inovasi.
    </p>
  </div>
</section>


      {/* ====================== SECTION 1 — RPS HALL ====================== */}
      <section className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[300px] md:h-[360px] overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/images/facility/facility1.png"
            alt="Gedung RPS"
            fill
            className="object-cover"
          />

          {/* Floating Arrow Button */}
          <Link
            href="#"
            className="absolute top-4 right-4 bg-white w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition active:scale-95"
          >
            <i className="ti ti-arrow-up-right text-xl text-[#1D234E]"></i>
          </Link>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h3 className="text-3xl font-bold text-[#1A1A1A] leading-snug">
            <span className="text-[#F15A24]">Gedung</span> RPS Hall
          </h3>

          <p className="text-gray-700 leading-relaxed mt-4 max-w-md text-[15.5px]">
            Gedung RPS sebagai pusat pengembangan teknologi dua lantai. Dilengkapi
            aula luas dengan videotron modern serta ruang IoT untuk eksperimen dan riset.
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#1D234E] text-white px-5 py-3 rounded-md mt-6 hover:bg-[#131833] transition font-medium"
          >
            Mulai Virtual Tour
            <i className="ti ti-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* ====================== SECTION 2 — HALAMAN BELAKANG ====================== */}
      <section className="max-w-6xl mx-auto px-6 mt-24 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE — MOBILE FIRST */}
        <div className="relative w-full h-[300px] md:hidden rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/facility/facility1.png"
            alt="Halaman Belakang"
            fill
            className="object-cover"
          />

          <Link
            href="#"
            className="absolute top-4 right-4 bg-white w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
          >
            <i className="ti ti-arrow-up-right text-xl text-[#1D234E]"></i>
          </Link>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h3 className="text-3xl font-bold text-[#1A1A1A] leading-snug">
            <span className="text-[#F15A24]">Halaman</span> Belakang
          </h3>

          <p className="text-gray-700 leading-relaxed mt-4 max-w-md text-[15.5px]">
            Area outdoor kampus yang digunakan untuk kegiatan mahasiswa, upacara, 
            dan event kampus. Luas, nyaman, dan bersih.
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#1D234E] text-white px-5 py-3 rounded-md mt-6 hover:bg-[#131833] transition"
          >
            Mulai Virtual Tour
            <i className="ti ti-arrow-right"></i>
          </Link>
        </div>

        {/* IMAGE — DESKTOP */}
        <div className="hidden md:block relative w-full h-[330px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/facility/facility4.png"
            alt="Halaman Belakang"
            fill
            className="object-cover"
          />

          <Link
            href="#"
            className="absolute top-4 right-4 bg-white w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
          >
            <i className="ti ti-arrow-up-right text-xl text-[#1D234E]"></i>
          </Link>
        </div>
      </section>

      <div className="h-20"></div>
    </div>
  );
}
