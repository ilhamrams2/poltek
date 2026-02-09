"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CarouselProps = {
  images: string[];
  interval?: number; // ms
  fullHeight?: boolean; // stretch to parent height
  roundedClass?: string; // pass rounded class from parent
};

export default function Carousel({
  images,
  interval = 5000,
  fullHeight = false,
  roundedClass = "rounded-3xl",
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, images.length, interval]);

  useEffect(() => {
    const cont = containerRef.current;
    if (!cont) return;
    const onEnter = () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
    const onLeave = () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setIndex((i) => (i + 1) % images.length);
      }, interval);
    };
    cont.addEventListener("mouseenter", onEnter);
    cont.addEventListener("mouseleave", onLeave);
    return () => {
      cont.removeEventListener("mouseenter", onEnter);
      cont.removeEventListener("mouseleave", onLeave);
    };
  }, [images.length, interval]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${
        fullHeight ? "h-full" : "h-[600px]"
      } overflow-hidden ${roundedClass} bg-slate-900`}
    >
      {/* slides */}
      <div className="w-full h-full relative">
        <AnimatePresence initial={false}>
          {images.map((src, i) => (
            i === index && (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-10"
              >
                <motion.img
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.15 }}
                  transition={{ duration: interval / 1000 + 1, ease: "linear" }}
                  src={src}
                  alt={`slide-${i}`}
                  className="w-full h-full object-cover block"
                  draggable={false}
                />
                {/* Individual overlay to prevent flickering */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Modern Dots — Kanan bawah */}
      <div className="absolute bottom-10 right-10 flex gap-3 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative flex items-center justify-center p-2"
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === i ? "bg-[#FF6B00] scale-150" : "bg-white/40"
            }`} />
            {index === i && (
              <motion.div 
                layoutId="active-dot"
                className="absolute inset-0 border border-[#FF6B00] rounded-full scale-150"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

