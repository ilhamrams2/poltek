import { prisma } from "@/lib/prisma";
import { 
  Newspaper, 
  Image as ImageIcon, 
  Users, 
  Activity,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Plus
} from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { id } from "date-fns/locale";

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
  const { stats, latestNews, latestGallery } = await getDashboardData();

  const cards = [
    { title: "Total Berita", count: stats.news, icon: Newspaper, color: "text-orange-600", bg: "bg-orange-50", href: "/admin/news" },
    { title: "Program Studi", count: stats.programs, icon: Users, color: "text-indigo-600", bg: "bg-indigo-50", href: "/admin/programs" },
    { title: "Pesan Baru", count: stats.unreadMessages, icon: Activity, color: "text-emerald-600", bg: "bg-emerald-50", href: "/admin/inbox" },
    { title: "Views Hari Ini", count: stats.todayViews, icon: TrendingUp, color: "text-amber-600", bg: "bg-amber-50", href: "/admin/audit" },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Overview Dashboard</h2>
          <p className="text-slate-500 mt-1 font-medium uppercase tracking-widest text-[11px]">Control center for poltek management</p>
        </div>
        <div className="flex items-center gap-3">
            <Link 
              href="/admin/news/new" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-sm uppercase tracking-widest"
            >
              <Plus size={18} strokeWidth={3} />
              <span>Berita Baru</span>
            </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.title} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-4 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group">
            <div className="flex justify-between items-start">
              <div className={`${card.bg} ${card.color} p-4 rounded-2xl transition-transform group-hover:scale-110`}>
                <card.icon size={26} strokeWidth={2.5} />
              </div>
              <Link href={card.href} className="text-slate-300 hover:text-blue-600 transition-colors p-2">
                 <ArrowUpRight size={22} strokeWidth={2.5} />
              </Link>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{card.title}</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">{card.count}</h3>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-emerald-600 mt-2 uppercase tracking-tight">
               <TrendingUp size={14} />
               <span>+12.5% vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lists Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Latest News */}
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Berita Terbaru</h3>
            <Link href="/admin/news" className="text-blue-600 text-xs font-black uppercase tracking-widest hover:underline">Lihat Semua</Link>
          </div>
          <div className="p-4">
            {latestNews.length > 0 ? (
               <div className="space-y-1">
                 {latestNews.map((news: any) => (
                    <Link 
                      key={news.id} 
                      href={`/admin/news/${news.id}/edit`}
                      className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100"
                    >
                      <div className="w-14 h-14 rounded-[1.25rem] bg-slate-100 overflow-hidden flex-shrink-0 shadow-inner">
                        {news.image ? (
                           <img src={news.image} alt="" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
                        ) : (
                           <div className="w-full h-full flex items-center justify-center text-slate-300">
                             <Newspaper size={20} />
                           </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors text-base tracking-tight">
                          {news.title}
                        </h4>
                        <div className="flex items-center gap-4 mt-1 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <span className="flex items-center gap-1.5 font-bold">
                            <Clock size={12} className="text-slate-300" />
                            {format(new Date(news.createdAt), 'dd MMM yyyy', { locale: id })}
                          </span>
                          <span className={`px-2 py-0.5 rounded-md ${news.published ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"}`}>
                            {news.published ? "PUBLISHED" : "DRAFT"}
                          </span>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                         <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                           <ArrowUpRight size={18} strokeWidth={3} />
                         </div>
                      </div>
                    </Link>
                 ))}
               </div>
            ) : (
              <div className="py-24 text-center flex flex-col items-center gap-4">
                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                    <Newspaper size={36} />
                 </div>
                 <p className="text-slate-400 font-black text-sm uppercase tracking-widest">Belum ada berita yang dibuat.</p>
              </div>
            )}
          </div>
        </div>

        {/* Latest Gallery */}
        <div className="lg:col-span-5 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Media Galeri</h3>
            <Link href="/admin/gallery" className="text-blue-600 text-xs font-black uppercase tracking-widest hover:underline">Lihat Semua</Link>
          </div>
          <div className="p-4">
            {latestGallery.length > 0 ? (
               <div className="space-y-1">
                 {latestGallery.map((item: any) => (
                    <div key={item.id} className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                      <div className="w-24 aspect-video rounded-xl bg-slate-900 flex-shrink-0 relative overflow-hidden ring-1 ring-white/10">
                         <div className="absolute inset-0 flex items-center justify-center text-white/20">
                            <ImageIcon size={18} />
                         </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-slate-800 truncate text-sm uppercase tracking-tighter group-hover:text-blue-600 transition-colors">{item.title}</h4>
                        <p className="text-[10px] font-black text-slate-400 mt-1 uppercase tracking-[0.15em] flex items-center gap-2">
                           <TrendingUp size={12} className="text-emerald-500" />
                           {format(new Date(item.createdAt), 'dd MMM yyyy', { locale: id })}
                        </p>
                      </div>
                    </div>
                 ))}
               </div>
            ) : (
              <div className="py-24 text-center flex flex-col items-center gap-4">
                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                    <ImageIcon size={36} />
                 </div>
                 <p className="text-slate-400 font-black text-sm uppercase tracking-widest">Belum ada item galeri.</p>
              </div>
            )}
          </div>
        </div>
      </div>


    </div>
  );
}
