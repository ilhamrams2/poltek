export default function PmbSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* CARD 1 */}
        <a
          href="#"
          className="group block h-[416px] rounded-[20px] border-4 border-dashed border-[#1D234E] p-7 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1D234E]/30 flex flex-col"
        >
          <div className="mb-6 mt-2">
            <i className="ri-macbook-line text-[#1D234E]" style={{ fontSize: 78 }} aria-hidden />
          </div>

          <h3 className="text-xl font-bold text-[#111827] leading-snug mb-3">
            Daftar Kuliah di Politeknik Prestasi Prima Bisa dari Mana Saja
          </h3>

          <p className="text-[15px] font-medium text-zinc-600 mb-4 leading-relaxed">
            Banyak pilihan beasiswa sampai dengan kuliah gratis 100%
          </p>

          <span className="mt-auto text-sm text-[#1D234E] font-semibold group-hover:underline">
            Info Beasiswa →
          </span>
        </a>

        {/* CARD 2 */}
        <a
          href="#"
          className="group block h-[416px] rounded-[20px] bg-[#1D234E] p-7 text-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/30 relative overflow-hidden flex flex-col"
        >
          <div className="mb-6 mt-2">
            <i className="ri-wallet-line text-white" style={{ fontSize: 78 }} aria-hidden />
          </div>

          <h3 className="text-xl font-bold leading-snug mb-3">
            Kuliah di Politeknik Prestasi Prima Tidak Mahal
          </h3>

          <p className="text-[15px] font-medium text-white/80 mb-4 leading-relaxed">
            Cek biaya perkuliahan disini
          </p>

          <span className="mt-auto text-sm text-white font-semibold group-hover:underline">
            Info Biaya Kuliah →
          </span>

          <div className="pointer-events-none absolute inset-0 rounded-[20px] border-4 border-dashed border-white/40" />
        </a>

        {/* CARD 3 */}
        <a
          href="#"
          className="group block h-[416px] rounded-[20px] bg-[#ff7a00] p-7 text-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/30 relative overflow-hidden flex flex-col"
        >
          <div className="mb-6 mt-2">
            <i className="ri-file-text-line text-white" style={{ fontSize: 78 }} aria-hidden />
          </div>

          <h3 className="text-xl font-bold leading-snug mb-3">
            Sudah Siap Daftar Kuliah di Politeknik Prestasi Prima?
          </h3>

          <p className="text-[15px] font-medium text-white/90 mb-4 leading-relaxed">
            Klik tombol di bawah ini untuk melakukan pendaftaran online
          </p>

          <span className="mt-auto text-sm text-white font-semibold group-hover:underline">
            Info PMB Prestasi Prima →
          </span>

          <div className="pointer-events-none absolute inset-0 rounded-[20px] border-4 border-dashed border-white/40" />
        </a>

      </div>
    </section>
  );
}
