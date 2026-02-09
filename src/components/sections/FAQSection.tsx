"use client";

import { useState } from "react";
import { RiAddLine, RiSubtractLine, RiQuestionLine, RiWhatsappLine, RiMessage2Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Bagaimana cara mendaftar ke Politeknik Prestasi Prima?",
    a: "Calon mahasiswa dapat mendaftar melalui website resmi di menu Pendaftaran atau datang langsung ke kampus untuk proses pendaftaran offline melalui tim admisi kami.",
  },
  {
    q: "Apa syarat pendaftaran mahasiswa baru?",
    a: "Syarat umum meliputi scan ijazah SMA/SMK sederajat, pas foto terbaru, kartu identitas, dan pengisian formulir pendaftaran. Beberapa program studi mungkin memerlukan tes kompetensi dasar.",
  },
  {
    q: "Program studi apa saja yang tersedia di Poltek Presma?",
    a: "Kami menawarkan berbagai program vokasi unggulan mulai dari D3 Administrasi Perkantoran, Manajemen Pemasaran, hingga D4 Teknologi Rekayasa Perangkat Lunak dan Multimedia.",
  },
  {
    q: "Kapan jadwal pendaftaran tahun akademik berikutnya?",
    a: "Gelombang pendaftaran biasanya dibuka mulai Januari untuk Gelombang 1. Informasi detail mengenai tanggal penting dapat Anda pantau melalui dashboard pendaftaran.",
  },
  {
    q: "Apakah Poltek Presma menawarkan beasiswa?",
    a: "Ya, kami memiliki program Beasiswa Prestasi, Beasiswa Tahfidz, dan Beasiswa Mitra Industri yang dapat memberikan potongan biaya kuliah hingga 100%.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full text-purple-700 text-xs font-bold uppercase tracking-widest mb-6 border border-purple-100">
            <RiQuestionLine size={16} />
            Support Center
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-black text-[#1D234E] leading-[1.1] mb-12">
            Pertanyaan <span className="text-orange-500">Populer</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg font-medium">
            Temukan jawaban cepat untuk pertanyaan yang paling sering diajukan mengenai pendaftaran, biaya, dan fasilitas.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`group rounded-3xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-gray-50 border-purple-100 shadow-xl shadow-purple-900/5 scale-[1.01]" 
                    : "bg-white border-gray-100 hover:border-purple-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-8 py-7 text-left gap-6"
                >
                  <span className={`text-lg md:text-xl font-black transition-colors ${
                    isOpen ? "text-[#1D234E]" : "text-gray-700 group-hover:text-purple-700"
                  }`}>
                    {item.q}
                  </span>
                  
                  <div className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    isOpen ? "bg-[#1D234E] text-white rotate-180" : "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
                  }`}>
                    {isOpen ? <RiSubtractLine size={20} /> : <RiAddLine size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8">
                        <div className="h-[1px] bg-purple-100 mb-6" />
                        <p className="text-lg lg:text-xl font-medium leading-relaxed text-gray-600">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Prompt */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-6 sm:p-8 lg:p-10 rounded-[2.5rem] bg-[#1D234E] text-white flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-orange-500 shrink-0">
              <RiMessage2Line size={32} />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black">Masih Punya Pertanyaan?</h4>
              <p className="text-white/60 font-medium text-sm sm:text-base">Tim kami siap membantu Anda kapan saja.</p>
            </div>
          </div>
          
          <a
            href="https://wa.me/628123456789"
            className="group relative w-full sm:w-auto px-6 py-4 sm:px-8 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-xl shadow-green-900/40 text-center whitespace-nowrap flex items-center justify-center gap-2"
          >
            <RiWhatsappLine size={20} />
            Hubungi Lewat WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
