"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const faqs = [
    {
      q: "Bagaimana cara mendaftar ke Politeknik Prestasi Prima?",
      a: "Calon mahasiswa dapat mendaftar melalui website resmi atau datang langsung ke kampus untuk pendaftaran offline.",
    },
    {
      q: "Apa syarat pendaftaran mahasiswa baru?",
      a: "Syarat umum meliputi ijazah SMA/SMK sederajat, formulir pendaftaran, dan berkas tambahan sesuai ketentuan program studi.",
    },
    {
      q: "Program studi apa saja yang tersedia di Poltek Presma?",
      a: "Terdapat program studi D3 dan D4 seperti Administrasi Perkantoran, Pemasaran, Perangkat Lunak, TRPL, dan Multimedia.",
    },
    {
      q: "Kapan jadwal pendaftaran tahun akademik berikutnya?",
      a: "Jadwal pendaftaran biasanya dibuka mulai awal tahun dan berlangsung hingga pertengahan semester.",
    },
    {
      q: "Apakah Poltek Presma menawarkan beasiswa?",
      a: "Ya, tersedia berbagai jenis beasiswa akademik maupun non-akademik untuk mahasiswa berprestasi.",
    },
  ];

  const handleToggle = (idx: number) => {
    const newIndex = openIndex === idx ? null : idx;
    setOpenIndex(newIndex);

    // Auto scroll to selected
    setTimeout(() => {
      if (newIndex !== null && refs.current[newIndex]) {
        refs.current[newIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 300);
  };

  // ⬇️ Close FAQ if click outside wrapper
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-24 bg-white flex flex-col items-center px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-orange-500">F</span>
        <span className="text-purple-800">A</span>
        <span className="text-orange-500">Q</span>
      </h2>

      {/* FAQ Wrapper (for click outside detection) */}
      <div ref={wrapperRef} className="w-full max-w-3xl space-y-5">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              ref={(el) => {
                refs.current[idx] = el;
              }}
              className="bg-white shadow-md rounded-xl px-6 py-5 cursor-pointer border
              border-transparent hover:border-purple-200 transition-all duration-300"
              onClick={() => handleToggle(idx)}
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-800 text-base md:text-lg">
                  {item.q}
                </p>

                <div
                  className={`transition-all duration-500 text-purple-700 
                    bg-purple-100 w-8 h-8 flex items-center justify-center rounded-full shadow-sm
                    ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </div>

              {/* Answer (animated) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "max-h-40 opacity-100 mt-4 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2"
                }`}
              >
                <p className="text-gray-600 text-sm md:text-base leading-relaxed border-t pt-4 border-purple-100">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
