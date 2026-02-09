"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RiQuestionLine, 
  RiAddLine, 
  RiSubtractLine, 
  RiSearchLine,
  RiWhatsappLine,
  RiMailLine,
  RiArrowRightUpLine,
  RiFlashlightLine,
  RiUserStarLine,
  RiSchoolLine
} from "react-icons/ri";
import Image from "next/image";

interface FAQItem {
  category: string;
  q: string;
  a: string;
  hot?: boolean;
}

interface PremiumFAQHubProps {
  title?: string;
  subtitle?: string;
  description?: string;
  initialFaqs: FAQItem[];
  showCategories?: boolean;
}

const defaultCategories = [
  { id: "pendaftaran", label: "Pendaftaran", icon: RiUserStarLine },
  { id: "akademik", label: "Akademik", icon: RiSchoolLine },
  { id: "fasilitas", label: "Fasilitas", icon: RiFlashlightLine },
];

export default function PremiumFAQHub({ 
  title = "Ada yang bisa Kami bantu?", 
  subtitle = "Hub Pusat Bantuan",
  description = "Segala informasi yang Anda butuhkan untuk memulai perjalanan masa depan di Politeknik Prestasi Prima ada di sini.",
  initialFaqs,
  showCategories = true
}: PremiumFAQHubProps) {
  const [activeCategory, setActiveCategory] = useState(initialFaqs[0]?.category || "pendaftaran");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = initialFaqs.filter(f => 
    (!showCategories || f.category === activeCategory) && 
    (f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-[#FF6B00] selection:text-white pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#FF6B00]/10 blur-[100px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <RiQuestionLine className="animate-bounce" /> {subtitle}
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
               {title.split(' Kami ').length > 1 ? (
                 <>
                   {title.split(' Kami ')[0]} <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">Kami {title.split(' Kami ')[1]}</span>
                 </>
               ) : (
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">{title}</span>
               )}
            </h1>
            
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-12">
              {description}
            </p>

            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/20 to-blue-600/20 blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative flex items-center bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl p-2 focus-within:border-[#FF6B00]/50 transition-all">
                <RiSearchLine className="ml-4 text-gray-500 text-xl" />
                <input 
                  type="text" 
                  placeholder="Cari pertanyaan..."
                  className="w-full bg-transparent border-none px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {showCategories && (
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 mb-6 pl-4">Kategori Utama</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {defaultCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(null);
                    }}
                    className={`flex items-center gap-4 p-5 rounded-3xl transition-all duration-300 border ${
                      activeCategory === cat.id 
                        ? "bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] border-[#FF6B00] shadow-xl shadow-[#FF6B00]/20 scale-[1.02]" 
                        : "bg-white/5 border-white/5 hover:bg-white/10 border-white/10"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-colors ${
                      activeCategory === cat.id ? "bg-white/20 text-white" : "bg-white/5 text-[#FF6B00]"
                    }`}>
                      <cat.icon />
                    </div>
                    <span className={`font-black uppercase tracking-widest text-xs ${
                      activeCategory === cat.id ? "text-white" : "text-gray-300"
                    }`}>
                      {cat.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-transparent border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full -mr-16 -mt-16" />
              <h4 className="text-lg font-black mb-4 relative z-10">Punya kendala?</h4>
              <p className="text-gray-400 text-sm mb-6 relative z-10">Hubungi tim bantuan kami segera.</p>
              <div className="space-y-3 relative z-10">
                <a href="https://wa.me/6285199328825" className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all text-xs font-bold">
                  <RiWhatsappLine className="text-[#FF6B00] text-lg" /> WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        )}

        <div className={showCategories ? "lg:col-span-8" : "lg:col-span-12 max-w-4xl mx-auto w-full"}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className={`group rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                        isOpen 
                          ? "bg-white/[0.04] border-[#FF6B00]/30 shadow-2xl shadow-[#FF6B00]/5" 
                          : "bg-white/[0.02] border-white/5 hover:border-white/10"
                      }`}
                    >
                      <button 
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-8 md:p-10 text-left gap-6 group"
                      >
                        <div className="flex items-center gap-6">
                           <div className={`w-12 h-12 rounded-2xl hidden md:flex items-center justify-center shrink-0 border transition-all ${
                             isOpen ? "bg-[#FF6B00] border-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/40" : "bg-white/5 border-white/5 text-gray-500 group-hover:text-white"
                           }`}>
                              {idx + 1}
                           </div>
                           <h3 className={`text-xl md:text-2xl font-black pr-4 transition-colors ${
                             isOpen ? "text-white" : "text-gray-400 group-hover:text-white"
                           }`}>
                             {faq.q}
                           </h3>
                        </div>
                        
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500 ${
                          isOpen ? "bg-white text-[#020617] rotate-180" : "bg-white/5 border-white/10 text-white group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00]"
                        }`}>
                          {isOpen ? <RiSubtractLine size={24} /> : <RiAddLine size={24} />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          >
                            <div className="px-8 md:px-10 pb-10 md:pb-12 pt-0">
                               <div className="h-[1px] bg-gradient-to-r from-[#FF6B00]/50 to-transparent mb-8" />
                               <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
                                 {faq.a}
                               </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              ) : (
                <div className="py-20 text-center bg-white/5 border border-white/5 rounded-[3rem]">
                   <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 text-gray-500">
                      <RiSearchLine size={40} />
                   </div>
                   <h3 className="text-xl font-black text-white mb-2">Tidak ditemukan</h3>
                   <p className="text-gray-500">Coba gunakan kata kunci lain.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- FLOATING CTA --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-lg">
         <motion.div 
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           className="bg-white/[0.08] backdrop-blur-3xl border border-white/10 p-2 rounded-[2rem] shadow-2xl flex items-center justify-between"
         >
            <div className="flex items-center gap-4 pl-4">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B00] to-orange-400 p-[2px]">
                  <div className="w-full h-full bg-[#020617] rounded-full flex items-center justify-center">
                    <Image src="/images/logo_politeknik.png" alt="Admin" width={24} height={24} />
                  </div>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#FF6B00]">Pusat Bantuan</p>
                  <p className="text-xs font-bold text-white">Online 24/7</p>
               </div>
            </div>
            <a 
              href="https://wa.me/6285199328825"
              className="px-6 py-3 bg-[#FF6B00] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-[#FF6B00]/40 transition-transform active:scale-95"
            >
              Mulai Chat
            </a>
         </motion.div>
      </div>

    </div>
  );
}
