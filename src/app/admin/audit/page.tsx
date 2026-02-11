import { prisma } from "@/lib/prisma";
import { ShieldAlert, User, Activity, Clock, Search, Filter } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

async function getAuditLogs() {
  return await prisma.auditLog.findMany({
    include: {
      admin: true
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 50
  });
}

export default async function AuditLogsPage() {
  const logs = await getAuditLogs();

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Audit activity Logs</h2>
          <p className="text-slate-500 mt-1 font-bold uppercase tracking-widest text-[11px]">Riwayat aktivitas keamanan dan manajemen</p>
        </div>
        <div className="flex items-center gap-3">
            <div className="bg-white border border-slate-100 rounded-xl px-4 py-2.5 flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-50 transition-colors">
               <Filter size={14} />
               <span>Filter Data</span>
            </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col gap-3">
          <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
             <Activity size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Aksi Hari Ini</p>
            <h3 className="text-xl font-black text-slate-900">{logs.filter((l) => format(l.createdAt, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')).length}</h3>
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-slate-50">
                     <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Administrator</th>
                     <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Aksi</th>
                     <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Entitas</th>
                     <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Detail</th>
                     <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Waktu</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  {logs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50/50 transition-colors group">
                       <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 font-black text-[10px]">
                                {log.admin.name?.substring(0,2).toUpperCase() || "AD"}
                             </div>
                             <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-700">{log.admin.name || log.admin.email}</span>
                                <span className="text-[10px] font-medium text-slate-400">{log.ipAddress || "System"}</span>
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-5">
                          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                            log.action === 'CREATE' ? 'bg-emerald-50 text-emerald-600' :
                            log.action === 'UPDATE' ? 'bg-amber-50 text-amber-600' :
                            'bg-rose-50 text-rose-600'
                          }`}>
                             {log.action}
                          </span>
                       </td>
                       <td className="px-8 py-5">
                          <span className="text-sm font-bold text-slate-600 uppercase tracking-tighter italic">{log.entity}</span>
                       </td>
                       <td className="px-8 py-5">
                          <div className="max-w-xs overflow-hidden">
                             <p className="text-xs text-slate-400 font-medium truncate italic" title={JSON.stringify(log.details)}>
                                {log.details ? JSON.stringify(log.details) : "-"}
                             </p>
                          </div>
                       </td>
                       <td className="px-8 py-5">
                          <div className="flex items-center gap-2 text-slate-400 font-medium text-xs italic">
                             <Clock size={12} className="text-slate-300" />
                             {format(log.createdAt, 'dd MMM, HH:mm', { locale: id })}
                          </div>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
         {logs.length === 0 && (
           <div className="py-24 text-center">
              <p className="text-slate-300 font-black text-sm uppercase tracking-widest italic">Belum ada riwayat aktivitas.</p>
           </div>
         )}
      </div>
    </div>
  );
}
