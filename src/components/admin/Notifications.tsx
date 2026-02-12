"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Inbox, Circle, Clock } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getUnreadMessagesCount } from "@/actions/cms";

export function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCount = async () => {
      const c = await getUnreadMessagesCount();
      setCount(c);
    };
    fetchCount();
    // Poll every 30 seconds
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 text-slate-400 hover:bg-slate-50 transition-all rounded-full border border-slate-100 group"
      >
        <Bell size={20} className="group-hover:text-indigo-600 transition-colors" />
        {count > 0 && (
          <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full animate-bounce" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute right-0 mt-4 w-80 bg-white rounded-3xl shadow-2xl shadow-indigo-500/10 border border-slate-100 overflow-hidden z-[100]"
          >
            <div className="p-6">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-black text-slate-900 text-sm uppercase tracking-tight">Notifikasi</h3>
                  {count > 0 && (
                    <span className="bg-rose-50 text-rose-600 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest">{count} BARU</span>
                  )}
               </div>

               <div className="space-y-4">
                  {count > 0 ? (
                    <Link 
                      href="/admin/inbox" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-orange-50/50 hover:bg-orange-50 border border-orange-100 transition-all group"
                    >
                       <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                          <Inbox size={18} />
                       </div>
                       <div>
                          <p className="text-xs font-bold text-slate-800">Pesan Masuk Baru</p>
                          <p className="text-[10px] text-slate-500 mt-1 font-medium italic">Anda memiliki {count} pesan yang belum dibaca di Inbox.</p>
                       </div>
                    </Link>
                  ) : (
                    <div className="py-10 flex flex-col items-center justify-center text-center space-y-3">
                       <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-200">
                          <Bell size={24} />
                       </div>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tidak ada notifikasi</p>
                    </div>
                  )}
               </div>

               {count > 0 && (
                 <Link 
                   href="/admin/inbox" 
                   onClick={() => setIsOpen(false)}
                   className="mt-6 block w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest text-center transition-all"
                 >
                    Buka Kotak Masuk
                 </Link>
               )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
