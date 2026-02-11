"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring,
  useMotionTemplate,
  useMotionValue
} from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google"; // Corrected import
import { 
  RiDoubleQuotesL, 
  RiDoubleQuotesR, 
  RiMailSendLine, 
  RiPhoneLine, 
  RiLinkedinFill,
  RiArrowRightUpLine,
  RiWhatsappLine
} from "react-icons/ri";

// Font Configuration
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

// Animated Word Component
const WordReveal = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const words = text.split(" ");
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-bottom">
           <motion.span
             initial={{ y: "110%" }}
             whileInView={{ y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: delay + (i * 0.03), ease: [0.33, 1, 0.68, 1] }}
             className="inline-block"
           >
             {word}
           </motion.span>
        </span>
      ))}
    </span>
  );
};

// Interactive Card Component
const InfoCard = ({ icon: Icon, label, value, href, delay }: { icon: React.ElementType, label: string, value: string, href: string, delay: number }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      className="group flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-[#F15A24]/50 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-[#0E1333] flex items-center justify-center text-[#F15A24] text-xl group-hover:scale-110 group-hover:bg-[#F15A24] group-hover:text-white transition-all duration-300 shadow-inner">
        <Icon />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 group-hover:text-[#F15A24] transition-colors">{label}</p>
        <p className="text-sm font-bold text-white">{value}</p>
      </div>
    </motion.a>
  );
};

export default function DirectorMessagePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <main ref={containerRef} className={`${jakarta.variable} font-sans min-h-screen bg-[#080C1B] text-white selection:bg-[#F15A24] selection:text-white overflow-x-hidden`}>
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-[#F15A24]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03]" />
      </div>

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center mb-20">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#F15A24]/30 bg-[#F15A24]/10 text-[#F15A24] mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#F15A24] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Institutional Message</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6">
                Director&apos;s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Perspective</span>
              </h1>
           </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: PHOTO & INFO */}
          <motion.div 
            style={{ y: photoY }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-32">
               {/* Decorative Frame */}
               <div className="relative">
                  {/* Rotating Border Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#F15A24] via-transparent to-blue-600 rounded-[2.5rem] opacity-50 blur-sm" />
                  
                  <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0E1333] border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay z-10" />
                    <Image
                      src="/images/direktur.png"
                      alt="DR. WANNEN PAKPAHAN, MM."
                      width={600}
                      height={800}
                      className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                      unoptimized
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080C1B] via-transparent to-transparent opacity-80 z-10" />
                    
                    {/* Name Badge */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                       <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <h3 className="text-2xl font-black text-white leading-tight mb-1">DR. WANNEN <br/> PAKPAHAN, MM.</h3>
                         <p className="text-[#F15A24] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                           Direktur Politeknik Prestasi Prima
                         </p>
                       </div>
                    </div>
                  </div>
               </div>

               {/* Contact Cards */}
               <div className="mt-8 space-y-4">
                  <InfoCard 
                    icon={RiMailSendLine} 
                    label="Official Email" 
                    value="politeknik@prestasiprima.ac.id" 
                    href="mailto:politeknik@prestasiprima.ac.id"
                    delay={0.2}
                  />
                  <InfoCard 
                    icon={RiWhatsappLine} 
                    label="WhatsApp Center" 
                    value="0813 8000 8079" 
                    href="https://wa.me/6281380008079"
                    delay={0.3}
                  />
               </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CONTENT */}
          <motion.div 
            style={{ y: textY }}
            className="lg:col-span-7 relative pt-10"
          >
            <RiDoubleQuotesL className="text-8xl text-[#F15A24]/10 absolute -top-20 -left-10 animate-pulse" />
            
            <div className="prose prose-lg prose-invert max-w-none relative z-10">
              <h3 className="text-3xl md:text-4xl text-white font-serif italic mb-12 leading-relaxed font-light">
                <WordReveal text="Kami percaya bahwa pendidikan vokasi adalah kunci pembuka pintu masa depan industri digital yang" /> 
                <span className="text-[#F15A24] font-bold not-italic px-2 bg-[#F15A24]/10 rounded-lg inline-block mx-2">Inklusif &amp; Berkelanjutan.</span>
              </h3>

              <div className="space-y-10 text-gray-300 text-lg leading-[2] font-light">
                 <motion.p 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                 >
                   <span className="text-white font-bold text-2xl block mb-4 border-l-4 border-[#F15A24] pl-4">Assalamu’alaikum Warahmatullahi Wabarakatuh.</span>
                   Selamat datang di portal resmi <span className="text-white font-medium">Politeknik Prestasi Prima</span>. Di era transformasi digital yang begitu cepat, kami hadir dengan visi yang jelas: melahirkan lulusan yang tidak hanya menguasai teknologi, tetapi juga memiliki <span className="text-[#F15A24]">integritas, inovasi, dan mental pembelajar.</span>
                 </motion.p>
                 
                 <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }} 
                    className="p-8 bg-gradient-to-r from-white/5 to-transparent border-l-2 border-[#F15A24] rounded-r-2xl my-10"
                 >
                   <p className="text-white font-medium italic m-0">
                     &ldquo;Setiap kurikulum yang kami susun, setiap laboratorium yang kami bangun, dan setiap kemitraan yang kami jalin memiliki satu tujuan utama—memastikan mahasiswa kami mendapatkan pengalaman belajar yang nyata.&rdquo;
                   </p>
                 </motion.div>

                 <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                 >
                   Kami tidak hanya mengajar, kami membimbing bakat untuk menjadi pemimpin masa depan. Bagi kami, kampus ini bukan sekadar tempat menuntut ilmu; ini adalah <span className="text-white decoration-[#F15A24] decoration-2 underline underline-offset-4">ekosistem tempat kreativitas bertemu teknologi</span>.
                 </motion.p>
              </div>

              <div className="mt-16 pt-10 border-t border-white/10">
                 <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Sincerely,</p>
                 
                 {/* Signature Simulation */}
                 <div className="font-serif text-4xl text-white italic opacity-80 mb-4">
                   Wannen Pakpahan
                 </div>
                 
                 <p className="text-xs text-gray-500">Direktur Politeknik Prestasi Prima</p>
              </div>

            </div>

            {/* CTA Button */}
            <motion.div className="mt-16 text-right">
              <Link
                href="https://pmb.politeknikpratama.ac.id"
                className="group inline-flex items-center gap-4 text-white font-black uppercase tracking-widest hover:text-[#F15A24] transition-colors"
              >
                Join Us Today
                <span className="w-12 h-12 rounded-full bg-[#F15A24] text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-all shadow-[0_0_20px_#F15A24]">
                  <RiArrowRightUpLine className="text-xl" />
                </span>
              </Link>
            </motion.div>

          </motion.div>
        
        </div>
      </section>

      {/* Footer Quote Section (Redesigned) */}
      <section className="relative py-32 bg-[#0E1333] border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-[#F15A24]/5 select-none pointer-events-none whitespace-nowrap">
           VISION 2030
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
           >
             <RiDoubleQuotesR className="mx-auto text-6xl text-[#F15A24] mb-10 animate-bounce" />
             <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-12 text-white">
                &ldquo;Mencetak pemimpin yang <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15A24] to-yellow-500">Siap Menciptakan</span> <br/>
                Lapangan Kerja.&rdquo;
             </h2>
             <div className="inline-block px-10 py-4 border border-[#F15A24] rounded-full text-[#F15A24] font-black tracking-[0.3em] text-sm uppercase hover:bg-[#F15A24] hover:text-white transition-all cursor-default">
               Visi Utama
             </div>
           </motion.div>
        </div>
      </section>

    </main>
  );
}
