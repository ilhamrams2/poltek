"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { MENU } from "@/data/menu";
import { useState } from "react";

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <nav className="relative z-[100] px-6 lg:px-12 py-5 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* === LOGO === */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center">
             <Image
               src="/images/logo_politeknik.png"
               alt="Logo"
               width={48}
               height={48}
               className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
             />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-white text-sm tracking-tighter leading-none">POLITEKNIK</span>
            <span className="font-bold text-[#FF6B00] text-xs tracking-widest leading-none mt-1">PRESTASI PRIMA</span>
          </div>
        </Link>

        {/* === DESKTOP MENU === */}
        <ul className="hidden lg:flex items-center gap-2 xl:gap-4">
          <li>
            <Link 
              href="/" 
              className="px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest text-white/80 hover:text-white hover:bg-white/10 transition-all"
            >
              Beranda
            </Link>
          </li>

          {MENU.map((menu) => (
            <li 
              key={menu.id} 
              className="relative"
              onMouseEnter={() => setHoveredMenu(menu.id)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 group">
                {menu.title}
                <RiArrowDownSLine className={`text-lg transition-transform duration-300 ${hoveredMenu === menu.id ? "rotate-180 text-[#FF6B00]" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {hoveredMenu === menu.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 mt-3 w-72 bg-[#0F172A]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                  >
                    {/* Decorative Background for Dropdown */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/10 blur-[40px] rounded-full -mr-16 -mt-16 pointer-events-none" />

                    <div className="relative z-10 space-y-1">
                      {menu.items?.map((item) => (
                        <Link
                          key={item.label}
                          href={item.url || "#"}
                          className="flex items-center justify-between px-5 py-4 rounded-2xl hover:bg-white/[0.03] hover:translate-x-1 transition-all group/item"
                        >
                          <span className="text-sm font-bold text-white/70 group-hover/item:text-[#FF6B00]">{item.label}</span>
                          <RiArrowRightSLine className="text-white/20 group-hover/item:text-[#FF6B00] transition-colors" />
                        </Link>
                      ))}

                      {menu.subgroups?.map((sub) => (
                        <div key={sub.title} className="pt-4 mt-4 border-t border-white/5">
                           <h4 className="px-5 text-[9px] font-black uppercase tracking-[0.3em] text-[#FF6B00] mb-2">{sub.title}</h4>
                           {sub.items.map((child) => (
                             <Link
                               key={child.label}
                               href={child.url}
                               className="flex items-center justify-between px-5 py-3 rounded-xl hover:bg-white/[0.03] hover:translate-x-1 transition-all group/item"
                             >
                               <span className="text-xs font-bold text-white/50 group-hover/item:text-white">{child.label}</span>
                             </Link>
                           ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* === CTA / ACTION === */}
        <div className="hidden lg:flex items-center gap-6">
           <Link 
             href="https://wa.me/6285199328825"
             className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6B00] hover:text-white transition-colors"
           >
             Hotline
           </Link>
           <Link 
             href="/pmb/pendaftaran"
             className="relative px-8 py-3.5 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_10px_20px_-5px_rgba(255,107,0,0.4)] hover:scale-105 active:scale-95 transition-all overflow-hidden group"
           >
             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
             <span className="relative z-10">Join Now</span>
           </Link>
        </div>

      </div>
    </nav>
  );
}
