import { prisma } from "@/lib/prisma";
import { Inbox, Mail, User, Clock, CheckCircle2, Search, Filter, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

async function getMessages() {
  return await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    take: 50
  });
}

export default async function InboxPage() {
  const messages = await getMessages();
  const unreadCount = messages.filter((m: any) => !m.isRead).length;

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Kotak Masuk</h2>
          <p className="text-slate-500 mt-1 font-bold uppercase tracking-widest text-[11px]">Kelola pesan dan pertanyaan dari publik</p>
        </div>
        <div className="flex items-center gap-3">
            <div className="bg-white border border-slate-100 rounded-xl px-4 py-2.5 flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-50 transition-colors">
               <Trash2 size={14} className="text-rose-500" />
               <span>Bersihkan Pesan</span>
            </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col gap-3">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
             <Inbox size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pesan Belum Dibaca</p>
            <h3 className="text-xl font-black text-slate-900">{unreadCount}</h3>
          </div>
        </div>
      </div>

      {/* Messages List Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* List View */}
         <div className="lg:col-span-12 space-y-4">
            {messages.map((msg: any) => (
              <div key={msg.id} className={`bg-white p-6 rounded-[2rem] border ${msg.isRead ? 'border-slate-50 opacity-70' : 'border-orange-100 shadow-lg shadow-orange-500/5'} transition-all hover:scale-[1.01] cursor-pointer flex flex-col md:flex-row gap-6 items-start md:items-center`}>
                 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${msg.isRead ? 'bg-slate-50 text-slate-300' : 'bg-orange-50 text-orange-600'}`}>
                    <Mail size={22} />
                 </div>
                 
                 <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-3">
                       <h4 className="font-black text-slate-900 tracking-tight">{msg.name}</h4>
                       <span className="text-[9px] font-black text-slate-400 bg-slate-50 px-2 py-0.5 rounded uppercase tracking-tighter italic">{msg.email}</span>
                       {!msg.isRead && (
                          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                       )}
                    </div>
                    <p className="text-slate-500 text-sm font-medium line-clamp-1 italic">
                       {msg.subject || "No Subject"} - <span className="text-slate-400 font-normal">{msg.message}</span>
                    </p>
                 </div>

                 <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                       <Clock size={12} />
                       {format(msg.createdAt, 'dd MMM yyyy', { locale: id })}
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 bg-slate-50 text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all">
                           <CheckCircle2 size={16} />
                        </button>
                        <button className="p-2 bg-slate-50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
                           <Trash2 size={16} />
                        </button>
                    </div>
                 </div>
              </div>
            ))}

            {messages.length === 0 && (
              <div className="py-32 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-4">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-200 shadow-sm">
                    <Mail size={32} />
                 </div>
                 <div>
                    <p className="text-slate-400 font-black text-sm uppercase tracking-widest italic">Belum ada pesan masuk.</p>
                    <p className="text-slate-400 text-xs font-medium mt-1 italic">Semua pesan dari form kontak akan muncul di sini.</p>
                 </div>
              </div>
            )}
         </div>
      </div>
    </div>
  );
}
