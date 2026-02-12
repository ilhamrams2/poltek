"use client";

import React, { useState } from "react";
import { markMessageAsRead, deleteMessage, clearMessages } from "@/actions/cms";
import { CheckCircle2, Trash2, Loader2 } from "lucide-react";

export function MessageActions({ id, isRead }: { id: string, isRead: boolean }) {
  const [loading, setLoading] = useState<"read" | "delete" | null>(null);

  const onMarkRead = async () => {
    setLoading("read");
    await markMessageAsRead(id);
    setLoading(null);
  };

  const onDelete = async () => {
    if (confirm("Hapus pesan ini?")) {
      setLoading("delete");
      await deleteMessage(id);
      setLoading(null);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {!isRead && (
        <button 
          onClick={onMarkRead}
          disabled={!!loading}
          className="p-2 bg-slate-50 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
          title="Tandai sudah dibaca"
        >
          {loading === "read" ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle2 size={16} />}
        </button>
      )}
      <button 
        onClick={onDelete}
        disabled={!!loading}
        className="p-2 bg-slate-50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
        title="Hapus pesan"
      >
        {loading === "delete" ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
      </button>
    </div>
  );
}

export function ClearInboxButton() {
  const [loading, setLoading] = useState(false);

  const onClear = async () => {
    if (confirm("Bersihkan semua pesan di kotak masuk?")) {
      setLoading(true);
      await clearMessages();
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={onClear}
      disabled={loading}
      className="bg-white border border-slate-100 rounded-xl px-4 py-2.5 flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-50 transition-colors disabled:opacity-50"
    >
      {loading ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} className="text-rose-500" />}
      <span>Bersihkan Pesan</span>
    </button>
  );
}
