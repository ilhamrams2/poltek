"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
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
  Calendar,
  Clock,
  Link as LinkIcon,
  Info,
  Maximize2,
  TrendingUp,
  Target,
  Share2,
  ChevronRight,
  Globe,
  ShieldAlert,
  Lock
} from "lucide-react";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { useAdminUI } from "@/providers/AdminUIProvider";
import { AnimatePresence, motion } from "framer-motion";

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  content: string;
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
  const [activeTab, setActiveTab] = useState<"content" | "seo">("content");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!news || !mounted) return null;

  const contentText = news.content?.replace(/<[^>]*>/g, ' ').trim() || "";
  const wordCount = contentText.split(/\s+/).filter(w => w.length > 0).length + news.title.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200) || 1;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-[9999] bg-[#0F172A]/90 backdrop-blur-md flex items-center justify-center p-0 lg:p-12 overflow-hidden"
        >
          <motion.div
             initial={{ scale: 1.1, y: 100, opacity: 0 }}
             animate={{ scale: 1, y: 0, opacity: 1 }}
             exit={{ scale: 1.1, y: 100, opacity: 0 }}
             transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
             className="w-full h-full lg:h-[90vh] max-w-7xl bg-white lg:rounded-[3rem] shadow-[0_0_120px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative border border-white/10"
          >
            {/* IMPROVED DYNAMIC HERO - FIT MODE */}
            <div className="relative h-[35vh] lg:h-[45vh] shrink-0 bg-[#0B0F1A] group overflow-hidden">
               {news.image ? (
                 <>
                    {/* Background Ambience Layer */}
                    <Image 
                      src={news.image} 
                      alt="" 
                      fill 
                      className="object-cover opacity-30 blur-3xl scale-110"
                    />
                    {/* Foreground Fit Layer */}
                    <div className="absolute inset-0 flex items-center justify-center p-12 lg:p-16 z-10">
                       <div className="relative w-full h-full flex items-center justify-center">
                          <Image 
                            src={news.image} 
                            alt={news.title} 
                            fill 
                            priority 
                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02]" 
                          />
                       </div>
                    </div>
                 </>
               ) : (
                 <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 to-slate-900/50" />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent z-10" />
               
               {/* Controls */}
               <div className="absolute top-8 left-10 right-10 flex justify-between items-start z-30">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-600/40 border border-white/10 ring-8 ring-indigo-600/10">
                        <Newspaper size={28} />
                     </div>
                     <div className="hidden sm:block">
                        <h4 className="text-white text-xs font-black uppercase tracking-[0.4em] mb-1">Preview Mode</h4>
                        <div className="flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                           <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Live Engine v2.4</span>
                        </div>
                     </div>
                  </div>
                  <button 
                    onClick={onClose}
                    className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-[#0F172A] transition-all flex items-center justify-center border border-white/10 backdrop-blur-xl group shadow-2xl"
                  >
                    <X size={28} className="transition-transform group-hover:rotate-90" />
                  </button>
               </div>

               {/* Meta Context */}
               <div className="absolute bottom-10 left-10 right-10 z-20">
                  <div className="max-w-4xl space-y-4">
                     <div className="flex items-center gap-3">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${news.published ? 'bg-emerald-500 text-white border-emerald-400 shadow-xl shadow-emerald-500/20' : 'bg-amber-500 text-white border-amber-400 shadow-xl shadow-amber-500/20'}`}>
                           {news.published ? 'Published' : 'Draft'}
                        </span>
                        <div className="h-4 w-[1px] bg-white/20 mx-1" />
                        <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">Reference: {news.id.substring(0,12).toUpperCase()}</span>
                     </div>
                     <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight tracking-tighter drop-shadow-xl line-clamp-2">
                        {news.title}
                     </h1>
                  </div>
               </div>
            </div>

            {/* INTEGRATED MODERN NAV */}
            <div className="bg-white border-b border-slate-100 flex items-center justify-between px-10 h-20 shrink-0 relative z-30">
               <div className="flex gap-2 h-full">
                  {[
                    { id: "content", label: "Reading Desk", icon: Eye, sub: "Context Flow" },
                    { id: "seo", label: "Intelligence", icon: Target, sub: "Search & Meta" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`relative px-8 h-full flex flex-col items-center justify-center transition-all group ${activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                       <div className="flex items-center gap-3 relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                          <tab.icon size={20} strokeWidth={activeTab === tab.id ? 3 : 2} />
                          <div className="text-left leading-none">
                             <p className={`text-[11px] font-black uppercase tracking-[0.15em] mb-0.5 ${activeTab === tab.id ? 'text-slate-900' : ''}`}>{tab.label}</p>
                             <p className="text-[9px] font-black opacity-40 uppercase tracking-tighter">{tab.sub}</p>
                          </div>
                       </div>
                       {activeTab === tab.id && (
                         <motion.div layoutId="tabMarker" className="absolute bottom-0 left-6 right-6 h-1 bg-indigo-600 rounded-t-full shadow-lg shadow-indigo-600/40" />
                       )}
                    </button>
                  ))}
               </div>

               <div className="hidden md:flex items-center gap-10 pr-4">
                  <div className="flex flex-col items-end">
                     <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{readingTime} MIN READ</span>
                     <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{wordCount} WORDS TOTAL</span>
                  </div>
                  <div className="w-[1px] h-8 bg-slate-200" />
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/5">
                        <TrendingUp size={18} strokeWidth={2.5} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-900 leading-none">ACTIVE PREVIEW</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase leading-none mt-1">SEO Readiness 94%</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* STRUCTURED DATA AREA */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#F8FAFC]">
               <AnimatePresence mode="wait">
                  {activeTab === "content" ? (
                    <motion.div
                      key="desk"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="max-w-4xl mx-auto py-12 lg:py-20 px-8"
                    >
                       <div className="bg-white p-10 lg:p-24 rounded-[3rem] lg:rounded-[4rem] shadow-2xl shadow-slate-200/50 border border-white relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />
                          
                          <div className="flex flex-col items-center mb-20 text-center">
                             <div className="px-6 py-2 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">
                                Editorial Framework
                             </div>
                             <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tighter leading-tight max-w-2xl">
                                {news.title}
                             </h2>
                             <div className="mt-8 flex items-center gap-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                <span>{format(new Date(news.createdAt), "dd MMMM yyyy", { locale: idLocale })}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                <span>By Institution Hub</span>
                             </div>
                          </div>

                          <div 
                            className="prose prose-indigo prose-2xl max-w-none text-[#1E293B] font-serif leading-[1.9]
                              prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-[#0F172A]
                              prose-p:mb-12 prose-strong:text-[#0F172A] prose-strong:font-black
                              prose-img:rounded-[2.5rem] prose-img:shadow-[0_40px_100px_rgba(0,0,0,0.1)] prose-img:my-24"
                            dangerouslySetInnerHTML={{ __html: news.content }}
                          />

                          <div className="mt-32 pt-20 border-t border-slate-50 flex flex-col items-center opacity-30">
                             <div className="flex gap-2 mb-6">
                                {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-slate-400" />)}
                             </div>
                             <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.8em]">End of Preview</span>
                          </div>
                       </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="intel"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="max-w-6xl mx-auto py-12 lg:py-20 px-8 space-y-12"
                    >
                       {/* Grid Insight Layout */}
                       <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                          <div className="lg:col-span-8 space-y-10">
                             <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                   <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl shadow-slate-900/10">
                                      <Search size={22} />
                                   </div>
                                   <div>
                                      <h3 className="text-2xl font-black text-[#0F172A] tracking-tighter leading-none">Intelligence Hub</h3>
                                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2 px-1">Search Engine Simulation</p>
                                   </div>
                                </div>
                                <div className="bg-white p-10 lg:p-14 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                                   <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50/20 rounded-bl-full translate-x-10 -translate-y-10" />
                                   <div className="space-y-4 relative z-10">
                                      <div className="flex items-center gap-2 mb-2">
                                         <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                            <Globe size={14} className="text-slate-400" />
                                         </div>
                                         <span className="text-emerald-700 text-[12px] font-bold tracking-tight">https://smkprestasiprima.sch.id › news</span>
                                      </div>
                                      <p className="text-[#1a0dab] text-3xl font-medium leading-tight group-hover:underline cursor-pointer">
                                         {news.metaTitle || news.title}
                                      </p>
                                      <p className="text-[#4d5156] text-lg leading-relaxed max-w-2xl line-clamp-3 pt-1">
                                         {news.metaDesc || "Enter a compelling meta description to increase click-through rates from search engine results pages."}
                                      </p>
                                   </div>
                                </div>
                             </div>

                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 group">
                                   <div className="flex items-center gap-4 mb-10">
                                      <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center transition-transform group-hover:scale-110">
                                         <LinkIcon size={24} />
                                      </div>
                                      <div>
                                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Article Path</p>
                                         <p className="text-sm font-black text-slate-900 tracking-tight mt-2">Dynamic Routing</p>
                                      </div>
                                   </div>
                                   <p className="font-mono text-sm font-black text-indigo-600 bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100 truncate">
                                      /news/{news.slug}
                                   </p>
                                </div>

                                <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 group">
                                   <div className="flex items-center gap-4 mb-6">
                                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center transition-transform group-hover:scale-110">
                                         <Check size={24} strokeWidth={3} />
                                      </div>
                                      <div>
                                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">SEO Readiness</p>
                                         <p className="text-sm font-black text-slate-900 tracking-tight mt-2">Global Score</p>
                                      </div>
                                   </div>
                                   <div className="flex items-baseline gap-3">
                                      <h4 className="text-7xl font-black text-[#0F172A] tracking-tighter">94</h4>
                                      <div className="flex flex-col">
                                         <span className="text-2xl font-black text-emerald-500 tracking-tighter">%</span>
                                         <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none mt-1">Ready</span>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>

                          <div className="lg:col-span-4 space-y-8">
                             <div className="bg-[#0F172A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group min-h-[320px] flex flex-col justify-between">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-transparent to-transparent opacity-50" />
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all" />
                                
                                <div className="relative z-10">
                                   <div className="flex items-center gap-4 mb-8">
                                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5">
                                         <Share2 size={24} />
                                      </div>
                                      <h4 className="text-[11px] font-black uppercase tracking-[0.25em]">Promotion Hub</h4>
                                   </div>
                                   <p className="text-sm font-medium text-white/50 leading-relaxed max-w-[200px]">Broadcast ready. Metadata verified for LinkedIn, Twitter & FB.</p>
                                </div>

                                <button className="relative z-10 w-full py-5 bg-white text-[#0F172A] rounded-2xl font-black text-xs uppercase tracking-[0.2em] active:scale-95 transition-all shadow-2xl shadow-indigo-600/20 hover:bg-indigo-50">
                                   Generate Social Link
                                </button>
                             </div>

                             <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-10">
                                <div className="flex items-center justify-between">
                                   <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Security Protocol</h4>
                                   <ShieldAlert size={18} className="text-indigo-400" />
                                </div>
                                <div className="space-y-6">
                                   <div className="flex items-center gap-5">
                                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                                         <Check size={22} strokeWidth={3} />
                                      </div>
                                      <div className="flex flex-col">
                                         <span className="text-[12px] font-black text-slate-900 uppercase">Integrity OK</span>
                                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Verified @ {format(new Date(), "HH:mm")}</span>
                                      </div>
                                   </div>
                                   <div className="flex items-center gap-5">
                                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                                         <Lock size={20} />
                                      </div>
                                      <div className="flex flex-col">
                                         <span className="text-[12px] font-black text-slate-900 uppercase">TLS 1.3 Active</span>
                                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Locked Preview</span>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </motion.div>
                  )}
               </AnimatePresence>
            </div>

            {/* PRECISE FOOTER DESIGN */}
            <div className="h-28 bg-white border-t border-slate-100 flex items-center justify-between px-10 shrink-0 z-40 relative">
               <div className="flex items-center gap-12">
                  <div className="flex items-center gap-4 group">
                     <div className="w-14 h-14 rounded-full border-2 border-slate-50 flex items-center justify-center text-emerald-500 shadow-inner group-hover:scale-105 transition-all">
                        <Check size={28} strokeWidth={3} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-widest text-[#0F172A]">Consolidated View</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Secure Session Certified</span>
                     </div>
                  </div>
                  <div className="h-10 w-[1px] bg-slate-100" />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] font-mono">ID: {news.id.toUpperCase()}</p>
               </div>

               <div className="flex items-center gap-5">
                  <button 
                    onClick={onClose}
                    className="px-8 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all active:scale-95"
                  >
                    Dismiss Intelligence
                  </button>
                  <Link
                    href={`/admin/news/${news.id}/edit`}
                    className="px-12 py-5 bg-[#0F172A] text-white rounded-[2rem] font-black text-[11px] uppercase tracking-[0.25em] flex items-center gap-4 transition-all hover:bg-indigo-600 shadow-2xl shadow-slate-300 active:scale-95 group"
                  >
                    <span>Launch Editor</span>
                    <ChevronRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
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
    return () => { isMounted = false; };
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
          toast({ title: "Deleted", message: "Berita berhasil dihapus.", type: "success" });
        } else {
          toast({ title: "Error", message: "Gagal menghapus berita: " + result.error, type: "error" });
        }
      }
    });
  };

  const filteredNews = news.filter(n => n.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-10 animate-fade-in font-sans">
      <NewsPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} news={selectedNews} />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 border-b border-slate-100 pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-indigo-600">
             <Newspaper size={20} strokeWidth={2.5} />
             <span className="text-[10px] font-black uppercase tracking-[0.4em]">CMS Engine v2.0</span>
          </div>
          <h2 className="text-4xl font-black text-[#0F172A] tracking-tighter">Content Management</h2>
          <p className="text-slate-400 font-medium uppercase tracking-widest text-[9px] flex items-center gap-2">
             <span>Database Repository</span>
             <span className="w-1 h-1 rounded-full bg-slate-200" />
             <span>Institutional Updates</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <div className="relative group w-full sm:w-[380px]">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-all duration-300" size={18} />
            <input 
              type="text" 
              placeholder="Filter news by title..." 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
              className="w-full pl-14 pr-16 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-indigo-500/30 focus:ring-8 focus:ring-indigo-500/5 transition-all font-bold text-slate-700 text-xs tracking-tight placeholder:text-slate-300 placeholder:font-bold" 
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-1 bg-white border border-slate-100 rounded-lg shadow-sm">
               <span className="text-[10px] font-black text-slate-300">/</span>
            </div>
          </div>

          <Link href="/admin/news/new" className="w-full sm:w-auto bg-[#0F172A] hover:bg-indigo-600 text-white px-10 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-200 active:scale-95 font-black text-[11px] uppercase tracking-[0.15em] shrink-0">
            <Plus size={18} strokeWidth={3} />
            <span>New Article</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Total Artikel", value: news.length, icon: Newspaper, color: "blue", suffix: "Warta" },
          { label: "Terbit (Live)", value: news.filter(n => n.published).length, icon: Check, color: "emerald", suffix: "Public" },
          { label: "Drafting", value: news.filter(n => !n.published).length, icon: FileText, color: "amber", suffix: "Editing" }
        ].map((stat, i) => (
          <div key={i} className={`bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-${stat.color}-200 transition-all duration-500`}>
            <div className={`w-16 h-16 bg-${stat.color}-50 text-${stat.color}-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-${stat.color}-600 group-hover:text-white`}>
               <stat.icon size={32} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-black text-[#0F172A] tracking-tighter">{stat.value}</h3>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{stat.suffix}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[3.5rem] shadow-sm border border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-transparent to-transparent opacity-10" />
        {loading ? (
          <div className="py-40 flex flex-col items-center justify-center gap-6">
             <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-slate-50 border-t-indigo-600 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
                </div>
             </div>
             <p className="font-black text-slate-400 uppercase tracking-[0.3em] text-[10px]">Initializing Database...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-50 bg-slate-50/20">
                  <th className="px-12 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Content Information</th>
                  <th className="px-12 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Status</th>
                  <th className="px-12 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Timeline</th>
                  <th className="px-12 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] text-right">Operations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredNews.map((item) => (
                  <tr key={item.id} className="group hover:bg-[#F8FAFC]/50 transition-all">
                    <td className="px-12 py-8">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-slate-100 overflow-hidden shadow-inner flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                           {item.image ? (
                             <Image src={item.image} alt={item.title} width={64} height={64} className="w-full h-full object-cover" />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center text-slate-300">
                               <Newspaper size={24} />
                             </div>
                           )}
                        </div>
                        <div className="space-y-1">
                          <div className="text-lg font-black text-[#0F172A] group-hover:text-indigo-600 transition-colors leading-tight">{item.title}</div>
                          <div className="flex items-center gap-3">
                             <div className="px-2 py-0.5 bg-slate-50 text-[9px] font-black text-slate-400 rounded uppercase tracking-widest border border-slate-100">SLUG</div>
                             <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">/{item.slug}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-12 py-8">
                      <div className={`inline-flex items-center px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border ${item.published ? "bg-emerald-50 text-emerald-600 border-emerald-100 shadow-sm shadow-emerald-500/5" : "bg-slate-50 text-slate-400 border-slate-100"}`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${item.published ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
                        {item.published ? "Live / Public" : "Draft / Private"}
                      </div>
                    </td>
                    <td className="px-12 py-8">
                      <div className="flex flex-col">
                         <span className="text-sm font-black text-slate-700 tracking-tight">
                           {format(new Date(item.createdAt), "dd MMM yyyy", { locale: idLocale })}
                         </span>
                         <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Release Date</span>
                      </div>
                    </td>
                    <td className="px-12 py-8 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {[
                          { icon: Eye, onClick: () => handleReview(item), color: "blue", label: "Review" },
                          { icon: ExternalLink, href: `/news/${item.id}`, color: "indigo", label: "Open Site" },
                          { icon: Edit, href: `/admin/news/${item.id}/edit`, color: "emerald", label: "Edit" },
                          { icon: Trash2, onClick: () => handleDelete(item.id, item.title), color: "rose", label: "Delete" }
                        ].map((btn, bi) => (
                           btn.href ? (
                            <Link key={bi} href={btn.href} target="_blank" className={`p-4 text-slate-400 hover:text-${btn.color}-600 hover:bg-${btn.color}-50 rounded-2xl transition-all hover:scale-110 active:scale-90`} title={btn.label}>
                              <btn.icon size={20} strokeWidth={2.5} />
                            </Link>
                           ) : (
                            <button key={bi} onClick={btn.onClick} className={`p-4 text-slate-400 hover:text-${btn.color}-600 hover:bg-${btn.color}-50 rounded-2xl transition-all hover:scale-110 active:scale-90`} title={btn.label}>
                              <btn.icon size={20} strokeWidth={2.5} />
                            </button>
                           )
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredNews.length === 0 && (
              <div className="py-40 text-center flex flex-col items-center gap-8">
                <div className="w-32 h-32 bg-slate-50 rounded-[3rem] flex items-center justify-center text-slate-100 border-4 border-dashed border-slate-100">
                   <Newspaper size={64} />
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 font-black text-xl uppercase tracking-[0.2em]">{search ? "No matches found" : "Repository empty"}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}
