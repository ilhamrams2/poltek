"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (hasDropdown = false) =>
    `relative inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
      isScrolled ? "text-[#1D234E]" : "text-white"
    } ${hasDropdown ? "group" : ""}`;

  const dropdownPanel =
    "absolute top-full left-0 mt-2 w-48 bg-white text-[#1D234E] rounded-md shadow-lg ring-1 ring-black/5 py-1 z-50 hidden group-hover:block";

  return (
    <header
      className={`fixed left-0 right-0 top-10 z-40 ${
        isScrolled ? "bg-white shadow-md backdrop-blur-sm" : "bg-transparent shadow-none"
      } transition-colors transition-shadow duration-300 ease-in-out`}
    >
      <div className={`max-w-7xl mx-auto px-6 ${isScrolled ? "py-2" : "py-4"} flex items-center justify-between transition-[padding] duration-300 ease-in-out`}>
        {/* LOGO */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Poltek Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span
              className={`font-semibold transition-colors duration-300 ${
                isScrolled ? "text-[#1D234E]" : "text-white"
              }`}
            >
              Poltek Prestasi Prima
            </span>
          </Link>
        </div>

        {/* NAV MENU */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className={linkClass()}>
            Beranda
          </Link>

          {/* Akademik */}
          <div className={linkClass(true)}>
            <button className="inline-flex items-center gap-2 focus:outline-none">
              Akademik
              <svg
                className={`w-3 h-3 transition-transform group-hover:rotate-180 ${
                  isScrolled ? "text-[#1D234E]" : "text-white"
                }`}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={dropdownPanel}>
              <a className="block px-4 py-2 hover:bg-[#1D234E] hover:text-white focus:outline-none focus:bg-[#1D234E] focus:text-white transition-colors">Program Studi</a>
              <a className="block px-4 py-2 hover:bg-[#1D234E] hover:text-white focus:outline-none focus:bg-[#1D234E] focus:text-white transition-colors">
                Kalender Akademik
              </a>
              <a className="block px-4 py-2 hover:bg-[#1D234E] hover:text-white focus:outline-none focus:bg-[#1D234E] focus:text-white transition-colors">Fasilitas</a>
            </div>
          </div>

          {/* Informasi */}
          <div className={linkClass(true)}>
            <button className="inline-flex items-center gap-2 focus:outline-none">
              Informasi
              <svg
                className={`w-3 h-3 transition-transform group-hover:rotate-180 ${
                  isScrolled ? "text-[#1D234E]" : "text-white"
                }`}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={dropdownPanel}>
              <a className="block px-4 py-2 hover:bg-[#1D234E] hover:text-white focus:outline-none focus:bg-[#1D234E] focus:text-white transition-colors">Berita</a>
              <a className="block px-4 py-2 hover:bg-[#1D234E] hover:text-white focus:outline-none focus:bg-[#1D234E] focus:text-white transition-colors">Agenda</a>
              <a className="block px-4 py-2 hover:bg-[#1D234E] hover:text-white focus:outline-none focus:bg-[#1D234E] focus:text-white transition-colors">Pengumuman</a>
            </div>
          </div>

          {/* Dokumentasi */}
          <div className={linkClass(true)}>
            <button className="inline-flex items-center gap-2 focus:outline-none">
              Dokumentasi
              <svg
                className={`w-3 h-3 transition-transform group-hover:rotate-180 ${
                  isScrolled ? "text-[#1D234E]" : "text-white"
                }`}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={dropdownPanel}>
              <a className="block px-4 py-2 hover:bg-[#1D234E] hover:text-white focus:outline-none focus:bg-[#1D234E] focus:text-white transition-colors">Galeri</a>
              <a className="block px-4 py-2 hover:bg-[#1D234E] hover:text-white focus:outline-none focus:bg-[#1D234E] focus:text-white transition-colors">Dokumen</a>
            </div>
          </div>
        </nav>

        {/* BROCHURE BUTTON */}
        <div className="flex items-center gap-3">
          {isScrolled ? (
            <button
              className="hidden md:inline-block px-4 py-2 rounded text-sm font-semibold bg-[#1D234E] border border-[#1D234E] text-white transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1D234E]/30"
              aria-label="Download Brosur"
            >
              Download Brosur
            </button>
          ) : (
            <a className="hidden md:inline-block text-white text-sm font-semibold transition-colors duration-200 hover:text-gray-200 hover:underline underline-offset-4">
              Download Brosur
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
