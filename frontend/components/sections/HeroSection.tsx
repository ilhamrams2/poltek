"use client";

import { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";

export default function HeroMedia() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lastTimeRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  /* --------------------------------------------
      FILES (video + carousel images)
  --------------------------------------------- */
  const videoUrl = "/videos/DemoVideos.mp4";

  const carouselImages = [
    "/images/carousel/carousel1.jpg",
    "/images/carousel/carousel2.jpg",
    "/images/carousel/carousel3.jpg",
  ];

  /* --------------------------------------------
      TRANSITION TO CAROUSEL
  --------------------------------------------- */
  function transitionToCarousel(animate = true) {
    if (animate) {
      setIsTransitioning(true);

      try {
        videoRef.current?.pause();
      } catch {}

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      window.setTimeout(() => {
        setShowCarousel(true);
        setIsTransitioning(false);
      }, 500);
    } else {
      setShowCarousel(true);
    }
  }

  /* --------------------------------------------
      AUTO TRANSITION AFTER 60s
  --------------------------------------------- */
  useEffect(() => {
    timeoutRef.current = window.setTimeout(
      () => transitionToCarousel(true),
      60_000
    );

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  /* --------------------------------------------
      VIDEO EVENTS
  --------------------------------------------- */
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const onEnded = () => transitionToCarousel(true);
    const onTimeUpdate = () => (lastTimeRef.current = el.currentTime);
    const onSeeking = () => {
      try {
        el.currentTime = lastTimeRef.current;
      } catch {}
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

  /* --------------------------------------------
      RENDER
  --------------------------------------------- */
  return (
    <section className="w-full px-4 md:px-8 lg:px-20 py-8">

      <div
        className={`relative mx-auto max-w-7xl h-[540px] md:h-[600px] ${
          isTransitioning ? "opacity-60" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">

          {/* ===================== VIDEO ===================== */}
          {!showCarousel && (
            <div
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <video
                ref={videoRef}
                src={videoUrl}
                autoPlay
                muted
                playsInline
                controls={false}
                className="w-full h-full object-cover"
              />

              {/* ==== BUTTON LEWATI VIDEO ==== */}
              <button
                onClick={() => transitionToCarousel(true)}
                className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-black/60 transition"
              >
                Lewati Video
              </button>
            </div>
          )}

          {/* ===================== CAROUSEL ===================== */}
          {showCarousel && (
            <div
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <Carousel images={carouselImages} interval={4500} fullHeight />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
