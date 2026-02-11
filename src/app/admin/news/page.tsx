"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { getNews, deleteNews } from "@/actions/cms";
import { Plus, Edit, Trash2, Eye, Newspaper, Loader2, Search, Filter } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: string | Date;
  image?: string;
}

export default function NewsAdminPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchNews = useCallback(async () => {
    const data = await getNews();
    setNews(data as NewsItem[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      const data = await getNews();
      if (isMounted) {
        setNews(data as NewsItem[]);
        setLoading(false);
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus berita "${title}"?`)) {
      const result = await deleteNews(id);
      if (result.success) {
        setNews(news.filter(item => item.id !== id));
      } else {
        alert("Gagal menghapus berita: " + result.error);
      }
    }
  };

  const filteredNews = news.filter(n => 
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-100 pb-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Content Management</h2>
          <p className="text-slate-500 font-medium mt-1 uppercase tracking-widest text-[11px]">List artikel & update berita kampus</p>
        </div>
        <Link
          href="/admin/news/new"
          className="bg-slate-900 hover:bg-black text-white px-6 py-3.5 rounded-2xl flex items-center gap-3 transition-all shadow-xl shadow-slate-200 active:scale-95 font-black text-sm uppercase tracking-widest"
        >
          <Plus size={20} strokeWidth={3} />
          Berita Baru
        </Link>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative group w-full sm:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Cari judul berita..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-6 py-3.5 bg-white border border-slate-200 rounded-[1.5rem] outline-none focus:border-blue-500/30 focus:ring-4 focus:ring-blue-500/5 transition-all font-bold text-slate-700 shadow-sm"
          />
        </div>
        <div className="flex gap-2">
           <button className="p-3.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors shadow-sm">
             <Filter size={20} />
           </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        {loading ? (
          <div className="py-32 flex flex-col items-center justify-center gap-4">
             <Loader2 className="animate-spin text-blue-600" size={40} />
             <p className="font-black text-slate-400 uppercase tracking-widest text-xs">Memuat data...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-50 bg-slate-50/30">
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Artikel</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Tanggal</th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Manajemen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredNews.map((item) => (
                  <tr key={item.id} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shadow-inner flex-shrink-0">
                           {item.image ? (
                             <Image src={item.image} alt={item.title} width={48} height={48} className="w-full h-full object-cover" />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center text-slate-300">
                               <Newspaper size={20} />
                             </div>
                           )}
                        </div>
                        <div>
                          <div className="text-base font-black text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">{item.title}</div>
                          <div className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-widest">slug: /{item.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        item.published 
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                          : "bg-slate-100 text-slate-400 border border-slate-200"
                      }`}>
                        {item.published ? "Live" : "Draft"}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-tighter">
                        {format(new Date(item.createdAt), "dd MMM yyyy", { locale: id })}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Link
                          href={`/news/${item.id}`}
                          target="_blank"
                          className="p-3 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all"
                          title="Preview Konten"
                        >
                          <Eye size={20} strokeWidth={2.5} />
                        </Link>
                        <Link
                          href={`/admin/news/${item.id}/edit`}
                          className="p-3 text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 rounded-2xl transition-all"
                          title="Edit Artikel"
                        >
                          <Edit size={20} strokeWidth={2.5} />
                        </Link>
                        <button
                          onClick={() => handleDelete(item.id, item.title)}
                          className="p-3 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition-all active:scale-90"
                          title="Hapus Artikel"
                        >
                          <Trash2 size={20} strokeWidth={2.5} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {filteredNews.length === 0 && (
              <div className="py-32 text-center flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                   <Newspaper size={48} />
                </div>
                <div>
                  <p className="text-slate-400 font-black text-lg uppercase tracking-widest">
                    {search ? "Hasil tidak ditemukan" : "Database masih kosong"}
                  </p>
                  <p className="text-slate-300 font-bold text-xs mt-1 uppercase tracking-tighter">
                    {search ? `Tidak ada berita dengan keyword "${search}"` : "Mulai kembangkan konten Anda hari ini."}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
