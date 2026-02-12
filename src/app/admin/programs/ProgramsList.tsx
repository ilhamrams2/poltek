"use client";

import { useState } from "react";
import { Plus, GraduationCap, Edit, Trash2, ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { deleteProgram } from "@/actions/cms";
import { useRouter } from "next/navigation";

interface ProgramsListProps {
  initialPrograms: any[];
}

export default function ProgramsList({ initialPrograms }: ProgramsListProps) {
  const router = useRouter();
  const [programs, setPrograms] = useState(initialPrograms);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Apakah Anda yakin ingin menghapus program studi "${title}"?`)) return;

    setDeletingId(id);
    const result = await deleteProgram(id);

    if (result.success) {
      setPrograms(programs.filter(p => p.id !== id));
      router.refresh();
    } else {
      alert("Gagal menghapus program: " + result.error);
    }
    setDeletingId(null);
  };

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight italic">Program Studi</h2>
          <p className="text-slate-500 mt-1 font-bold uppercase tracking-widest text-[11px]">Kelola kurikulum dan informasi prodi</p>
        </div>
        <Link 
          href="/admin/programs/new" 
          className="flex items-center gap-2 bg-[#4338CA] hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-black transition-all shadow-lg shadow-indigo-500/20 active:scale-95 text-xs uppercase tracking-widest group"
        >
          <Plus size={18} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
          <span>Tambah Prodi</span>
        </Link>
      </div>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4 group">
          <div className="w-12 h-12 bg-indigo-50 text-[#4338CA] rounded-2xl flex items-center justify-center group-hover:bg-[#4338CA] group-hover:text-white transition-all">
             <GraduationCap size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Program</p>
            <h3 className="text-2xl font-black text-slate-900">{programs.length}</h3>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div key={program.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 relative">
             <div className="h-40 relative overflow-hidden">
                <Image 
                  src={program.heroImage} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={program.title}
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                   <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full border border-white/20 uppercase tracking-widest">
                     {program.degree}
                   </span>
                </div>
             </div>
             
             <div className="p-8 space-y-4">
                <div className="space-y-1">
                   <h3 className="text-lg font-black text-slate-900 leading-tight group-hover:text-[#4338CA] transition-colors">
                     {program.title}
                   </h3>
                   <p className="text-slate-500 text-xs font-medium line-clamp-2 leading-relaxed h-8">
                     {program.description}
                   </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                   <div className="flex items-center gap-2">
                      <Link 
                        href={`/admin/programs/${program.id}`}
                        className="p-2.5 bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-[#4338CA] rounded-xl transition-all"
                      >
                         <Edit size={18} />
                      </Link>
                      <button 
                        onClick={() => handleDelete(program.id, program.title)}
                        disabled={deletingId === program.id}
                        className="p-2.5 bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-all shadow-none disabled:opacity-50"
                      >
                         {deletingId === program.id ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
                      </button>
                   </div>
                   <Link 
                     href={`/program/${program.slug}`} 
                     target="_blank"
                     className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-colors"
                   >
                     <span>Preview</span>
                     <ExternalLink size={12} />
                   </Link>
                </div>
             </div>
          </div>
        ))}

        {programs.length === 0 && (
          <div className="col-span-full py-24 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-4">
             <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-200 shadow-sm">
                <GraduationCap size={32} />
             </div>
             <div>
                <p className="text-slate-400 font-black text-sm uppercase tracking-widest">Belum ada Program Studi</p>
                <p className="text-slate-400 text-xs font-medium mt-1">Mulai dengan menambahkan prodi pertama Anda.</p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
