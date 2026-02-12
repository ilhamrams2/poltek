"use client";

import { useState, useRef, useEffect } from "react";
import { LogOut, Key, User, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface UserDropdownProps {
  admin: any;
  onLogout: () => void;
}

export function UserDropdown({ admin, onLogout }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        className="flex items-center gap-4 pl-4 border-l border-slate-100 group transition-all"
      >
        <div className="flex flex-col items-end">
          <span className="text-sm font-bold text-slate-900 leading-none group-hover:text-indigo-600 transition-colors">
            {admin?.name || admin?.email?.split('@')[0] || "Guest"}
          </span>
          <span className={`text-[9px] font-black uppercase tracking-widest mt-1 px-2 py-0.5 rounded-md ${admin?.role === 'SUPER_ADMIN' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-400'}`}>
            {admin?.role || "GUEST"}
          </span>
        </div>
        <div className="relative group/avatar">
           <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#4338CA] via-indigo-600 to-orange-500 flex items-center justify-center font-black text-white shadow-lg shadow-indigo-500/20 text-sm group-hover/avatar:scale-105 transition-transform">
              {(admin?.name?.[0] || admin?.email?.[0] || "G").toUpperCase()}
           </div>
           <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center border border-slate-100 shadow-sm">
              <ChevronDown size={10} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
           </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute right-0 mt-4 w-56 bg-white rounded-3xl shadow-2xl shadow-indigo-500/10 border border-slate-100 overflow-hidden z-[100]"
          >
            <div className="p-2 space-y-1">
               <div className="px-4 py-3 border-b border-slate-50 mb-1">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Account Session</p>
                  <p className="text-xs font-bold text-slate-500 mt-0.5 truncate">{admin?.email}</p>
               </div>

               <Link 
                 href="/admin/profile" 
                 onClick={() => setIsOpen(false)}
                 className="flex items-center gap-3 w-full px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-2xl transition-all font-bold group"
               >
                 <div className="p-2 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    <User size={16} />
                 </div>
                 <span className="text-xs">Profil Saya</span>
               </Link>

               <Link 
                 href="/admin/settings/password" 
                 onClick={() => setIsOpen(false)}
                 className="flex items-center gap-3 w-full px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-2xl transition-all font-bold group"
               >
                 <div className="p-2 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    <Key size={16} />
                 </div>
                 <span className="text-xs">Ganti Password</span>
               </Link>

               <button 
                 onClick={() => {
                   setIsOpen(false);
                   onLogout();
                 }}
                 className="flex items-center gap-3 w-full px-4 py-3 text-rose-500 hover:bg-rose-50 rounded-2xl transition-all font-bold group"
               >
                 <div className="p-2 rounded-xl bg-rose-50 text-rose-400 group-hover:bg-rose-100 group-hover:text-rose-600 transition-colors">
                    <LogOut size={16} />
                 </div>
                 <span className="text-xs">Logout Panel</span>
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
