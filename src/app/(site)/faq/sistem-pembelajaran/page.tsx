import PremiumFAQHub from "@/components/sections/PremiumFAQHub";

export default function FaqSistemPembelajaranPage() {
  const faqs = [
    {
      category: "akademik",
      q: "Bagaimana metode pembelajaran di Poltek Presma?",
      a: "Kami menerapkan Kurikulum Berbasis Kompetensi (KBK) dengan porsi praktikum yang lebih besar (60% Praktik, 40% Teori) serta metode Problem-Based Learning yang relevan dengan tantangan dunia kerja.",
    },
    {
      category: "fasilitas",
      q: "Apakah tersedia fasilitas laboratorium pendukung?",
      a: "Setiap program studi didukung oleh laboratorium khusus sesuai bidangnya, seperti Lab Multimedia, Lab Pemrograman, dan Lab Administrasi Digital dengan software standar industri terbaru.",
    },
    {
      category: "akademik",
      q: "Apakah ada kurikulum berbasis industri?",
      a: "Benar sekali. Kami berkolaborasi dengan asosiasi profesi dan perusahaan teknologi untuk menyusun kurikulum agar setiap kompetensi yang diajarkan sesuai dengan kebutuhan real di lapangan.",
    },
  ];

  return (
    <PremiumFAQHub 
      title="Sistem Pembelajaran"
      subtitle="Knowledge & Skill"
      description="Temukan bagaimana metode belajar-mengajar di Politeknik Prestasi Prima mempersiapkan Anda menjadi profesional digital kelas dunia."
      initialFaqs={faqs}
      showCategories={false} 
    />
  );
}
