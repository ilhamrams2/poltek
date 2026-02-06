"use client";

import AcademicProgramsSection from "@/components/sections/AcademicProgramsSection";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { RiBookOpenLine, RiShieldUserLine, RiGlobalLine } from "react-icons/ri";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function StudyProgramPage() {
  return (
    <main className={`${jakarta.className} min-h-screen bg-white`}>
      {/* Small Hero for the listing page */}
      <section className="pt-32 pb-10 bg-[#0E1333] text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 blur-[80px]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F15A24] rounded-full" />
         </div>
         
         <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
               <h1 className="text-4xl md:text-7xl font-black mb-6">Pilihan <span className="text-[#F15A24]">Program Studi</span></h1>
               <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                 Temukan jalur karir yang tepat untuk masa depan Anda. Seluruh program kami dirancang bersama industri untuk memastikan relevansi dan kesiapan kerja.
               </p>
            </motion.div>
         </div>
      </section>

      {/* The main sections from home but enhanced */}
      <div className="py-20">
         <AcademicProgramsSection />
      </div>

      {/* Feature Section for Academics */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
           {[
             { title: "Kurikulum Terapan", desc: "70% praktik dan 30% teori untuk memastikan penguasaan skill teknis.", icon: RiBookOpenLine },
             { title: "Sertifikasi Industri", desc: "Setiap lulusan dibekali sertifikasi kompetensi bertaraf internasional.", icon: RiShieldUserLine },
             { title: "Koneksi Global", desc: "Jaringan luas dengan perusahaan teknologi dan manufaktur terkemuka.", icon: RiGlobalLine },
           ].map((feat, i) => (
             <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-[#0E1333]/5 border border-white">
                <div className="w-16 h-16 rounded-2xl bg-[#F15A24]/10 text-[#F15A24] flex items-center justify-center text-3xl mb-8">
                   <feat.icon />
                </div>
                <h3 className="text-xl font-black text-[#0E1333] mb-4">{feat.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{feat.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </main>
  );
}
