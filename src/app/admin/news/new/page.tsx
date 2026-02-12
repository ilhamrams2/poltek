"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Editor from "@/components/cms/Editor";
import MediaUpload from "@/components/cms/MediaUpload";
import { createNews } from "@/actions/cms";
import { Save, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

import { useAdminUI } from "@/providers/AdminUIProvider";

export default function NewNewsPage() {
  const router = useRouter();
  const { toast } = useAdminUI();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    image: "",
    published: true,
    metaTitle: "",
    metaDesc: "",
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
      metaTitle: title, // Suggest same as title by default
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await createNews(formData);

    if (result.success) {
      toast({
        title: "Success",
        message: "Berita berhasil dibuat.",
        type: "success"
      });
      router.push("/admin/news");
      router.refresh();
    } else {
       toast({
        title: "Error",
        message: "Gagal membuat berita: " + result.error,
        type: "error"
      });
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/news" 
            className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-200 transition-all shadow-sm"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Buat Berita Baru</h2>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Publikasi informasi terbaru politeknik</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Judul Berita Utama</label>
                <input
                  required
                  type="text"
                  value={formData.title}
                  onChange={handleTitleChange}
                  placeholder="Masukkan judul yang menarik..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white border focus:border-orange-200 outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300 focus:ring-4 focus:ring-orange-500/5 shadow-inner"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Konten Berita Eksklusif</label>
                <div className="bg-slate-50 rounded-[2rem] p-4 border border-transparent focus-within:border-orange-200 focus-within:bg-white transition-all shadow-inner">
                  <Editor
                    value={formData.content}
                    onChange={(content) => setFormData({ ...formData, content })}
                    placeholder="Tulis cerita lengkap di sini..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100/50">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-5 h-5 rounded-lg text-orange-600 focus:ring-orange-500 border-orange-200"
                />
                <label htmlFor="published" className="text-sm font-black text-orange-900 uppercase tracking-tight cursor-pointer">
                  Terbitkan Langsung Ke Publik
                </label>
              </div>
            </div>

            <div className="flex justify-end pt-8 border-t border-slate-50">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#0F172A] hover:bg-orange-600 disabled:bg-slate-300 text-white px-10 py-4 rounded-2xl font-black flex items-center gap-3 transition-all shadow-xl shadow-slate-900/10 active:scale-95 uppercase tracking-widest text-xs"
              >
                {loading ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
                Simpan Berita
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-4 space-y-8">
           {/* Sidebar: Media & SEO */}
           <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-6">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-50 pb-4">Pengaturan Media</h3>
              <div className="space-y-4">
                 <MediaUpload 
                   label="Gambar Utama Berita"
                   value={formData.image}
                   onChange={(url) => setFormData({ ...formData, image: url })}
                 />
              </div>
           </div>

           <div className="bg-[#0F172A] p-8 rounded-[2.5rem] shadow-xl shadow-slate-900/10 space-y-6 text-white text-xs">
              <h3 className="text-sm font-black uppercase tracking-widest border-b border-white/5 pb-4">SEO Control Center</h3>
              <div className="space-y-5">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Meta Title Tag</label>
                    <input
                      type="text"
                      value={formData.metaTitle}
                      onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border-transparent focus:bg-white/10 border focus:border-orange-500/50 outline-none transition-all font-bold text-white"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Meta Description</label>
                    <textarea
                      rows={3}
                      value={formData.metaDesc}
                      onChange={(e) => setFormData({ ...formData, metaDesc: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border-transparent focus:bg-white/10 border focus:border-orange-500/50 outline-none transition-all font-bold text-white resize-none"
                    ></textarea>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
