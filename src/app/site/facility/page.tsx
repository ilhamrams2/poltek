"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { 
  RiHospitalLine,
  RiFlaskLine,
  RiBook3Line,
  RiBuilding2Line,
  RiBasketballLine,
  RiMapPin2Line,
  RiSearch2Line,
  RiCloseLine,
  RiCheckDoubleLine,
  RiGroupLine,
  RiTimeLine,
  RiArrowRightUpLine
} from "react-icons/ri";

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
    description: "Lab komputer modern dengan PC high-spec untuk praktikum programming dan networking.",
    image: "/images/facility/ruang-kelas01-1024x768.jpeg",
    capacity: "40 Kursi",
    features: ["PC High-Spec", "Sistem Cloud", "Projector 4K", "WiFi 6"]
  },
  {
    id: 2,
    title: "Studio Multimedia",
    category: "lab",
    description: "Studio lengkap untuk produksi konten digital, editing video, dan desain grafis profesional.",
    image: "/images/facility/ruang-kelas02-1024x768.jpeg",
    capacity: "30 Kursi",
    features: ["Mac Studio", "Green Screen", "Lighting Studio", "Audio Pro"]
  },
  {
    id: 3,
    title: "Ruang Kelas Smart",
    category: "kelas",
    description: "Ruang kelas dilengkapi teknologi smart board dan sistem audio visual terkini.",
    image: "/images/facility/ruang-kelas03-1024x768.jpeg",
    capacity: "35 Kursi",
    features: ["Smart Board", "Hybrid Ready", "Ergonomic Chairs", "Full AC"]
  },
  {
    id: 4,
    title: "Lab Jaringan Komputer",
    category: "lab",
    description: "Laboratorium khusus untuk praktikum konfigurasi jaringan dan keamanan siber.",
    image: "/images/facility/ruang-kelas04-1024x768.jpeg",
    capacity: "35 Kursi",
    features: ["Cisco Equipment", "Server Rack", "Network Sim", "Security Lab"]
  },
  {
    id: 5,
    title: "Perpustakaan Digital",
    category: "umum",
    description: "Perpustakaan modern dengan koleksi buku digital dan ruang baca yang nyaman.",
    image: "/images/facility/poltek-presma1-1024x768.jpg",
    capacity: "100 Orang",
    features: ["E-Library", "Quiet Zone", "Discussion Pod", "Coffee Corner"]
  },
  {
    id: 6,
    title: "Ruang Kelas Bisnis",
    category: "kelas",
    description: "Ruang kelas dengan setup khusus untuk pembelajaran bisnis dan presentasi.",
    image: "/images/facility/ruang-kelas05-1024x768.jpeg",
    capacity: "40 Kursi",
    features: ["Video Conf", "Modular Desk", "Premium Sound", "Digital Signage"]
  },
  {
    id: 7,
    title: "Lapangan Olahraga",
    category: "olahraga",
    description: "Lapangan multifungsi untuk berbagai aktivitas olahraga dan kegiatan mahasiswa.",
    image: "/images/facility/poltek-presma2-1024x768.jpg",
    capacity: "200 Orang",
    features: ["Basketball", "Futsal Court", "Volleyball", "Modern Tribune"]
  },
  {
    id: 8,
    title: "Innovation Center",
    category: "umum",
    description: "Ruang kerja bersama untuk mahasiswa mengerjakan proyek dan startup.",
    image: "/images/facility/poltek-presma3-1024x768.jpg",
    capacity: "50 Orang",
    features: ["Startup Zone", "Meeting Room", "Idea Wall", "Relax Area"]
  },
  {
    id: 9,
    title: "Grand Auditorium",
    category: "umum",
    description: "Auditorium berkapasitas besar untuk seminar, workshop, dan acara kampus.",
    image: "/images/facility/poltek-presma4-1024x768.jpg",
    capacity: "500 Kursi",
    features: ["Stage Lighting", "Led Screen", "Surround Sound", "VIP Room"]
  },
  {
    id: 10,
    title: "Lab IoT & Robotics",
    category: "lab",
    description: "Pusat riset Internet of Things dan robotika dengan kit development terlengkap.",
    image: "/images/facility/poltek-presma5-1024x768.jpg",
    capacity: "25 Kursi",
    features: ["Arduino Kit", "3D Printing", "Robotic Arms", "Sensor Lab"]
  },
  {
    id: 11,
    title: "Creative Hub",
    category: "umum",
    description: "Inkubator startup dan kolaborasi industri untuk menghasilkan karya inovatif.",
    image: "/images/facility/poltek-presma6-1024x768.jpg",
    capacity: "40 Orang",
    features: ["Design Lab", "Pitch Area", "Podcast Pod", "Venture Lab"]
  },
  {
    id: 12,
    title: "Special Classroom",
    category: "kelas",
    description: "Ruang kelas dengan standar kenyamanan tinggi untuk program profesional.",
    image: "/images/facility/ruang-kelas06-1024x768.jpeg",
    capacity: "20 Kursi",
    features: ["Leather Seats", "Personal Screen", "Premium AC", "Concierge"]
  },
];

