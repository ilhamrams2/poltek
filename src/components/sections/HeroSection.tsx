"use client";

import { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { RiArrowRightSLine, RiPlayFill, RiCompass3Line, RiFocus3Line, RiGlobalLine } from "react-icons/ri";
import Link from "next/link";

export default function HeroMedia() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
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
      }, 700);
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
    <section className="relative w-full flex flex-col items-center justify-start px-4 sm:px-6 lg:px-4 pt-12 pb-24 overflow-hidden bg-white">
      {/* Dynamic Background Decorations */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#1D234E]/5 rounded-full blur-[120px]" 
        />
        
        {/* Animated pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231D234E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto relative">
        {/* Media Player Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Main Frame */}
          <div
            className={`relative mx-auto w-full aspect-video lg:aspect-[21/9] rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] transition-all duration-700 bg-slate-900 ${
              isTransitioning ? "opacity-60 scale-[0.98] blur-xl" : "opacity-100"
            }`}
          >
            {/* ===================== VIDEO ===================== */}
            {!showCarousel && (
              <div
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
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
                  className="w-full h-full object-cover scale-105"
                />
              </div>
            )}

            {/* ===================== CAROUSEL ===================== */}
            {showCarousel && (
              <div
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <Carousel images={carouselImages} interval={6000} fullHeight roundedClass="rounded-none" />
              </div>
            )}

            {/* Content Overlay */}
            <div className={`absolute inset-0 z-20 p-8 sm:p-14 lg:p-20 flex flex-col justify-center transition-all duration-1000 ${showCarousel ? 'bg-black/20' : 'bg-transparent'}`}>
               
               <AnimatePresence mode="wait">
                 {showCarousel && (
                   <motion.div 
                     key="carousel-content"
                     initial="hidden"
                     animate="visible"
                     exit="hidden"
                     variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
                     }}
                     className="max-w-4xl relative z-30"
                   >
                      <motion.div
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                        className="flex items-center gap-3 mb-6"
                      >
                        <span className="h-[2px] w-12 bg-[#FF6B00]"></span>
                        <span className="text-white/80 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">Excellence in Technology</span>
                      </motion.div>

                      <motion.h1 
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="text-2xl sm:text-4xl lg:text-8xl font-black text-white leading-[0.95] uppercase tracking-tighter"
                      >
                        POLITEKNIK <br />
                        <span className="text-[#FF6B00] relative italic">
                           PRESTASI PRIMA
                           <motion.span 
                             initial={{ width: 0 }}
                             animate={{ width: "100%" }}
                             transition={{ delay: 1, duration: 0.8 }}
                             className="absolute bottom-2 left-0 h-[8px] bg-white/10 -z-10"
                           />
                        </span>
                      </motion.h1>

                      <motion.p 
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="mt-8 text-white/90 text-sm sm:text-lg sm:text-2xl font-medium max-w-2xl leading-relaxed drop-shadow-lg"
                      >
                        Membangun masa depan digital dengan pendidikan berbasis teknologi terkini dan pengalaman kampus yang futuristik.
                      </motion.p>
                      
                      <motion.div
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                        className="mt-12 flex flex-wrap gap-5"
                      >
                         <Link href="/site/program" className="group pointer-events-auto relative overflow-hidden bg-[#FF6B00] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-orange-500/40 transition-all hover:shadow-orange-500/60 active:scale-95">
                            <span className="relative z-10 flex items-center gap-2">
                               MULAI JELAJAHI <RiArrowRightSLine className="text-xl group-hover:translate-x-1 transition-transform" />
                            </span>
                            <motion.div 
                              className="absolute inset-0 bg-white"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                              style={{ opacity: 0.2 }}
                            />
                         </Link>
                         
                         <button className="pointer-events-auto group flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-5 rounded-2xl font-bold text-sm tracking-widest hover:bg-white hover:text-[#1D234E] transition-all">
                            < RiPlayFill className="text-2xl" /> VIRTUAL TOUR
                         </button>
                      </motion.div>
                   </motion.div>
                 )}
               </AnimatePresence>

               {/* Large Floating Logo */}
               <motion.div 
                  initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute top-8 right-8 sm:top-12 sm:right-12 lg:top-20 lg:right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-4 sm:p-6 shadow-2xl overflow-hidden group hover:rotate-6 transition-transform cursor-pointer"
               >
                  <img src="/images/logo_politeknik.png" alt="Logo" className="w-full h-full object-contain filter drop-shadow-xl" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/0 to-white/20 pointer-events-none" />
               </motion.div>

               {/* Bottom Stats/Info Bar (Modern Detail) - Only on Video */}
               <AnimatePresence>
                 {!showCarousel && (
                   <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 20 }}
                     transition={{ delay: 0.5, duration: 0.8 }}
                     className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-12 bg-black/40 backdrop-blur-2xl px-6 sm:px-12 py-5 rounded-3xl border border-white/10"
                   >
                      <div className="flex flex-col items-center">
                          <span className="text-[#FF6B00] text-xl sm:text-2xl font-black">100%</span>
                          <span className="text-white/60 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">Teknologi Digital</span>
                      </div>
                      <div className="w-[1px] h-8 bg-white/20" />
                      <div className="flex flex-col items-center">
                          <span className="text-[#FF6B00] text-xl sm:text-2xl font-black">360°</span>
                          <span className="text-white/60 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">Virtual Experience</span>
                      </div>
                      <div className="w-[1px] h-8 bg-white/20" />
                      <div className="flex flex-col items-center">
                          <span className="text-[#FF6B00] text-xl sm:text-2xl font-black">PREMIUM</span>
                          <span className="text-white/60 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">Standard Edu</span>
                      </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            {/* Interactive Skip Button */}
            {!showCarousel && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => transitionToCarousel(true)}
                className="absolute bottom-10 left-10 z-30 bg-[#FF6B00] text-white pr-6 pl-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl flex items-center gap-3 transition-all hover:bg-white hover:text-orange-600 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <RiPlayFill className="text-sm" />
                </div>
                SKIP VIDEO & EXPLORE
              </motion.button>
            )}

            {/* Floating Decorative Elements when hovered */}
            <AnimatePresence>
              {isHovered && (
                <>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute top-1/2 right-10 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
                  >
                    {[RiCompass3Line, RiFocus3Line, RiGlobalLine].map((Icon, idx) => (
                      <div key={idx} className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center text-white text-xl hover:bg-[#FF6B00] transition-colors cursor-pointer">
                        <Icon />
                      </div>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-6 flex flex-col items-center gap-2 relative z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#1D234E]/40">
          Scroll to Discovery
        </span>
        <div className="w-[1px] h-10 bg-[#1D234E]/10 relative overflow-hidden">
          <motion.div 
             animate={{ top: ["-100%", "100%"] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="absolute left-0 w-full h-1/2 bg-[#FF6B00]"
          />
        </div>
      </motion.div>
    </section>
  );
}

