"use client";

import Image from "next/image";
import Link from "next/link";
import { RiBuildingLine, RiPlayFill, RiGlobalLine, RiCameraLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function VirtualTourSection() {
  return (
    <section
      className="relative max-w-7xl mx-auto my-32 px-6 lg:px-12 py-24
                 text-white bg-[#1D234E]
                 rounded-[3rem] shadow-2xl overflow-hidden group"
      aria-label="Virtual Tour Politeknik Prestasi Prima"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="text-left"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-orange-500 rounded-full" />
            <span className="text-orange-500 font-black uppercase tracking-[0.2em] text-xs">Immersive Experience</span>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-[1.1] mb-8">
            Jelajahi Kampus <br /> 
            Dari <span className="text-orange-500 italic">Mana Saja</span>
          </h2>

          <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-12 max-w-xl">
            Rasakan pengalaman virtual tour 360° interaktif. Lihat fasilitas modern dan lingkungan belajar kami seolah-olah Anda sedang berada di sini.
          </p>

          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-orange-500">
                <RiGlobalLine />
              </div>
              <div>
                <div className="text-sm font-black">Akses 24/7</div>
                <div className="text-xs text-white/50">Online Everywhere</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-orange-500">
                <RiCameraLine />
              </div>
              <div>
                <div className="text-sm font-black">Ultra HD</div>
                <div className="text-xs text-white/50">4K Resolution</div>
              </div>
            </div>
          </div>

          <Link
            href="#"
            className="group relative mt-16 inline-flex items-center gap-4 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-orange-900/20 transition-all duration-300 hover:-translate-y-1"
          >
            Mulai Virtual Tour
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors text-sm">
              <RiPlayFill />
            </div>
          </Link>
        </motion.div>

        {/* Right Side: Virtual Preview Card */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative"
        >
          {/* Decorative Rings */}
          <div className="absolute inset-0 -m-12 border border-white/5 rounded-full animate-ping [animation-duration:4s]" />
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-[2.5rem] shadow-2xl overflow-hidden group/card transition-all duration-700 hover:scale-[1.02]">
             {/* Main Image Container */}
             <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
                <Image
                  src="/images/sections/360/v360-1.jpg"
                  fill
                  alt="Preview Virtual Tour Kampus"
                  className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                />
                
                {/* 360 Indicator Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full flex items-center gap-2 border border-white/20 transition-all duration-500 group-hover/card:bg-orange-600">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Live Preview</span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-black/20">
                   <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-[#1D234E] shadow-2xl scale-75 group-hover/card:scale-100 transition-transform duration-500 text-3xl">
                      <RiPlayFill />
                   </div>
                </div>
             </div>

             {/* Footer Info */}
             <div className="flex items-center justify-between mt-6 px-4 pb-4">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-lg">
                      <RiBuildingLine className="text-orange-500" />
                   </div>
                   <div>
                      <h4 className="font-black text-sm">Main Campus</h4>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest">Politeknik Prestasi Prima</p>
                   </div>
                </div>
                
                <div className="text-right">
                   <div className="text-xs font-bold text-orange-500">4K VR Ready</div>
                </div>
             </div>
          </div>
          
          {/* Floating Element 1 */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-24 h-24 bg-orange-500/20 backdrop-blur-3xl rounded-3xl -rotate-12 -z-10" 
          />
        </motion.div>
      </div>
    </section>
  );
}
