"use client";

import { useState } from "react";
import { Plus, GraduationCap, Edit, Trash2, ExternalLink, Loader2, Award, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { deleteProgram } from "@/actions/cms";
import { useRouter } from "next/navigation";

import { useAdminUI } from "@/providers/AdminUIProvider";

interface ProgramsListProps {
  initialPrograms: any[];
}

export default function ProgramsList({ initialPrograms }: ProgramsListProps) {
  const router = useRouter();
  const { confirm, toast } = useAdminUI();
  const [programs, setPrograms] = useState(initialPrograms);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = (id: string, title: string) => {
    confirm({
      title: "Hapus Program Studi?",
      description: `Apakah Anda yakin ingin menghapus program "${title}"? Tindakan ini tidak dapat dibatalkan.`,
      type: "danger",
      confirmLabel: "Ya, Hapus",
      cancelLabel: "Batal",
      onConfirm: async () => {
        setDeletingId(id);
        const result = await deleteProgram(id);

        if (result.success) {
          setPrograms((prev) => prev.filter((p) => p.id !== id));
          toast({
            title: "Deleted",
            message: "Program studi berhasil dihapus.",
            type: "success"
          });
          router.refresh();
        } else {
          toast({
            title: "Error",
            message: "Gagal menghapus program: " + result.error,
            type: "error"
          });
        }
        setDeletingId(null);
      }
    });
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
        {/* Total Programs */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-indigo-200 transition-all duration-500">
          <div className="w-14 h-14 bg-indigo-50 text-[#4338CA] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-indigo-600 group-hover:text-white">
             <GraduationCap size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Total Program</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{programs.length}</h3>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Active</span>
            </div>
          </div>
        </div>

        {/* Total Competencies */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-orange-200 transition-all duration-500">
          <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-orange-600 group-hover:text-white">
             <Award size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Kompetensi</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
                {programs.reduce((acc, p) => acc + (p.competencies?.length || 0), 0)}
              </h3>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Skills</span>
            </div>
          </div>
        </div>

        {/* Total Careers */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-emerald-200 transition-all duration-500">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-emerald-600 group-hover:text-white">
             <Briefcase size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Prospek Karir</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
                {programs.reduce((acc, p) => acc + (p.careers?.length || 0), 0)}
              </h3>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Paths</span>
            </div>
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
