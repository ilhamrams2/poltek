import type { Metadata } from 'next';
import { 
  RiWheelchairLine, 
  RiGuideLine, 
  RiEyeLine, 
  RiKeyboardBoxLine, 
  RiCustomerService2Line, 
  RiCheckDoubleLine 
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Panduan Aksesibilitas | Politeknik Prestasi Prima',
  description: 'Komitmen dan panduan fitur aksesibilitas inklusif Politeknik Prestasi Prima.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-[#1D234E] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-orange-400 font-bold uppercase tracking-widest text-xs mb-6 border border-white/10">
            <RiWheelchairLine size={16} />
            <span className="mt-0.5">Inklusivitas Untuk Semua</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Panduan <span className="text-[#F97316]">Aksesibilitas</span> Digital
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Politeknik Prestasi Prima berkomitmen untuk menyediakan layanan digital yang dapat diakses oleh semua orang, tanpa memandang kemampuan atau hambatan teknologi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Section 1: Introduction */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-black text-[#1D234E] flex items-center gap-3">
              <RiGuideLine className="text-purple-600" />
              Pernyataan Komitmen
            </h2>
            <p className="text-gray-600">
              Kami menyadari bahwa aksesibilitas bukan hanya sekadar fitur tambahan, melainkan hak dasar setiap pengguna. Website ini telah dirancang mengikuti standar <strong>Web Content Accessibility Guidelines (WCAG) 2.1</strong> level AA untuk memastikan konten kami dapat dinikmati oleh penyandang disabilitas visual, motorik, kognitif, maupun pendengaran.
            </p>
          </div>

          {/* Section 2: Features Grid */}
          <div>
            <h2 className="text-3xl font-black text-[#1D234E] mb-8 flex items-center gap-3">
              <RiEyeLine className="text-orange-500" />
              Fitur Bantuan Cerdas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Profil Kejang & Epilepsi", desc: "Menghentikan semua animasi berkedip dan menurunkan saturasi warna tajam untuk keamanan visual." },
                { title: "Mode Ramah Disleksia", desc: "Mengubah jenis huruf menjadi font khusus yang meningkatkan keterbacaan karakter huruf." },
                { title: "Bantuan Visual (Visually Impaired)", desc: "Meningkatkan ukuran teks, menebalkan font, dan memaksimalkan kontras warna." },
                { title: "Fokus ADHD", desc: "Menambahkan garis panduan membaca (reading mask) untuk mengurangi gangguan fokus." },
                { title: "Pembaca Layar (Screen Reader)", desc: "Kompatibilitas penuh dengan software pembaca layar seperti NVDA dan VoiceOver." },
                { title: "Navigasi Keyboard", desc: "Seluruh elemen interaktif dapat diakses sepenuhnya menggunakan tombol Tab dan Enter." },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-purple-200 transition-colors">
                  <h3 className="text-lg font-bold text-[#1D234E] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Shortcuts */}
          <div className="bg-[#1D234E] text-white p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
             <div className="relative z-10">
                <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <RiKeyboardBoxLine className="text-orange-400" />
                  Pintas Keyboard (Shortcuts)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">Buka Menu Aksesibilitas</span>
                    <span className="font-mono bg-white/10 px-2 py-1 rounded text-orange-400">Ctrl + U</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">Navigasi Menu Utama</span>
                    <span className="font-mono bg-white/10 px-2 py-1 rounded text-orange-400">Tab</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">Scroll ke Atas</span>
                    <span className="font-mono bg-white/10 px-2 py-1 rounded text-orange-400">Home</span>
                  </div>
                   <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">Scroll ke Bawah</span>
                    <span className="font-mono bg-white/10 px-2 py-1 rounded text-orange-400">End</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Section 4: Contact */}
          <div className="text-center bg-purple-50 p-10 rounded-[2.5rem]">
            <RiCustomerService2Line className="text-5xl text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-black text-[#1D234E] mb-3">Butuh Bantuan Lebih Lanjut?</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Jika Anda mengalami kendala saat mengakses informasi di website ini, tim IT Support kami siap membantu Anda 24/7.
            </p>
            <a href="mailto:support@poltekpresma.ac.id" className="inline-flex items-center gap-2 bg-[#F97316] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1 transition-all">
               Hubungi Tim Support
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
