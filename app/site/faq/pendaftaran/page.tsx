import FAQSection from "@/components/faq/FAQSection";

export default function FaqPendaftaranPage() {
  const faqs = [
    {
      q: "Bagaimana cara mendaftar ke Politeknik Prestasi Prima?",
      a: "Pendaftaran dapat dilakukan secara online melalui website resmi atau datang langsung ke kampus.",
    },
    {
      q: "Apa saja syarat pendaftaran mahasiswa baru?",
      a: "Syarat meliputi ijazah SMA/SMK sederajat, formulir pendaftaran, dan berkas tambahan sesuai prodi.",
    },
    {
      q: "Berapa biaya pendaftaran?",
      a: "Biaya pendaftaran mengikuti ketentuan tahun berjalan dan dapat dilihat pada halaman informasi biaya.",
    },
  ];

  return <FAQSection title="FAQ – Pendaftaran" faqs={faqs} />;
}
