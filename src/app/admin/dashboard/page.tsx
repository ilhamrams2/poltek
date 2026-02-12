import { prisma } from "@/lib/prisma";
import { 
  Newspaper, 
  Image as ImageIcon, 
  Users, 
  Activity,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Plus,
  Inbox,
  Settings,
  HelpCircle,
  X
} from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Image from "next/image";

async function getDashboardData() {
  const [newsCount, galleryCount, programCount, visitorStats, unreadMessages, latestNews, latestGallery] = await Promise.all([
    prisma.news.count(),
    prisma.gallery.count(),
    prisma.program.count(),
    prisma.dailyStat.findFirst({
       orderBy: { date: 'desc' }
    }),
    prisma.contactMessage.count({
       where: { isRead: false }
    }),
    prisma.news.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5
    }),
    prisma.gallery.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5
    })
  ]);

  return {
    stats: {
      news: newsCount,
      gallery: galleryCount,
      programs: programCount,
      todayViews: visitorStats?.pageViews || 0,
      unreadMessages
    },
    latestNews,
    latestGallery
  };
}

export default async function DashboardPage() {
  const { stats, latestNews } = await getDashboardData();

  const statsCards = [
    { title: "Total Berita", count: stats.news, icon: Newspaper, iconColor: "text-white", iconBg: "bg-gradient-to-tr from-[#4338CA] to-indigo-400" },
    { title: "Pengunjung Hari Ini", count: stats.todayViews, icon: Users, iconColor: "text-white", iconBg: "bg-gradient-to-tr from-orange-500 to-amber-400" },
    { title: "Pesan Unread", count: stats.unreadMessages, icon: Inbox, iconColor: "text-white", iconBg: "bg-gradient-to-tr from-orange-600 to-indigo-600" },
    { title: "Visitor Bulanan", count: 4, icon: TrendingUp, iconColor: "text-white", iconBg: "bg-gradient-to-tr from-[#1E1B4B] to-slate-700" },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <div className={`${card.iconBg} ${card.iconColor} p-3 rounded-2xl`}>
                <card.icon size={24} />
              </div>
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-1">Data Real-time</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400">{card.title}</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">{card.count}</h3>
              <p className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-tight flex items-center gap-1">
                 <Clock size={10} />
                 {i === 1 ? "Unik (Hari ini)" : i === 0 ? "Publikasi Aktif" : "Butuh Respon"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Row: Graph & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visitor Trend Graph */}
        <div className="lg:col-span-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Tren Pengunjung</h3>
              <p className="text-xs text-slate-400 font-medium">Total pengunjung unik 7 hari terakhir</p>
            </div>
            <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold">
               <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
               HARI INI
            </div>
          </div>
          
          {/* SVG Placeholder for Graph to match style */}
          <div className="h-64 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4338CA" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#f97316" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                   <stop offset="0%" stopColor="#4338CA" />
                   <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <path 
                d="M0,50 L100,60 L200,50 L300,55 L400,160 L500,160 L600,155 L700,160 L800,50" 
                fill="none" 
                stroke="url(#lineGradient)" 
                strokeWidth="4" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path 
                d="M0,50 L100,60 L200,50 L300,55 L400,160 L500,160 L600,155 L700,160 L800,50 L800,200 L0,200 Z" 
                fill="url(#chartGradient)"
              />
              {/* Dots */}
              {[0, 100, 200, 300, 400, 500, 600, 700, 800].map((x, i) => {
                const y = [50, 60, 50, 55, 160, 160, 155, 160, 50][i];
                return (
                  <circle key={i} cx={x} cy={y} r="5" fill="white" stroke={i < 4 ? "#4338CA" : "#f97316"} strokeWidth="3" />
                )
              })}
            </svg>
            <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 capitalize">
               <span>04 Feb</span>
               <span>05 Feb</span>
               <span>06 Feb</span>
               <span>07 Feb</span>
               <span>08 Feb</span>
               <span>09 Feb</span>
               <span>10 Feb</span>
            </div>
          </div>
        </div>

        {/* Quick Actions (Dark Card) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-[#1E1B4B] to-[#4338CA] p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 relative z-10">
              Aksi Cepat <span className="text-orange-500">⚡</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "POST BERITA", icon: Newspaper, href: "/admin/news/new" },
                { label: "UPLOAD GALERI", icon: ImageIcon, href: "/admin/gallery" },
                { label: "PENGATURAN", icon: Settings, href: "/admin/settings" },
                { label: "BANTUAN", icon: HelpCircle, href: "#" },
              ].map((action, i) => (
                <Link 
                  key={i} 
                  href={action.href}
                  className="bg-white/5 hover:bg-white/10 border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all group active:scale-95"
                >
                  <action.icon size={20} className="text-slate-400 group-hover:text-white transition-colors" />
                  <span className="text-[9px] font-black tracking-widest text-slate-400 group-hover:text-white transition-colors">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-800">Pesan Terbaru</h3>
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
             </div>
             <div className="py-10 text-center space-y-4">
                <p className="text-xs font-bold text-slate-300 italic">Belum ada pesan masuk</p>
                <Link href="/admin/inbox" className="inline-block w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Buka Seluruh Inbox
                </Link>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Activity Log */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-full blur-3xl"></div>
         <div className="flex justify-between items-center mb-8 px-2 relative z-10">
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-6 bg-gradient-to-b from-[#4338CA] to-orange-500 rounded-full" />
               <h3 className="text-lg font-bold text-slate-800">Log Aktivitas Terbaru</h3>
            </div>
            <Link href="/admin/audit" className="text-indigo-600 text-[10px] font-black uppercase tracking-widest hover:underline flex items-center gap-1 group">
               Lihat Semua <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
         </div>

         <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-5 p-4 rounded-3xl hover:bg-slate-50/50 transition-all group relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${i === 3 ? "bg-slate-100 text-slate-400" : "bg-gradient-to-tr from-indigo-50 to-orange-50 text-indigo-600"}`}>
                   {i === 3 ? <X size={20} /> : <TrendingUp size={20} className={i % 2 === 0 ? "text-orange-500" : "text-indigo-600"} />}
                </div>
                <div className="flex-1 min-w-0">
                   <h4 className="font-bold text-slate-800 text-sm tracking-tight">
                     {i === 3 ? "Menghapus pengguna: bk@smkprestasiprima.sch.id" : "Admin Super Admin berhasil login"}
                   </h4>
                   <p className="text-[10px] font-black text-slate-400 mt-1 uppercase tracking-widest">
                     SUPER ADMIN • {i} MENIT YANG LALU
                   </p>
                </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
