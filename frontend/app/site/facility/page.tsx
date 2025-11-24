"use client";

import Image from "next/image";
import { useState } from "react";

export default function FacilityPage() {
  const items = [
    { title: "Ruang Unit Kesehatan Siswa", desc: "UKS menjadi fasilitas kesehatan sekolah...", img: "/images/facilty/facility1.png" },
    { title: "Ruang Unit Kesehatan Siswa", desc: "UKS menjadi fasilitas kesehatan sekolah...", img: "/images/facilty/facility2.png" },
    { title: "Ruang Unit Kesehatan Siswa", desc: "UKS menjadi fasilitas kesehatan sekolah...", img: "/images/facilty/facility3.png" },
    { title: "Ruang Unit Kesehatan Siswa", desc: "UKS menjadi fasilitas kesehatan sekolah...", img: "/images/facilty/facility4.png" },
    { title: "Ruang Unit Kesehatan Siswa", desc: "UKS menjadi fasilitas kesehatan sekolah...", img: "/images/facilty/facility5.png" },
    { title: "Ruang Unit Kesehatan Siswa", desc: "UKS menjadi fasilitas kesehatan sekolah...", img: "/images/facilty/facility6.png" },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < items.length - 3) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <>
      {/* ========================== HERO SECTION =========================== */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE LEFT */}
          <div className="flex justify-center">
            <Image
              src="/images/facilty/modelfacility.png"
              alt="Facility Hero"
              width={450}
              height={450}
              className="object-contain rounded-xl"
            />
          </div>

          {/* TEXT RIGHT */}
          <div className="text-left">
            <h1 className="text-4xl font-extrabold">
              <span className="text-[#F15A24]">Fasilitas</span>{" "}
              <span className="text-[#1A2B5F]">Politeknik</span>
            </h1>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Politeknik Prestasi Prima menyediakan fasilitas modern dan lengkap
              untuk mendukung pembelajaran vokasi berbasis teknologi. Kami memiliki
              berbagai laboratorium praktik seperti Lab Komputer, Lab Multimedia, dan
              Lab Bisnis Digital. Fasilitas ini dirancang untuk memberikan pengalaman
              praktik maksimal dan memastikan mahasiswa menguasai keterampilan teknis
              yang relevan serta siap bersaing di dunia kerja profesional.
            </p>

            <button className="mt-8 bg-[#1A2B5F] text-white px-6 py-3 rounded-md hover:bg-[#0f1d44] transition">
              View More
            </button>
          </div>

        </div>
      </section>

      {/* ========================== FACILITY SLIDER =========================== */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* GARIS TEBAL UNGU */}
          <div className="w-48 h-2 bg-[#1A2B5F] mx-auto mb-6 rounded-full"></div>

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-[#1A2B5F] mb-14">
            Sarana Unggulan untuk{" "}
            <span className="text-[#F15A24]">Belajar & Berprestasi</span>
            <br /> Politeknik Prestasi Prima
          </h2>

          {/* SLIDER WRAPPER */}
          <div className="relative w-full overflow-hidden pb-36">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
            >
              {items.map((item, i) => (
                <div key={i} className="w-1/3 px-4 shrink-0">
                  <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={350}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4 text-left">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* LEFT BUTTON */}
            <button
              onClick={prev}
              disabled={current === 0}
              className={`absolute bottom-0 left-0 w-10 h-10 flex items-center justify-center rounded-md 
                ${current === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-[#1A2B5F] text-white hover:bg-[#0d1633]"}`}
            >
              ←
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={next}
              disabled={current === items.length - 3}
              className={`absolute bottom-0 right-0 w-10 h-10 flex items-center justify-center rounded-md 
                ${current === items.length - 3 ? "bg-gray-300 cursor-not-allowed" : "bg-[#1A2B5F] text-white hover:bg-[#0d1633]"}`}
            >
              →
            </button>

            {/* DOTS */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
              {[...Array(items.length - 2)].map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all
                    ${i === current ? "bg-[#F15A24]" : "bg-gray-300"}`}
                ></span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
