"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection({
  title,
  faqs,
}: {
  title: string;
  faqs: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (idx: number) => {
    const newIndex = openIndex === idx ? null : idx;
    setOpenIndex(newIndex);

    setTimeout(() => {
      if (newIndex !== null && refs.current[newIndex]) {
        refs.current[newIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 300);
  };

  // Close if click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-24 bg-white flex flex-col items-center px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-[#0e162e]">
        {title}
      </h2>

      {/* FAQ Wrapper */}
      <div ref={wrapperRef} className="w-full max-w-3xl space-y-5">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              ref={(el) => {
                refs.current[idx] = el; // <-- fixed
              }}
              className="bg-white shadow-md rounded-xl px-6 py-5 cursor-pointer border
              border-transparent hover:border-purple-200 transition-all duration-300"
              onClick={() => handleToggle(idx)}
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-800 text-base md:text-lg">
                  {item.q}
                </p>

                <div
                  className={`transition-all duration-500 text-purple-700 
                    bg-purple-100 w-8 h-8 flex items-center justify-center rounded-full shadow-sm
                    ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "max-h-40 opacity-100 mt-4 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2"
                }`}
              >
                <p className="text-gray-600 text-sm md:text-base leading-relaxed border-t pt-4 border-purple-100">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