const CATEGORIES = [
  { id: "all", label: "Semua", icon: RiHospitalLine },
  { id: "lab", label: "Laboratorium", icon: RiFlaskLine },
  { id: "kelas", label: "Ruang Kelas", icon: RiBook3Line },
  { id: "umum", label: "Umum", icon: RiBuilding2Line },
  { id: "olahraga", label: "Olahraga", icon: RiBasketballLine },
];

export default function FacilityPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const filteredFacilities = FACILITIES.filter(f => {
    const matchesCategory = activeCategory === "all" || f.category === activeCategory;
    const matchesSearch = f.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         f.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className={`${jakarta.className} min-h-screen bg-white selection:bg-[#FF6B00] selection:text-white`}>
      {/* ================= HERO SECTION (HYPER-MODERN MASTERPIECE) ================= */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-40 overflow-hidden">
        {/* Futuristic Background System */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#FF6B0008_0%,transparent_50%)] -z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] -z-10" />
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[#FF6B00]/5 rounded-full blur-[180px] -z-10 animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-16 relative z-10">
          {/* LEFT CONTENT: Massive High-End Typography */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 order-2 lg:order-1"
          >

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative mb-8"
            >
               <h1 className="text-7xl lg:text-9xl font-black text-[#020617] leading-[0.85] tracking-tighter">
                  <span className="block font-light text-gray-300 mb-2">ULTRA</span>
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#020617] via-[#FF6B00] to-orange-500">FACILITIES</span>
                  </span>
               </h1>
            </motion.div>

            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="text-xl lg:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl mb-14 border-l-4 border-[#FF6B00] pl-8"
            >
               Standardisasi <span className="text-[#020617] font-bold">Infrastruktur Teknologi</span> kelas dunia yang dirancang khusus untuk melahirkan <span className="text-[#FF6B00] font-bold italic underline decoration-wavy underline-offset-4">Digital Leaders</span> masa depan.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-10"
            >
              <Link
                href="#explore"
                className="group relative inline-flex items-center gap-6 bg-[#020617] text-white pl-10 pr-4 py-4 rounded-full shadow-2xl shadow-[#020617]/20 hover:shadow-[#FF6B00]/20 transition-all duration-700 active:scale-95 border border-white/5"
              >
                 {/* Shimmer Effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                 
                 <span className="relative z-10 font-black text-[12px] uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all duration-500">
                    Discover Spaces
                 </span>

                 <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FF6B00] transition-colors duration-500 overflow-hidden">
                    <RiArrowRightUpLine className="text-2xl group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500 absolute" />
                    <RiArrowRightUpLine className="text-2xl -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 absolute" />
                 </div>
              </Link>

              <div className="flex items-center gap-6">
                 <div className="flex flex-col">
                    <span className="text-5xl font-black text-[#020617] leading-none mb-1">12<span className="text-[#FF6B00]">+</span></span>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Master Labs</span>
                 </div>
                 <div className="w-px h-12 bg-gray-100" />
                 <div className="flex flex-col">
                    <span className="text-5xl font-black text-[#020617] leading-none mb-1">24<span className="text-[#FF6B00]">h</span></span>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Digital Hub</span>
                 </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL: Interactive Composite Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
            {/* Main Visual Node */}
            <div className="relative z-10 rounded-[4rem] overflow-hidden group">
               <Image
                 src="/images/facility/modelfacility.png"
                 alt="Elite Facility Visual"
                 width={1000}
                 height={1000}
                 className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-[3s]"
                 priority
                 unoptimized
               />
               



            </div>

            {/* Background Decorative Rings */}
            <div className="absolute -inset-10 border-2 border-dashed border-gray-100 rounded-[5rem] -z-10 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-0 bg-[#FF6B00]/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ================= FILTER SECTION (MODERN APP STYLE) ================= */}
      <section id="explore" className="max-w-7xl mx-auto px-6 mb-20 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#050A1F] rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(2,6,23,0.4)] p-12 lg:p-16 border border-white/5 relative overflow-hidden"
        >
          {/* Background Glow inside Filter */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 blur-[100px] -z-10" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
             <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-1 bg-[#FF6B00] rounded-full" />
                   <span className="text-[#FF6B00] font-black text-[10px] uppercase tracking-[0.4em]">Smart Navigator</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">Cari & Filter <br /> Fasilitas Impian</h3>
             </div>
             
             <div className="relative flex-1 max-w-2xl group">
               <input
                 type="text"
                 placeholder="Cari Laboratorium, Kelas, atau Studio..."
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full bg-white/5 border-2 border-white/5 rounded-[2rem] py-6 pl-18 pr-10 focus:bg-white/10 focus:border-[#FF6B00] transition-all outline-none font-bold text-white text-lg placeholder-white/20"
               />
               <RiSearch2Line className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-8 text-[#FF6B00] group-hover:scale-110 transition-transform" />
             </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-start">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id as Category)}
                className={`
                  relative flex items-center gap-4 px-10 py-5 rounded-[2rem] font-bold text-[10px] uppercase tracking-[0.15em] transition-all duration-500
                  ${activeCategory === cat.id 
                    ? 'bg-[#FF6B00] text-white shadow-[0_20px_40px_-10px_rgba(255,107,0,0.5)]' 
                    : 'bg-white/5 text-white/40 hover:text-white border border-white/10'
                  }
                `}
              >
                {activeCategory === cat.id && (
                   <motion.div 
                     layoutId="activeFilterBg"
                     className="absolute inset-0 bg-[#FF6B00] rounded-[2rem] -z-10"
                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                   />
                )}
                <cat.icon className={`text-2xl ${activeCategory === cat.id ? 'text-white' : 'text-[#FF6B00]'}`} />
                <span>{cat.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= FACILITIES GRID (REFINED 3-COLUMNS) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
           <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-2 h-6 bg-[#FF6B00] rounded-full" />
                 <span className="text-[#020617]/40 font-bold text-[10px] uppercase tracking-[0.3em]">Integrated Campus</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-[#020617] tracking-tighter leading-none mb-6">
                Eksplorasi <br />
                <span className="text-[#FF6B00]">Infrastruktur</span>
              </h2>
           </div>
           
           <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-100">
              <div className="px-6 py-3 bg-white rounded-xl shadow-xs">
                 <span className="text-[10px] font-bold text-[#020617] uppercase tracking-wider">{filteredFacilities.length} Fasilitas</span>
              </div>
           </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8"
          >
            {filteredFacilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedFacility(facility)}
                className="group cursor-pointer bg-white rounded-[3rem] p-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-50 flex flex-col h-full"
              >
                {/* Image Frame - Constrained & Refined */}
                <motion.div 
                   className="relative h-72 rounded-[2.5rem] overflow-hidden mb-8"
                   whileHover="hover"
                   initial="rest"
                >
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    unoptimized
                  />
                  {/* Category Float Overlay */}
                  <div className="absolute top-5 left-5 z-20">
                     <div className="bg-[#020617]/40 backdrop-blur-xl border border-white/20 whitespace-nowrap px-4 py-2 rounded-full flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]" />
                        <span className="text-[9px] font-bold text-white uppercase tracking-wider">
                           {CATEGORIES.find(c => c.id === facility.category)?.label}
                        </span>
                     </div>
                  </div>

                  {/* Icon floating badge */}
                  <div className="absolute bottom-5 right-5 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#020617] shadow-xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    {(() => {
                      const CatIcon = CATEGORIES.find(c => c.id === facility.category)?.icon || RiHospitalLine;
                      return <CatIcon className="text-xl" />;
                    })()}
                  </div>
                </motion.div>

                {/* Content Side */}
                <div className="px-4 pb-4 flex flex-col flex-1">
                  <h3 className="text-2xl font-black text-[#020617] mb-4 group-hover:text-[#FF6B00] transition-colors duration-300 tracking-tight leading-tight">
                    {facility.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm font-semibold leading-relaxed mb-8 line-clamp-3">
                    {facility.description}
                  </p>

                  <div className="mt-auto pt-10 border-t border-gray-100 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 border border-gray-100">
                           <RiGroupLine className="text-lg" />
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1.5">Capacity</span>
                           <span className="text-[12px] font-bold text-[#020617] uppercase tracking-wide leading-none">{facility.capacity}</span>
                        </div>
                     </div>
                     
                     <div className="group/cta relative">
                        <div className="relative flex items-center bg-[#020617] rounded-full p-1 w-12 group-hover/cta:w-36 group-hover/cta:bg-[#FF6B00] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden">
                           {/* Icon Circle */}
                           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-transform duration-500 group-hover/cta:rotate-45">
                              <RiArrowRightUpLine className="text-xl" />
                           </div>
                           
                           {/* Text revealed by width expansion */}
                           <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] ml-3 whitespace-nowrap opacity-0 group-hover/cta:opacity-100 transition-all duration-300 delay-100">
                             View Space
                           </span>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Elite Empty State */}
        {filteredFacilities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-48 bg-gray-50 rounded-[5rem] border-4 border-dashed border-gray-100"
          >
            <div className="w-32 h-32 bg-white rounded-[3rem] flex items-center justify-center mx-auto mb-10 shadow-3xl text-gray-200">
               <RiSearch2Line className="text-5xl" />
            </div>
            <h3 className="text-5xl font-black text-[#020617] mb-4">No Match Found</h3>
            <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px]">Try adjusting your search terms</p>
          </motion.div>
        )}
      </section>
      
      {/* 360 VIRTUAL TOUR CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(2,6,23,0.3)] min-h-[550px] flex items-center bg-[#050A1F]"
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/facility/360.jpeg"
              alt="360 Virtual Tour"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
              priority
              unoptimized
            />
          </div>
          
          {/* Animated Glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF6B00]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

          <div className="relative w-full h-full flex flex-col items-center justify-center px-8 lg:px-24 text-center z-10 py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-3xl px-6 py-2.5 rounded-full border border-white/10 mb-10"
            >
              <div className="w-2 h-2 rounded-full bg-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,1)] animate-ping" />
              <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Immersive Experience</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1] mb-8 tracking-tighter">
              Eksplorasi Kampus <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-500">Virtual 360°</span>
            </h2>

            <p className="text-white/60 text-lg md:text-xl font-bold mb-12 max-w-2xl leading-relaxed">
              Rasakan pengalaman nyata menelusuri setiap laboratorium dan fasilitas unggulan kami secara digital dari mana saja.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href="/site/facility-tour"
                className="group relative bg-[#FF6B00] text-white px-12 py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(255,107,0,0.3)] hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-3">
                  Mulai Jelajah <RiArrowRightUpLine className="text-xl" />
                </span>
              </Link>
              
              <div className="flex -space-x-3 items-center">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-4 border-[#050A1F] overflow-hidden bg-gray-800">
                      <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="User" />
                   </div>
                 ))}
                 <div className="pl-6 text-white/40 text-[10px] font-black uppercase tracking-widest">
                    1K+ Lulusan Telah Bergabung
                 </div>
              </div>
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
              className="absolute inset-0 bg-[#020617]/95 backdrop-blur-3xl cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[85vh] z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedFacility(null)}
                className="absolute top-8 right-8 z-50 w-12 h-12 bg-white/10 backdrop-blur-xl hover:bg-[#FF6B00] hover:text-white rounded-full text-[#020617] transition-all duration-300 flex items-center justify-center border border-black/5 group"
              >
                <RiCloseLine className="text-2xl group-hover:rotate-90 transition-transform" />
              </button>

              {/* Left Side: Image */}
              <div className="lg:w-1/2 relative h-[350px] lg:h-auto overflow-hidden">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-4">
                      <RiTimeLine className="text-[#FF6B00]" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Akses 24/7 Mahasiswa</span>
                   </div>
                   <h3 className="text-3xl font-black text-white leading-tight">{selectedFacility.title}</h3>
                </div>
              </div>

              {/* Right Side: Information */}
              <div className="lg:w-1/2 p-8 lg:p-20 overflow-y-auto bg-white custom-scrollbar">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-8">
                     <div className="w-2 h-8 bg-[#FF6B00] rounded-full" />
                     <span className="text-gray-400 font-black text-[10px] uppercase tracking-[0.3em]">
                        {CATEGORIES.find(c => c.id === selectedFacility.category)?.label}
                     </span>
                  </div>

                  <p className="text-xl text-gray-500 font-semibold leading-relaxed mb-12 italic border-l-4 border-gray-100 pl-8">
                    {selectedFacility.description} Setiap detail dirancang untuk mendukung ekosistem pembelajaran yang kompetitif dan inovatif.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14">
                    <div className="bg-[#050A1F] p-8 rounded-[2.5rem] shadow-xl shadow-gray-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF6B00] border border-white/10">
                          <RiGroupLine className="text-2xl" />
                        </div>
                        <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Kapasitas</span>
                      </div>
                      <p className="text-xl font-black text-white">{selectedFacility.capacity || "Standar Kelas"}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-8 rounded-[2.5rem]">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                          <RiCheckDoubleLine className="text-2xl" />
                        </div>
                        <span className="text-[10px] font-black text-[#020617]/40 uppercase tracking-widest">Status</span>
                      </div>
                      <p className="text-xl font-black text-[#020617]">Siap Digunakan</p>
                    </div>
                  </div>

                  <div className="mb-16">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8">Eksklusivitas Fasilitas</h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedFacility.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border-2 border-gray-50 shadow-xs text-sm text-[#020617] font-black hover:border-[#FF6B00] transition-colors"
                        >
                          <RiCheckDoubleLine className="text-[#FF6B00] text-lg" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                      href="/site/facility-tour"
                      onClick={() => setSelectedFacility(null)}
                      className="flex-1 bg-[#050A1F] text-white px-10 py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-[#050A1F]/30 group/btn"
                    >
                      <RiHospitalLine className="text-2xl transition-transform group-hover/btn:rotate-12" />
                      Virtual Tour
                    </Link>
                    <Link
                      href="https://wa.me/6285199328825"
                      target="_blank"
                      className="flex-1 bg-white text-[#020617] border-2 border-gray-100 px-10 py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all flex items-center justify-center gap-2"
                    >
                      Daftar Sekarang
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
