"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, HelpCircle, ArrowRight, Home, Search, GraduationCap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6 font-sans overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-orange-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[100px]" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10 py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Large 404 Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center lg:items-start pt-20 lg:pt-0"
          >
            <div className="relative group">
              {/* Floating Badge - Corrected Positioning */}
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-24 -left-4 sm:-top-28 sm:-left-8 z-20"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-4 sm:p-5 rounded-2xl sm:rounded-[2rem] shadow-[0_15px_35px_rgba(249,115,22,0.4)] border-2 sm:border-4 border-white/10 backdrop-blur-xl">
                  <HelpCircle size={28} className="sm:hidden text-white" />
                  <HelpCircle size={40} className="hidden sm:block text-white" />
                </div>
              </motion.div>

              <motion.h1 
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.05)",
                    "0 0 40px rgba(255, 255, 255, 0.1)",
                    "0 0 20px rgba(255, 255, 255, 0.05)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-[9rem] sm:text-[12rem] lg:text-[14rem] font-black text-white leading-[0.8] tracking-tighter select-none italic opacity-95 text-center lg:text-left contrast-125"
              >
                404
              </motion.h1>
            </div>
            
            <div className="mt-8 flex items-center gap-4 lg:ml-2">
              <div className="hidden sm:block h-[2px] w-12 bg-orange-500/50"></div>
              <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Poltek Prestasi Prima</span>
              <div className="hidden sm:block h-[2px] w-12 bg-orange-500/50 lg:hidden"></div>
            </div>
          </motion.div>

          {/* Right Side: Content & Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest"
              >
                <Search size={14} />
                Halaman Hilang di Labirin Digital
              </motion.div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Oops! Pencarian <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Terhenti Disini.</span>
              </h2>
              <p className="text-slate-400 font-medium text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Kami sudah menyisir setiap sudut kampus digital kami, namun halaman yang Anda tuju sepertinya sedang "bolos" hari ini.
              </p>
            </div>

            {/* Navigation Cards */}
            <div className="grid grid-cols-1 gap-4">
              <Link href="/" className="group">
                <motion.div 
                  whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className="p-5 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/0 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                      <Home size={22} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-bold text-sm tracking-tight">Kembali Ke Beranda</h4>
                      <p className="text-slate-500 text-xs text-nowrap">Mulai navigasi dari awal lagi.</p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-slate-600 group-hover:text-orange-500 transition-colors shrink-0" />
                </motion.div>
              </Link>

              <Link href="/studyProgram" className="group">
                <motion.div 
                  whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/0 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 shrink-0">
                      <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <GraduationCap size={22} strokeWidth={2.5} />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-tight">Cek Program Studi</h4>
                      <p className="text-slate-500 text-xs leading-tight">Temukan masa depan akademik Anda.</p>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-slate-600 group-hover:text-indigo-500 transition-colors shrink-0" />
                </motion.div>
              </Link>
            </div>

            {/* Fun Footer */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-[#0F172A] flex items-center justify-center text-[10px] font-bold text-slate-500 italic">
                      {i}
                    </div>
                  ))}
               </div>
               <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-tight lg:leading-none">
                  Jangan Khawatir, Admin Kami Sudah <br className="hidden lg:block" /> Diberitahu Tentang Ini.
               </span>
            </div>
          </motion.div>
        </div>
      </div>



      {/* Retro Grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>
    </div>
  );
}
