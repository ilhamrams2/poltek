"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { RiDoubleQuotesR, RiMailSendLine, RiPhoneLine } from "react-icons/ri";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function DirectorMessagePage() {
  return (
    <main className={`${jakarta.className} min-h-screen bg-white`}>
      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-20 bg-[#0E1333] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F15A24]/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F15A24]">Institutional Message</span>
               </div>
               <h1 className="text-4xl md:text-7xl font-black mb-4">Sambutan <span className="text-[#F15A24]">Direktur</span></h1>
               <div className="w-20 h-1.5 bg-[#F15A24] mx-auto rounded-full" />
            </motion.div>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Director Image & Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32">
              <div className="relative rounded-[3rem] overflow-hidden shadow-3xl border-8 border-gray-50 group">
                <Image
                  src="/images/direktur.png"
                  alt="DR. WANNEN PAKPAHAN, MM."
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1333] via-transparent to-transparent opacity-40" />
                
                {/* Floating Name Overlay */}
                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white">
                   <h3 className="text-xl font-black text-[#0E1333]">DR. WANNEN PAKPAHAN, MM.</h3>
                   <p className="text-[#F15A24] text-[10px] font-black uppercase tracking-widest mt-1">Direktur Politeknik Prestasi Prima</p>
                </div>
              </div>

              {/* Quick Action Link */}
              <div className="mt-10 flex gap-4">
                 <div className="flex-1 bg-gray-50 p-6 rounded-3xl border border-gray-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F15A24] text-white flex items-center justify-center shadow-lg shadow-[#F15A24]/20"><RiPhoneLine /></div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">Hubungi <br /> Kantor Direksi</div>
                 </div>
                 <div className="flex-1 bg-gray-50 p-6 rounded-3xl border border-gray-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0E1333] text-white flex items-center justify-center shadow-lg shadow-black/20"><RiMailSendLine /></div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">E-mail <br /> Resmi</div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <RiDoubleQuotesR className="text-8xl text-gray-100 mb-6" />
            
            <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-[1.8]">
              <p className="italic text-[#F15A24] text-xl mb-8">
                Assalamu’alaikum Warahmatullahi Wabarakatuh.
              </p>
              
              <p className="text-2xl font-bold text-[#0E1333] mb-10 leading-snug">
                Kami percaya bahwa pendidikan vokasi adalah kunci pembuka pintu masa depan industri digital yang inklusif dan berkelanjutan.
              </p>

              <p className="mb-8">
                Selamat datang di portal resmi Politeknik Prestasi Prima. Di era transformasi digital yang begitu cepat, kami hadir dengan visi yang jelas: melahirkan lulusan yang tidak hanya menguasai teknologi, tetapi juga memiliki integritas, inovasi, dan kemauan belajar yang tak henti.
              </p>
              
              <p className="mb-8">
                Setiap kurikulum yang kami susun, setiap laboratorium yang kami bangun, dan setiap kemitraan yang kami jalin memiliki satu tujuan utama—memastikan mahasiswa kami mendapatkan pengalaman belajar yang nyata dan relevan dengan industri global. Kami tidak hanya mengajar, kami membimbing bakat untuk menjadi pemimpin masa depan.
              </p>

              <p className="mb-12">
                Bagi kami, Politeknik Prestasi Prima bukan sekadar tempat menuntut ilmu; ini adalah ekosistem tempat kreativitas bertemu teknologi, dan ambisi bertemu peluang. Mari bergabung bersama kami untuk mencetak prestasi gemilang bagi bangsa.
              </p>

              <div className="pt-10 border-t border-gray-100 italic font-semibold text-[#0E1333]">
                Terima kasih atas kepercayaan dan kunjungan Anda. <br />
                Wassalamu’alaikum Warahmatullahi Wabarakatuh.
              </div>
            </div>

            <div className="mt-16">
              <Link
                href="https://wa.me/6285199328825"
                className="inline-flex items-center gap-4 bg-[#F15A24] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-[#F15A24]/30 hover:scale-105 transition-all"
              >
                Daftar Program Sekarang
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. QUOTE FULL WIDTH */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <div className="text-xs font-black uppercase tracking-[0.5em] text-[#F15A24] mb-8">Inspirasi Kampus</div>
           <h2 className="text-3xl md:text-5xl font-black text-[#0E1333] leading-tight italic">
             "Bukan hanya mencetak lulusan siap kerja, tapi mencetak pemimpin yang <span className="text-[#F15A24]">siap menciptakan lapangan kerja</span>."
           </h2>
        </div>
      </section>

      <style jsx global>{`
        .shadow-3xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </main>
  );
}
