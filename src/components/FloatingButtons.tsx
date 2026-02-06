"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  RiWheelchairLine, 
  RiArrowUpLine, 
  RiCloseLine, 
  RiContrastDropLine, 
  RiFontSize, 
  RiLinksLine, 
  RiEyeOffLine, 
  RiCursorFill,
  RiSpeedLine,
  RiTextSpacing,
  RiGuideLine,
  RiMentalHealthLine,
  RiEyeLine,
  RiVolumeUpLine,
  RiRefreshLine
} from "react-icons/ri";

export default function FloatingButtons() {
  /* ----------------------------------------------------
     STATE & REFS
  ----------------------------------------------------- */
  const [isAccessOpen, setIsAccessOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Advanced Features
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [neonContrast, setNeonContrast] = useState(false); // New: Cyberpunk/Neon contrast
  const [largeText, setLargeText] = useState(false); // 0 = normal, 1 = large, 2 = extra
  const [extraLargeText, setExtraLargeText] = useState(false);
  const [wideSpacing, setWideSpacing] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [pauseAnim, setPauseAnim] = useState(false);
  const [cursorBig, setCursorBig] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(false);

  const [guidePos, setGuidePos] = useState(0);

  // Active Profile Tracking
  const [activeProfile, setActiveProfile] = useState<string | null>(null);

  /* ----------------------------------------------------
     LOGIC PROFILES (One-Click Setup)
  ----------------------------------------------------- */
  const applyProfile = (profile: string) => {
    resetAll(false); // Reset but don't clear UI variable yet
    setActiveProfile(profile);

    switch (profile) {
      case "epilepsy":
        setPauseAnim(true);
        setGrayscale(true); // Reduces flash intensity
        setHideImages(false); // Optional
        break;
      case "visual":
        setLargeText(true);
        setHighContrast(true);
        setCursorBig(true);
        break;
      case "adhd":
        setReadingGuide(true);
        setHideImages(true); // Focus content
        break;
      case "senior":
        setExtraLargeText(true);
        setWideSpacing(true);
        setCursorBig(true);
        break;
    }
  };

  const resetAll = (fullReset = true) => {
    setGrayscale(false);
    setHighContrast(false);
    setNeonContrast(false);
    setLargeText(false);
    setExtraLargeText(false);
    setWideSpacing(false);
    setHighlightLinks(false);
    setHideImages(false);
    setDyslexicFont(false);
    setPauseAnim(false);
    setCursorBig(false);
    setReadingGuide(false);
    setTtsEnabled(false);
    if (fullReset) setActiveProfile(null);
  };

  /* ----------------------------------------------------
     EFFECTS
  ----------------------------------------------------- */
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Filters
    let filter = "";
    if (grayscale) filter += " grayscale(100%)";
    if (neonContrast) filter += " contrast(150%) brightness(120%)"; // Simplified neon effect
    root.style.filter = filter;

    // Contrast Modes
    root.classList.remove("access-high-contrast", "access-neon-contrast");
    if (highContrast) root.classList.add("access-high-contrast");
    if (neonContrast) root.classList.add("access-neon-contrast");

    // Text Size
    if (extraLargeText) root.style.fontSize = "150%";
    else if (largeText) root.style.fontSize = "120%";
    else root.style.fontSize = "";

    // Spacing
    if (wideSpacing) {
      root.style.wordSpacing = "0.5rem";
      root.style.letterSpacing = "0.1rem";
      root.style.lineHeight = "2";
    } else {
      root.style.wordSpacing = "";
      root.style.letterSpacing = "";
      root.style.lineHeight = "";
    }

    // Toggle Classes
    const toggleClass = (condition: boolean, className: string) => {
      if (condition) body.classList.add(className);
      else body.classList.remove(className);
    };

    toggleClass(highlightLinks, "access-highlight-links");
    toggleClass(hideImages, "access-hide-images");
    toggleClass(dyslexicFont, "access-dyslexic-font");
    toggleClass(pauseAnim, "access-pause-anim");
    toggleClass(cursorBig, "access-cursor-big");
    toggleClass(readingGuide, "access-reading-guide-cursor"); // Hides default cursor sometimes

  }, [grayscale, highContrast, neonContrast, largeText, extraLargeText, wideSpacing, highlightLinks, hideImages, dyslexicFont, pauseAnim, cursorBig, readingGuide]);

  // Reading Guide Logic
  useEffect(() => {
    if (!readingGuide) return;
    const handleMove = (e: MouseEvent) => {
      setGuidePos(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [readingGuide]);

  // Back to Top Logic
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ----------------------------------------------------
     TEXT TO SPEECH HELPER
  ----------------------------------------------------- */
  const toggleTTS = () => {
    if (ttsEnabled) {
      window.speechSynthesis.cancel();
      setTtsEnabled(false);
    } else {
      setTtsEnabled(true);
      const msg = new SpeechSynthesisUtterance("Fitur Pembaca Layar Diaktifkan. Silakan blok teks untuk membaca.");
      msg.lang = "id-ID";
      window.speechSynthesis.speak(msg);
    }
  };

  // Monitor text selection for TTS
  useEffect(() => {
    if (!ttsEnabled) return;
    const handleMouseUp = () => {
      const text = window.getSelection()?.toString();
      if (text && text.length > 0) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = "id-ID";
        window.speechSynthesis.speak(msg);
      }
    };
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [ttsEnabled]);


  /* ----------------------------------------------------
     RENDER
  ----------------------------------------------------- */
  return (
    <>
      <style jsx global>{`
        /* High Contrast (Yellow on Black) */
        .access-high-contrast { background-color: black !important; color: #ffff00 !important; }
        .access-high-contrast * { background-color: black !important; color: #ffff00 !important; border-color: #ffff00 !important; box-shadow: none !important; }
        .access-high-contrast img { filter: grayscale(100%) contrast(200%); }

        /* Neon Contrast (Green on Blue - "Hacker/Terminal") */
        .access-neon-contrast { background-color: #0d0221 !important; color: #00ff41 !important; }
        .access-neon-contrast * { background-color: #0d0221 !important; color: #00ff41 !important; border-color: #00ff41 !important; }

        /* Highlight Links */
        .access-highlight-links a { text-decoration: underline !important; font-weight: 800 !important; color: #F97316 !important; background-color: #fff !important; padding: 0 4px; border-radius: 4px; }

        /* Hide Images */
        .access-hide-images img, .access-hide-images video, .access-hide-images [style*="background-image"] { opacity: 0 !important; visibility: hidden !important; }

        /* Dyslexic */
        .access-dyslexic-font * { font-family: 'Comic Sans MS', sans-serif !important; letter-spacing: 0.05em; }

        /* Pause Anim */
        .access-pause-anim *, .access-pause-anim *::before, .access-pause-anim *::after { animation-play-state: paused !important; transition: none !important; }

        /* Cursor */
        .access-cursor-big, .access-cursor-big * { cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='black' stroke='white' stroke-width='2'%3E%3Cpath d='M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z'/%3E%3C/svg%3E"), auto !important; }
      `}</style>
      
      {/* READING GUIDE ELEMENT */}
      {readingGuide && (
        <div 
          className="fixed left-0 w-full h-24 bg-yellow-400/20 border-y-4 border-yellow-500 pointer-events-none z-[99999] mix-blend-multiply"
          style={{ top: guidePos - 48 }}
        />
      )}

      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4 items-end pointer-events-none">
        
        {/* PANEL */}
        <div className="pointer-events-auto">
          <AnimatePresence>
            {isAccessOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="mb-4 w-[350px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[80vh]"
              >
                {/* Header */}
                <div className="bg-[#1D234E] p-5 flex items-center justify-between text-white shrink-0">
                  <div>
                    <h3 className="font-black text-base tracking-widest uppercase flex items-center gap-2">
                       <RiWheelchairLine className="text-orange-500" /> Aksesibilitas Pro
                    </h3>
                  </div>
                  <button onClick={() => setIsAccessOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition">
                    <RiCloseLine size={24} />
                  </button>
                </div>

                {/* Content Scrollable */}
                <div className="p-5 overflow-y-auto custom-scrollbar">
                  
                  {/* Link to Guide */}
                  <Link href="/aksesibilitas" className="block w-full mb-6 p-4 bg-purple-50 border border-purple-100 rounded-xl flex items-center justify-between group hover:bg-purple-100 transition-colors">
                     <span className="text-purple-700 font-bold text-xs flex items-center gap-2">
                       <RiGuideLine size={18} /> PANDUAN PENGGUNA
                     </span>
                     <RiArrowUpLine className="rotate-90 text-purple-400" />
                  </Link>

                  {/* SECTION 1: SMART PROFILES (Presets) */}
                  <div className="mb-8">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Profil Cerdas (Presets)</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <ProfileButton 
                        active={activeProfile === "epilepsy"} 
                        onClick={() => applyProfile("epilepsy")} 
                        icon={<RiMentalHealthLine />} 
                        label="Aman Epilepsi" 
                        color="green"
                      />
                      <ProfileButton 
                        active={activeProfile === "visual"} 
                        onClick={() => applyProfile("visual")} 
                        icon={<RiEyeLine />} 
                        label="Gangguan Visual" 
                        color="blue"
                      />
                      <ProfileButton 
                        active={activeProfile === "adhd"} 
                        onClick={() => applyProfile("adhd")} 
                        icon={<RiGuideLine />} 
                        label="Fokus ADHD" 
                        color="orange"
                      />
                       <ProfileButton 
                        active={activeProfile === "senior"} 
                        onClick={() => applyProfile("senior")} 
                        icon={<RiWheelchairLine />} 
                        label="Lansia Friendly" 
                        color="purple"
                      />
                    </div>
                  </div>

                  {/* SECTION 2: CONTENT ADJUSTMENTS */}
                  <div className="mb-8">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Penyesuaian Konten</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <AccessToggle active={largeText} onClick={() => { setLargeText(!largeText); setExtraLargeText(false); }} icon={<RiFontSize />} label="Teks+" />
                      <AccessToggle active={extraLargeText} onClick={() => { setExtraLargeText(!extraLargeText); setLargeText(false); }} icon={<RiFontSize size={20} />} label="Teks++" />
                      <AccessToggle active={wideSpacing} onClick={() => setWideSpacing(!wideSpacing)} icon={<RiTextSpacing />} label="Spasi" />
                      <AccessToggle active={highlightLinks} onClick={() => setHighlightLinks(!highlightLinks)} icon={<RiLinksLine />} label="Links" />
                      <AccessToggle active={dyslexicFont} onClick={() => setDyslexicFont(!dyslexicFont)} icon={<span>DF</span>} label="Dyslexia" />
                      <AccessToggle active={cursorBig} onClick={() => setCursorBig(!cursorBig)} icon={<RiCursorFill />} label="Kursor" />
                    </div>
                  </div>

                   {/* SECTION 3: VISUAL & COLOR */}
                   <div className="mb-8">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Warna & Tampilan</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <AccessToggle active={grayscale} onClick={() => { setGrayscale(!grayscale); setHighContrast(false); setNeonContrast(false); }} icon={<RiContrastDropLine />} label="Grayscale" />
                      <AccessToggle active={highContrast} onClick={() => { setHighContrast(!highContrast); setGrayscale(false); setNeonContrast(false); }} icon={<RiContrastDropLine />} label="High Contrast" />
                      <AccessToggle active={neonContrast} onClick={() => { setNeonContrast(!neonContrast); setGrayscale(false); setHighContrast(false); }} icon={<RiContrastDropLine />} label="Neon Mode" />
                      <AccessToggle active={hideImages} onClick={() => setHideImages(!hideImages)} icon={<RiEyeOffLine />} label="Sembunyi Gambar" />
                      <AccessToggle active={pauseAnim} onClick={() => setPauseAnim(!pauseAnim)} icon={<RiSpeedLine />} label="Stop Animasi" />
                    </div>
                  </div>

                  {/* SECTION 4: ASSISTIVE TOOLS */}
                  <div className="mb-4">
                     <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Alat Bantu</h4>
                     <div className="grid grid-cols-2 gap-3">
                        <button 
                           onClick={() => setReadingGuide(!readingGuide)}
                           className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${readingGuide ? 'bg-orange-500 text-white border-orange-500' : 'bg-white border-gray-200 text-gray-600 hover:border-orange-300'}`}
                        >
                           <RiGuideLine className="text-lg" />
                           <span className="text-[10px] font-bold uppercase">Panduan Baca</span>
                        </button>
                        <button 
                           onClick={toggleTTS}
                           className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${ttsEnabled ? 'bg-green-600 text-white border-green-600' : 'bg-white border-gray-200 text-gray-600 hover:border-green-300'}`}
                        >
                           <RiVolumeUpLine className="text-lg" />
                           <span className="text-[10px] font-bold uppercase">Suara (TTS)</span>
                        </button>
                     </div>
                  </div>

                  {/* Reset */}
                  <button 
                    onClick={() => resetAll(true)}
                    className="w-full mt-2 py-3 bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                  >
                    <RiRefreshLine /> Reset Pengaturan
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Buttons Group */}
        <div className="flex flex-col gap-4 pointer-events-auto">
          {/* Read Speaker / TTS Quick Trigger (Optional, kept inside panel for now to avoid clutter) */}

          {/* Accessibility Trigger */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAccessOpen(!isAccessOpen)}
            className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl transition-colors border-4 border-white ${
              isAccessOpen ? "bg-[#1D234E]" : "bg-[#F97316]"
            } relative`}
          >
            <RiWheelchairLine />
            {activeProfile && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
            )}
          </motion.button>

          {/* Back To Top */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#F97316] text-2xl border-4 border-[#F97316]"
              >
                <RiArrowUpLine />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

// Sub-components for cleaner code
function ProfileButton({ active, onClick, icon, label, color }: any) {
  const colorMap: any = {
     green: "bg-green-500 border-green-500 text-white",
     blue: "bg-blue-600 border-blue-600 text-white",
     orange: "bg-orange-500 border-orange-500 text-white",
     purple: "bg-purple-600 border-purple-600 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
        active 
          ? colorMap[color] + " shadow-md"
          : "bg-white border-gray-100 text-gray-500 hover:border-gray-300"
      }`}
    >
      <div className="text-xl">{icon}</div>
      <span className="text-[9px] font-bold uppercase text-center leading-tight">{label}</span>
    </button>
  );
}

function AccessToggle({ active, onClick, icon, label }: any) {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 h-20 ${
        active 
          ? "bg-[#1D234E] border-[#1D234E] text-white shadow-md relative overflow-hidden" 
          : "bg-white border-gray-100 text-gray-500 hover:border-orange-200 hover:text-orange-600"
      }`}
    >
      <div className="text-xl z-10 relative">{icon}</div>
      <span className="text-[9px] font-bold uppercase text-center leading-tight z-10 relative">{label}</span>
    </button>
  );
}
