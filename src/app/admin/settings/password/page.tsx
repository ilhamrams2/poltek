"use client";

import { useState } from "react";
import { Key, ShieldCheck, ArrowLeft, Loader2, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { changeAdminPassword } from "@/actions/cms";
import { motion } from "framer-motion";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const oldPassword = formData.get("oldPassword") as string;
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (newPassword !== confirmPassword) {
      setStatus({ type: 'error', message: "Konfirmasi password baru tidak cocok" });
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setStatus({ type: 'error', message: "Password baru minimal 6 karakter" });
      setLoading(false);
      return;
    }

    try {
      const result = await changeAdminPassword({ oldPassword, newPassword });
      if (result.success) {
        setStatus({ type: 'success', message: "Password berhasil diperbarui secara aman" });
        (e.target as HTMLFormElement).reset();
        setTimeout(() => router.push("/admin/settings"), 3000);
      } else {
        setStatus({ type: 'error', message: result.error || "Gagal mengganti password" });
      }
    } catch (err) {
      setStatus({ type: 'error', message: "Terjadi kesalahan sistem" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in font-sans pb-20">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/settings" 
          className="p-3 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all text-slate-400 hover:text-indigo-600 shadow-sm"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Security Center</h2>
          <p className="text-slate-500 mt-1 font-bold uppercase tracking-widest text-[11px]">Amankan akses akun panel Anda</p>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-indigo-500/5 p-12 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 blur-3xl -mr-32 -mt-32 pointer-events-none" />
        
        <div className="flex items-center gap-4 mb-10">
           <div className="w-14 h-14 bg-indigo-600 text-white rounded-[1.2rem] flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Lock size={24} strokeWidth={2.5} />
           </div>
           <div>
              <h3 className="text-xl font-black text-slate-900">Ganti Password</h3>
              <p className="text-xs font-bold text-slate-400 mt-0.5 uppercase tracking-tighter italic">Gunakan kombinasi yang kuat dan unik</p>
           </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password Saat Ini</label>
            <input
              name="oldPassword"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-50">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password Baru</label>
              <input
                name="newPassword"
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Konfirmasi Password</label>
              <input
                name="confirmPassword"
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>
          </div>

          <div className="pt-6">
            {status && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-5 rounded-2xl mb-6 flex items-center gap-4 ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-100'}`}
              >
                <ShieldCheck size={20} className={status.type === 'success' ? 'text-emerald-500' : 'text-rose-500'} />
                <p className="text-xs font-bold leading-relaxed">{status.message}</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-indigo-600/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:scale-100"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>MEMPROSES...</span>
                </>
              ) : (
                "PERBARUI PASSWORD"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Info Card */}
      <div className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100 flex gap-6 items-start">
         <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
            <ShieldCheck size={24} />
         </div>
         <div>
            <h4 className="text-sm font-black text-indigo-900 uppercase tracking-widest">Keamanan Akun</h4>
            <p className="text-xs font-medium text-slate-500 mt-2 leading-relaxed italic">
              Setelah mengganti password, sesi Anda mungkin akan diperbarui. Pastikan Anda mengingat password baru Anda atau gunakan password manager yang terpercaya.
            </p>
         </div>
      </div>
    </div>
  );
}
