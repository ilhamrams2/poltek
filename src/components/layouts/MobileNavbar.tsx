"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine, RiArrowDownSLine } from "react-icons/ri";
import { MENU } from "@/data/menu";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#020617] p-5 lg:hidden border-b border-white/[0.08] relative z-50">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
             <Image src="/images/logo_politeknik.png" alt="Logo" width={40} height={40} className="w-full h-full object-contain drop-shadow-lg" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-white text-[10px] tracking-tighter leading-none">POLITEKNIK</span>
            <span className="font-bold text-[#FF6B00] text-[8px] tracking-widest leading-none mt-1">PRESTASI PRIMA</span>
          </div>
        </Link>

        <button 
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
        >
          {open ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-[#020617]"
          >
            <div className="py-8 space-y-2 border-t border-white/5 mt-5">
              {/* Beranda */}
              <Link 
                href="/" 
                onClick={() => setOpen(false)}
                className="block text-xs font-black uppercase tracking-widest text-white/80 py-4 px-4 hover:bg-white/5 rounded-2xl"
              >
                Beranda
              </Link>

              {/* Menu Dinamis */}
              {MENU.map((menu) => (
                <div key={menu.id} className="px-2">
                  <button
                    onClick={() =>
                      setDropdown(dropdown === menu.id ? null : menu.id)
                    }
                    className="w-full flex justify-between items-center py-4 px-4 text-xs font-black uppercase tracking-widest text-white/80 hover:bg-white/5 rounded-2xl"
                  >
                    {menu.title}
                    <RiArrowDownSLine
                      size={20}
                      className={`transition-transform duration-300 ${
                        dropdown === menu.id ? "rotate-180 text-[#FF6B00]" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {dropdown === menu.id && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="pl-6 space-y-1 mb-4"
                      >
                        {menu.items?.map((item) => (
                          <Link
                            key={item.label}
                            href={item.url || "#"}
                            onClick={() => setOpen(false)}
                            className="block text-xs font-bold text-white/50 py-3 hover:text-[#FF6B00] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}

                        {menu.subgroups?.map((sub) => (
                          <div key={sub.title} className="pt-2">
                            <span className="text-[8px] font-black uppercase tracking-widest text-white/20 block mb-2 px-1">{sub.title}</span>
                            <div className="space-y-1">
                              {sub.items.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.url}
                                  onClick={() => setOpen(false)}
                                  className="block text-xs font-bold text-white/40 py-2 hover:text-[#FF6B00] transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-6 px-4">
                 <Link 
                   href="https://wa.me/6281380008079"
                   onClick={() => setOpen(false)}
                   className="block w-full text-center py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-[#FF6B00]/20"
                 >
                   Join Now
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
