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
      { label: "Tentang Kampus", url: "/profil/tentang-kampus" },
      { label: "Visi & Misi", url: "/profil/visi-misi" },
      { label: "Sejarah", url: "/profil/sejarah" },
      { label: "Sambutan Direktur", url: "/profil/sambutan-direktur" },
      { label: "Struktur Organisasi", url: "/profil/struktur-organisasi" },
      { label: "Dosen & Staff", url: "/profil/dosen-staff" },
    ],
    subgroups: [
      {
        title: "Fasilitas",
        items: [
          { label: "Facility", url: "/profil/fasilitas" },
          { label: "Facility Tour", url: "/profil/fasilitas/virtual 360° tour" },
        ],
      },
      {
        title: "FAQ",
        items: [
          { label: "Pendaftaran", url: "/profil/faq/pendaftaran" },
          { label: "Program Studi", url: "/profil/faq/program-studi" },
          { label: "Sistem Pembelajaran", url: "/profil/faq/sistem-pembelajaran" },
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
      { label: "Program Studi", url: "/akademik/program-studi" },
      { label: "Kalender Akademik", url: "/akademik/kalender" },
      { label: "E-Learning / LMS", url: "/akademik/lms" },
      { label: "Jadwal Kuliah", url: "/akademik/jadwal" },
      { label: "Peraturan Akademik", url: "/akademik/peraturan" },
    ],
    subgroups: [
      {
        title: "Program D3",
        items: [
          { label: "D3 Manajemen Pemasaran", url: "/akademik/d3/manajemen-pemasaran" },
          { label: "D3 Administrasi Perkantoran", url: "/akademik/d3/administrasi-perkantoran" },
          { label: "D3 Rekayasa Perangkat Lunak", url: "/akademik/d3/rekayasa-perangkat-lunak" },
        ],
      },
      {
        title: "Program D4",
        items: [
          { label: "D4 Bisnis Digital", url: "/akademik/d4/bisnis-digital" },
          { label: "D4 TR Jaringan Komputer", url: "/akademik/d4/jaringan-komputer" },
          { label: "D4 TR Multimedia", url: "/akademik/d4/multimedia" },
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
      { label: "Berita Kampus", url: "/informasi/berita" },
      { label: "Pengumuman", url: "/informasi/pengumuman" },
      { label: "Agenda Kegiatan", url: "/informasi/agenda" },
      { label: "Beasiswa", url: "/informasi/beasiswa" },
      { label: "Karir & Magang", url: "/informasi/karir-magang" },
    ],
  },

  /* ===========================
   *      DOKUMENTASI
   * =========================== */
  {
    id: "dokumentasi",
    title: "Dokumentasi",
    items: [
      { label: "Gallery", url: "/dokumentasi/gallery" },
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
