"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail, Globe } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdown, setDropdown] = useState<number | null>(null);
  const [openLang, setOpenLang] = useState(false);
  const [currentLang, setCurrentLang] = useState("id");

  const languages = [
    { code: "id", name: "Indonesia", flag: "🇮🇩" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ];

  const selectedLang = languages.find((l) => l.code === currentLang);

  return (
    <header className="w-full shadow-sm">
      {/* ================= TOP BAR (DESKTOP ONLY) ================= */}
      <div className="w-full bg-[#1A2147] text-white text-sm px-6 md:px-12 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-6 py-2">
          {/* Bahasa dropdown */}
          <div className="relative">
            <div
              onClick={() => setOpenLang(!openLang)}
              className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition"
            >
              <Globe size={16} />
              <span className="flex items-center gap-1">
                {selectedLang?.flag} {selectedLang?.name}
              </span>
            </div>

            {openLang && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 w-40 z-50">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setOpenLang(false);
                    }}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} /> <span>+62 851-9932-8825</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} /> <span>poltek.prestasiprima@gmail.id</span>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="bg-white w-full px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO + TEXT INLINE */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo_politeknik.png"
              alt="Logo Politeknik"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="font-semibold text-gray-800 text-lg whitespace-nowrap">
              <span className="text-orange-600">Politeknik</span> Prestasi Prima
            </span>
          </div>

          {/* MENU – DESKTOP */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li><Link href="#" className="hover:text-orange-600">Beranda</Link></li>

            {/* Akademik */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-600">
                Akademik <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg py-3 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">Menu 1</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">Menu 2</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">Menu 3</Link>
              </div>
            </li>

            {/* Informasi */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-600">
                Informasi <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg py-3 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">Menu 1</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">Menu 2</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">Menu 3</Link>
              </div>
            </li>

            {/* Dokumentasi */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-600">
                Dokumentasi <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg py-3 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">Menu 1</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">Menu 2</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">Menu 3</Link>
              </div>
            </li>

            <li><Link href="#" className="hover:text-orange-600">Download Brosur</Link></li>
          </ul>

          {/* Menu Button – Mobile */}
          <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {openMenu && (
          <div className="md:hidden mt-4 p-4 bg-white border rounded-xl shadow">
            <ul className="space-y-3 font-medium">

              {/* Bahasa */}
              <li className="flex flex-col">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setOpenLang(!openLang)}
                >
                  <Globe size={18} /> 
                  {selectedLang?.flag} {selectedLang?.name}
                </div>

                {openLang && (
                  <div className="mt-2 pl-4 space-y-2">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setOpenLang(false);
                        }}
                        className="flex items-center gap-2 cursor-pointer hover:text-orange-600"
                      >
                        {lang.flag} {lang.name}
                      </div>
                    ))}
                  </div>
                )}
              </li>

              {/* Kontak */}
              <li className="flex items-center gap-2">
                <Phone size={18} /> +62 851-9932-8825
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} /> poltek.prestasiprima@gmail.id
              </li>

              {/* Main Menu */}
              <li><Link href="#" className="block">Beranda</Link></li>

              {/* Akademik */}
              <li>
                <button
                  onClick={() => setDropdown(dropdown === 1 ? null : 1)}
                  className="w-full flex justify-between items-center"
                >
                  Akademik <ChevronDown size={16} />
                </button>
                {dropdown === 1 && (
                  <div className="mt-2 pl-4 space-y-1 text-sm">
                    <Link href="#" className="block">Menu 1</Link>
                    <Link href="#" className="block">Menu 2</Link>
                    <Link href="#" className="block">Menu 3</Link>
                  </div>
                )}
              </li>

              {/* Informasi */}
              <li>
                <button
                  onClick={() => setDropdown(dropdown === 2 ? null : 2)}
                  className="w-full flex justify-between items-center"
                >
                  Informasi <ChevronDown size={16} />
                </button>
                {dropdown === 2 && (
                  <div className="mt-2 pl-4 space-y-1 text-sm">
                    <Link href="#" className="block">Menu 1</Link>
                    <Link href="#" className="block">Menu 2</Link>
                    <Link href="#" className="block">Menu 3</Link>
                  </div>
                )}
              </li>

              {/* Dokumentasi */}
              <li>
                <button
                  onClick={() => setDropdown(dropdown === 3 ? null : 3)}
                  className="w-full flex justify-between items-center"
                >
                  Dokumentasi <ChevronDown size={16} />
                </button>
                {dropdown === 3 && (
                  <div className="mt-2 pl-4 space-y-1 text-sm">
                    <Link href="#" className="block">Menu 1</Link>
                    <Link href="#" className="block">Menu 2</Link>
                    <Link href="#" className="block">Menu 3</Link>
                  </div>
                )}
              </li>

              <li><Link href="#" className="block">Download Brosur</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
