"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { getGallery, createGallery, deleteGallery } from "@/actions/cms";
import { getYoutubeThumbnail } from "@/lib/youtube";
import { 
  Plus, 
  Trash2, 
  ExternalLink, 
  Loader2, 
  Play, 
  Image as ImageIcon,
  Video,
  Link as LinkIcon,
  Info,
  Youtube,
  Clock
} from "lucide-react";

import { useAdminUI } from "@/providers/AdminUIProvider";
import * as RiIcons from "react-icons/ri";
import IconPicker from "@/components/cms/IconPicker";

interface GalleryItem {
  id: string;
  title: string;
  videoUrl: string;
  description: string | null;
  category: string;
  categoryIcon: string;
  createdAt: Date | string;
}

export default function GalleryAdminPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    videoUrl: "",
    description: "",
    category: "Kegiatan",
    categoryIcon: "RiVideoLine"
  });
  const { confirm, toast } = useAdminUI();

  const fetchItems = useCallback(async () => {
    const data = await getGallery();
    setItems(data as any[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      const data = await getGallery();
      if (isMounted) {
        setItems(data as any[]);
        setLoading(false);
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const result = await createGallery(formData);
    if (result.success) {
      setFormData({ 
        title: "", 
        videoUrl: "", 
        description: "",
        category: "Kegiatan",
        categoryIcon: "RiVideoLine"
      });
      fetchItems();
      toast({
        title: "Success",
        message: "Galeri berhasil ditambahkan.",
        type: "success"
      });
    } else {
      toast({
        title: "Error",
        message: "Gagal menambah galeri: " + result.error,
        type: "error"
      });
    }
    setSubmitting(false);
  };

  const handleDelete = (id: string) => {
    confirm({
      title: "Hapus Video?",
      description: "Apakah Anda yakin ingin menghapus video ini dari galeri?",
      type: "danger",
      confirmLabel: "Hapus",
      cancelLabel: "Batal",
      onConfirm: async () => {
        const result = await deleteGallery(id);
        if (result.success) {
          fetchItems();
          toast({
            title: "Deleted",
            message: "Video berhasil dihapus.",
            type: "success"
          });
        } else {
          toast({
            title: "Error",
            message: "Gagal menghapus video: " + result.error,
            type: "error"
          });
        }
      }
    });
  };

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Total Videos */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-red-200 transition-all duration-500">
          <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-red-600 group-hover:text-white">
             <Video size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Total Video</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{items.length}</h3>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Docs</span>
            </div>
          </div>
        </div>

        {/* Platform Info */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-blue-200 transition-all duration-500">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-blue-600 group-hover:text-white">
             <Youtube size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Main Platform</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase">YouTube</h3>
            </div>
          </div>
        </div>

        {/* Last Activity */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-amber-200 transition-all duration-500">
          <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-amber-600 group-hover:text-white">
             <Clock size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Update Terakhir</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-sm font-black text-slate-900 tracking-tight uppercase">
                {items.length > 0 ? "Baru Saja" : "Belum Ada"}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Form Column */}
        <div className="lg:col-span-4">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 sticky top-32">
            <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                 <Plus size={22} strokeWidth={3} />
              </div>
              Tambah Video
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Video size={14} /> Judul Konten
                </label>
                <input
                  required
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Misal: Wisuda 2024 Highlight"
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500/30 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 shadow-inner"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <LinkIcon size={14} /> URL YouTube
                </label>
                <input
                  required
                  type="url"
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500/30 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 shadow-inner"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Info size={14} /> Deskripsi Singkat
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={2}
                  placeholder="Berikan deskripsi singkat untuk video ini..."
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500/30 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 shadow-inner resize-none"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 p-4 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    Kategori
                  </label>
                  
                  {/* Existing Categories Suggestions */}
                  {items.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {Array.from(new Set(items.map(i => i.category))).map(catName => {
                        const sample = items.find(i => i.category === catName);
                        return (
                          <button
                            key={catName}
                            type="button"
                            onClick={() => setFormData({ 
                              ...formData, 
                              category: catName,
                              categoryIcon: sample?.categoryIcon || "RiVideoLine"
                            })}
                            className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tight transition-all border flex items-center gap-2 ${
                              formData.category === catName 
                              ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200" 
                              : "bg-white text-slate-500 border-slate-100 hover:border-indigo-200 hover:text-indigo-600"
                            }`}
                          >
                            <span className="opacity-70">
                              {sample?.categoryIcon && (RiIcons as any)[sample.categoryIcon] ? 
                                (RiIcons as any)[sample.categoryIcon]({ size: 12 }) : 
                                <Play size={12} />
                              }
                            </span>
                            {catName}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <input
                    required
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="Misal: Seminar, Wisuda"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-indigo-500 outline-none font-bold text-slate-700 placeholder:text-slate-300 shadow-sm"
                  />
                </div>
                <IconPicker 
                  value={formData.categoryIcon}
                  onChange={(val) => setFormData({ ...formData, categoryIcon: val })}
                  label="Ikon Kategori"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-slate-900 border border-slate-800 hover:bg-black text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-200 active:scale-95 disabled:bg-slate-400"
              >
                {submitting ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    <Plus size={20} strokeWidth={3} />
                    Simpan Video
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100/50 flex gap-3">
               <Youtube className="text-amber-600 shrink-0" size={20} />
               <p className="text-[10px] font-bold text-amber-700 uppercase tracking-tight leading-relaxed">
                  Gunakan URL standar YouTube dari browser agar thumbnail dapat diambil secara otomatis.
               </p>
            </div>
          </div>
        </div>

        {/* List Column */}
        <div className="lg:col-span-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-slate-100 animate-pulse h-64 rounded-[2rem]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {items.map((item) => {
                const thumbnail = getYoutubeThumbnail(item.videoUrl);
                return (
                  <div key={item.id} className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col">
                    <div className="relative aspect-video bg-slate-900 overflow-hidden">
                      {thumbnail ? (
                        <Image
                          src={thumbnail}
                          alt={item.title}
                          width={480}
                          height={270}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-700">
                          <ImageIcon size={40} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                           <Play className="text-red-600 fill-red-600 ml-1" size={24} />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                         <div className="text-white text-xs">
                           {RiIcons[item.categoryIcon as keyof typeof RiIcons] ? 
                             (RiIcons[item.categoryIcon as keyof typeof RiIcons] as any)({ size: 14 }) : 
                             <Play size={14} />
                           }
                         </div>
                         <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.category}</span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col gap-4">
                      <div className="flex-1">
                        <h4 className="font-black text-slate-800 text-lg line-clamp-2 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 font-bold mt-2 line-clamp-2 uppercase leading-relaxed tracking-tighter">
                          {item.description || "Tidak ada deskripsi tambahan untuk video ini."}
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                        <a 
                          href={item.videoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors"
                        >
                          Source <ExternalLink size={14} />
                        </a>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-3 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition-all active:scale-90"
                          title="Hapus Video"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {items.length === 0 && (
                <div className="col-span-full py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-100 flex flex-col items-center gap-6">
                  <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                     <ImageIcon size={48} />
                  </div>
                  <div>
                    <p className="text-slate-400 font-black text-lg uppercase tracking-widest">Galeri masih kosong</p>
                    <p className="text-slate-300 font-bold text-xs mt-1 uppercase tracking-tighter">Silakan tambahkan video pertama Anda menggunakan form di samping.</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
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
