import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white">


    {/* dekor_garis moved to layout so it stays fixed and global; keep AboutSection
        clean and only render section-specific decorations here. */}

      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="relative flex justify-center md:justify-start">
            <div className="w-[520px] h-[420px] relative">
    
              <div className="absolute left-16 top-6 w-[400px] h-[480px] -translate-x-0 z-20">
                <Image
                  src="/sambutan.svg"
                  alt="Sambutan"
                  width={400}
                  height={480}
                  className="object-contain"
                />
              </div>

              {/* decorative bullet removed from left (will be placed at section right-bottom) */}
            </div>
          </div>

          {/* right content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827]">
              Tentang <span className="text-[#ff7a00]">Kami</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-[520px]">
              Kami adalah lembaga pendidikan yang berkomitmen mencetak generasi unggul, kreatif, dan siap
              menghadapi tantangan masa depan. Dengan dukungan tenaga pendidik profesional serta fasilitas
              modern, kami menghadirkan pengalaman belajar berbasis praktik nyata. Fokus kami adalah
              membimbing siswa untuk mengembangkan potensi, mengasah keterampilan, dan membangun karakter
              agar mampu bersaing di dunia industri maupun melanjutkan pendidikan ke jenjang lebih tinggi.
            </p>

            <div className="mt-8">
              <button className="inline-flex items-center gap-3 bg-[#ff7a00] text-white px-5 py-3 rounded-md shadow-lg hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#ff7a00]/30">
                Selengkapnya
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* decorative bullet placed at section right-bottom */}
  <div className="absolute right-0 bottom-0 pointer-events-none translate-y-24 md:translate-y-32 z-0">
          <Image src="/dekor_bulet.svg" alt="dekor-bullet" width={330} height={330} />
        </div>
    </section>
  );
}
