"use client";

import { useState } from "react";
import * as LucideIcons from "lucide-react";
import * as RiIcons from "react-icons/ri";
import { Search, X } from "lucide-react";

// Combine icons we want to offer
// We'll mostly use Remix Icons (Ri) as they match the design system better, 
// plus some Lucide ones.
// Use the full Remix Icon library + Lucide fallback
// This provides thousands of icons for every profession/category without manual listing.
const ALL_ICONS = Object.keys(RiIcons).filter(key => key.startsWith("Ri"));

interface IconPickerProps {
  value: string;
  onChange: (iconName: string) => void;
  label?: string;
}

export default function IconPicker({ value, onChange, label = "Pilih Icon" }: IconPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Get the actual icon component for preview
  const SelectedIcon = (RiIcons as any)[value] || (LucideIcons as any)[value] || LucideIcons.HelpCircle;

  // Filter all icons based on search, limit to 50 results for performance
  const filteredIcons = ALL_ICONS.filter(icon => 
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 50);

  return (
    <div className="relative">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
        {label}
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 w-full px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-400 transition-all text-left"
      >
        <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center text-xl">
          <SelectedIcon size={20} />
        </div>
        <span className="flex-1 text-xs font-bold text-slate-700 truncate">
          {value || "Pilih Icon..."}
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full mt-2 left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-xl p-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl mb-3 border border-slate-100">
            <Search size={14} className="text-slate-400" />
            <input 
              type="text"
              placeholder="Cari icon..."
              className="bg-transparent border-none outline-none text-xs font-bold text-slate-700 w-full placeholder:text-slate-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setIsOpen(false)}><X size={14} className="text-slate-400 hover:text-rose-500" /></button>
          </div>
          
          <div className="grid grid-cols-5 gap-2 max-h-48 overflow-y-auto custom-scrollbar">
            {filteredIcons.map((iconName) => {
              const IconComp = (RiIcons as any)[iconName] || (LucideIcons as any)[iconName];
              if (!IconComp) return null;

              return (
                <button
                  key={iconName}
                  type="button"
                  onClick={() => {
                    onChange(iconName);
                    setIsOpen(false);
                  }}
                  className={`p-2 rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-indigo-50 transition-all ${value === iconName ? "bg-indigo-100 text-indigo-700 ring-2 ring-indigo-500 ring-offset-1" : "text-slate-500"}`}
                  title={iconName}
                >
                  <IconComp size={20} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
