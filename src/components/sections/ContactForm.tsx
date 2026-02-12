"use client";

import React, { useState } from "react";
import { submitContactForm } from "@/actions/public";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const category = formData.get("category") as string;
    const message = formData.get("message") as string;

    const result = await submitContactForm({
      name,
      email,
      phone,
      category,
      subject: category || "Contact Form Submission",
      message: message,
    });

    setLoading(false);
    if (result.success) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setError(result.error || "Something went wrong");
    }
  };

  if (success) {
    return (
      <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
        <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
          <CheckCircle2 size={40} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Pesan Terkirim!</h3>
          <p className="text-gray-500 mt-2">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>
        </div>
        <button 
          onClick={() => setSuccess(false)}
          className="px-8 py-3 bg-[#5320C0] text-white rounded-xl font-bold hover:bg-[#4318a0] transition-colors"
        >
          Kirim Pesan Lain
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-6 sm:p-8 h-full animate-fade-up">
      <h3 className="text-2xl font-bold mb-6 border-b pb-3 border-gray-200">Kirim Pesan</h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold mb-2">Nama Lengkap</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Masukkan nama anda"
            className="w-full p-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-[#5320C0] outline-none transition-all"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="Masukkan email aktif"
            className="w-full p-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-[#5320C0] outline-none transition-all"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Nomor Telepon</label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="Masukkan nomor telepon"
            className="w-full p-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-[#5320C0] outline-none transition-all"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Kategori Pesan</label>
          <select 
            name="category"
            required
            className="w-full p-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-[#5320C0] outline-none transition-all"
          >
            <option value="">-- Pilih kategori --</option>
            <option value="Pertanyaan">Pertanyaan</option>
            <option value="Kerja Sama">Kerja Sama</option>
            <option value="Pengaduan">Pengaduan</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">Pesan</label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tuliskan pesan anda"
            className="w-full p-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-[#5320C0] outline-none transition-all"
          ></textarea>
        </div>

        {error && (
          <p className="text-rose-500 text-sm font-bold">{error}</p>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#FF6700] hover:bg-[#d45700] disabled:bg-gray-400 text-white text-lg font-semibold rounded-xl shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Mengirim...</span>
              </>
            ) : (
              <span>Kirim Sekarang</span>
            )}
          </button>
          <button
            type="reset"
            className="w-1/3 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-xl font-semibold transition-colors"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
