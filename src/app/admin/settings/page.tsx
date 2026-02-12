import { prisma } from "@/lib/prisma";
import { Settings, Building2, Phone, Mail, Globe, MapPin, Key } from "lucide-react";
import SettingsForm from "@/components/SettingsForm";
import Link from "next/link";

async function getSettings() {
  const settings = await prisma.setting.findMany();
  return settings.reduce((acc: Record<string, string>, setting) => {
    acc[setting.key] = setting.value;
    return acc;
  }, {});
}

export default async function SettingsPage() {
  const settings = await getSettings();

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">System Settings</h2>
          <p className="text-slate-500 mt-1 font-bold uppercase tracking-widest text-[11px]">Kelola konfigurasi dan informasi kampus</p>
        </div>
      </div>

      {/* Settings Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Settings */}
        <div className="lg:col-span-2">
          <SettingsForm initialSettings={settings} />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-orange-500/20 relative group">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Settings size={24} />
            </div>
            <h3 className="text-xl font-black mb-2">Pengaturan Sistem</h3>
            <p className="text-orange-50 text-sm font-medium leading-relaxed mb-6">
              Kelola semua konfigurasi website kampus Anda dari satu tempat secara aman.
            </p>
            <Link 
              href="/admin/settings/password"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-50 transition-all active:scale-95 shadow-lg shadow-orange-950/20"
            >
              <Key size={14} />
              Ganti Password
            </Link>
          </div>

          {/* Info Box */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-6">
            <h4 className="text-sm font-black text-slate-900 mb-3 uppercase tracking-widest">Tips</h4>
            <ul className="space-y-3 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></span>
                <span>Pastikan semua informasi kontak selalu up-to-date</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></span>
                <span>Link social media harus menggunakan URL lengkap</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></span>
                <span>Perubahan akan langsung terlihat di website publik</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-6">
            <h4 className="text-sm font-black text-slate-900 mb-4 uppercase tracking-widest">Informasi</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">Total Settings</span>
                <span className="text-sm font-black text-slate-900">{Object.keys(settings).length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">Last Updated</span>
                <span className="text-sm font-black text-slate-900">Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
