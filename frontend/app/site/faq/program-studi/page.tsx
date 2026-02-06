import FAQSection from "@/components/faq/FAQSection";

export default function FaqProgramStudiPage() {
  const faqs = [
    {
      q: "Program studi apa saja yang tersedia?",
      a: "Kami menawarkan D3 dan D4 seperti Pemasaran, Administrasi Perkantoran, TRPL, Multimedia, dan lainnya.",
    },
    {
      q: "Berapa lama masa studi?",
      a: "D3 ditempuh dalam 3 tahun, sedangkan D4 ditempuh dalam 4 tahun.",
    },
    {
      q: "Apakah ada praktik industri?",
      a: "Ya, seluruh program studi memiliki kegiatan praktik industri di perusahaan mitra.",
    },
  ];

  return <FAQSection title="FAQ – Program Studi" faqs={faqs} />;
}
