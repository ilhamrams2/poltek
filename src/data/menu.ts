export interface MenuItem {
  id: string;
  title: string;
  url?: string; // untuk single link seperti Beranda
  items?: { label: string; url: string }[];
  subgroups?: {
    title: string;
    items: { label: string; url: string }[];
  }[];
}

export const MENU: MenuItem[] = [
  /* ===========================
   *         PROFIL
   * =========================== */
  {
    id: "profil",
    title: "Profil",
    items: [
      { label: "Sejarah Poltek", url: "/history" },
      { label: "Profile Kampus", url: "/about" },
      { label: "Sambutan Direktur", url: "/director-message" },
      { label: "Dosen & Staff", url: "/about" },
    ],
    subgroups: [
      {
        title: "Fasilitas",
        items: [
          { label: "Facility", url: "/facility" },
          { label: "Facility Tour", url: "/facility-tour" },
        ],
      },
      {
        title: "FAQ",
        items: [
          { label: "Pendaftaran", url: "/faq/pendaftaran" },
          { label: "Program Studi", url: "/faq/program-studi" },
          { label: "Sistem Pembelajaran", url: "/faq/sistem-pembelajaran" },
        ],
      },
    ],
  },

  /* ===========================
   *         AKADEMIK
   * =========================== */
  {
    id: "akademik",
    title: "Akademik",
    items: [
      { label: "Program Studi", url: "/studyProgram" },
    ],
    subgroups: [
      {
        title: "Program D3",
        items: [
          { label: "D3 Manajemen Pemasaran", url: "/program/d3_manajemen_pemasaran" },
          { label: "D3 Administrasi Perkantoran", url: "/program/d3_administrasi_perkantoran" },
          { label: "D3 Rekayasa Perangkat Lunak", url: "/program/d3_rekayasa_perangkat_lunak" },
        ],
      },
      {
        title: "Program D4",
        items: [
          { label: "D4 Bisnis Digital", url: "/program/d4_bisnis_digital" },
          { label: "D4 TR Jaringan Komputer", url: "/program/d4_teknologi_rekayasa_jaringan_komputer" },
          { label: "D4 TR Multimedia", url: "/program/d4_teknologi_rekayasa_multimedia" },
        ],
      },
    ],
  },

 

  /* ===========================
   *      DOKUMENTASI
   * =========================== */
  {
    id: "dokumentasi",
    title: "Dokumentasi",
    items: [
      { label: "Gallery", url: "/gallery" },
      { label: "Berita", url: "/news" },
    ],
  },

  /* ===========================
   *         INFORMASI
   * =========================== */
  {
    id: "informasi",
    title: "Informasi",
    items: [
      { label: "Biaya Kuliah", url: "/biaya" },
      { label: "Syarat Pendaftaran", url: "/syarat" },
      { label: "Hubungi Kami", url: "/contact" },
    ],
  },


];
