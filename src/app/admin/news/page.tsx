"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { getNews, deleteNews } from "@/actions/cms";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Newspaper, 
  Loader2, 
  Search, 
  Filter, 
  Check, 
  FileText,
  ExternalLink,
  X,
  Calendar
} from "lucide-react";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { useAdminUI } from "@/providers/AdminUIProvider";
import { AnimatePresence, motion } from "framer-motion";

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  content: string; // Add content for preview
  published: boolean;
  createdAt: string | Date;
  image?: string;
  metaTitle?: string;
  metaDesc?: string;
}

const NewsPreviewModal = ({ 
  news, 
  isOpen, 
  onClose 
}: { 
  news: NewsItem | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!news) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                   <Eye size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Pratinjau Artikel</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest ${news.published ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                      {news.published ? 'Live' : 'Draft'}
                    </span>
                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none border-l border-slate-200 pl-2">
                       {format(new Date(news.createdAt), "dd MMMM yyyy", { locale: idLocale })}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-8 sm:p-12 custom-scrollbar space-y-8">
              {news.image && (
                <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200 border border-slate-100">
                   <Image 
                     src={news.image} 
                     alt={news.title} 
                     fill 
                     className="object-cover"
                   />
                </div>
              )}

              <div className="max-w-3xl mx-auto space-y-6">
                 <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                    {news.title}
                 </h1>
                 
                 <div 
                   className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: news.content }}
                 />

                 {/* SEO Stats */}
                 <div className="pt-10 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">SEO Title</p>
                       <p className="text-xs font-bold text-slate-700">{news.metaTitle || news.title}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">SEO Description</p>
                       <p className="text-xs font-bold text-slate-700 line-clamp-2">{news.metaDesc || "Tidak ada deskripsi SEO"}</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
               <button 
                 onClick={onClose}
                 className="px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-white transition-all border border-transparent hover:border-slate-200"
               >
                 Tutup
               </button>
               <Link
                 href={`/admin/news/${news.id}/edit`}
                 className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
               >
                 Edit Artikel
               </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function NewsAdminPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { confirm, toast } = useAdminUI();

  const handleReview = (item: NewsItem) => {
    setSelectedNews(item);
    setIsPreviewOpen(true);
  };

  const fetchNews = useCallback(async () => {
    const data = await getNews();
    setNews(data as any[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      const data = await getNews();
      if (isMounted) {
        setNews(data as any[]);
        setLoading(false);
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleDelete = (id: string, title: string) => {
    confirm({
      title: "Hapus Berita?",
      description: `Apakah Anda yakin ingin menghapus berita "${title}"? Tindakan ini tidak dapat dibatalkan.`,
      type: "danger",
      confirmLabel: "Ya, Hapus",
      cancelLabel: "Batal",
      onConfirm: async () => {
        const result = await deleteNews(id);
        if (result.success) {
          setNews((current) => current.filter(item => item.id !== id));
          toast({
            title: "Deleted",
            message: "Berita berhasil dihapus.",
            type: "success"
          });
        } else {
          toast({
            title: "Error",
            message: "Gagal menghapus berita: " + result.error,
            type: "error"
          });
        }
      }
    });
  };

  const filteredNews = news.filter(n => 
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-10 animate-fade-in">
      <NewsPreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        news={selectedNews} 
      />

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

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total News */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-blue-200 transition-all duration-500">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-blue-600 group-hover:text-white">
             <Newspaper size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Total Artikel</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{news.length}</h3>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Warta</span>
            </div>
          </div>
        </div>

        {/* Published */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-emerald-200 transition-all duration-500">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-emerald-600 group-hover:text-white">
             <Check size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Terbit (Live)</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
                {news.filter(n => n.published).length}
              </h3>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Public</span>
            </div>
          </div>
        </div>

        {/* Drafts */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-amber-200 transition-all duration-500">
          <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-amber-600 group-hover:text-white">
             <FileText size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Drafting</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
                {news.filter(n => !n.published).length}
              </h3>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Editing</span>
            </div>
          </div>
        </div>
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
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-tighter text-[11px]">
                        {format(new Date(item.createdAt), "dd MMM yyyy", { locale: idLocale })}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => handleReview(item)}
                          className="p-3 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all"
                          title="Review Konten"
                        >
                          <Eye size={20} strokeWidth={2.5} />
                        </button>
                        <Link
                          href={`/news/${item.id}`}
                          target="_blank"
                          className="p-3 text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all"
                          title="Buka di Tab Baru"
                        >
                          <ExternalLink size={20} strokeWidth={2.5} />
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
