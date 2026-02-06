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
  {
    id: 10,
    title: "Lab IoT & Robotics",
    category: "lab",
    description: "Pusat riset Internet of Things dan robotika dengan kit development terlengkap.",
    image: "/images/facility/poltek-presma5-1024x768.jpg",
    capacity: "25 mahasiswa",
    features: ["Arduino/Raspberry Pi Kit", "3D Printer", "Soldering Station", "Testing Bench"]
  },
  {
    id: 11,
    title: "Innovation Hub",
    category: "umum",
    description: "Inkubator startup dan kolaborasi industri untuk menghasilkan karya inovatif.",
    image: "/images/facility/poltek-presma6-1024x768.jpg",
    capacity: "40 orang",
    features: ["Conference Area", "Creative Wall", "Idea Sandbox", "Venture Corner"]
  },
  {
    id: 12,
    title: "Executive Classroom",
    category: "kelas",
    description: "Ruang kelas dengan standar kenyamanan tinggi untuk program profesional.",
    image: "/images/facility/ruang-kelas06-1024x768.jpeg",
    capacity: "20 mahasiswa",
    features: ["Leather Seats", "Private Station", "Touchscreen Display", "Personal AC Control"]
  },
];

const CATEGORIES = [
  { id: "all", label: "Semua Fasilitas", icon: AiOutlineHome },
  { id: "lab", label: "Laboratorium", icon: AiOutlineExperiment },
  { id: "kelas", label: "Ruang Kelas", icon: AiOutlineBook },
  { id: "umum", label: "Fasilitas Umum", icon: BiBriefcaseAlt2 },
  { id: "olahraga", label: "Olahraga", icon: MdSportsSoccer },
];

