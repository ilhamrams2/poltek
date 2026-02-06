"use client";

import Link from "next/link";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import { MENU } from "@/data/menu";

export default function Navbar() {
  return (
    <nav className="px-6 lg:px-12 py-4 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* === LOGO === */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo_politeknik.png"
            alt="Logo Politeknik"
            width={50}
            height={50}
          />
          <span className="font-semibold text-gray-800 text-lg whitespace-nowrap">
            <span className="text-orange-600">Politeknik</span> Prestasi Prima
          </span>
        </Link>

        {/* === DESKTOP MENU === */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium">

          {/* Beranda — tanpa dropdown */}
          <li>
            <Link href="/" className="hover:text-orange-600 transition">
              Beranda
            </Link>
          </li>

          {/* Menu Dengan Dropdown */}
          {MENU.map((menu) => (
            <li key={menu.id} className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-600 transition">
                {menu.title}
                <RiArrowDownSLine size={16} />
              </button>

              {/* Dropdown Menu */}
              <div
                className="absolute left-0 mt-2 w-64 bg-white shadow-lg py-3 rounded-md
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                {/* Item normal */}
                {menu.items?.map((item) => (
                  <Link
                    key={item.label}
                    href={item.url || "#"}
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Submenu (nested) */}
                {menu.subgroups?.map((sub) => (
                  <div key={sub.title} className="relative group/sub">
                    <span
                      className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      {sub.title}
                      <RiArrowDownSLine size={14} />
                    </span>

                    {/* Subgroup Dropdown */}
                    <div
                      className="absolute left-full top-0 w-64 bg-white shadow-lg py-3 rounded-md
                      opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible
                      translate-x-2 group-hover/sub:translate-x-0 transition-all duration-200"
                    >
                      {sub.items.map((child) => (
                        <Link
                          key={child.label}
                          href={child.url}
                          className="block px-4 py-2 hover:bg-gray-50"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
