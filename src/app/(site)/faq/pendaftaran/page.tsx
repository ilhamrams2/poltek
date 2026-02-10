import PremiumFAQHub from "@/components/sections/PremiumFAQHub";

export default function FaqPendaftaranPage() {
  const faqs = [
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
  ];

  return (
    <PremiumFAQHub 
      title="Tentang Pendaftaran"
      subtitle="Info PMB 2026/2027"
      description="Temukan informasi lengkap mengenai alur, persyaratan, dan jadwal pendaftaran mahasiswa baru di Politeknik Prestasi Prima."
      initialFaqs={faqs}
      showCategories={false} 
    />
  );
}
