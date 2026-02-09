import PremiumFAQHub from "@/components/sections/PremiumFAQHub";

export default function FaqMainPage() {
  const allFaqs = [
    // Pendaftaran
    {
      category: "pendaftaran",
      q: "Bagaimana cara mendaftar ke Politeknik Prestasi Prima?",
      a: "Proses pendaftaran sangat mudah! Anda dapat melakukannya 100% online melalui dashboard pendaftaran kami atau datang langsung ke kampus untuk dipandu oleh tim admisi kami yang ramah.",
    },
    {
      category: "pendaftaran",
      q: "Apa saja syarat dokumen yang diperlukan?",
      a: "Cukup siapkan scan Ijazah SMA/SMK sederajat, Kartu Keluarga, dan Pas Foto terbaru. Semua dokumen diupload dalam format digital lewat portal pendaftaran.",
    },
    {
      category: "pendaftaran",
      q: "Berapa biaya pendaftaran mahasiswa baru?",
      a: "Biaya pendaftaran mengikuti kebijakan tahun akademik berjalan. Anda dapat melihat rincian biaya lengkap di halaman Biaya Kuliah atau bertanya langsung via WhatsApp Admissions.",
    },
    // Akademik
    {
      category: "akademik",
      q: "Program studi apa saja yang tersedia?",
      a: "Kami menawarkan berbagai program vokasi unggulan mulai dari D3 Administrasi Perkantoran, Manajemen Pemasaran, hingga D4 Teknologi Rekayasa Perangkat Lunak, Jaringan Komputer, dan Multimedia.",
    },
    {
      category: "akademik",
      q: "Bagaimana metode pembelajaran di Poltek Presma?",
      a: "Kami menerapkan Kurikulum Berbasis Kompetensi (KBK) dengan porsi praktikum yang lebih besar (60% Praktik, 40% Teori) serta metode Problem-Based Learning yang relevan dengan tantangan dunia kerja.",
    },
    {
      category: "akademik",
      q: "Apakah ada kurikulum berbasis industri?",
      a: "Benar sekali. Kami berkolaborasi dengan asosiasi profesi dan perusahaan teknologi untuk menyusun kurikulum agar setiap kompetensi yang diajarkan sesuai dengan kebutuhan real di lapangan.",
    },
    // Fasilitas
    {
      category: "fasilitas",
      q: "Apakah tersedia fasilitas laboratorium pendukung?",
      a: "Setiap program studi didukung oleh laboratorium khusus sesuai bidangnya, seperti Lab Multimedia, Lab Pemrograman, dan Lab Administrasi Digital dengan software standar industri terbaru.",
    },
    {
      category: "fasilitas",
      q: "Apakah laboratorium tersedia bagi mahasiswa di luar jam kuliah?",
      a: "Ya, mahasiswa dapat menggunakan fasilitas laboratorium untuk riset mandiri atau pengerjaan tugas dengan koordinasi bersama asisten laboratorium dan kaprodi terkait.",
    }
  ];

  return (
    <PremiumFAQHub 
      title="Ada yang bisa Kami bantu?" 
      subtitle="Hub Pusat Bantuan"
      description="Segala informasi yang Anda butuhkan untuk memulai perjalanan masa depan di Politeknik Prestasi Prima ada di sini."
      initialFaqs={allFaqs}
      showCategories={true}
    />
  );
}
