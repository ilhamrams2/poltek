"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Editor from "@/components/cms/Editor";
import MediaUpload from "@/components/cms/MediaUpload";
import { updateNews, getNewsById } from "@/actions/cms";
import { Save, ArrowLeft, Loader2, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { useAdminUI } from "@/providers/AdminUIProvider";

export default function EditNewsClient({ id }: { id: string }) {
  const router = useRouter();
  const { toast } = useAdminUI();
  
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    image: "",
    published: true,
    metaTitle: "",
    metaDesc: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNewsById(id);
      if (data) {
        setFormData({
          title: data.title,
          slug: data.slug,
          content: data.content,
          image: data.image || "",
          published: data.published,
          metaTitle: data.metaTitle || data.title,
          metaDesc: data.metaDesc || "",
        });
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const result = await updateNews(id, formData);

    if (result.success) {
      toast({
        title: "Success",
        message: "Berita berhasil diperbarui.",
        type: "success"
      });
      router.push("/admin/news");
      router.refresh();
    } else {
       toast({
        title: "Error",
        message: "Gagal memperbarui berita: " + result.error,
        type: "error"
      });
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="relative">
           <div className="w-16 h-16 border-4 border-slate-100 border-t-orange-500 rounded-full animate-spin"></div>
           <div className="absolute inset-0 flex items-center justify-center font-black text-[10px] text-slate-400 uppercase tracking-widest">PP</div>
        </div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">Memuat Konten Berita...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in font-sans">
      {/* Header Area */}
      <div className="flex items-center justify-between bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
        <div className="flex items-center gap-5">
          <Link 
            href="/admin/news" 
            className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-200 transition-all group"
          >
            <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div>
            <div className="flex items-center gap-2 mb-1">
               <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-[9px] font-black uppercase tracking-widest rounded-md">Drafting Mode</span>
               <h2 className="text-2xl font-black text-slate-900 tracking-tight">Perbarui Warta</h2>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ID Berita: {id}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content Form */}
        <div className="lg:col-span-8 space-y-8">
           <form id="edit-news-form" onSubmit={handleSubmit} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 space-y-8">
              <div className="space-y-4">
                 <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Judul Utama</label>
                 <input
                   required
                   type="text"
                   value={formData.title}
                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                   className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white border focus:border-orange-200 outline-none transition-all font-bold text-slate-700 shadow-inner text-lg"
                 />
              </div>

              <div className="space-y-4">
                 <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Konten Eksklusif</label>
                 <div className="bg-slate-50 rounded-[2.5rem] p-5 border border-transparent focus-within:border-orange-200 focus-within:bg-white transition-all shadow-inner">
                   <Editor
                     value={formData.content}
                     onChange={(content) => setFormData({ ...formData, content })}
                   />
                 </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-100">
                 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${formData.published ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-200 text-slate-400'}`}>
                    <Globe size={24} />
                 </div>
                 <div className="flex-1">
                    <p className="text-xs font-black text-slate-900 uppercase tracking-tight">Status Visibilitas</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tentukan apakah berita ini tampil di website utama</p>
                 </div>
                 <div 
                    onClick={() => setFormData({ ...formData, published: !formData.published })}
                    className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-all duration-300 ${formData.published ? 'bg-emerald-500' : 'bg-slate-300'}`}
                 >
                    <div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-all duration-300 ${formData.published ? 'translate-x-6' : 'translate-x-0'}`}></div>
                 </div>
              </div>
           </form>
        </div>

        {/* Action Sidebar */}
        <div className="lg:col-span-4 space-y-8">
           {/* Media Control Card */}
           <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 space-y-6">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-50 pb-4 flex items-center gap-2">
                 <Globe size={18} className="text-orange-500" />
                 Media & Thumbnail
              </h3>
              <MediaUpload 
                label="Cover Image"
                value={formData.image}
                onChange={(url) => setFormData({ ...formData, image: url })}
              />
           </div>

           {/* SEO Optimization Card */}
           <div className="bg-[#0F172A] p-8 rounded-[3rem] shadow-xl shadow-slate-900/20 space-y-6 text-white relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-sm font-black uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-2 relative z-10">
                 <ShieldCheck size={18} className="text-orange-500" />
                 Optimasi SEO
              </h3>
              <div className="space-y-5 relative z-10">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Meta Title</label>
                    <input
                      type="text"
                      value={formData.metaTitle}
                      onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                      className="w-full px-5 py-3 rounded-2xl bg-white/5 border-transparent focus:bg-white/10 border focus:border-orange-500/50 outline-none transition-all font-bold text-white text-xs"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Meta Description</label>
                    <textarea
                      rows={4}
                      value={formData.metaDesc}
                      onChange={(e) => setFormData({ ...formData, metaDesc: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border-transparent focus:bg-white/10 border focus:border-orange-500/50 outline-none transition-all font-bold text-white text-xs resize-none"
                      placeholder="Deskripsi untuk hasil pencarian Google..."
                    ></textarea>
                 </div>
              </div>
           </div>

           {/* Save Action Card */}
           <div className="bg-white p-4 rounded-[2.5rem] shadow-lg border border-slate-100">
              <button
                type="submit"
                form="edit-news-form"
                disabled={submitting}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-slate-200 text-white py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-500/20 active:scale-95 uppercase tracking-[0.2em] text-xs"
              >
                {submitting ? <Loader2 size={24} className="animate-spin" /> : <Save size={24} />}
                Simpan Perubahan
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
