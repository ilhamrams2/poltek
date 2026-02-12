import { prisma } from "@/lib/prisma";
import { Inbox, Mail, Clock, Trash2, HelpCircle } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { MessageActions, ClearInboxButton } from "@/components/admin/InboxActions";

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
  const unreadCount = messages.filter((m) => !m.isRead).length;

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Kotak Masuk</h2>
          <p className="text-slate-500 mt-1 font-bold uppercase tracking-widest text-[11px]">Kelola pesan dan pertanyaan dari publik</p>
        </div>
        <div className="flex items-center gap-3">
            <ClearInboxButton />
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

      {/* Messages Table-like List area */}
      <div className="bg-white rounded-[3.5rem] shadow-sm border border-slate-100 overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-transparent to-transparent opacity-10" />
         
         <div className="p-10 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
            <div className="flex gap-12">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest min-w-[200px]">Sender Information</span>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex-1">Message Content</span>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest w-[120px] text-right">Timeline</span>
            </div>
         </div>

         <div className="divide-y divide-slate-50">
            {messages.map((m) => {
              const msg = m as any;
              return (
              <div key={msg.id} className={`p-10 transition-all hover:bg-slate-50/50 flex gap-12 items-start relative group`}>
                 {/* Selection / Status indicator */}
                 {!msg.isRead && (
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-orange-500 rounded-r-full shadow-[4px_0_15px_rgba(249,115,22,0.3)]" />
                 )}

                 {/* Sender Info Column */}
                 <div className="min-w-[200px] space-y-3">
                    <div className="flex items-center gap-3">
                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${msg.isRead ? 'bg-slate-100 text-slate-400' : 'bg-orange-50 text-orange-600'}`}>
                          <Mail size={18} strokeWidth={2.5} />
                       </div>
                       <div>
                          <h4 className="font-black text-slate-900 tracking-tight text-sm">{msg.name}</h4>
                          <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest mt-0.5">{msg.category || "General Query"}</p>
                       </div>
                    </div>
                    <div className="space-y-1.5 pl-1.5">
                       <p className="text-[10px] font-bold text-slate-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-200" />
                          {msg.email}
                       </p>
                       <p className="text-[10px] font-bold text-slate-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-200" />
                          {msg.phone || "No Phone"}
                       </p>
                    </div>
                 </div>

                 {/* Message Content Column */}
                 <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                       <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${msg.isRead ? 'bg-slate-100 text-slate-400' : 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'}`}>
                          {msg.isRead ? 'Archived' : 'New Priority'}
                       </span>
                       <h5 className="font-bold text-slate-800 text-sm tracking-tight">{msg.subject || "No Subject"}</h5>
                    </div>
                    <p className="text-slate-500 text-xs font-medium leading-[1.6] line-clamp-3">
                       {msg.message}
                    </p>
                 </div>

                 {/* Timeline & Actions Column */}
                 <div className="w-[150px] flex flex-col items-end gap-4">
                    <div className="text-right">
                       <p className="text-[10px] font-black text-slate-900 tracking-wider">
                          {format(msg.createdAt, 'dd MMMM yyyy', { locale: id })}
                       </p>
                       <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mt-1">
                          {format(msg.createdAt, 'HH:mm', { locale: id })} WIB
                       </p>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                       <MessageActions id={msg.id} isRead={msg.isRead} />
                    </div>
                 </div>
              </div>
              );
            })}
         </div>

         {messages.length === 0 && (
            <div className="py-40 flex flex-col items-center justify-center gap-6">
               <div className="relative">
                  <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-200">
                    <Inbox size={48} strokeWidth={1} />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white shadow-xl rounded-2xl flex items-center justify-center">
                     <HelpCircle size={20} className="text-slate-300" />
                  </div>
               </div>
               <div className="text-center">
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest">Inbox Zero</h3>
                  <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-tighter">Semua pesan dari form kontak akan muncul di sini</p>
               </div>
            </div>
         )}
      </div>
    </div>
  );
}
