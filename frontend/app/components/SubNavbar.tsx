"use client";

import { useEffect, useRef, useState } from "react";

export default function SubNavbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("id");
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-[#1D234E] text-white">
      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="sr-only">Poltek Prestasi Prima</span>
        </div>

        <div className="ml-auto flex items-center gap-4">
          {/* language selector moved to left of phone as requested */}
          <div ref={wrapRef} className="relative flex items-center">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              className={`flex items-center gap-2 text-sm transition-colors duration-150 ${
                open ? "bg-white text-[#1D234E] rounded-md px-2 py-0.5" : "text-white"
              }`}
            >
              <svg className={`w-4 h-4 ${open ? "text-[#1D234E]" : "text-white"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12h20M12 2c2.5 2 4 5 4 10s-1.5 8-4 10c-2.5-2-4-5-4-10s1.5-8 4-10z" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="hidden sm:inline text-sm">{lang === "id" ? "ID" : "EN"}</span>
              <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* dropdown panel */}
            {open && (
              <div className="absolute right-0 left-0 mt-24 w-40 bg-white text-[#1D234E] rounded-md shadow-lg ring-1 ring-black/5 z-50">
                <ul className="py-1">
                  <li>
                    <button
                      className="w-full text-left px-3 py-2 hover:bg-[#f3f5f7]"
                      onClick={() => {
                        setLang("id");
                        setOpen(false);
                      }}
                    >
                      Bahasa Indonesia
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-3 py-2 hover:bg-[#f3f5f7]"
                      onClick={() => {
                        setLang("en");
                        setOpen(false);
                      }}
                    >
                      English
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* phone */}
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12 1.05.36 2.07.72 3.03a2 2 0 0 1-.45 2.11L9.91 11.09a16 16 0 0 0 6 6l1.23-1.39a2 2 0 0 1 2.11-.45c.96.36 1.98.6 3.03.72A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <a href="tel:+6281xxxxxxx" >+62 81x-xxxx-xxx</a>
          </div>

          {/* email */}
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13a2.5 2.5 0 0 0 2.5-2.5v-7" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5v.5l9 5 9-5v-.5z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <a href="mailto:info@poltek.example">info@poltek.example</a>
          </div>
        </div>
      </div>
    </div>
  );
}
