"use client";


import { useState } from "react";
import Image from "next/image";
import { 
  Play, 
  X, 
  Video, 
  Image as ImageIcon, 
  ArrowRight,
  Eye,
  Calendar,
  FileText,
  GraduationCap,
  Trophy,
  Monitor,
  Award,
  Search,
  LayoutGrid
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- TYPES & DATA ---
interface GalleryItem {
  id: string;
  category: string;
  title: string;
  date: string;
  views: string;
  youtubeId: string;
}

const CATEGORIES = [
  { name: "Show All", icon: <LayoutGrid size={16} /> },
  { name: "Kegiatan Sekolah", icon: <FileText size={16} /> },
  { name: "Wisuda", icon: <GraduationCap size={16} /> },
  { name: "Lomba", icon: <Trophy size={16} /> },
  { name: "Kewirausahaan", icon: <Monitor size={16} /> },
  { name: "Prestasi", icon: <Award size={16} /> }
];

// Mock Data - keeping usage of generic IDs for now, can be replaced
const GALLERY_DATA: GalleryItem[] = [
  {
    id: "1",
    category: "KEGIATAN SEKOLAH",
    title: "PRA-MPLS Sekolah Prestasi Prima - 2025",
    date: "10 Jan 2025",
    views: "1.1K views",
    youtubeId: "LXb3EKWsInQ", 
  },
  {
    id: "2",
    category: "KEWIRAUSAHAAN",
    title: "Profil Perpustakaan SMA Prestasi Prima | 2024",
    date: "15 Dec 2024",
    views: "800 views",
    youtubeId: "LXb3EKWsInQ", 
  },
  {
    id: "3",
    category: "PRESTASI",
    title: "Film Pendek - UTARAKAN - SMK Prestasi Prima - AVC 2023",
    date: "20 Nov 2024",
    views: "2.5K views",
    youtubeId: "LXb3EKWsInQ", 
  },
  {
    id: "4",
    category: "LOMBA",
    title: "GENIALE DANCER - SMAN Prestasi Prima JKT",
    date: "11 Oct 2024",
    views: "3.2K views",
    youtubeId: "LXb3EKWsInQ", 
  },
  {
    id: "5",
    category: "KEWIRAUSAHAAN",
    title: "Wisuda Sekolah Prestasi Prima 2025",
    date: "01 Sep 2024",
    views: "1.2K views",
    youtubeId: "LXb3EKWsInQ", 
  },
  {
    id: "6",
    category: "KEGIATAN SEKOLAH",
    title: "Nonton Bersama Film Believe Takdir, Mimpi, dan Cinta",
    date: "20 Aug 2024",
    views: "1.5K views",
    youtubeId: "LXb3EKWsInQ", 
  },
];

const FEATURED_VIDEO: GalleryItem = {
  id: "featured",
  category: "KEGIATAN SEKOLAH",
  title: "PRA-MPLS SEKOLAH PRESTASI PRIMA - 2025",
  date: "12 Oct 2024",
  views: "5K views",
  youtubeId: "LXb3EKWsInQ", 
};

// --- COMPONENTS ---

// 1. YouTube Modal
const VideoModal = ({ 
  isOpen, 
  onClose, 
  youtubeId 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  youtubeId: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="relative pt-[56.25%] w-full">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </motion.div>
          <div className="absolute inset-0 -z-10" onClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Show All");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filteredData = activeCategory === "Show All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => 
        item.category.toUpperCase() === activeCategory.toUpperCase()
      );

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-800 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <VideoModal 
        isOpen={!!playingVideo} 
        onClose={() => setPlayingVideo(null)} 
        youtubeId={playingVideo || ""} 
      />

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-0 left-[-100px] w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20 space-y-16 sm:space-y-24">
        
        {/* ===========================
            HERO SECTION
        ============================ */}
        {/* ===========================
            HERO SECTION
        ============================ */}
        <section className="flex flex-col lg:flex-row gap-8 lg:items-center relative">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-6 relative z-10"
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-[#FFF7ED] text-[#F97316] text-[11px] font-bold tracking-wider rounded-md uppercase">
                Visual Archives
              </span>
              
              <h1 className="text-5xl lg:text-[4rem] font-[900] text-[#0F172A] leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>
                Dokumentasi <br />
                <span className="text-[#F97316]">
                  Prestasi Prima
                </span>
              </h1>
              
              <p className="text-[#64748B] text-base leading-relaxed max-w-lg">
                Menangkap setiap detik perjalanan, keberhasilan, dan semangat 
                kebersamaan dalam visual yang memukau. Dari kegiatan harian 
                hingga momen kemenangan.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <div className="w-[52px] h-[52px] rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#F97316]">
                  <Video size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-[900] text-[#0F172A] text-2xl leading-none">50+</p>
                  <p className="text-[11px] text-[#94A3B8] font-bold mt-1">Video Dokumentasi</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <div className="w-[52px] h-[52px] rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#7C3AED]">
                  <ImageIcon size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-[900] text-[#0F172A] text-2xl leading-none">200+</p>
                  <p className="text-[11px] text-[#94A3B8] font-bold mt-1">Foto Kegiatan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Featured Video Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full flex justify-end"
          >
            <div 
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] w-full max-w-xl cursor-pointer group transition-all duration-500 hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.15)]"
              onClick={() => setPlayingVideo(FEATURED_VIDEO.youtubeId)}
            >
              {/* Thumbnail Image Section */}
              <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${FEATURED_VIDEO.youtubeId}/maxresdefault.jpg`}
                  alt="Featured Video"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Visual Label - Top Left */}
                <div className="absolute top-6 left-6">
                  <span className="bg-[#F97316] text-white text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-[0.15em]">
                    {FEATURED_VIDEO.category}
                  </span>
                </div>
                
                {/* Play Button - Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <div className="w-14 h-14 rounded-full border-4 border-[#F97316]/20 flex items-center justify-center">
                        <Play size={24} className="text-[#F97316] fill-[#F97316] ml-1.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info Content */}
              <div className="p-8 pb-10">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[#F97316] text-[11px] font-black uppercase tracking-widest">
                      {FEATURED_VIDEO.category}
                    </span>
                    <span className="text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider">
                      {FEATURED_VIDEO.date}
                    </span>
                 </div>
                 <h3 className="text-2xl font-[900] text-[#0F172A] leading-tight uppercase group-hover:text-[#F97316] transition-colors duration-300">
                    {FEATURED_VIDEO.title}
                 </h3>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ===========================
            FILTER & GRID SECTION
        ============================ */}
        <section className="space-y-12">
          
          {/* Tabs / Filter */}
          {/* Kinetic Morphing Dock Concept */}
          <div className="flex flex-wrap justify-center gap-6 px-4">
            {CATEGORIES.map((cat, idx) => {
              const isActive = activeCategory === cat.name;
              const count = cat.name === "Show All" 
                ? GALLERY_DATA.length 
                : GALLERY_DATA.filter(i => i.category.toUpperCase() === cat.name.toUpperCase()).length;

              return (
                <motion.button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: idx * 0.05,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group flex items-center h-16 transition-all duration-700
                    ${isActive ? "px-8 bg-white border-orange-500 rounded-[2rem] shadow-[0_20px_40px_rgba(249,115,22,0.15)]" : "w-16 bg-white/40 border-white/80 rounded-full backdrop-blur-xl shadow-lg shadow-black/5 hover:bg-white"}
                    border overflow-hidden`}
                >
                  {/* Icon Container */}
                  <div className={`flex items-center justify-center shrink-0 transition-all duration-500
                    ${isActive ? "text-orange-500 scale-110 mr-4" : "w-full text-gray-400 group-hover:text-orange-500"}`}>
                    <div className="relative">
                      {cat.icon}
                      {isActive && (
                        <motion.div 
                          layoutId="iconGlow"
                          className="absolute inset-0 bg-orange-400 blur-md opacity-30 -z-10"
                        />
                      )}
                    </div>
                  </div>

                  {/* Morphing Label - Only visible when active */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ width: 0, opacity: 0, x: -10 }}
                        animate={{ width: "auto", opacity: 1, x: 0 }}
                        exit={{ width: 0, opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="flex items-center whitespace-nowrap overflow-hidden"
                      >
                        <span className="text-[11px] font-[900] uppercase tracking-[0.2em] text-[#0F172A]">
                          {cat.name}
                        </span>
                        
                        {count > 0 && (
                          <span className="ml-3 flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-orange-50 text-orange-600 rounded-full text-[9px] font-black">
                            {count}
                          </span>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Liquid Border Effect on Active */}
                  {isActive && (
                    <motion.div 
                      layoutId="liquidBorder"
                      className="absolute inset-0 border-2 border-orange-500/20 rounded-[2rem] pointer-events-none"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredData.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  key={item.id} 
                  className="group cursor-pointer flex flex-col bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-[#F1F5F9] overflow-hidden"
                  onClick={() => setPlayingVideo(item.youtubeId)}
                >
                  {/* Thumbnail Card */}
                  <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    
                    {/* Category Overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F97316] text-white text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg">
                        {item.category}
                      </span>
                    </div>

                    {/* Centered Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                       <div className="w-16 h-16 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl">
                          <div className="w-10 h-10 rounded-full border-2 border-[#F97316]/20 flex items-center justify-center">
                            <Play size={18} className="text-[#F97316] fill-[#F97316] ml-1" />
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-black text-[#0F172A] text-base leading-tight group-hover:text-[#F97316] transition-colors duration-300 line-clamp-2 uppercase">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-[#94A3B8] font-bold pt-4 border-t border-[#F1F5F9]">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#CBD5E1]" />
                        <span className="uppercase">{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye size={14} className="text-[#CBD5E1]" />
                        <span className="uppercase">{item.views}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ===========================
            CTA BOTTOM SECTION
        ============================ */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden group"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4C1D95] via-[#6D28D9] to-[#4C1D95] bg-[length:200%_200%] animate-gradient-xy"></div>
          
          <div className="relative z-10 py-16 px-6 text-center space-y-8 max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight leading-tight">
               Ingin Melihat Lebih Banyak?
             </h2>
             
             <p className="text-purple-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
               Kunjungi channel YouTube resmi kami untuk dokumentasi lengkap dan update <br className="hidden md:block" />
               terbaru seputar kegiatan kampus.
             </p>

             <motion.a 
               href="https://www.youtube.com/@PoliteknikPrestasiPrima" 
               target="_blank" 
               rel="noreferrer"
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="inline-flex items-center gap-3 bg-white text-[#4C1D95] px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:shadow-2xl transition-all"
             >
               <Search size={20} strokeWidth={3} />
               <span>Explore More Documents</span>
               <ArrowRight size={20} strokeWidth={3} className="ml-2" />
             </motion.a>
          </div>
        </motion.section>

      </main>
    </div>
  );
}

