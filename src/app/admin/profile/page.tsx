import { getSession } from "@/lib/auth-paseto";
import { User, Shield, Mail, Calendar } from "lucide-react";
import { redirect } from "next/navigation";

export default async function AdminProfilePage() {
  const session = await getSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in font-sans pb-20">
      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 blur-3xl -mr-32 -mt-32 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-600 to-orange-500 flex items-center justify-center text-4xl font-black text-white shadow-2xl">
            {session.email[0].toUpperCase()}
          </div>
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Admin Profile</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Shield size={12} />
                {session.role}
              </span>
              <span className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Mail size={12} />
                {session.email}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-50 pt-12">
          <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Authentication Info (PASETO)</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                <span className="text-xs font-bold text-slate-500">User ID</span>
                <span className="text-xs font-black text-slate-900">{session.userId}</span>
              </div>
              <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                <span className="text-xs font-bold text-slate-500">Issued At</span>
                <span className="text-xs font-black text-slate-900">{session.iat || "N/A"}</span>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-black mb-2 flex items-center gap-3">
              <Shield size={20} />
              Secure Session
            </h4>
            <p className="text-indigo-100 text-xs font-medium leading-relaxed italic">
              Akun Anda dilindungi menggunakan enkripsi simetris PASETO v4.local. Token ini disimpan secara aman di HttpOnly cookie dan diverifikasi di server setiap request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
