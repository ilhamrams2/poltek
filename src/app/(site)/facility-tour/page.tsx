"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { 
  RiCompass3Fill, 
  RiFocus3Line, 
  RiVideoChatLine, 
  RiMapPinRangeLine,
  RiArrowRightUpLine,
  RiFocus2Line,
  RiCloseLine
} from "react-icons/ri";
import { FaVrCardboard } from "react-icons/fa";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

interface TourLocation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  panoramaUrl: string; // Placeholder for actual 360 link
  tags: string[];
}

const TOUR_LOCATIONS: TourLocation[] = [
  {
    id: "rps-hall",
    title: "Gedung RPS (Hall)",
    subtitle: "Pusat Teknologi & Eksperimen",
    description: "Gedung RPS merupakan landmark utama kampus yang berfungsi sebagai pusat pengembangan teknologi dua lantai. Dilengkapi aula luas dengan videotron modern serta ruang IoT untuk eksperimen dan riset mahasiswa.",
    image: "/images/facility/facility1.png",
    panoramaUrl: "https://kuula.co/share/collection/7l7hR", 
    tags: ["IoT Center", "Main Hall", "Tech Hub"]
  },
  {
    id: "backyard",
    title: "Halaman Belakang",
    subtitle: "Creative Green Space",
    description: "Area outdoor multifungsi yang dirancang untuk mendukung interaksi sosial, kegiatan organisasi mahasiswa, upacara, dan berbagai event kampus dengan suasana yang asri dan nyaman.",
    image: "/images/facility/facility4.png",
    panoramaUrl: "https://kuula.co/share/collection/7l7hR",
    tags: ["Outdoor", "Event Space", "Student Center"]
  },
  {
    id: "computer-lab",
    title: "Laboratorium Komputer",
    subtitle: "High-Spec Digital Workshop",
    description: "Ruang praktikum yang dilengkapi dengan puluhan unit PC berspesifikasi tinggi untuk mendukung pembelajaran pemrograman, networking, dan pengembangan sistem informasi.",
    image: "/images/facility/ruang-kelas01-1024x768.jpeg",
    panoramaUrl: "https://kuula.co/share/collection/7l7hR",
    tags: ["IT Lab", "Modern PC", "Software Dev"]
  },
  {
    id: "smart-classroom",
    title: "Smart Classroom",
    subtitle: "Next-Gen Learning Environment",
    description: "Ruang kelas masa depan yang mengintegrasikan teknologi Smart Board, sistem audio visual terpadu, dan desain ergonomis untuk kenyamanan belajar mengajar yang maksimal.",
    image: "/images/facility/ruang-kelas03-1024x768.jpeg",
    panoramaUrl: "https://kuula.co/share/collection/7l7hR",
    tags: ["Interactive", "Smart Board", "Hybrid Ready"]
  }
];

