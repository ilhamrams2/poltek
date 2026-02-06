"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type CarouselProps = {
  images: string[];
  interval?: number; // ms
  fullHeight?: boolean; // stretch to parent height
  roundedClass?: string; // pass rounded class from parent
};

export default function Carousel({
  images,
  interval = 4000,
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
    // pause auto-rotation on hover
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
        fullHeight ? "h-full" : "h-[540px]"
      } overflow-hidden ${roundedClass}`}
    >
      {/* slides */}
      <div className="w-full h-full relative">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={i === index ? "false" : "true"}
          >
            <motion.img
              initial={{ scale: 1 }}
              animate={i === index ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: interval / 1000, ease: "linear" }}
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full object-cover block"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* overlay gradient (subtle) */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl bg-linear-to-b from-black/25 via-transparent to-black/20" />

      {/* Dots — kanan bawah horizontal */}
      <div className="absolute bottom-5 right-5 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-orange-500 scale-125" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
