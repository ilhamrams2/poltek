"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { 
  AiOutlineDesktop, 
  AiOutlineExperiment,
  AiOutlineBook,
  AiOutlineHome
} from "react-icons/ai";
import { MdOutlineVideoLibrary, MdSportsSoccer } from "react-icons/md";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { FiMapPin, FiX, FiCheckCircle, FiUsers, FiInfo } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaVrCardboard } from "react-icons/fa";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

type Category = "all" | "lab" | "kelas" | "umum" | "olahraga";

interface Facility {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  capacity?: string;
  features: string[];
}

const FACILITIES: Facility[] = [
  {
    id: 1,
    title: "Laboratorium Komputer",
    category: "lab",
    description: "Lab komputer modern dengan 40+ unit PC high-spec untuk praktikum programming dan networking.",
    image: "/images/facility/ruang-kelas01-1024x768.jpeg",
    capacity: "40 mahasiswa",
    features: ["PC High-Spec", "AC", "Projector", "Whiteboard Digital"]
  },
  {
    id: 2,
    title: "Studio Multimedia",
    category: "lab",
    description: "Studio lengkap untuk produksi konten digital, editing video, dan desain grafis profesional.",
    image: "/images/facility/ruang-kelas02-1024x768.jpeg",
    capacity: "30 mahasiswa",
    features: ["iMac 27\"", "Green Screen", "Lighting Studio", "Audio Recording"]
  },
  {
    id: 3,
    title: "Ruang Kelas Smart",
    category: "kelas",
    description: "Ruang kelas dilengkapi teknologi smart board dan sistem audio visual terkini.",
    image: "/images/facility/ruang-kelas03-1024x768.jpeg",
    capacity: "35 mahasiswa",
    features: ["Smart Board", "AC", "Ergonomic Chairs", "Fast WiFi"]
  },
  {
    id: 4,
    title: "Lab Jaringan Komputer",
    category: "lab",
    description: "Laboratorium khusus untuk praktikum konfigurasi jaringan dan keamanan siber.",
    image: "/images/facility/ruang-kelas04-1024x768.jpeg",
    capacity: "35 mahasiswa",
    features: ["Cisco Equipment", "Server Rack", "Network Simulator", "Security Tools"]
  },
  {
    id: 5,
    title: "Perpustakaan Digital",
    category: "umum",
    description: "Perpustakaan modern dengan koleksi buku digital dan ruang baca yang nyaman.",
    image: "/images/facility/poltek-presma1-1024x768.jpg",
    capacity: "100 pengunjung",
    features: ["E-Library", "Reading Room", "Discussion Pod", "Free Coffee"]
  },
  {
    id: 6,
    title: "Ruang Kelas Bisnis",
    category: "kelas",
    description: "Ruang kelas dengan setup khusus untuk pembelajaran bisnis dan presentasi.",
    image: "/images/facility/ruang-kelas05-1024x768.jpeg",
    capacity: "40 mahasiswa",
    features: ["Presentation Screen", "Modular Seating", "AC", "Sound System"]
  },
  {
    id: 7,
    title: "Lapangan Olahraga",
    category: "olahraga",
    description: "Lapangan multifungsi untuk berbagai aktivitas olahraga dan kegiatan mahasiswa.",
    image: "/images/facility/poltek-presma2-1024x768.jpg",
    capacity: "200 orang",
    features: ["Basketball Court", "Futsal", "Volleyball", "Tribun Penonton"]
  },
  {
    id: 8,
    title: "Co-Working Space",
    category: "umum",
    description: "Ruang kerja bersama untuk mahasiswa mengerjakan proyek dan startup.",
    image: "/images/facility/poltek-presma3-1024x768.jpg",
    capacity: "50 mahasiswa",
    features: ["High-Speed WiFi", "Meeting Pods", "Pantry", "24/7 Access"]
  },
  {
    id: 9,
    title: "Auditorium",
    category: "umum",
    description: "Auditorium berkapasitas besar untuk seminar, workshop, dan acara kampus.",
    image: "/images/facility/poltek-presma4-1024x768.jpg",
    capacity: "500 orang",
    features: ["Sound System Pro", "LED Screen", "AC Central", "Stage Lighting"]
  },
];

