"use client";

import { useState } from "react";
import { updateMultipleSettings } from "@/actions/settings";
import { Save, Loader2 } from "lucide-react";

interface SettingsFormProps {
  initialSettings: Record<string, string>;
}

export default function SettingsForm({ initialSettings }: SettingsFormProps) {
  const [settings, setSettings] = useState(initialSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const handleChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage("");

    const result = await updateMultipleSettings(settings);
    
    setIsSaving(false);
    if (result.success) {
      setSaveMessage("✓ Pengaturan berhasil disimpan!");
      setTimeout(() => setSaveMessage(""), 3000);
    } else {
      setSaveMessage("✗ Gagal menyimpan pengaturan");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Campus Information */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8">
        <h3 className="text-lg font-black text-slate-900 mb-6">Informasi Kampus</h3>
        
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Nama Kampus</label>
            <input 
              type="text" 
              value={settings.campus_name || ""}
              onChange={(e) => handleChange("campus_name", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium text-sm"
              placeholder="Nama lengkap kampus"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Tagline</label>
            <input 
              type="text" 
              value={settings.campus_tagline || ""}
              onChange={(e) => handleChange("campus_tagline", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium text-sm"
              placeholder="Slogan atau tagline kampus"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Deskripsi Singkat</label>
            <textarea 
              value={settings.campus_description || ""}
              onChange={(e) => handleChange("campus_description", e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium text-sm resize-none"
              placeholder="Deskripsi singkat tentang kampus"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8">
        <h3 className="text-lg font-black text-slate-900 mb-6">Kontak & Lokasi</h3>
        
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Telepon</label>
              <input 
                type="tel" 
                value={settings.contact_phone || ""}
                onChange={(e) => handleChange("contact_phone", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium text-sm"
                placeholder="+62 xxx xxxx xxxx"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Email</label>
              <input 
                type="email" 
                value={settings.contact_email || ""}
                onChange={(e) => handleChange("contact_email", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium text-sm"
                placeholder="info@kampus.ac.id"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Alamat Lengkap</label>
            <textarea 
              value={settings.contact_address || ""}
              onChange={(e) => handleChange("contact_address", e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium text-sm resize-none"
              placeholder="Alamat lengkap kampus"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Google Maps Embed URL</label>
            <input 
              type="url" 
              value={settings.contact_maps_url || ""}
              onChange={(e) => handleChange("contact_maps_url", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium text-sm"
              placeholder="https://www.google.com/maps/embed?pb=..."
            />
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8">
        <h3 className="text-lg font-black text-slate-900 mb-6">Social Media</h3>
        
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Instagram</label>
              <input 
                type="url" 
                value={settings.social_instagram || ""}
                onChange={(e) => handleChange("social_instagram", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium text-sm"
                placeholder="https://instagram.com/..."
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Facebook</label>
              <input 
                type="url" 
                value={settings.social_facebook || ""}
                onChange={(e) => handleChange("social_facebook", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium text-sm"
                placeholder="https://facebook.com/..."
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">YouTube</label>
              <input 
                type="url" 
                value={settings.social_youtube || ""}
                onChange={(e) => handleChange("social_youtube", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium text-sm"
                placeholder="https://youtube.com/..."
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">LinkedIn</label>
              <input 
                type="url" 
                value={settings.social_linkedin || ""}
                onChange={(e) => handleChange("social_linkedin", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all font-medium text-sm"
                placeholder="https://linkedin.com/..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center justify-between bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6">
        {saveMessage && (
          <span className={`text-sm font-bold ${saveMessage.includes('✓') ? 'text-emerald-600' : 'text-rose-600'}`}>
            {saveMessage}
          </span>
        )}
        <div className="ml-auto">
          <button 
            type="submit"
            disabled={isSaving}
            className="bg-orange-600 hover:bg-orange-700 disabled:bg-slate-300 text-white px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20 disabled:shadow-none"
          >
            {isSaving ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Menyimpan...</span>
              </>
            ) : (
              <>
                <Save size={18} />
                <span>Simpan Perubahan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
