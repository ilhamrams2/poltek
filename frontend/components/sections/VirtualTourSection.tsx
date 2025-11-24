import Image from "next/image";
import Link from "next/link";
import { Building, Play } from "lucide-react";

export default function VirtualTourSection() {
  return (
    <section
      className="relative max-w-7xl mx-auto mt-16 px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 
                 text-white bg-gradient-to-br from-orange-400 to-[#2d1b69] 
                 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
      aria-label="Virtual Tour Politeknik Prestasi Prima"
    >

      {/* Decorative Left Pattern */}
      <div className="absolute left-0 top-[40%] -translate-x-16 opacity-30 sm:opacity-100 
                      hidden sm:block">
        <Image
          src="/images/sections/360/patern-left.svg"
          width={260}
          height={260}
          alt="left decorative pattern"
          className="w-48 md:w-80"
          priority
        />
      </div>

      {/* Decorative Right Pattern */}
      <div className="absolute right-0 bottom-0 translate-x-2 opacity-30 sm:opacity-100
                      hidden sm:block">
        <Image
          src="/images/sections/360/patern-right.svg"
          width={220}
          height={220}
          alt="right decorative pattern"
          className="w-40 md:w-64"
          priority
        />
      </div>

      {/* Header */}
      <header className="text-center max-w-xl mx-auto z-10 relative">
        <Image
          src="/images/logo_politeknik.png"
          width={75}
          height={75}
          alt="Logo Politeknik Prestasi Prima"
          className="mx-auto mb-3 sm:mb-4 w-16 sm:w-20 md:w-[90px]"
          priority
        />

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Pengalaman Virtual <br /> Tour 360°
        </h2>

        <p className="text-white/90 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base px-2">
          Rasakan pengalaman immersive menjelajahi seluruh fasilitas kampus kami
          dengan teknologi panorama 360° berkualitas tinggi.
        </p>
      </header>

      {/* Main Card */}
      <div className="mt-10 sm:mt-12 flex flex-col items-center relative z-10">
        <figure className="relative bg-white w-full max-w-sm sm:max-w-md md:max-w-xl 
                           rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">

          {/* Preview Image */}
          <Image
            src="/images/sections/360/v360-1.jpg"
            width={900}
            height={600}
            alt="Preview Virtual Tour Kampus"
            className="w-full"
            priority
          />

          {/* Badge */}
          <span className="absolute top-2 right-2 sm:top-3 sm:right-3 
                           bg-black/70 text-[10px] sm:text-xs px-2 py-1 
                           sm:px-3 sm:py-1 rounded-full">
            HD Quality
          </span>

          {/* Bottom Info */}
          <figcaption className="flex items-center justify-between bg-white p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Building size={20} className="text-gray-800" />
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                Politeknik Prestasi Prima
              </span>
            </div>

            {/* Play Button */}
            <Link
              href="#"
              aria-label="Putar Virtual Tour"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 
                         rounded-full bg-gray-900 text-white hover:bg-gray-700 transition"
            >
              <Play size={18} />
            </Link>
          </figcaption>
        </figure>

        {/* CTA Button */}
        <Link
          href="#"
          className="mt-6 sm:mt-8 px-6 py-2.5 sm:px-8 sm:py-3 
                     bg-orange-500 hover:bg-orange-600 rounded-lg 
                     text-white text-sm sm:text-base font-medium 
                     shadow-lg transition"
        >
          Mulai Virtual Tour
        </Link>
      </div>
    </section>
  );
}
