"use client";

import { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";

type Props = {
  videoUrl?: string; // optional API-supplied video
};

export default function HeroMedia({ videoUrl }: Props) {
  const [showCarousel, setShowCarousel] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lastTimeRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // placeholder assets while real API not available
  const placeholderVideo =
    videoUrl ||
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

  const carouselImages = [
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1600&q=80&auto=format&fit=crop",
  ];

  function transitionToCarousel(animate = true) {
    const el = videoRef.current;
    if (animate) {
      setIsTransitioning(true);
      try {
        el?.pause();
      } catch {}
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      // wait for CSS fade (500ms) then show carousel
      window.setTimeout(() => {
        setShowCarousel(true);
        setIsTransitioning(false);
      }, 500);
    } else {
      setShowCarousel(true);
    }
  }

  useEffect(() => {
    // After 1 minute (60s), switch to carousel (with animation)
    timeoutRef.current = window.setTimeout(() => transitionToCarousel(true), 60_000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onEnded = () => transitionToCarousel(true);
    const onTimeUpdate = () => {
      lastTimeRef.current = el.currentTime;
    };
    const onSeeking = () => {
      // prevent seeking by resetting to last known time
      try {
        el.currentTime = lastTimeRef.current;
      } catch {
        /* ignore */
      }
    };

    el.addEventListener("ended", onEnded);
    el.addEventListener("timeupdate", onTimeUpdate);
    el.addEventListener("seeking", onSeeking);

    return () => {
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("seeking", onSeeking);
    };
  }, []);

  return (
  // full-bleed hero that occupies full viewport height
  // add a higher z-index so hero media renders above decorative assets
  <section className="w-full min-h-screen relative overflow-hidden z-10">
      {/* subtle overlay so white nav text shows when navbar is transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />

      {!showCarousel ? (
        <>
          <div
            className={`w-full h-screen relative ${
              isTransitioning
                ? "opacity-0 transition-opacity duration-600"
                : "opacity-100 transition-opacity duration-600"
            }`}
          >
            <video
              ref={videoRef}
              src={placeholderVideo}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
              // remove native controls to prevent built-in seeking
              controls={false}
            />

            {/* Skip button centered same as carousel dots (bottom-32) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 md:bottom-16">
              <button
                onClick={() => transitionToCarousel(true)}
                className="bg-[#1D234E] text-white px-4 py-2 rounded-md shadow-sm transition-transform active:scale-95"
                aria-label="Skip video and show carousel"
              >
                Skip Video
              </button>
            </div>
          </div>
        </>
      ) : (
        <div
          className={`${
            isTransitioning
              ? "opacity-0 transition-opacity duration-600"
              : "opacity-100 transition-opacity duration-600"
          }`}
        >
          <Carousel images={carouselImages} interval={4000} fullHeight />
        </div>
      )}
    </section>
  );
}
