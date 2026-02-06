"use client";

import { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDownSLine, RiPlayFill, RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

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
    "/images/carousel/carousel1.jpeg",
    "/images/carousel/carousel2.jpeg",
    "/images/carousel/carousel3.jpeg",
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
    <section className="relative w-full flex flex-col items-center justify-start px-4 sm:px-8 lg:px-12 pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Elements (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-5%] right-[-5%] w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-blue-900/5 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-[1350px] mx-auto">
        {/* Media Player Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div
            className={`relative mx-auto w-full aspect-video lg:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] transition-all duration-700 ${
              isTransitioning ? "opacity-60 scale-[0.99] blur-lg" : "opacity-100"
            }`}
          >
            {/* ===================== VIDEO ===================== */}
            {!showCarousel && (
              <div
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
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
              </div>
            )}

            {/* ===================== CAROUSEL ===================== */}
            {showCarousel && (
              <div
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <Carousel images={carouselImages} interval={5000} fullHeight roundedClass="rounded-none" />
              </div>
            )}

                {/* Overlay Content (Matches Screenshot Layout) */}
                <div className={`absolute inset-0 z-20 pointer-events-none select-none p-6 sm:p-10 lg:p-16 flex flex-col justify-center transition-all duration-700 ${showCarousel ? 'bg-black/40' : 'bg-transparent'}`}>
               
               <AnimatePresence>
                 {showCarousel && (
                   <motion.div 
                     initial="hidden"
                     animate="visible"
                     exit="hidden"
                     variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                     }}
                     className="max-w-2xl"
                   >
                      <motion.h1 
                        variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                        className="text-3xl sm:text-4xl lg:text-7xl font-black text-white leading-tight uppercase"
                      >
                        Politeknik <br />
                        <span className="text-orange-500 drop-shadow-[0_5px_15px_rgba(255,103,0,0.3)]">
                           Prestasi Prima
                        </span>
                      </motion.h1>

                      <motion.p 
                        variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                        className="mt-4 sm:mt-6 text-white text-xs sm:text-base lg:text-xl font-medium max-w-lg leading-relaxed shadow-sm opacity-90"
                      >
                        Rasakan pengalaman immersive menjelajahi seluruh fasilitas kampus kami dengan teknologi panorama 360° berkualitas tinggi.
                      </motion.p>
                      
                      <motion.div
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                        className="mt-10"
                      >
                         <Link href="/site/program" className="pointer-events-auto inline-block bg-orange-600 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-900/30 hover:bg-white hover:text-orange-600 transition-all active:scale-95">
                            Lihat Program
                         </Link>
                      </motion.div>
                   </motion.div>
                 )}
               </AnimatePresence>

               {/* Logo in Corner (Matches Screenshot) */}
               <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-12 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-2 sm:p-3 overflow-hidden flex items-center justify-center shadow-2xl">
                  <img src="/images/logo_politeknik.png" alt="Logo" className="w-full h-full object-contain" />
               </div>
            </div>

            {/* Skip Video Overlay */}
            {!showCarousel && (
              <button
                onClick={() => transitionToCarousel(true)}
                className="absolute bottom-8 left-8 z-30 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all group/skip"
              >
                Skip Vidio <RiArrowRightSLine className="inline ml-1 transition-transform group-hover/skip:translate-x-1" />
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Enhanced & Highlighted */}
      <motion.div 
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-12 flex flex-col items-center gap-3 relative z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#1D234E] drop-shadow-sm">
          Scroll Explore
        </span>
        <div className="w-[2px] h-10 bg-[#1D234E] rounded-full relative overflow-hidden">
          <motion.div 
             animate={{ top: ["-100%", "100%"] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             className="absolute left-0 w-full h-1/2 bg-orange-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
