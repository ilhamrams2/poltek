"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill, RiArrowRightLine, RiMapPin2Line, RiMailLine, RiPhoneLine } from "react-icons/ri";
import { MENU } from "@/data/menu";

export default function Footer() {
  return (
    <footer className="relative bg-[#080C1B] text-gray-400 overflow-hidden font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#F15A24]/5 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      {/* 1. RUNNING MOTTO - Modernized Marquee */}
      <div className="relative border-y border-white/5 bg-white/[0.02] py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-slow">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
                Politeknik Prestasi Prima – Mencetak Generasi Berprestasi
              </span>
              <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
                If Better is Possible, Good is Not Enough
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
                Berani Hebat, Berani Berprestasi
              </span>
              <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
            </div>
          ))}
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative w-16 h-16 flex items-center justify-center">
                 <Image
                   src="/images/logo_politeknik.png"
                   alt="Logo"
                   width={64}
                   height={64}
                   className="w-full h-full object-contain group-hover:scale-110 transition-transform drop-shadow-2xl"
                 />
              </div>
              <div>
                <h2 className="text-xl font-black text-white leading-none tracking-tight">Politeknik <br/> <span className="text-[#F15A24]">Prestasi Prima</span></h2>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Institusi pendidikan vokasi yang berfokus pada keunggulan kompetensi digital, 
              menciptakan profesional masa depan yang siap bersaing di kancah global.
            </p>

            {/* Contact Quick Info */}
            <div className="space-y-4">
               <div className="flex items-center gap-4 text-xs font-bold group cursor-pointer hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#F15A24] group-hover:bg-[#F15A24] group-hover:text-white transition-all">
                     <RiMapPin2Line />
                  </div>
                  <span>Jl. Hankam Raya No. 132, Jatiwarna, Bekasi</span>
               </div>
               <div className="flex items-center gap-4 text-xs font-bold group cursor-pointer hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#F15A24] group-hover:bg-[#F15A24] group-hover:text-white transition-all">
                     <RiMailLine />
                  </div>
                  <span>info@politekpresma.ac.id</span>
               </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: RiFacebookFill, url: "https://www.facebook.com/p/Politeknik-Prestasi-Prima/" },
                { icon: RiInstagramLine, url: "https://www.instagram.com/poltekpresma/" },
                { icon: RiYoutubeFill, url: "https://www.youtube.com/@poltekpresma" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl hover:bg-[#F15A24] hover:border-[#F15A24] hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 flex flex-wrap gap-x-12 gap-y-16 justify-between">
             {MENU.map((section) => (
               <div key={section.id} className="min-w-[140px]">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F15A24] mb-8">
                     {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.items?.map((link) => (
                      <li key={link.label}>
                         <Link 
                           href={link.url}
                           className="text-sm font-medium hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                         >
                           <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#F15A24] transition-colors" />
                           {link.label}
                         </Link>
                      </li>
                    ))}
                    {/* Additional nested items if any */}
                    {section.subgroups?.map(sub => (
                      sub.items.map(subLink => (
                        <li key={subLink.label}>
                          <Link 
                            href={subLink.url}
                            className="text-sm font-medium hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#F15A24] transition-colors" />
                            {subLink.label}
                          </Link>
                        </li>
                      ))
                    ))}
                  </ul>
               </div>
             ))}

             {/* Dynamic Program Links from MENU.akademik */}
             {/* Note: MENU.akademik items are already handled above by the loop */}
          </div>
        </div>

        {/* 3. NEWSLETTER / FORM SECTION - Premium Glassmorphism */}
        <div className="mt-24 p-12 lg:p-16 bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/5 relative overflow-hidden shadow-3xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#F15A24]/10 blur-[80px] rounded-full -mr-32 -mt-32" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                 <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                   Tertarik Bergabung <br/> <span className="text-[#F15A24]">Kami di Sini?</span>
                 </h3>
                 <p className="text-gray-400 font-medium mb-10 max-w-md">
                   Punya pertanyaan seputar pendaftaran atau program studi? Tim kami siap memberikan konsultasi gratis untuk masa depan Anda.
                 </p>
                 <Link 
                   href="https://wa.me/6285199328825" 
                   className="inline-flex items-center gap-4 bg-white text-[#080C1B] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                 >
                    Chat on WhatsApp <RiArrowRightLine className="text-xl" />
                 </Link>
              </div>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <input 
                   type="text" 
                   placeholder="Full Name" 
                   className="col-span-2 sm:col-span-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] transition-all"
                 />
                 <input 
                   type="email" 
                   placeholder="Email Address" 
                   className="col-span-2 sm:col-span-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] transition-all"
                 />
                 <textarea 
                   placeholder="Your Message..." 
                   rows={3}
                   className="col-span-2 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] transition-all"
                 />
                 <button className="col-span-2 bg-[#F15A24] text-white py-5 rounded-xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#F15A24]/20 hover:bg-orange-600 transition-all">
                    Send Inquiry
                 </button>
              </form>
           </div>
        </div>
      </div>

      {/* 4. BOTTOM BAR */}
      <div className="relative border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
             © {new Date().getFullYear()} Politeknik Prestasi Prima. All Rights Reserved.
           </div>
           
           <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-[#F15A24] transition-colors">Oren Solution V2.0</Link>
           </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }
        .shadow-3xl {
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </footer>
  );
}
