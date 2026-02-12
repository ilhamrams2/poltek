"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertTriangle, AlertOctagon, Info } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

export type ConfirmType = "success" | "danger" | "warning" | "info";

export interface ConfirmModalProps {
  id: string; // Add id to allow multiple/stacking but usually only one
  isOpen: boolean;
  title: string;
  description?: string;
  type?: ConfirmType;
  onConfirm: () => void; // Sync or Promisified
  onCancel: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

const backgrounds = {
  success: "bg-emerald-50 text-emerald-600 border-emerald-100",
  danger: "bg-rose-50 text-rose-600 border-rose-100",
  warning: "bg-amber-50 text-amber-600 border-amber-100",
  info: "bg-sky-50 text-sky-600 border-sky-100",
};

const icons = {
  success: CheckCircle,
  danger: AlertOctagon, // More critical than triangle
  warning: AlertTriangle,
  info: Info,
};

export default function ConfirmModal({ 
  isOpen, 
  title, 
  description, 
  type = "info", 
  onConfirm, 
  onCancel, 
  confirmLabel = "Confirm", 
  cancelLabel = "Cancel" 
}: ConfirmModalProps) {
  const Icon = icons[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCancel} // Close on backdrop click
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed z-[101] w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 text-center pointer-events-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Top Icon Area */}
            <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-xl ring-4 ring-black/5 ${backgrounds[type]}`}>
               <Icon size={32} strokeWidth={2.5} />
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight leading-snug">
               {title}
            </h3>

            {description && (
               <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xs mx-auto font-medium">
                  {description}
               </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center w-full">
               <button 
                  onClick={onCancel}
                  className="flex-1 py-3 px-6 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-sm transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none"
               >
                  {cancelLabel}
               </button>
               <button 
                  onClick={onConfirm}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold text-white text-sm shadow-xl transition-all hover:scale-105 active:scale-95 focus:ring-4 focus:outline-none ${type === 'danger' ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/30 focus:ring-rose-200' : type === 'success' ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30 focus:ring-emerald-200' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/30 focus:ring-indigo-200'}`}
               >
                  {confirmLabel}
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
