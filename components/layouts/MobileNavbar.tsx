"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { MENU } from "@/data/menu";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <div className="w-full bg-white border-b shadow-sm p-4 md:hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg text-gray-800">
          Politeknik Prestasi Prima
        </Link>

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-4 space-y-4 animate-fadeIn">
          {/* Beranda */}
          <Link href="/" className="block font-medium py-2">
            Beranda
          </Link>

          {/* Menu Dinamis */}
          {MENU.map((menu) => (
            <div key={menu.id}>
              <button
                onClick={() =>
                  setDropdown(dropdown === menu.id ? null : menu.id)
                }
                className="w-full flex justify-between items-center py-2 font-medium"
              >
                {menu.title}
                <ChevronDown
                  className={`transition ${
                    dropdown === menu.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {dropdown === menu.id && (
                <div className="pl-4 space-y-2 border-l">
                  {menu.items?.map((item) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      className="block text-sm py-1 hover:text-orange-600"
                    >
                      {item.label}
                    </Link>
                  ))}

                  {menu.subgroups?.map((sub) => (
                    <details key={sub.title}>
                      <summary className="cursor-pointer text-sm py-1">
                        {sub.title}
                      </summary>

                      <div className="pl-4 mt-1 space-y-1">
                        {sub.items.map((child) => (
                          <Link
                            key={child.url}
                            href={child.url}
                            className="block text-sm hover:text-orange-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
