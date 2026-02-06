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
      { label: "Sejarah Poltek", url: "/site/history" },
      { label: "Profile Kampus", url: "/site/about" },
      { label: "Sambutan Direktur", url: "/site/director-message" },
      { label: "Dosen & Staff", url: "/site/about" },
    ],
    subgroups: [
      {
        title: "Fasilitas",
        items: [
          { label: "Facility", url: "/site/facility" },
          { label: "Facility Tour", url: "/site/facility-tour" },
        ],
      },
      {
        title: "FAQ",
        items: [
          { label: "Pendaftaran", url: "/site/faq" },
          { label: "Program Studi", url: "/site/faq" },
          { label: "Sistem Pembelajaran", url: "/site/faq" },
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
      { label: "Program Studi", url: "/site/studyProgram" },
      { label: "Kalender Akademik", url: "/site/calendar" },
      { label: "E-Learning / LMS", url: "/akademik/lms" },
      { label: "Jadwal Kuliah", url: "/akademik/jadwal" },
      { label: "Peraturan Akademik", url: "/site/about" },
    ],
    subgroups: [
      {
        title: "Program D3",
        items: [
          { label: "D3 Manajemen Pemasaran", url: "/site/program/d3_manajemen_pemasaran" },
          { label: "D3 Administrasi Perkantoran", url: "/site/program/d3_administrasi_perkantoran" },
          { label: "D3 Rekayasa Perangkat Lunak", url: "/site/program/d3_rekayasa_perangkat_lunak" },
        ],
      },
      {
        title: "Program D4",
        items: [
          { label: "D4 Bisnis Digital", url: "/site/program/d4_bisnis_digital" },
          { label: "D4 TR Jaringan Komputer", url: "/site/program/d4_teknologi_rekayasa_jaringan_komputer" },
          { label: "D4 TR Multimedia", url: "/site/program/d4_teknologi_rekayasa_multimedia" },
        ],
      },
    ],
  },

  /* ===========================
   *        INFORMASI
   * =========================== */
  {
    id: "informasi",
    title: "Informasi",
    items: [
      { label: "Berita Kampus", url: "/site/news" },
      { label: "Pengumuman", url: "/site/news" },
      { label: "Agenda Kegiatan", url: "/site/agenda" },
      { label: "Beasiswa", url: "/site/news" },
      { label: "Karir & Magang", url: "/site/news" },
    ],
  },

  /* ===========================
   *      DOKUMENTASI
   * =========================== */
  {
    id: "dokumentasi",
    title: "Dokumentasi",
    items: [
      { label: "Gallery", url: "/site/gallery" },
      { label: "Berita", url: "/site/news" },
    ],
  },

  /* ===========================
   *           PMB
   * =========================== */
  {
    id: "pmb",
    title: "PMB",
    items: [
      { label: "Alur Pendaftaran", url: "/pmb/alur" },
      { label: "Syarat Pendaftaran", url: "/pmb/syarat" },
      { label: "Biaya Kuliah", url: "/pmb/biaya" },
      { label: "Pendaftaran Online", url: "/pmb/pendaftaran" },
      { label: "Cek Status Pendaftaran", url: "/pmb/status" },
    ],
  },

  /* ===========================
   *         LAYANAN
   * =========================== */
  {
    id: "layanan",
    title: "Layanan",
    items: [
      { label: "Perpustakaan", url: "/layanan/perpustakaan" },
      { label: "Biro Administrasi", url: "/layanan/bak" },
      { label: "Kemahasiswaan", url: "/layanan/kemahasiswaan" },
      { label: "Humas", url: "/layanan/humas" },
    ],
  },

  /* ===========================
   *        KERJASAMA
   * =========================== */
  {
    id: "kerjasama",
    title: "Kerjasama",
    items: [
      { label: "Mitra Industri", url: "/kerjasama/mitra-industri" },
      { label: "MOU / MOA", url: "/kerjasama/mou-moa" },
      { label: "Pengabdian Masyarakat", url: "/kerjasama/pengabdian" },
    ],
  },
];
