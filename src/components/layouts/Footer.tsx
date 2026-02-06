"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* ====================== RUNNING MOTTO ====================== */}
      <section className="relative flex items-center justify-between bg-linear-to-r from-[#442489] via-[#5320C0] to-[#7D42FD] overflow-hidden">
        {/* Pola Kotak Kiri */}
        <div className="absolute left-0 top-0 h-full hidden md:flex flex-col opacity-80">
          <div className="flex">
            <div className="w-10 h-10 bg-[#442489]" />
            <div className="w-10 h-10 bg-gray-100" />
          </div>
          <div className="flex">
            <div className="w-10 h-10 bg-gray-100" />
            <div className="w-10 h-10 bg-[#442489]" />
          </div>
          <div className="flex">
            <div className="w-10 h-10 bg-[#442489]" />
            <div className="w-10 h-10 bg-gray-100" />
          </div>
        </div>

        {/* Running Text */}
        <div className="flex-1 overflow-hidden px-6 md:px-24 py-6 relative z-10">
          <div className="flex whitespace-nowrap animate-marquee">
            <h2 className="inline-block text-white font-bold text-base sm:text-lg md:text-2xl uppercase tracking-wide drop-shadow leading-snug">
              POLITEKNIK PRESTASI PRIMA – MENCETAK GENERASI BERPRESTASI! • IF
              BETTER IS POSSIBLE, GOOD IS NOT ENOUGH! • BERANI HEBAT, BERANI
              BERPRESTASI! • POLITEKNIK PRESTASI PRIMA – MENCETAK GENERASI
              BERPRESTASI! • IF BETTER IS POSSIBLE, GOOD IS NOT ENOUGH! • BERANI
              HEBAT, BERANI BERPRESTASI!
            </h2>
          </div>
        </div>

        {/* Kotak Kanan */}
        <div className="absolute right-0 top-0 h-full hidden md:flex">
          <div className="w-40 md:w-52 bg-[#5320C0]" />
          <div className="w-40 md:w-52 bg-[#6022E6]" />
          <div className="w-40 md:w-52 bg-[#7D42FD]" />
        </div>

        {/* Logo */}
        <div className="relative flex items-center gap-3 md:gap-4 pr-4 md:pr-10 z-20">
          <Image
            src="/images/logo_politeknik.png"
            alt="Logo Sekolah"
            width={60}
            height={60}
            className="w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-white shadow-lg"
          />
          <Image
            src="/patern/jaringan.png"
            alt="Icon Network"
            width={110}
            height={110}
            className="w-16 md:w-28 opacity-90"
          />
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
          @media (max-width: 768px) {
            .animate-marquee {
              animation: marquee 7s linear infinite;
            }
          }
        `}</style>
      </section>

      {/* ====================== FOOTER ====================== */}
      <footer className="relative bg-[#080c1b] text-gray-300 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0e162e] via-[#0a0f25] to-[#080c1b]" />
        <div className="absolute inset-0 bg-[url('/footer-texture.svg')] opacity-5 mix-blend-overlay" />

        {/* Header Footer */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-14 pb-10 flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-white/10">
          {/* Logo + Caption */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 text-center lg:text-left">
            <Image
              src="/images/logo_politeknik.png"
              width={90}
              height={90}
              alt="Logo"
              className="w-20 h-20 rounded-full border-2 border-orange-500 shadow-xl"
            />

            <div>
              <h2 className="text-2xl font-bold text-white tracking-wide">
                Politeknik Prestasi Prima
              </h2>
              <p className="text-sm text-gray-400 mt-2 max-w-md">
                Mencetak generasi berprestasi melalui pendidikan unggulan.
              </p>
              <p className="italic text-orange-400/90 text-xs mt-3">
                “Berani Hebat, Berani Berprestasi.”
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/p/Politeknik-Prestasi-Prima/"
              target="_blank"
              className="bg-[#6924FF] hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-md group"
            >
              <i className="ri-facebook-fill text-white group-hover:text-[#6924FF] text-lg" />
            </a>

            <a
              href="https://www.instagram.com/poltekpresma/"
              target="_blank"
              className="bg-[#6924FF] hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-md group"
            >
              <i className="ri-instagram-line text-white group-hover:text-[#6924FF] text-lg" />
            </a>

            <a
              href="https://www.youtube.com/@poltekpresma"
              target="_blank"
              className="bg-[#6924FF] hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-md group"
            >
              <i className="ri-youtube-fill text-white group-hover:text-[#6924FF] text-lg" />
            </a>
          </div>
        </div>

        {/* ====================== FOOTER MENU GRID ====================== */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-14 pb-10 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* === 1. Profil === */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-orange-300 after:rounded-full">
                Profil
              </h3>

              <ul className="text-sm text-white space-y-2 mt-3">
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Tentang Kampus
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Visi & Misi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Sejarah
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Struktur Organisasi
                  </a>
                </li>
              </ul>
            </div>

            {/* === 2. Akademik === */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-orange-300 after:rounded-full">
                Akademik
              </h3>

              <ul className="text-sm text-white space-y-2 mt-3">
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Program Studi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Kalender Akademik
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    E-Learning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Peraturan Akademik
                  </a>
                </li>
              </ul>
            </div>

            {/* === 3. Informasi === */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-orange-300 after:rounded-full">
                Informasi
              </h3>

              <ul className="text-sm text-white space-y-2 mt-3">
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Berita
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Pengumuman
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Agenda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Beasiswa
                  </a>
                </li>
              </ul>
            </div>

            {/* === 4. PMB === */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-orange-300 after:rounded-full">
                PMB
              </h3>

              <ul className="text-sm text-white space-y-2 mt-3">
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Syarat Pendaftaran
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Biaya Kuliah
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Daftar Online
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Cek Status
                  </a>
                </li>
              </ul>
            </div>

            {/* === 5. Layanan === */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-orange-300 after:rounded-full">
                Layanan
              </h3>

              <ul className="text-sm text-white space-y-2 mt-3">
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Perpustakaan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Biro Administrasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Kemahasiswaan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Humas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* =================== LOKASI + FORM =================== */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Location */}
          <div className="flex flex-col h-full">
            <h2 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-0.5 after:bg-linear-to-r after:from-orange-500 after:to-orange-300 after:rounded-full">
              Lokasi Kami
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.561468024733!2d106.9046857749912!3d-6.321185993668254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed48914118af%3A0x452a28e8d10f5be9!2sPOLITEKNIK%20PRESTASI%20PRIMA!5e0!3m2!1sen!2sid!4v1764236776368!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col h-full">
            <h2 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-0.5 after:bg-linear-to-r after:from-orange-500 after:to-orange-300 after:rounded-full">
              Hubungi Kami
            </h2>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-200 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-200 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />

              <textarea
                rows={3}
                placeholder="Pesan Anda"
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-200 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-2 rounded-lg text-sm font-medium text-white transition bg-[#6924FF] hover:bg-[#5520CC]"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* ====================== COPYRIGHT ====================== */}
        <div className="border-t border-white/20 bg-[#6924FF]/90 py-4 relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm">
            <p className="flex items-center gap-2 text-white">
              © {new Date().getFullYear()} Politeknik Prestasi Prima
              <span className="mx-2 text-white/50">|</span>
              Oren Solution –{" "}
              <span className="font-medium text-orange-400">Version 2.0</span>
            </p>

            <p className="text-white">
              Dibuat oleh:{" "}
              <span className="text-orange-400 font-medium">
                Zwingli, Gibran, Abimanyu, Ardy
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