export default function FacilityVirtualTourPage() {
  const [selectedTour, setSelectedTour] = useState<TourLocation | null>(null);

  return (
    <main className={`${jakarta.className} min-h-screen bg-[#080c1b] text-white selection:bg-[#F15A24]/30`}>
      {/* 1. HERO SECTION - Immersive Design */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Parallax Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/tour360/hero.jpg"
            alt="Virtual Tour Politeknik"
            fill
            priority
            className="object-cover opacity-60 brightness-75 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080c1b]/80 via-transparent to-[#080c1b]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080c1b] via-transparent to-[#080c1b]/80" />
        </motion.div>

        {/* Animated HUD Elements */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#F15A24]/10 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 mb-8 mx-auto">
              <RiCompass3Fill className="text-[#F15A24] text-xl animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">360° Immersive Experience</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight">
              Jelajahi Kampus <br />
              <span className="bg-gradient-to-r from-[#F15A24] via-[#ff7c3d] to-[#F15A24] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Tanpa Batas</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Masuki setiap sudut lingkungan Politeknik Prestasi Prima melalui teknologi virtual tour 360° berkualitas tinggi, langsung dari kenyamanan layar Anda.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => {
                  const el = document.getElementById('explore-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative bg-[#F15A24] text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl shadow-[#F15A24]/30 overflow-hidden"
              >
                <span className="relative z-10">Mulai Eksplorasi</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0 opacity-10" />
              </button>
              
              <Link
                href="/facility"
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Daftar Fasilitas
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer"
          onClick={() => document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Explore Map</span>
          <div className="w-1 h-12 bg-gradient-to-b from-[#F15A24] to-transparent rounded-full" />
        </motion.div>
      </section>

      {/* 2. EXPLORE SECTION - The Tour Grid */}
      <section id="explore-section" className="relative py-32 bg-[#080c1b]">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <div className="inline-flex items-center gap-2 text-[#F15A24] font-black uppercase tracking-widest text-xs mb-4">
                <span className="w-8 h-[2px] bg-[#F15A24]" />
                Interactive Map
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white">Sudut Pandang <span className="text-[#F15A24]">Baru</span></h2>
            </div>
            <p className="text-gray-400 max-w-md font-medium">
              Pilih lokasi yang ingin Anda telusuri secara detail. Setiap area dilengkapi informasi interaktif untuk memandu perjalanan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {TOUR_LOCATIONS.map((loc, idx) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-[2rem] overflow-hidden bg-[#1D234E]/30 border border-white/5 hover:border-[#F15A24]/30 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedTour(loc)}
              >
                {/* Image Wrap */}
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={loc.image}
                    alt={loc.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c1b] via-[#080c1b]/20 to-transparent" />
                  
                  {/* Floating Action Badge */}
                  <div className="absolute top-6 right-6 flex gap-2">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 group-hover:bg-[#F15A24] group-hover:text-white transition-all shadow-xl">
                      <RiFocus3Line className="text-2xl" />
                    </div>
                  </div>

                  {/* Content Over Post */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {loc.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-black mb-2 group-hover:text-[#F15A24] transition-colors">{loc.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 opacity-80">{loc.subtitle}</p>
                  </div>
                </div>

                {/* Hover Reveal Info */}
                <div className="p-8 border-t border-white/5">
                  <div className="flex items-center justify-between group/btn">
                    <span className="text-sm font-bold uppercase tracking-widest">Inisiasi Tour</span>
                    <div className="flex items-center gap-2 text-[#F15A24] font-black">
                      <span className="text-xs">LAUNCH 360°</span>
                      <RiArrowRightUpLine className="text-xl transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOUR VIEWER MODAL - The Real "Tour" Mockup */}
      <AnimatePresence>
        {selectedTour && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-0 md:p-10"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl cursor-pointer"
              onClick={() => setSelectedTour(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full h-full max-w-7xl bg-[#080c1b] rounded-none md:rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(241,90,36,0.2)] flex flex-col"
            >
              {/* Top Controls */}
              <div className="relative z-20 flex items-center justify-between p-6 md:p-8 bg-gradient-to-b from-black/80 to-transparent">
                <div>
                  <h2 className="text-xl md:text-3xl font-black tracking-tight">{selectedTour.title}</h2>
                  <p className="text-[#F15A24] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <RiFocus2Line className="animate-spin-slow" /> Immersive Mode Active
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedTour(null)}
                  className="p-3 bg-white/10 hover:bg-[#F15A24] rounded-full transition-all text-white border border-white/20"
                >
                  <RiCloseLine className="text-2xl" />
                </button>
              </div>

              {/* VR/360 VIEWER - Using Iframe Mockup for demonstration */}
              <div className="relative flex-1 bg-black">
                {/* Actual Kuula/360 Iframe or fallback */}
                <iframe
                  src={selectedTour.panoramaUrl}
                  className="w-full h-full border-0 pointer-events-auto"
                  allowFullScreen
                  allow="accelerometer; gyroscope; magnetometer; vr"
                ></iframe>

                {/* HUD Overlay Mockup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                   <div className="w-20 h-20 border-2 border-dashed border-[#F15A24] rounded-full animate-ping" />
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="relative z-20 p-8 bg-gradient-to-t from-black/90 to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="max-w-xl text-center md:text-left">
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedTour.description}</p>
                </div>
                
                <div className="flex gap-4">
                   <button className="flex items-center gap-3 bg-[#F15A24] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-xl shadow-[#F15A24]/20 overflow-hidden">
                      <FaVrCardboard className="text-xl" /> Enter VR Mode
                   </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. CALL TO ACTION - Immersive End */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#F15A24]/5 to-transparent" />
        
        {/* Animated Background Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] z-0">
          <Image src="/images/logo_politeknik.png" alt="Logo" width={800} height={800} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              Mulai Masa Depan Anda <br />
              <span className="text-[#F15A24]">Di Sini</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-medium"> Bergabunglah dengan institusi vokasi terbaik yang telah terbukti menghasilkan lulusan kompeten dengan fasilitas berstandar internasional. </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link href="https://wa.me/6285199328825" className="w-full sm:w-auto bg-[#F15A24] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#F15A24]/30 hover:scale-105 transition-transform">
                  Daftar Sekarang
               </Link>
               <Link href="/facility" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                  Informasi Fasilitas
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}
