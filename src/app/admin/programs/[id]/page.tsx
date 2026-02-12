"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Editor from "@/components/cms/Editor";
import MediaUpload from "@/components/cms/MediaUpload";
import IconPicker from "@/components/cms/IconPicker";
import { getProgramById, updateProgram } from "@/actions/cms";
import { Save, ArrowLeft, Loader2, Minus, Plus, Award, Briefcase, Database, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";
import * as RiIcons from "react-icons/ri";

import { useAdminUI } from "@/providers/AdminUIProvider";

export default function EditProgramPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const { toast } = useAdminUI();
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    degree: "D3",
    subtitle: "",
    description: "",
    longDescription: "",
    heroImage: "",
    color: "#4F46E5",
    // Complex objects now
    competencies: [] as { title: string; desc: string; icon: string }[],
    careers: [] as string[],
    tools: [] as { name: string; icon: string }[],
    stats: [] as { label: string; value: string }[],
  });

  useEffect(() => {
    const fetchProgram = async () => {
      const data = await getProgramById(id);
      if (data) {
        setFormData({
            title: data.title,
            slug: data.slug,
            degree: data.degree,
            subtitle: data.subtitle,
            description: data.description,
            longDescription: data.longDescription,
            heroImage: data.heroImage,
            color: data.color || "#4F46E5",
            // Safely map/cast data
            competencies: (data.competencies as any[])?.map(c => ({
            title: c.title || "",
            desc: c.desc || "",
            icon: c.icon || "RiCheckboxCircleLine"
            })) || [],
            careers: (data.careers as string[]) || [],
            tools: (data.tools as any[])?.map(t => ({
                name: t.name || "",
                icon: t.icon || "RiToolsLine" 
            })) || [],
            stats: (data.stats as any[])?.map(s => ({
                label: s.label || "",
                value: s.value || ""
            })) || [],
        });
      }
      setFetching(false);
    };
    fetchProgram();
  }, [id]);

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({ ...formData, title, slug: generateSlug(title) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await updateProgram(id, formData);

    if (result.success) {
      toast({
        title: "Success",
        message: "Program studi berhasil diperbarui.",
        type: "success"
      });
      router.push("/admin/programs");
      router.refresh();
    } else {
       toast({
        title: "Error",
        message: "Gagal memperbarui program studi: " + result.error,
        type: "error"
      });
      setLoading(false);
    }
  };

  // Helper for Competencies (Complex Object)
  const addCompetency = () => {
    setFormData(prev => ({
      ...prev,
      competencies: [...prev.competencies, { title: "", desc: "", icon: "RiCheckboxCircleLine" }]
    }));
  };
  
  const updateCompetency = (index: number, field: keyof typeof formData.competencies[0], value: string) => {
    const newArr = [...formData.competencies];
    newArr[index] = { ...newArr[index], [field]: value };
    setFormData({ ...formData, competencies: newArr });
  };

  const removeCompetency = (index: number) => {
    setFormData(prev => ({ ...prev, competencies: prev.competencies.filter((_, i) => i !== index) }));
  };

  // Helper for Tools (Complex Object)
  const addTool = () => {
    setFormData(prev => ({
      ...prev,
      tools: [...prev.tools, { name: "", icon: "RiToolsLine" }]
    }));
  };

  const updateTool = (index: number, field: keyof typeof formData.tools[0], value: string) => {
    const newArr = [...formData.tools];
    newArr[index] = { ...newArr[index], [field]: value };
    setFormData({ ...formData, tools: newArr });
  };

  const removeTool = (index: number) => {
    setFormData(prev => ({ ...prev, tools: prev.tools.filter((_, i) => i !== index) }));
  };

  // Helper for Careers (Simple String Array)
  const addCareer = () => setFormData(prev => ({ ...prev, careers: [...prev.careers, ""] }));
  const updateCareer = (index: number, val: string) => {
    const newArr = [...formData.careers];
    newArr[index] = val;
    setFormData({ ...formData, careers: newArr });
  };
  const removeCareer = (index: number) => {
    setFormData(prev => ({ ...prev, careers: prev.careers.filter((_, i) => i !== index) }));
  };

  // Helper for Stats
    const addStat = () => setFormData(prev => ({ ...prev, stats: [...prev.stats, { label: "", value: "" }] }));
    const updateStat = (index: number, field: "label" | "value", val: string) => {
        const newArr = [...formData.stats];
        newArr[index] = { ...newArr[index], [field]: val };
        setFormData({ ...formData, stats: newArr });
    };
    const removeStat = (index: number) => {
        setFormData(prev => ({ ...prev, stats: prev.stats.filter((_, i) => i !== index) }));
    };

  if (fetching) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-indigo-600" size={40} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in font-sans pb-40">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md py-4 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/programs" 
            className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-200 transition-all shadow-sm"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Edit Program</h2>
            <div className="flex items-center gap-2 mt-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Update & Manage</p>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <Link href={`/program/${formData.slug}`} target="_blank" className="text-[10px] font-bold text-indigo-500 hover:text-indigo-700 flex items-center gap-1">
                    Preview Page <ExternalLink size={10} />
                </Link>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-1">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* 1. HERO SECTION */}
          <section className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Informasi Utama
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Nama Program</label>
                <input
                  required
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-0 focus:ring-2 focus:ring-indigo-500/20 font-bold text-slate-700"
                  placeholder="e.g. Teknik Informatika"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Jenjang</label>
                <select
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-0 focus:ring-2 focus:ring-indigo-500/20 font-bold text-slate-700"
                >
                  <option value="D3">Diploma 3 (D3)</option>
                  <option value="D4">Sarjana Terapan (D4)</option>
                  <option value="S1">Sarjana (S1)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
               <label className="text-[10px] font-bold text-slate-500 uppercase">Tagline / Subtitle</label>
               <input
                 required
                 value={formData.subtitle}
                 onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                 className="w-full px-4 py-3 rounded-xl bg-slate-50 border-0 focus:ring-2 focus:ring-indigo-500/20 font-bold text-slate-700"
                 placeholder="e.g. Membangun Solusi Digital Masa Depan"
               />
            </div>

            <div className="space-y-2">
               <label className="text-[10px] font-bold text-slate-500 uppercase">Short Description</label>
               <textarea
                 required
                 rows={3}
                 value={formData.description}
                 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                 className="w-full px-4 py-3 rounded-xl bg-slate-50 border-0 focus:ring-2 focus:ring-indigo-500/20 font-bold text-slate-700 resize-none"
                 placeholder="Ringkasan singkat untuk list view..."
               />
            </div>

            <div className="space-y-2">
               <label className="text-[10px] font-bold text-slate-500 uppercase">Full Curriculum Details</label>
               <div className="rounded-xl overflow-hidden border border-slate-100">
                  <Editor
                    value={formData.longDescription}
                    onChange={(val) => setFormData({ ...formData, longDescription: val })}
                    placeholder="Jelaskan detail kurikulum..."
                  />
               </div>
            </div>
          </section>

          {/* 2. EXPLORASI POTENSI (Competencies) */}
          <section className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-50 pb-4">
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                   <Award size={16} className="text-[#F15A24]" />
                   Explorasi Potensi (Competencies)
               </h3>
               <button type="button" onClick={addCompetency} className="flex items-center gap-2 px-3 py-1.5 bg-[#F15A24]/10 text-[#F15A24] rounded-lg text-[10px] font-bold hover:bg-[#F15A24] hover:text-white transition-all">
                  <Plus size={14} /> Add Value
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {formData.competencies.map((comp, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 relative group hover:border-indigo-200 transition-all">
                     <button type="button" onClick={() => removeCompetency(i)} className="absolute top-2 right-2 p-1.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                        <Trash2 size={14} />
                     </button>

                     <div className="grid grid-cols-[auto_1fr] gap-4">
                        <div className="w-12">
                           {/* Icon Preview */}
                           <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-indigo-600 text-2xl mb-2">
                              {(RiIcons as any)[comp.icon] ? 
                                 (RiIcons as any)[comp.icon]({ size: 24 }) : 
                                 <Plus size={24} />
                              }
                           </div>
                        </div>
                        <div className="space-y-2">
                           <input
                             value={comp.title}
                             onChange={(e) => updateCompetency(i, "title", e.target.value)}
                             className="w-full px-3 py-2 text-sm font-bold bg-white border-none rounded-lg focus:ring-1 focus:ring-indigo-500 placeholder:font-normal"
                             placeholder="Judul Kompetensi"
                           />
                           <IconPicker 
                             value={comp.icon} 
                             onChange={(val) => updateCompetency(i, "icon", val)} 
                             label="Pilih Icon Visual"
                           />
                        </div>
                     </div>
                     <textarea
                       rows={2}
                       value={comp.desc}
                       onChange={(e) => updateCompetency(i, "desc", e.target.value)}
                       className="w-full px-3 py-2 text-xs bg-white border-none rounded-lg resize-none text-slate-600 focus:ring-1 focus:ring-indigo-500"
                       placeholder="Deskripsi singkat kompetensi ini..."
                     />
                  </div>
               ))}
               
               {formData.competencies.length === 0 && (
                  <div className="col-span-2 py-8 text-center border-2 border-dashed border-slate-100 rounded-2xl text-slate-400 text-xs">
                     Belum ada data kompetensi. Klik tombol Add Value diatas.
                  </div>
               )}
            </div>
          </section>

          {/* 3. EXPERTIZE VALIDATED (Tools) */}
          <section className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-50 pb-4">
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                   <Database size={16} className="text-emerald-500" />
                   Expertize Validated (Tools & Tech)
               </h3>
               <button type="button" onClick={addTool} className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-bold hover:bg-emerald-500 hover:text-white transition-all">
                  <Plus size={14} /> Add Tool
               </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
               {formData.tools.map((tool, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 relative group hover:border-emerald-200 transition-all text-center">
                     <button type="button" onClick={() => removeTool(i)} className="absolute top-2 right-2 p-1 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                        <Trash2 size={12} />
                     </button>

                     <div className="w-12 h-12 mx-auto bg-white rounded-xl border border-slate-200 flex items-center justify-center text-emerald-600 text-2xl shadow-sm">
                        {(RiIcons as any)[tool.icon] ? 
                           (RiIcons as any)[tool.icon]({ size: 24 }) : 
                           <Database size={24} />
                        }
                     </div>

                     <div className="space-y-2">
                       <input
                         value={tool.name}
                         onChange={(e) => updateTool(i, "name", e.target.value)}
                         className="w-full px-2 py-1.5 text-xs font-bold text-center bg-white border-none rounded-lg focus:ring-1 focus:ring-emerald-500"
                         placeholder="Nama Tool"
                       />
                       <div className="text-left">
                           <IconPicker 
                             value={tool.icon} 
                             onChange={(val) => updateTool(i, "icon", val)} 
                             label=""
                           />
                       </div>
                     </div>
                  </div>
               ))}
               
               {formData.tools.length === 0 && (
                  <div className="col-span-full py-6 text-center border-2 border-dashed border-slate-100 rounded-2xl text-slate-400 text-xs">
                     Belum ada tools. Tambahkan teknologi yang dipelajari.
                  </div>
               )}
            </div>
          </section>

          {/* 4. CAREER PROSPECTS */}
          <section className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-50 pb-4">
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                   <Briefcase size={16} className="text-sky-500" />
                   Career Opportunities
               </h3>
               <button type="button" onClick={addCareer} className="flex items-center gap-2 px-3 py-1.5 bg-sky-50 text-sky-600 rounded-lg text-[10px] font-bold hover:bg-sky-500 hover:text-white transition-all">
                  <Plus size={14} /> Add Career
               </button>
            </div>

            <div className="flex flex-wrap gap-3">
               {formData.careers.map((career, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 hover:bg-white hover:shadow-md transition-all">
                     <input
                       value={career}
                       onChange={(e) => updateCareer(i, e.target.value)}
                       className="bg-transparent border-none text-xs font-bold text-slate-700 w-32 focus:w-48 transition-all outline-none"
                       placeholder="Nama Profesi..."
                     />
                     <button type="button" onClick={() => removeCareer(i)} className="text-slate-300 hover:text-rose-500">
                        <X size={14} />
                     </button>
                  </div>
               ))}
            </div>
          </section>

          {/* 5. STATS */}
            <section className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Award size={16} className="text-amber-500" />
                        Quick Stats (Key Metrics)
                    </h3>
                    <button type="button" onClick={addStat} className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-lg text-[10px] font-bold hover:bg-amber-500 hover:text-white transition-all">
                        <Plus size={14} /> Add Metric
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {formData.stats.map((stat, i) => (
                        <div key={i} className="p-4 bg-slate-50 rounded-xl space-y-2 border border-slate-100">
                             <input 
                                value={stat.label}
                                onChange={(e) => updateStat(i, "label", e.target.value)}
                                className="w-full bg-transparent text-[10px] font-black uppercase text-slate-400 border-none p-0 focus:ring-0"
                                placeholder="LABEL (e.g. LAMA STUDI)"
                             />
                             <input 
                                value={stat.value}
                                onChange={(e) => updateStat(i, "value", e.target.value)}
                                className="w-full bg-transparent text-lg font-black text-slate-700 border-none p-0 focus:ring-0"
                                placeholder="Value (e.g. 3 Tahun)"
                             />
                             <button type="button" onClick={() => removeStat(i)} className="text-[10px] text-rose-400 underline pt-2">Remove</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 space-y-8">
            {/* Identity Color */}
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Brand Identity</h3>
                <div className="flex items-center gap-4">
                    <input 
                       type="color" 
                       value={formData.color}
                       onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                       className="w-16 h-16 rounded-2xl border-0 p-1 cursor-pointer"
                    />
                    <div className="flex-1">
                        <div className="text-xs font-bold text-slate-500 mb-1">Theme Color</div>
                        <input 
                           type="text" 
                           value={formData.color}
                           onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                           className="w-full px-3 py-2 bg-slate-50 rounded-lg text-xs font-mono font-bold"
                        />
                    </div>
                </div>
            </div>

            {/* Media Upload */}
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                 <MediaUpload 
                   label="Hero Image (Background)" 
                   value={formData.heroImage} 
                   onChange={(url) => setFormData({ ...formData, heroImage: url })} 
                   bucket="media"
                 />
            </div>

            {/* Sticky Save Button */}
            <div className="sticky top-24">
                <div className="bg-[#0F172A] p-6 rounded-[2rem] shadow-xl shadow-slate-900/10 space-y-4 text-white overflow-hidden relative group">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                        <div className="text-xs font-medium text-slate-400 mb-4">Ready to update?</div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#4338CA] hover:bg-indigo-500 disabled:bg-slate-700 text-white py-4 rounded-xl font-black flex items-center justify-center gap-3 transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98] uppercase tracking-widest text-xs"
                        >
                            {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                            {loading ? "Updating..." : "Update Program"}
                        </button>
                    </div>
                </div>
            </div>
        </div>

      </form>
    </div>
  );
}

function X({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
  );
}
