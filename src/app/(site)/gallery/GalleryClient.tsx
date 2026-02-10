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
  Search,
  LayoutGrid
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { getYoutubeVideoId } from "@/lib/youtube";

// --- TYPES & DATA ---
interface GalleryItem {
  id: string;
  title: string;
  videoUrl: string;
  description?: string | null;
  createdAt: Date | string;
}

const CATEGORIES = [
  { name: "Show All", icon: <LayoutGrid size={16} /> },
];

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

export default function GalleryClient({ initialData }: { initialData: any[] }) {
  const [activeCategory, setActiveCategory] = useState("Show All");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const galleryItems = initialData.map(item => ({
    ...item,
    youtubeId: getYoutubeVideoId(item.videoUrl)
  })).filter(item => item.youtubeId);

  const FEATURED_VIDEO = galleryItems[0] || {
    id: "featured",
    title: "Belum ada video",
    youtubeId: "",
    category: "GALLERY",
    createdAt: new Date()
  };

  const formatDate = (date: any) => {
    try {
      return format(new Date(date), "dd MMM yyyy", { locale: idLocale });
    } catch (e) {
      return "Baru saja";
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-800 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <VideoModal 
        isOpen={!!playingVideo} 
        onClose={() => setPlayingVideo(null)} 
        youtubeId={playingVideo || ""} 
      />

      {/* Decorative BG */}
      <div className="fixed top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20 space-y-16 sm:space-y-24">
        
        {/* HERO */}
        <section className="flex flex-col lg:flex-row gap-8 lg:items-center relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6 relative z-10"
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-[#FFF7ED] text-[#F97316] text-[11px] font-bold tracking-wider rounded-md uppercase">
                Visual Archives
              </span>
              <h1 className="text-5xl lg:text-[4rem] font-[900] text-[#0F172A] leading-tight">
                Dokumentasi <br />
                <span className="text-[#F97316]">Prestasi Prima</span>
              </h1>
              <p className="text-[#64748B] text-base leading-relaxed max-w-lg">
                Menangkap setiap detik perjalanan, keberhasilan, dan semangat kebersamaan.
              </p>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-[52px] h-[52px] rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#F97316]">
                  <Video size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-[900] text-[#0F172A] text-2xl leading-none">{galleryItems.length}</p>
                  <p className="text-[11px] text-[#94A3B8] font-bold mt-1">Video Dokumentasi</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="flex-1 w-full flex justify-end"
          >
            <div 
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-xl cursor-pointer group transition-all duration-500 hover:shadow-orange-100/50"
              onClick={() => setPlayingVideo(FEATURED_VIDEO.youtubeId)}
            >
              <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                {FEATURED_VIDEO.youtubeId && (
                  <Image
                    src={`https://img.youtube.com/vi/${FEATURED_VIDEO.youtubeId}/maxresdefault.jpg`}
                    alt="Featured Video"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                )}
                <div className="absolute top-6 left-6">
                  <span className="bg-[#F97316] text-white text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-[0.15em]">
                    FEATURED
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <Play size={24} className="text-[#F97316] fill-[#F97316] ml-1.5" />
                  </div>
                </div>
              </div>

              <div className="p-8 pb-10">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[#F97316] text-[11px] font-black uppercase tracking-widest">GALLERY</span>
                    <span className="text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider">
                      {formatDate(FEATURED_VIDEO.createdAt)}
                    </span>
                 </div>
                 <h3 className="text-2xl font-[900] text-[#0F172A] leading-tight uppercase group-hover:text-[#F97316] transition-colors duration-300">
                    {FEATURED_VIDEO.title}
                 </h3>
              </div>
            </div>
          </motion.div>
        </section>

        {/* GRID */}
        <section className="space-y-12">
          <div className="flex flex-wrap justify-center gap-6 px-4">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center h-16 px-8 bg-white border border-orange-500 rounded-[2rem] shadow-lg text-orange-500`}
              >
                <div className="mr-2">{cat.icon}</div>
                <span className="text-[11px] font-[900] uppercase tracking-[0.2em]">{cat.name}</span>
                <span className="ml-3 flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-orange-50 text-orange-600 rounded-full text-[9px] font-black">
                  {galleryItems.length}
                </span>
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {galleryItems.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  key={item.id} 
                  className="group cursor-pointer flex flex-col bg-white rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                  onClick={() => setPlayingVideo(item.youtubeId)}
                >
                  <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F97316] text-white text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg">
                        GALLERY
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                       <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-2xl">
                          <Play size={18} className="text-[#F97316] fill-[#F97316] ml-1" />
                       </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="font-black text-[#0F172A] text-base leading-tight group-hover:text-[#F97316] transition-colors duration-300 line-clamp-2 uppercase">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-[#94A3B8] font-bold pt-4 border-t border-[#F1F5F9]">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#CBD5E1]" />
                        <span className="uppercase">{formatDate(item.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye size={14} className="text-[#CBD5E1]" />
                        <span className="uppercase">1K VIEWS</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[3rem] overflow-hidden group bg-gradient-to-br from-[#4C1D95] via-[#6D28D9] to-[#4C1D95] py-16 px-6 text-center text-white"
        >
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
             <h2 className="text-4xl md:text-5xl font-[900]">Ingin Melihat Lebih Banyak?</h2>
             <p className="text-purple-100 text-base md:text-lg">Kunjungi channel YouTube resmi kami.</p>
             <motion.a 
               href="https://www.youtube.com/@PoliteknikPrestasiPrima" 
               target="_blank" 
               className="inline-flex items-center gap-3 bg-white text-[#4C1D95] px-8 py-4 rounded-xl font-black text-sm uppercase"
             >
               <Search size={20} strokeWidth={3} />
               <span>Explore More</span>
               <ArrowRight size={20} strokeWidth={3} className="ml-2" />
             </motion.a>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
