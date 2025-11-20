"use client";

import { useEffect, useState } from "react";

type CarouselProps = {
  images: string[];
  interval?: number; // ms
  fullHeight?: boolean;
  imageOpacity?: number; // 0..1, optional opacity for images
};

export default function Carousel({ images, interval = 4000, fullHeight = false, imageOpacity = 0.9 }: CarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`w-full relative ${fullHeight ? "h-screen" : ""}`}>
      <div className={`${fullHeight ? "h-screen" : "aspect-video"} w-full overflow-hidden bg-zinc-100`}>
        <img
          src={images[index]}
          alt={`slide-${index}`}
          className="w-full h-full object-cover"
          style={{ opacity: imageOpacity }}
        />
      </div>

      {/* centered indicators, positioned closer to bottom on small screens */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 md:bottom-16 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-[#1D234E]" : "bg-white/50"} border focus:outline-none`}
          />
        ))}
      </div>
    </div>
  );
}
