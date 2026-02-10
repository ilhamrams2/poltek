import PremiumFAQHub from "@/components/sections/PremiumFAQHub";

export default function FaqProgramStudiPage() {
  const faqs = [
    {
      category: "akademik",
      q: "Program studi apa saja yang tersedia?",
      a: "Kami menawarkan berbagai program vokasi unggulan mulai dari D3 Administrasi Perkantoran, Manajemen Pemasaran, hingga D4 Teknologi Rekayasa Perangkat Lunak, Jaringan Komputer, dan Multimedia.",
    },
    {
      category: "akademik",
      q: "Berapa lama masa studi untuk masing-masing jenjang?",
      a: "Jenjang Diploma 3 (D3) ditempuh dalam waktu 3 tahun (6 semester), sedangkan Diploma 4 (D4/Sarjana Terapan) ditempuh dalam waktu 4 tahun (8 semester).",
    },
    {
      category: "akademik",
      q: "Bagaimana ketersediaan praktik industri/magang?",
      a: "Seluruh program studi memiliki kemitraan dengan perusahaan terkemuka. Mahasiswa diwajibkan mengikuti magang industri untuk mengasah skill praktis sebelum memasuki dunia kerja.",
    },
  ];

  return (
    <PremiumFAQHub 
      title="Tentang Program Studi"
      subtitle="Akademik & Kurikulum"
      description="Pelajari lebih lanjut mengenai jurusan, kurikulum berbasis industri, dan prospek karir lulusan Politeknik Prestasi Prima."
      initialFaqs={faqs}
      showCategories={false} 
    />
  );
}
