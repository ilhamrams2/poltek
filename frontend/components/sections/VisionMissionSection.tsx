import React from "react";

export default function VisionMissionSection() {
  return (
    <section className="w-full bg-white py-20 px-6 flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
      {/* === LEFT CONTENT === */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-snug mb-6">
          Visi & Misi <span className="text-orange-500">Politeknik</span>
        </h2>

        {/* Visi */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            Visi Politeknik
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-xl">
            Menjadi politeknik vokasi terdepan yang unggul, terpercaya, dan mampu mencetak lulusan terampil berakhlak dengan penguasaan teknologi serta kompetitif global.
          </p>
        </div>

        {/* Misi */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            Misi Politeknik
          </h3>

          <ul className="space-y-4 text-gray-700 leading-relaxed list-decimal list-inside max-w-xl">
            <li>
              Menyelenggarakan pendidikan vokasi yang berkualitas melalui kurikulum
              merdeka, pembelajaran digital, serta integrasi antara teori dan praktik
              industri.
            </li>
            <li>
              Menyiapkan lulusan yang kompeten dan mampu bersaing pada era revolusi
              industri 4.0 dan globalisasi sesuai bidang keahliannya.
            </li>
            <li>
              Mendorong kreativitas, inovasi, dan jiwa kewirausahaan agar lulusan mampu
              menciptakan solusi serta menciptakan peluang usaha baru.
            </li>
            <li>
              Mewujudkan tata kelola kampus yang adaptif, berkelanjutan, dan selaras
              dengan perkembangan teknologi serta dinamika sosial ekonomi.
            </li>
          </ul>
        </div>
      </div>

      {/* === RIGHT IMAGE === */}
      <div className="flex-1 relative flex justify-center">
        {/* Decorative Shapes */}
        <div className="absolute -top-6 right-6 w-40 h-40 border-2 border-orange-400 border-dashed rounded-xl opacity-70"></div>
        <div className="absolute top-10 -right-10 w-28 h-28 border-4 border-gray-300 rounded-full opacity-60"></div>

        <img
          src="/images/dummy-vision-mission.png" // Dummy path
          alt="Visi Misi Politeknik"
          className="relative w-72 md:w-80 lg:w-[340px] rounded-xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
