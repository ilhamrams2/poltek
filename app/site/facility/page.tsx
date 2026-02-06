"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineDesktop } from "react-icons/ai";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";

export default function FacilityPage() {
  const items = [
    { title: "Ruang Kelas 1", desc: "Ruang kelas modern dengan fasilitas lengkap.", img: "/images/facility/ruang-kelas01-1024x768.jpeg" },
    { title: "Ruang Kelas 2", desc: "Ruang kelas modern dengan fasilitas lengkap.", img: "/images/facility/ruang-kelas02-1024x768.jpeg" },
    { title: "Ruang Kelas 3", desc: "Ruang kelas modern dengan fasilitas lengkap.", img: "/images/facility/ruang-kelas03-1024x768.jpeg" },
    { title: "Ruang Kelas 4", desc: "Ruang kelas modern dengan fasilitas lengkap.", img: "/images/facility/ruang-kelas04-1024x768.jpeg" },
    { title: "Ruang Kelas 5", desc: "Ruang kelas modern dengan fasilitas lengkap.", img: "/images/facility/ruang-kelas05-1024x768.jpeg" },
    { title: "Ruang Kelas 6", desc: "Ruang kelas modern dengan fasilitas lengkap.", img: "/images/facility/ruang-kelas06-1024x768.jpeg" },
    { title: "Poltek Presma 1", desc: "Fasilitas kampus modern untuk pembelajaran.", img: "/images/facility/poltek-presma1-1024x768.jpg" },
    { title: "Poltek Presma 2", desc: "Fasilitas kampus modern untuk pembelajaran.", img: "/images/facility/poltek-presma2-1024x768.jpg" },
    { title: "Poltek Presma 3", desc: "Fasilitas kampus modern untuk pembelajaran.", img: "/images/facility/poltek-presma3-1024x768.jpg" },
    { title: "Poltek Presma 4", desc: "Fasilitas kampus modern untuk pembelajaran.", img: "/images/facility/poltek-presma4-1024x768.jpg" },
    { title: "Poltek Presma 5", desc: "Fasilitas kampus modern untuk pembelajaran.", img: "/images/facility/poltek-presma5-1024x768.jpg" },
    { title: "Poltek Presma 6", desc: "Fasilitas kampus modern untuk pembelajaran.", img: "/images/facility/poltek-presma6-1024x768.jpg" },
  ];

  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 768) setItemsPerView(3); // desktop
      else setItemsPerView(1); // mobile
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const next = () => {
    if (current < items.length - itemsPerView) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <>
      {/* ========================== HERO SECTION =========================== */}
      <section className="w-full bg-gradient-to-r from-[#F3F4F6] to-[#EDECF7] relative py-20 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F15A24]/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#1A2B5F]/20 rounded-full animate-pulse"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="flex justify-center animate-fadeIn">
            <Image
              src="/images/facilty/modelfacility.png"
              alt="Facility Hero"
              width={450}
              height={450}
              className="object-contain rounded-xl shadow-lg"
            />
          </div>

          <div className="text-left animate-fadeIn delay-200">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-[#F15A24]">Fasilitas</span>{" "}
              <span className="text-[#1A2B5F]">Politeknik</span>
            </h1>

            <p className="mt-2 text-[#F15A24] font-semibold text-lg">
              Belajar Modern, Berprestasi Maksimal
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Politeknik Prestasi Prima menyediakan fasilitas modern dan lengkap
              untuk mendukung pembelajaran vokasi berbasis teknologi. Kami memiliki
              berbagai laboratorium praktik seperti Lab Komputer, Lab Multimedia, dan
              Lab Bisnis Digital. Fasilitas ini dirancang untuk memberikan pengalaman
              praktik maksimal dan memastikan mahasiswa menguasai keterampilan teknis
              yang relevan serta siap bersaing di dunia kerja profesional.
            </p>

            <div className="flex gap-4 mt-6">
              <AiOutlineDesktop className="text-[#F15A24] w-8 h-8" />
              <MdOutlineVideoLibrary className="text-[#F15A24] w-8 h-8" />
              <BiBriefcaseAlt2 className="text-[#F15A24] w-8 h-8" />
            </div>

            <button
              onClick={() => {
                document.getElementById("facility-slider")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 bg-[#1A2B5F] text-white px-6 py-3 rounded-md hover:bg-[#0f1d44] hover:shadow-lg transition flex items-center gap-2"
            >
              View More <FiArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ========================== FACILITY SLIDER =========================== */}
      <section id="facility-slider" className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-48 h-2 bg-[#1A2B5F] mx-auto mb-6 rounded-full"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B5F] mb-14 leading-snug">
            Sarana Unggulan untuk <span className="text-[#F15A24]">Belajar & Berprestasi</span>
            <br /> Politeknik Prestasi Prima
          </h2>

          <div className="relative w-full overflow-hidden pb-36">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
            >
              {items.map((item, i) => (
                <div key={i} className={`shrink-0 px-4 ${itemsPerView === 3 ? "w-1/3" : itemsPerView === 2 ? "w-1/2" : "w-full"}`}>
                  <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={350}
                      className="w-full h-56 md:h-64 object-cover"
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
              className={`absolute bottom-0 left-0 w-12 h-12 md:w-10 md:h-10 flex items-center justify-center rounded-md 
                ${current === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-[#1A2B5F] text-white hover:bg-[#0d1633]"}`}
            >
              ←
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={next}
              disabled={current === items.length - itemsPerView}
              className={`absolute bottom-0 right-0 w-12 h-12 md:w-10 md:h-10 flex items-center justify-center rounded-md 
                ${current === items.length - itemsPerView ? "bg-gray-300 cursor-not-allowed" : "bg-[#1A2B5F] text-white hover:bg-[#0d1633]"}`}
            >
              →
            </button>

            {/* DOTS MOBILE + DESKTOP */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
  {[...Array(items.length - itemsPerView + 1)].map((_, i) => (
    <span
      key={i}
      onClick={() => goToSlide(i)}
      className={`cursor-pointer rounded-full transition-all
        ${i === current ? "bg-[#F15A24]" : "bg-gray-300"}
        ${itemsPerView === 1 ? "w-2 h-2" : "w-3 h-3"}`}
    ></span>
  ))}
</div>

          </div>
        </div>
      </section>
    </>
  );
}