export default function FacilityPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const filteredFacilities = FACILITIES.filter(f => {
    const matchesCategory = activeCategory === "all" || f.category === activeCategory;
    const matchesSearch = f.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         f.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className={`${jakarta.className} min-h-screen bg-gradient-to-b from-gray-50 to-white`}>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] lg:h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1A2B5F] via-[#2a3f7f] to-[#1A2B5F] pt-24 pb-24 lg:py-0">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-64 h-64 lg:w-96 lg:h-96 bg-[#F15A24]/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 w-64 h-64 lg:w-96 lg:h-96 bg-[#F15A24]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          {/* Text Content */}
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
              <span className="text-white">Fasilitas</span>
              <br />
              <span className="bg-gradient-to-r from-[#F15A24] to-[#ff7c3d] bg-clip-text text-transparent">
                Kelas Dunia
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 px-2">
              Politeknik Prestasi Prima menyediakan fasilitas modern dan lengkap untuk mendukung 
              pembelajaran vokasi berbasis teknologi tingkat global.
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

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#F15A24]/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-white/10 rounded-full blur-2xl animate-pulse" />
              
              <Image
                src="/images/facility/modelfacility.png"
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

        {/* Wave Divider with Seamless Fix */}
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-10 translate-y-[1px]">
          <svg 
            viewBox="0 0 1440 120" 
            xmlns="http://www.w3.org/2000/svg"
            className="relative block w-full h-[60px] md:h-[100px] lg:h-[120px]"
            preserveAspectRatio="none"
            shapeRendering="geometricPrecision"
          >
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>

      {/* SEARCH AND CATEGORY FILTER */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 flex flex-col gap-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto w-full">
            <input
              type="text"
              placeholder="Cari fasilitas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-[#F15A24]/20 focus:border-[#F15A24] transition-all outline-none font-medium"
            />
            <svg 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

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
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all
                    ${isActive 
                      ? 'bg-gradient-to-r from-[#F15A24] to-[#ff7c3d] text-white shadow-lg shadow-[#F15A24]/30' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <Icon className="text-base sm:text-xl" />
                  <span>{cat.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* FACILITIES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#1A2B5F] mb-4">
            Jelajahi <span className="text-[#F15A24]">Fasilitas Kami</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Setiap fasilitas dirancang untuk memberikan pengalaman belajar terbaik dan mempersiapkan 
            mahasiswa menghadapi tantangan industri modern.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredFacilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(facility.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setSelectedFacility(facility)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Capacity Badge */}
                  {facility.capacity && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-[#1A2B5F] shadow-lg">
                      {facility.capacity}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#F15A24] text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    {CATEGORIES.find(c => c.id === facility.category)?.label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A2B5F] mb-3 group-hover:text-[#F15A24] transition-colors">
                    {facility.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {facility.features.slice(0, 3).map((feature, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {facility.features.length > 3 && (
                      <span className="text-xs bg-[#F15A24]/10 text-[#F15A24] px-3 py-1 rounded-full font-medium">
                        +{facility.features.length - 3} lainnya
                      </span>
                    )}
                  </div>

                  {/* Hover Action Indicator */}
                  <div className="flex items-center gap-2 text-[#F15A24] font-semibold mt-4">
                    <span>Lihat Detail</span>
                    <motion.span
                      animate={{ x: hoveredCard === facility.id ? 5 : 0 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-[#F15A24]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredFacilities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
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
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/facility/360.jpeg"
              alt="360 Virtual Tour"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
              unoptimized
            />
            {/* Simple Dark Overlay */}
            <div className="absolute inset-0 bg-[#0E1333]/70 backdrop-blur-[2px]" />
          </div>

          <div className="relative h-full flex items-center justify-center px-8 py-16 text-center z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-8 mx-auto"
              >
                <div className="w-2 h-2 rounded-full bg-[#F15A24] animate-pulse" />
                <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Virtual Exploration</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
              >
                Eksplorasi Kampus <br />
                <span className="text-[#F15A24]">Tanpa Batas Jarak</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Nikmati pengalaman imersif menelusuri setiap sudut kampus kami langsung dari layar Anda melalui fitur Virtual Tour 360°.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="/site/facility-tour"
                  className="bg-[#F15A24] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#ff6c35] transition-all duration-300 shadow-xl shadow-[#F15A24]/30 flex items-center gap-3 group/btn"
                >
                  Mulai Virtual Tour
                  <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FACILITY DETAIL MODAL */}
      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            {/* Backdrop */}
            <div
              onClick={() => setSelectedFacility(null)}
              className="absolute inset-0 bg-[#0E1333]/95 backdrop-blur-2xl cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[85vh] z-10"
            >
              {/* Close Button - Enhanced visibility */}
              <button 
                onClick={() => setSelectedFacility(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-white hover:bg-[#F15A24] hover:text-white rounded-full text-[#1A2B5F] transition-all duration-300 shadow-xl border border-gray-100"
              >
                <FiX className="text-2xl" />
              </button>

              {/* Left Side: Image */}
              <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  className="object-cover transition-transform duration-1000"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Right Side: Information */}
              <div className="lg:w-1/2 p-8 lg:p-16 overflow-y-auto bg-white">
                <div className="max-w-xl mx-auto">
                  <span className="inline-block bg-[#F15A24]/10 text-[#F15A24] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                    {CATEGORIES.find(c => c.id === selectedFacility.category)?.label}
                  </span>
                  <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B5F] leading-tight mb-8">
                    {selectedFacility.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-12">
                    {selectedFacility.description} Setiap aspek dari fasilitas ini dirancang untuk memaksimalkan potensi mahasiswa dalam menguasai teknologi industri terkini.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#1A2B5F] flex items-center justify-center text-white">
                          <FiUsers className="text-xl" />
                        </div>
                        <span className="text-sm font-bold text-[#1A2B5F]">Kapasitas</span>
                      </div>
                      <p className="text-gray-600 font-medium">{selectedFacility.capacity || "Standar Kelas"}</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#F15A24] flex items-center justify-center text-white">
                          <FiCheckCircle className="text-xl" />
                        </div>
                        <span className="text-sm font-bold text-[#1A2B5F]">Akses</span>
                      </div>
                      <p className="text-gray-600 font-medium">Full-Day Access</p>
                    </div>
                  </div>

                  <div className="mb-14">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">Fitur Unggulan</h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedFacility.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm text-sm text-[#1A2B5F] font-bold"
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-[#F15A24]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-5">
                    <Link
                      href="/site/facility-tour"
                      onClick={() => setSelectedFacility(null)}
                      className="flex-1 bg-[#1A2B5F] text-white px-8 py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-[#F15A24] transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-xl shadow-[#1A2B5F]/20"
                    >
                      <FaVrCardboard className="text-2xl transition-transform group-hover/btn:rotate-12" />
                      Virtual Tour
                    </Link>
                    <Link
                      href="https://wa.me/6285199328825"
                      target="_blank"
                      className="flex-1 bg-white text-[#1A2B5F] border-2 border-gray-100 px-8 py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-[#F15A24] hover:text-white hover:border-[#F15A24] transition-all flex items-center justify-center gap-2"
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
