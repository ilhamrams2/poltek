export default function FaktaSection() {
  return (
    <section className="w-full bg-[#1D234E] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-white text-lg md:text-xl font-semibold mb-8">
          Fakta Telkom Politeknik prestasi prima
        </h2>

        {/* NUMBERS */}
        <div className="flex items-center justify-center gap-10 md:gap-20 text-white">

          {/* 1517 Dosen */}
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold">1517</span>
            <span className="text-sm opacity-80 mt-1">Dosen</span>
          </div>

          {/* 240 Mahasiswa */}
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold">240</span>
            <span className="text-sm opacity-80 mt-1">Mahasiswa</span>
          </div>

          {/* 35 Ruang Kelas */}
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold">35</span>
            <span className="text-sm opacity-80 mt-1">Ruang Kelas</span>
          </div>

          {/* 3 Hektar Kampus */}
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold">3</span>
            <span className="text-sm opacity-80 mt-1">Hektar Kampus</span>
          </div>

        </div>
      </div>
    </section>
  );
}
