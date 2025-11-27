import FAQSection from "@/components/faq/FAQSection";

export default function FaqSistemPembelajaranPage() {
  const faqs = [
    {
      q: "Bagaimana metode pembelajaran di Poltek Presma?",
      a: "Pembelajaran mengacu pada kurikulum berbasis kompetensi dengan metode praktikum, teori, dan proyek.",
    },
    {
      q: "Apakah tersedia fasilitas laboratorium?",
      a: "Ya, seluruh program studi memiliki laboratorium lengkap untuk menunjang kegiatan belajar.",
    },
    {
      q: "Apakah ada pembelajaran berbasis industri?",
      a: "Benar, mahasiswa akan mengikuti kegiatan magang dan proyek kolaborasi dengan perusahaan.",
    },
  ];

  return <FAQSection title="FAQ – Sistem Pembelajaran" faqs={faqs} />;
}
