"use client";

import { useState, useRef } from "react";
import { Upload, X, Loader2, Image as ImageIcon } from "lucide-react";
import { createClient } from "@/lib/supabase-browser";

interface MediaUploadProps {
  value: string;
  onChange: (url: string) => void;
  label: string;
  bucket?: string;
}

export default function MediaUpload({ value, onChange, label, bucket = "media" }: MediaUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [supabase] = useState(() => createClient());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    try {
      setUploading(true);
      setErrorMsg(null);
      
      // 1. Generate unique file name
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      // 2. Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (error) {
        if (error.message.includes("Bucket not found")) {
           throw new Error("BUCKET_MISSING");
        }
        if (error.message.includes("row-level security policy")) {
           throw new Error("RLS_POLICY_ERROR");
        }
        throw error;
      }

      // 3. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      onChange(publicUrl);
    } catch (error: any) {
      if (error.message === "BUCKET_MISSING") {
        setErrorMsg("BUCKET_MISSING");
      } else if (error.message === "RLS_POLICY_ERROR") {
        setErrorMsg("RLS_POLICY_ERROR");
      } else {
        alert("Error uploading file: " + error.message);
      }
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files[0]);
    }
  };

  const onDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</label>

      {errorMsg === "BUCKET_MISSING" && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex flex-col gap-2">
           <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
              <Upload size={16} className="rotate-180" />
              <span>Gagal Upload: Bucket Tidak Ditemukan</span>
           </div>
           <p className="text-[10px] text-slate-500">
             Folder penyimpanan <b>"{bucket}"</b> belum dibuat.
           </p>
           <a 
             href={`https://supabase.com/dashboard/project/_/storage/buckets`} 
             target="_blank" 
             rel="noreferrer"
             className="text-[10px] bg-rose-600 text-white px-3 py-2 rounded-lg text-center font-bold uppercase tracking-widest hover:bg-rose-700 transition-all"
           >
             Buat Bucket di Storage &rarr;
           </a>
        </div>
      )}

      {errorMsg === "RLS_POLICY_ERROR" && (
        <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl flex flex-col gap-2">
           <div className="flex items-center gap-2 text-orange-600 font-bold text-xs">
              <Upload size={16} className="rotate-180" />
              <span>Gagal Upload: Akses Ditolak</span>
           </div>
           <p className="text-[10px] text-slate-500">
             Bucket <b>"{bucket}"</b> ada, tapi tidak mengizinkan upload (RLS).
           </p>
           <a 
             href={`https://supabase.com/dashboard/project/_/storage/policies`} 
             target="_blank" 
             rel="noreferrer"
             className="text-[10px] bg-orange-600 text-white px-3 py-2 rounded-lg text-center font-bold uppercase tracking-widest hover:bg-orange-700 transition-all"
           >
             Tambahkan Policy "All/Public" &rarr;
           </a>
        </div>
      )}
      
      {value ? (
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-100 group shadow-inner bg-slate-50">
          <img src={value} className="w-full h-full object-cover" alt="Uploaded content" />
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
            <button 
              type="button"
              onClick={() => onChange("")}
              className="p-3 bg-rose-500 text-white rounded-2xl hover:bg-rose-600 transition-all shadow-xl active:scale-95"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div 
          onDragEnter={onDrag}
          onDragLeave={onDrag}
          onDragOver={onDrag}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`
            aspect-video rounded-[2.5rem] border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center gap-4 p-8 text-center relative overflow-hidden
            ${dragActive 
              ? "border-[#4338CA] bg-indigo-50/50" 
              : "border-slate-200 bg-slate-50 hover:bg-white hover:border-indigo-200 shadow-inner"
            }
          `}
        >
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden" 
          />
          
          <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all ${uploading ? "bg-indigo-50 text-indigo-600" : "bg-white text-slate-300 shadow-sm"}`}>
            {uploading ? (
              <Loader2 size={32} className="animate-spin" />
            ) : (
              <Upload size={32} />
            )}
          </div>
          
          <div className="space-y-1 relative z-10">
            <p className="text-sm font-black text-slate-600 uppercase tracking-tight">
              {uploading ? "Sedang Mengunggah..." : "Ketuk untuk Unggah Gambar"}
            </p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Seret dan lepaskan file ke sini (Maks. 5MB)
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
