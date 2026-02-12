"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";
import { Session } from "@supabase/supabase-js";
import { 
  LogIn, 
  Loader2, 
  ShieldCheck, 
  Mail, 
  Lock, 
  ArrowRight,
  Sparkles,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [supabase, setSupabase] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [session, setSession] = useState<Session | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const client = createClient();
    setSupabase(client);
    
    const checkSession = async () => {
      const { data: { session } } = await client.auth.getSession();
      setSession(session);
      setCheckingSession(false);
      if (session) {
        console.log(`[AUTH] Session found for: ${session.user.email}`);
      }
    };
    checkSession();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.success) {
        console.log(`[AUTH] Login success for PASETO session at ${new Date().toLocaleString()}`);
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        setError(result.error || "Login gagal");
        setLoading(false);
      }
    } catch (err) {
      setError("Terjadi kesalahan koneksi");
      setLoading(false);
    }
  };

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <Loader2 className="text-orange-500" size={48} />
        </motion.div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F172A] p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y:0 }}
          className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-10 text-center space-y-8 relative"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-purple-600"></div>
          
          <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10 rotate-3">
            <ShieldCheck size={48} />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Sesi Aktif</h2>
            <p className="text-slate-500 font-medium">
              Anda sudah masuk sebagai <br/>
              <span className="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full text-sm inline-block mt-2">
                {session.user.email}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <button
              onClick={() => router.push("/admin/dashboard")}
              className="w-full bg-[#4338CA] hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Lanjut ke Dashboard</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={async () => {
                if (!supabase) return;
                await supabase.auth.signOut();
                console.log(`[AUTH] Logout from login page: ${session?.user?.email}`);
                setSession(null);
                router.refresh();
              }}
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-500 py-4 rounded-2xl font-bold transition-all active:scale-95 border border-slate-100"
            >
              Keluar Sesi
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-sans relative overflow-hidden"
    >
      {/* Background Decorative Elements for the whole page */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-indigo-500/10 rounded-full blur-[150px]"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1] // Custom easeOutExpo
        }}
        className="w-full max-w-6xl h-[650px] bg-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] overflow-hidden flex flex-col md:flex-row border border-white relative z-10"
      >
        {/* LEFT PANEL - BRANDING */}
        <div className="md:w-[45%] bg-[#0F172A] relative overflow-hidden p-12 flex flex-col justify-between text-white">
          {/* Background Decorative Elements */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-orange-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-purple-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/patern/jaringan.png')] bg-repeat"></div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#4338CA] to-[#6366F1] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight leading-none uppercase">
                  Admin<span className="text-orange-500">PP</span>
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Management Portal</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative z-10 space-y-6"
          >
            <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
            <div className="relative w-24 h-24 mb-4">
              <Image 
                src="/logo.svg" 
                alt="Poltek Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <h1 className="text-5xl font-black leading-[1.1] tracking-tight">
              Navigasi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-400">Digital</span> <br />
              Pendidikan.
            </h1>
            <p className="text-slate-400 text-sm font-medium max-w-xs leading-relaxed">
              Panel eksklusif untuk mengelola ekosistem digital dan prestasi Politeknik Prestasi Prima secara terpadu.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.6 }}
            className="relative z-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500"
          >
           <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-[9px] md:text-[10px] tracking-widest uppercase font-semibold text-slate-500">
    {/* Group 1: Developer & Copyright */}
    <div className="flex items-center gap-2">
        <span>Developed by <span className="text-slate-300">Ardy Al-Banna</span></span>
        <span className="hidden md:inline text-slate-800">|</span>
        <span>&copy; 2026 PP Management</span>
    </div>
    
    {/* Group 2: Version Badge */}
    <div className="flex items-center gap-2">
        <div className="hidden md:block w-1 h-1 bg-slate-800 rounded-full"></div>
        <span className="bg-slate-900/50 text-blue-500/80 px-2 py-0.5 rounded border border-slate-800 text-[8px] md:text-[9px]">
            V3.0.0
        </span>
    </div>
</div>
          </motion.div>
        </div>

        {/* RIGHT PANEL - LOGIN FORM */}
        <div className="md:w-[55%] p-12 md:p-20 flex flex-col justify-center bg-white relative">
          <div className="max-w-md w-full mx-auto space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Selamat Datang</h2>
              <p className="text-slate-500 font-medium tracking-tight">
                Masukkan kredensial Anda untuk mengakses sistem manajemen.
              </p>
            </motion.div>

            <form onSubmit={handleLogin} className="space-y-6">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-rose-50 border border-rose-100 text-rose-600 px-5 py-3 rounded-2xl text-sm font-bold flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-rose-500/10 rounded-full flex items-center justify-center shrink-0">
                      <ShieldCheck size={14} />
                    </div>
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] ml-1">Nama Pengguna / Email</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors">
                      <Mail size={18} />
                    </div>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@poltek.ac.id"
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white border focus:border-orange-200 outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 focus:ring-4 focus:ring-orange-500/5 shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] ml-1">Kata Sandi Rahasia</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors">
                      <Lock size={18} />
                    </div>
                    <input
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white border focus:border-orange-200 outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 focus:ring-4 focus:ring-orange-500/5 shadow-inner"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1E1B4B] hover:bg-[#4338CA] disabled:bg-slate-300 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-indigo-900/10 active:scale-[0.98] group relative overflow-hidden uppercase tracking-widest text-xs"
                >
                  {loading ? (
                    <Loader2 size={24} className="animate-spin" />
                  ) : (
                    <>
                      <span>Masuk ke Panel</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      
                      {/* Hover Flash Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-6">
              <div className="h-[1px] flex-1 bg-slate-100"></div>
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Politeknik Prestasi Prima</span>
              <div className="h-[1px] flex-1 bg-slate-100"></div>
            </div>
          </div>
          
          {/* Bottom Floating Decoration */}
          <div className="absolute bottom-8 right-12 hidden lg:flex items-center gap-2 text-[#0F172A]/5">
             <Sparkles size={40} />
          </div>
        </div>
      </motion.div>


      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.div>
  );
}

