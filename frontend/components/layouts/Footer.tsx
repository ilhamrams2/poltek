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
            <div className="w-10 h-10 bg-[#5320C0]" />
            <div className="w-10 h-10 bg-gray-100" />
          </div>
          <div className="flex">
            <div className="w-10 h-10 bg-gray-100" />
            <div className="w-10 h-10 bg-[#6022E6]" />
          </div>
          <div className="flex">
            <div className="w-10 h-10 bg-[#7D42FD]" />
            <div className="w-10 h-10 bg-gray-100" />
          </div>
        </div>

        {/* Running Text */}
        <div className="flex-1 overflow-hidden px-6 md:px-24 py-6 relative z-10">
          <div className="flex whitespace-nowrap animate-marquee">
            <h2 className="inline-block text-white font-bold text-base sm:text-lg md:text-2xl uppercase tracking-wide drop-shadow leading-snug">
              POLITEKNIK PRESTASI PRIMA – MENCETAK GENERASI BERPRESTASI! • 
              IF BETTER IS POSSIBLE, GOOD IS NOT ENOUGH! • 
              BERANI HEBAT, BERANI BERPRESTASI! • 
              POLITEKNIK PRESTASI PRIMA – MENCETAK GENERASI BERPRESTASI! • 
              IF BETTER IS POSSIBLE, GOOD IS NOT ENOUGH! • 
              BERANI HEBAT, BERANI BERPRESTASI!
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
            src="/logo-smk.png"
            alt="Logo Sekolah"
            width={60}
            height={60}
            className="w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-white shadow-lg"
          />
          <Image
            src="/jaringan.png"
            alt="Icon Network"
            width={110}
            height={110}
            className="w-16 md:w-28 opacity-90"
          />
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
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
              src="/logo-smk.png"
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
            {["facebook-fill", "instagram-line", "youtube-fill"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="bg-[#6924FF] hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-md group"
              >
                <i className={`ri-${icon} text-white group-hover:text-[#6924FF] text-lg`} />
              </a>
            ))}
          </div>
        </div>

        {/* ====================== MENU GRID ====================== */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-14 pb-10 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Informasi Kampus */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative">
                Informasi Kampus
                <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-linear-to-r from-orange-500 to-orange-300 rounded-full" />
              </h3>

              <ul className="text-sm text-white space-y-3 mt-4">
                <li className="flex items-center gap-3">
                  <i className="ri-phone-line text-orange-400" /> +62 812-3456-7890
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-mail-line text-orange-400" /> info@politeknikprestasiprima.ac.id
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-building-4-line text-orange-400" /> Jl. Hankam Raya No. 89
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-time-line text-orange-400" /> Senin – Jumat: 08.00 - 17.00
                </li>
              </ul>
            </div>

            {/* Menu */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative">
                Menu
                <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-linear-to-r from-orange-500 to-orange-300 rounded-full" />
              </h3>

              <ul className="grid grid-cols-2 gap-3 text-sm text-white mt-4">
                {[
                  "Beranda",
                  "Tentang",
                  "Program Studi",
                  "Berita",
                  "Prestasi",
                  "Galeri",
                  "Pendaftaran",
                  "Layanan",
                  "Kemahasiswaan",
                ].map((menu) => (
                  <li key={menu}>
                    <a href="#" className="hover:text-orange-400">{menu}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Informasi Tambahan */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative">
                Informasi Tambahan
                <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-linear-to-r from-orange-500 to-orange-300 rounded-full" />
              </h3>

              <ul className="text-sm text-white space-y-3 mt-4">
                {[
                  "Kegiatan Kampus",
                  "Kerja Sama Industri",
                  "Beasiswa",
                  "Layanan Alumni",
                  "Download Brosur",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-orange-400">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative">
                FAQ
                <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-white rounded-full" />
              </h3>

              <ul className="space-y-4 text-sm mt-4">
                <li>
                  <p className="font-semibold text-orange-400">Bagaimana cara mendaftar?</p>
                  <p className="text-white">
                    Melalui <a href="#" className="underline font-semibold">laman online</a> atau datang ke kampus.
                  </p>
                </li>

                <li>
                  <p className="font-semibold text-orange-400">Kapan penerimaan mahasiswa baru?</p>
                  <p className="text-white">
                    Setiap tahun pada periode <strong className="font-semibold">Desember – Juli</strong>.
                  </p>
                </li>

                <li>
                  <p className="font-semibold text-orange-400">Butuh informasi lebih lanjut?</p>
                  <p className="text-white">
                    Kunjungi <a href="#" className="underline font-semibold">Halaman Kontak</a>.
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ====================== LOKASI & FORM ====================== */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Lokasi */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 relative">
              Lokasi Kami
              <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-linear-to-r from-orange-500 to-orange-300 rounded-full" />
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 h-[260px] md:h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1..."
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 relative">
              Hubungi Kami
              <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-linear-to-r from-orange-500 to-orange-300 rounded-full" />
            </h2>

            {/* FIX: Form sekarang ditutup */}
            <form className="space-y-3">
              <input type="text" placeholder="Nama Anda" className="input-contact" />
              <input type="email" placeholder="Email" className="input-contact" />
              <textarea rows={3} placeholder="Pesan Anda" className="input-contact" />

              <button
                type="submit"
                className="bg-[#6924FF] hover:bg-[#5520CC] w-full py-2 rounded-lg text-sm font-medium text-white transition"
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
              Oren Solution – <span className="font-medium text-orange-400">Version 2.0</span>
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