const CATEGORIES = [
  { id: "all", label: "Semua Fasilitas", icon: BsGrid3X3Gap },
  { id: "lab", label: "Laboratorium", icon: AiOutlineExperiment },
  { id: "kelas", label: "Ruang Kelas", icon: AiOutlineBook },
  { id: "umum", label: "Fasilitas Umum", icon: BiBriefcaseAlt2 },
  { id: "olahraga", label: "Olahraga", icon: MdSportsSoccer },
];

export default function FacilityPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const filteredFacilities = activeCategory === "all" 
    ? FACILITIES 
    : FACILITIES.filter(f => f.category === activeCategory);

  return (
    <main className={`${jakarta.className} min-h-screen bg-white relative`}>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] lg:h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1A2B5F] via-[#2a3f7f] to-[#1A2B5F] pt-24 pb-24 lg:py-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-64 h-64 lg:w-96 lg:h-96 bg-[#F15A24]/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 w-64 h-64 lg:w-96 lg:h-96 bg-[#F15A24]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left text-white px-2 mt-10 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20"
            >
              <FiMapPin className="text-[#F15A24]" />
              <span className="text-xs sm:text-sm font-medium">Fasilitas Kampus</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Fasilitas <br />
              <span className="bg-gradient-to-r from-[#F15A24] to-[#ff7c3d] bg-clip-text text-transparent">Kelas Dunia</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 px-2">
              Politeknik Prestasi Prima menyediakan fasilitas modern dan lengkap untuk mendukung pembelajaran vokasi berbasis teknologi tingkat global.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-3 rounded-xl border border-white/20">
                <AiOutlineDesktop className="text-[#F15A24] text-xl sm:text-2xl" />
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold">15+</div>
                  <div className="text-[10px] sm:text-sm text-gray-300">Laboratorium</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-3 rounded-xl border border-white/20">
                <MdOutlineVideoLibrary className="text-[#F15A24] text-xl sm:text-2xl" />
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold">30+</div>
                  <div className="text-[10px] sm:text-sm text-gray-300">Ruang Kelas</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#F15A24]/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-white/10 rounded-full blur-2xl animate-pulse" />
              <Image
                src="/images/facility/cewek.png"
                alt="Facility Hero"
                width={500}
                height={500}
                className="relative z-10 drop-shadow-2xl"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-10 translate-y-[1px]">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[60px] md:h-[100px] lg:h-[120px]" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 md:-mt-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8"
        >
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat.id as Category)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all outline-none border-0 ${isActive ? 'bg-gradient-to-r from-[#F15A24] to-[#ff7c3d] text-white shadow-lg shadow-[#F15A24]/30' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                >
                  <Icon className="text-base sm:text-xl" />
                  <span>{cat.label}</span>
                  {isActive && (
                    <motion.span layoutId="activeCount" className="bg-white/20 px-1.5 sm:px-2 py-0.5 rounded-full text-xs">
                      {filteredFacilities.length}
                    </motion.span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* FACILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2B5F] mb-4">
            Jelajahi <span className="text-[#F15A24]">Fasilitas Kami</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Setiap fasilitas dirancang untuk memberikan pengalaman belajar terbaik dan mempersiapkan mahasiswa menghadapi tantangan industri modern.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredFacilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredCard(facility.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => {
                  console.log("FACILITY SELECT:", facility.title);
                  setSelectedFacility(facility);
                }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {facility.capacity && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-[#1A2B5F] shadow-lg">
                      {facility.capacity}
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-[#F15A24] text-white px-2.5 py-1 rounded-full text-[9px] sm:text-xs font-bold uppercase tracking-wide">
                    {CATEGORIES.find(c => c.id === facility.category)?.label}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A2B5F] mb-3 group-hover:text-[#F15A24] transition-colors">{facility.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{facility.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {facility.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">{feature}</span>
                    ))}
                    {facility.features.length > 3 && (
                      <span className="text-xs bg-[#F15A24]/10 text-[#F15A24] px-3 py-1 rounded-full font-medium">+{facility.features.length - 3} lainnya</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[#F15A24] font-semibold mt-4">
                    <span>Lihat Detail</span>
                    <motion.span animate={{ x: hoveredCard === facility.id ? 5 : 0 }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredFacilities.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="text-6xl mb-4">🏫</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Tidak ada fasilitas</h3>
            <p className="text-gray-600">Coba pilih kategori lain</p>
          </motion.div>
        )}
      </section>

      {/* 360 VIRTUAL TOUR CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[450px] md:h-[500px]"
        >
          <div className="absolute inset-0">
            <Image src="/images/facility/360.jpeg" alt="360 Virtual Tour" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" priority unoptimized />
            <div className="absolute inset-0 bg-[#0E1333]/70 backdrop-blur-[2px]" />
          </div>
          <div className="relative h-full flex items-center justify-center px-8 py-16 text-center z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-8 mx-auto">
                <div className="w-2 h-2 rounded-full bg-[#F15A24] animate-pulse" />
                <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Virtual Exploration</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">Eksplorasi Kampus <br /><span className="text-[#F15A24]">Tanpa Batas Jarak</span></h2>
              <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Nikmati pengalaman imersif menelusuri setiap sudut kampus kami langsung dari layar Anda melalui fitur Virtual Tour 360°.</p>
              <Link href="/profil/fasilitas/virtual-tour" className="bg-[#F15A24] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#ff6c35] transition-all duration-300 shadow-xl shadow-[#F15A24]/30 flex items-center gap-3 group/btn">
                Mulai Virtual Tour
                <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FACILITY DETAIL MODAL */}
      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            key="modal-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden"
          >
            <div
              onClick={() => setSelectedFacility(null)}
              className="absolute inset-0 bg-[#0E1333]/95 backdrop-blur-2xl cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:row min-h-[500px] lg:max-h-[85vh] z-10 lg:flex-row"
            >
              <button 
                onClick={() => setSelectedFacility(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-[#1A2B5F]/10 hover:bg-[#F15A24] hover:text-white rounded-full text-[#1A2B5F] transition-all duration-300"
              >
                <FiX className="text-2xl" />
              </button>

              <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                <Image src={selectedFacility.image} alt={selectedFacility.title} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto bg-white">
                <div className="max-w-xl mx-auto">
                  <span className="inline-block bg-[#F15A24]/10 text-[#F15A24] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                    {CATEGORIES.find(c => c.id === selectedFacility.category)?.label}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-black text-[#1A2B5F] leading-tight mb-6">{selectedFacility.title}</h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-8">{selectedFacility.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3">
                      <FiUsers className="text-[#F15A24] text-xl" />
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Kapasitas</p>
                        <p className="text-sm font-bold text-[#1A2B5F]">{selectedFacility.capacity || "Standar"}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3">
                      <FiCheckCircle className="text-[#F15A24] text-xl" />
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Status</p>
                        <p className="text-sm font-bold text-[#1A2B5F]">Akses Penuh</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-4">Fitur Utama</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedFacility.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 text-xs text-[#1A2B5F] font-bold shadow-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F15A24]" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/profil/fasilitas/virtual-tour" onClick={() => setSelectedFacility(null)} className="flex-1 bg-[#1A2B5F] text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-[#F15A24] transition-all flex items-center justify-center gap-2">
                      <FaVrCardboard className="text-xl" /> Virtual Tour
                    </Link>
                    <Link 
                      href="https://wa.me/6285199328825" 
                      target="_blank" 
                      className="flex-1 border-2 border-gray-100 text-[#1A2B5F] px-8 py-4 rounded-xl font-bold text-center hover:bg-[#F15A24] hover:text-white hover:border-[#F15A24] transition-all"
                    >
                      Daftar Sekarang!
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
