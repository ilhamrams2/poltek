"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* ========================== SECTION 1 — PROFIL POLITEKNIK =========================== */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-[#1A2B5F] rounded-3xl -z-10 top-10"></div>

            <Image
              src="/images/model2.png"
              alt="Profil Politeknik"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="text-left">
            <h1 className="text-5xl font-extrabold leading-tight">
              <span className="text-[#F15A24]">Profil </span>
              <span className="text-[#1A2B5F]">Politeknik</span>
            </h1>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Politeknik Prestasi Prima adalah perguruan tinggi vokasi yang berdiri tahun 2023
              dengan komitmen menjadi politeknik unggulan dan terpercaya. Membuka Program Studi
              D4 Bisnis Digital dan D4 Teknologi Rekayasa Multimedia, kurikulum berbasis digital
              dirancang untuk mencetak lulusan terampil, adaptif, dan siap menghadapi kebutuhan
              industri modern.
            </p>

            <button className="mt-8 bg-[#1A2B5F] text-white px-6 py-3 rounded-md hover:bg-[#0f1d44] transition">
              View More
            </button>
          </div>

        </div>
      </section>

      {/* ========================== SECTION 2 — VISI MISI =========================== */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold text-[#1A2B5F] mb-6 leading-tight">
              Visi & Misi <span className="text-[#F15A24]">Politeknik</span>
            </h2>

            {/* ---- VISI ---- */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full bg-[#1D234E] flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-[#1A1A1A]">
                Visi Politeknik
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-xl text-[15.5px] mb-10">
              Menjadi politeknik vokasi terdepan yang unggul, terpercaya,
              dan mampu mencetak insan terampil berakhlak dengan
              penguasaan teknologi serta kontribusi global.
            </p>

            {/* ---- MISI ---- */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#1D234E] flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11l3 3L22 4"></path>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-[#1A1A1A]">
                Misi Politeknik
              </h3>
            </div>

            <ul className="space-y-4 text-gray-700 leading-relaxed text-[15.5px] max-w-xl list-decimal list-inside">
              <li>
                Menyelenggarakan pendidikan vokasi berkualitas melalui
                kurikulum Merdeka, pembelajaran digital, serta integrasi
                teori dan praktik industri.
              </li>
              <li>
                Menyiapkan lulusan yang kompeten dan mampu bersaing pada
                era revolusi industri 4.0 dan globalisasi.
              </li>
              <li>
                Mendorong kreativitas, inovasi, dan jiwa kewirausahaan agar
                lulusan mampu menciptakan solusi serta peluang usaha baru.
              </li>
              <li>
                Mewujudkan tata kelola kampus adaptif, berkelanjutan, dan
                selaras dengan perkembangan teknologi dan dinamika sosial
                ekonomi.
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute w-96 h-96 bg-[#1A2B5F] rounded-3xl -z-10 top-14"></div>

            <Image
              src="/images/modelstudent.png"
              alt="Visi Misi"
              width={550}
              height={550}
              className="object-contain"
            />
          </div>

        </div>
      </section>

      {/* ========================== SECTION 3 — STRUKTUR ORGANISASI =========================== */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold text-[#1A2B5F] leading-tight mb-4">
              Struktur Organisasi <br />
              <span className="text-[#F15A24]">Politeknik Prestasi Prima</span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Struktur organisasi ini menjadi kerangka dasar manajemen institusi,
              memastikan koordinasi antar pimpinan, unit pendukung, serta program studi
              agar tercipta efektivitas akademik, keuangan, sarana, hingga pelayanan mahasiswa.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/images/about/struktur-organisasi-poltek-presma.jpg"
              alt="Struktur Organisasi Politeknik Prestasi Prima"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

        </div>
      </section>
    </>
  );
}
