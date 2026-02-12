"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastProps {
  id: string;
  title: string;
  message?: string;
  type: ToastType;
  duration?: number;
  onClose: (id: string) => void;
}

const icons = {
  success: <CheckCircle className="text-emerald-500" size={24} />,
  error: <AlertCircle className="text-rose-500" size={24} />,
  warning: <AlertTriangle className="text-amber-500" size={24} />,
  info: <Info className="text-sky-500" size={24} />,
};

const colors = {
  success: "border-emerald-500",
  error: "border-rose-500",
  warning: "border-amber-500",
  info: "border-sky-500",
};

export default function Toast({ id, title, message, type, duration = 5000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, id, onClose]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`relative w-96 bg-white rounded-xl shadow-2xl border-l-[6px] ${colors[type]} p-4 flex gap-4 pointer-events-auto overflow-hidden group`}
    >
      <div className="shrink-0 mt-1">{icons[type]}</div>
      <div className="flex-1 min-w-0 pr-6">
        <h4 className="text-sm font-bold text-slate-800 mb-0.5">{title}</h4>
        {message && <p className="text-xs text-slate-500 break-words leading-relaxed">{message}</p>}
      </div>
      <button 
        onClick={() => onClose(id)} 
        className="absolute top-2 right-2 p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-md transition-colors"
      >
        <X size={14} />
      </button>

      {/* Progress Bar */}
      <motion.div 
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: duration / 1000, ease: "linear" }}
        className={`absolute bottom-0 left-0 h-1 ${type === 'success' ? 'bg-emerald-500/20' : type === 'error' ? 'bg-rose-500/20' : type === 'warning' ? 'bg-amber-500/20' : 'bg-sky-500/20'}`}
      />
    </motion.div>
  );
}
