"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Editor from "@/components/cms/Editor";
import { createNews } from "@/actions/cms";
import { Save, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function NewNewsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    image: "",
    published: true,
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
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await createNews(formData);

    if (result.success) {
      router.push("/admin/news");
      router.refresh();
    } else {
      alert("Gagal membuat berita: " + result.error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/news" 
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <h2 className="text-2xl font-bold text-gray-900">Buat Berita Baru</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Judul Berita</label>
            <input
              required
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="Masukkan judul berita..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Slug (URL)</label>
            <input
              required
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">URL Gambar Utama</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Konten Berita</label>
            <Editor
              value={formData.content}
              onChange={(content) => setFormData({ ...formData, content })}
              placeholder="Tulis konten berita di sini..."
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="published" className="text-sm font-medium text-gray-700 font-inter">
              Terbitkan Langsung
            </label>
          </div>
        </div>

        <div className="flex justify-end pt-6 border-t border-gray-100">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95 font-inter"
          >
            {loading ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
            Simpan Berita
          </button>
        </div>
      </form>
    </div>
  );
}
