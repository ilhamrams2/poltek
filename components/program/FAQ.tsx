"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

// ===============================
// TIPE PROGRAM
// ===============================
type ProgramType = "rpl" | "manajemen" | "administrasi";

interface Props {
  program?: ProgramType;
}

// ===============================
// DATA FAQ
// ===============================
const faqData: Record<
  ProgramType,
  Array<{ q: string; a: string }>
> = {
  rpl: [
    {
      q: "Apa yang dipelajari di Program RPL?",
      a: "Mahasiswa mempelajari pemrograman, basis data, UI/UX, hingga pengembangan aplikasi web dan mobile.",
    },
    {
      q: "Apa prospek kerja lulusan RPL?",
      a: "Lulusan dapat menjadi software engineer, web developer, mobile developer, dan IT consultant.",
    },
    {
      q: "Apakah mahasiswa RPL belajar pengembangan mobile?",
      a: "Ya, terdapat materi khusus pengembangan aplikasi Android dengan Kotlin dan Flutter.",
    },
    {
      q: "Apakah tersedia proyek nyata (real project)?",
      a: "Ya, mahasiswa akan mengerjakan proyek sistem informasi dan aplikasi berbasis kebutuhan industri.",
    },
    {
      q: "Apakah tersedia sertifikasi internasional?",
      a: "Program RPL menyediakan akses ke sertifikasi seperti AWS, Google, dan Kompetensi BNSP.",
    },
  ],

  manajemen: [
    {
      q: "Apa yang dipelajari di Manajemen Pemasaran?",
      a: "Mempelajari branding, digital marketing, consumer behavior, dan strategi bisnis modern.",
    },
    {
      q: "Apakah tersedia magang di industri pemasaran?",
      a: "Ya, program ini bekerja sama dengan berbagai perusahaan untuk kegiatan PKL dan magang.",
    },
    {
      q: "Apakah mahasiswa belajar digital marketing?",
      a: "Ya, termasuk social media marketing, SEO, SEM, dan paid advertising.",
    },
    {
      q: "Bagaimana peluang kerja lulusan pemasaran?",
      a: "Lulusan dapat bekerja sebagai marketing officer, brand specialist, sales manager, atau konsultan pemasaran.",
    },
    {
      q: "Apakah tersedia kegiatan praktik lapangan?",
      a: "Ada kunjungan industri, kampanye pemasaran nyata, dan project kolaborasi dengan UMKM.",
    },
  ],

  administrasi: [
    {
      q: "Keahlian apa yang dipelajari di Administrasi Perkantoran?",
      a: "Mempelajari kearsipan, pelayanan administrasi, teknologi perkantoran, dan komunikasi bisnis.",
    },
    {
      q: "Apa peluang kerja lulusan Administrasi Perkantoran?",
      a: "Lulusan dapat bekerja sebagai staff administrasi, sekretaris, resepsionis, hingga office manager.",
    },
    {
      q: "Apakah mahasiswa belajar software perkantoran?",
      a: "Ya, termasuk Microsoft Office, Google Workspace, serta aplikasi administrasi digital.",
    },
    {
      q: "Apakah ada praktik kerja lapangan?",
      a: "Ada, berupa PKL di perusahaan, instansi pemerintah, dan lembaga pendidikan.",
    },
    {
      q: "Apakah ada materi pelayanan publik?",
      a: "Ya, termasuk komunikasi layanan, etika pelayanan, dan manajemen front office.",
    },
  ],
};

// ===============================
// FAQ COMPONENT
// ===============================
export default function FAQSection({ program = "rpl" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  const faqs = faqData[program];

  const handleToggle = (idx: number) => {
    const newIndex = openIndex === idx ? null : idx;
    setOpenIndex(newIndex);

    setTimeout(() => {
      if (newIndex !== null && refs.current[newIndex]) {
        refs.current[newIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 300);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden px-6 flex flex-col items-center">
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-purple-800">F</span>
        <span className="text-orange-500">A</span>
        <span className="text-purple-800">Q</span>
      </h2>

      {/* FAQ LIST */}
      <div ref={wrapperRef} className="w-full max-w-3xl space-y-5">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              ref={(el) => {
                refs.current[idx] = el; // FIX: Tidak mengembalikan nilai apa pun (void)
              }}
              className="bg-white shadow-md rounded-xl px-6 py-5 cursor-pointer border border-transparent hover:border-purple-200 transition-all duration-300"
              onClick={() => handleToggle(idx)}
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-800 text-base md:text-lg">
                  {item.q}
                </p>

                <div
                  className={`transition-all duration-500 text-purple-700 bg-purple-100 w-8 h-8 flex items-center justify-center rounded-full shadow-sm ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </div>

              {/* Answer */}
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
