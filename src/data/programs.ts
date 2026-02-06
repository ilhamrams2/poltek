export interface ProgramDetail {
  id: string;
  title: string;
  degree: "D3" | "D4";
  subtitle: string;
  description: string;
  longDescription: string;
  heroImage: string;
  color: string;
  competencies: {
    title: string;
    desc: string;
    icon: string;
  }[];
  careers: string[];
  tools: {
    name: string;
    icon: string;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const PROGRAMS_DATA: Record<string, ProgramDetail> = {
  "d3_manajemen_pemasaran": {
    id: "d3_manajemen_pemasaran",
    title: "Manajemen Pemasaran",
    degree: "D3",
    subtitle: "Modern Marketing & Digital Strategy",
    description: "Kuasai strategi pemasaran digital, branding, dan analisis pasar untuk memenangkan kompetisi di era ekonomi kreatif.",
    longDescription: "Program Studi D3 Manajemen Pemasaran dirancang untuk menghasilkan tenaga ahli madya yang kompeten dalam merencanakan, mengimplementasikan, dan mengevaluasi strategi pemasaran. Mahasiswa akan mempelajari dasar-dasar bisnis, psikologi konsumen, hingga teknik pemasaran digital mutakhir seperti Social Media Marketing, SEO, dan Data Analytics.",
    heroImage: "/images/program/hero-manajemen.png",
    color: "#F15A24",
    competencies: [
      { title: "Digital Marketing", desc: "Keahlian mengelola kampanye iklan di Google, Facebook, dan Instagram.", icon: "RiGlobalLine" },
      { title: "Brand Management", desc: "Membangun identitas brand yang kuat dan berkesan bagi audiens.", icon: "RiPriceTag3Line" },
      { title: "Market Research", desc: "Menganalisis tren pasar dan perilaku konsumen secara akurat.", icon: "RiBarChartBoxLine" },
      { title: "Sales Strategy", desc: "Menguasai teknik negosiasi dan manajemen penjualan yang efektif.", icon: "RiHandHeartLine" }
    ],
    careers: ["Digital Marketer", "Social Media Specialist", "Market Researcher", "Brand Ambassador", "Sales Manager"],
    tools: [
      { name: "Google Analytics", icon: "RiGoogleFill" },
      { name: "Meta Ads", icon: "RiMetaFill" },
      { name: "Canva Pro", icon: "RiArtboardLine" },
      { name: "Mailchimp", icon: "RiMailSendLine" }
    ],
    stats: [
      { label: "Kurikulum Praktik", value: "70%" },
      { label: "Lama Studi", value: "3 Tahun" },
      { label: "Mitra Industri", value: "20+" }
    ]
  },
  "d3_administrasi_perkantoran": {
    id: "d3_administrasi_perkantoran",
    title: "Administrasi Perkantoran",
    degree: "D3",
    subtitle: "Professional Office Management",
    description: "Menjadi tenaga administrasi profesional dengan keahlian tata kelola kantor modern berbasis teknologi informasi.",
    longDescription: "Kurikulum kami fokus pada efisiensi operasional kantor, manajemen dokumen digital, komunikasi bisnis internasional, dan protokol perkantoran modern. Mahasiswa dilatih menggunakan berbagai software otomasi kantor terkini.",
    heroImage: "/images/program/hero-administrasi.png",
    color: "#F15A24",
    competencies: [
      { title: "Office Automation", desc: "Mengoperasikan perangkat lunak perkantoran tingkat mahir.", icon: "RiComputerLine" },
      { title: "Business Communication", desc: "Keahlian korespondensi dan komunikasi bisnis yang profesional.", icon: "RiMessage3Line" },
      { title: "Record Management", desc: "Tata kelola kearsipan digital dan fisik yang sistematis.", icon: "RiArchiveDrawerLine" },
      { title: "Event Management", desc: "Merencanakan dan mengelola acara korporat secara mandiri.", icon: "RiCalendarEventLine" }
    ],
    careers: ["Office Manager", "Executive Secretary", "Administrative Assistant", "Records Manager", "HR Administrator"],
    tools: [
      { name: "Microsoft 365", icon: "RiWindowsFill" },
      { name: "Google Workspace", icon: "RiGoogleFill" },
      { name: "Trello / Asana", icon: "RiTaskLine" },
      { name: "Zoom Business", icon: "RiVideoChatLine" }
    ],
    stats: [
      { label: "Praktik Lab", value: "60%" },
      { label: "Lama Studi", value: "3 Tahun" },
      { label: "Kesiapan Kerja", value: "100%" }
    ]
  },
  "d3_rekayasa_perangkat_lunak": {
    id: "d3_rekayasa_perangkat_lunak",
    title: "Rekayasa Perangkat Lunak",
    degree: "D3",
    subtitle: "Agile Software Development",
    description: "Bangun masa depan digital dengan menguasai pengembangan aplikasi web, mobile, dan sistem enterprise.",
    longDescription: "Program ini menitikberatkan pada siklus hidup pengembangan perangkat lunak (SDLC) menggunakan metodologi Agile. Mahasiswa akan terjun langsung dalam coding, database design, hingga cloud deployment.",
    heroImage: "/images/program/hero-rpl.png",
    color: "#F15A24",
    competencies: [
      { title: "Web Development", desc: "Membangun aplikasi web modern menggunakan React dan Next.js.", icon: "RiCodeSSlashLine" },
      { title: "Mobile Apps", desc: "Pengembangan aplikasi Android dan iOS yang responsif.", icon: "RiSmartphoneLine" },
      { title: "Database Systems", desc: "Perancangan dan pengelolaan database SQL serta NoSQL.", icon: "RiDatabase2Line" },
      { title: "Cloud Computing", desc: "Deployment aplikasi ke infrastruktur cloud global.", icon: "RiCloudLine" }
    ],
    careers: ["Fullstack Developer", "Frontend Engineer", "Backend Developer", "Mobile Developer", "QA Engineer"],
    tools: [
      { name: "VS Code", icon: "RiCommandLine" },
      { name: "GitHub", icon: "RiGithubFill" },
      { name: "Docker", icon: "RiBox3Line" },
      { name: "Firebase", icon: "RiFireFill" }
    ],
    stats: [
      { label: "Coding Projects", value: "50+" },
      { label: "Lama Studi", value: "3 Tahun" },
      { label: "Sertifikasi", value: "3+" }
    ]
  },
  "d4_bisnis_digital": {
    id: "d4_bisnis_digital",
    title: "Bisnis Digital",
    degree: "D4",
    subtitle: "Digital Entrepreneurship & Analytics",
    description: "Transformasikan ide menjadi startup sukses dengan penguasaan e-commerce, digital transformation, dan business intelligence.",
    longDescription: "Sebagai program Sarjana Terapan, Bisnis Digital membekali mahasiswa dengan kemampuan analisis data strategis, manajemen startup, hukum bisnis digital, hingga strategi ekspansi pasar global di era industri 4.0.",
    heroImage: "/images/facility/poltek-presma3-1024x768.jpg",
    color: "#F15A24",
    competencies: [
      { title: "E-Commerce Expert", desc: "Membangun dan mengelola platform perdagangan elektronik.", icon: "RiShoppingBag3Line" },
      { title: "Data Analytics", desc: "Mengubah data mentah menjadi keputusan bisnis strategis.", icon: "RiPieChartLine" },
      { title: "Startup Incubation", desc: "Belajar membangun model bisnis dari tahap ide hingga pitch.", icon: "RiLightbulbLine" },
      { title: "Digital Strategy", desc: "Memandu perusahaan melakukan transformasi ke sistem digital.", icon: "RiMindMap" }
    ],
    careers: ["Digital Business Analyst", "Startup Founder", "E-commerce Manager", "Product Manager", "Digital Consultant"],
    tools: [
      { name: "Tableau", icon: "RiDashboardLine" },
      { name: "Shopify", icon: "RiStore2Line" },
      { name: "Python / R", icon: "RiCodeLine" },
      { name: "Google Data Studio", icon: "RiBarChart2Line" }
    ],
    stats: [
      { label: "Inkubasi Bisnis", value: "Ya" },
      { label: "Lama Studi", value: "4 Tahun" },
      { label: "Gelar", value: "S.Tr.Bns" }
    ]
  },
  "d4_teknologi_rekayasa_jaringan_komputer": {
    id: "d4_teknologi_rekayasa_jaringan_komputer",
    title: "Teknologi Rekayasa Jaringan Komputer",
    degree: "D4",
    subtitle: "Cyber Security & Network Engineering",
    description: "Kuasai infrastruktur IT masa depan, keamanan siber, dan sistem cloud tingkat lanjut untuk skala korporat.",
    longDescription: "Mahasiswa akan mempelajari arsitektur jaringan yang kompleks, teknik pertahanan siber (Ethical Hacking), manajemen server Linux/Windows, hingga otomasi jaringan menggunakan Python.",
    heroImage: "/images/facility/facility1.png",
    color: "#F15A24",
    competencies: [
      { title: "Network Design", desc: "Merancang topologi jaringan skala besar yang efisien.", icon: "RiNodeTree" },
      { title: "Cyber Security", desc: "Melindungi sistem dari ancaman siber dan serangan hacker.", icon: "RiShieldFlashLine" },
      { title: "Server Administration", desc: "Mengelola server fisik dan virtual dengan stabilitas tinggi.", icon: "RiServerLine" },
      { title: "Cloud Architecture", desc: "Implementasi sistem AWS, Azure, dan Google Cloud.", icon: "RiCloudFill" }
    ],
    careers: ["Network Engineer", "Security Analyst", "System Administrator", "Cloud Architect", "IT Infrastructure Manager"],
    tools: [
      { name: "Cisco Packet Tracer", icon: "RiRouterLine" },
      { name: "Wireshark", icon: "RiSpyLine" },
      { name: "Kali Linux", icon: "RiTerminalBoxLine" },
      { name: "AWS Console", icon: "RiCloudFill" }
    ],
    stats: [
      { label: "Hands-on Lab", value: "80%" },
      { label: "Lama Studi", value: "4 Tahun" },
      { label: "Gelar", value: "S.Tr.T" }
    ]
  },
  "d4_teknologi_rekayasa_multimedia": {
    id: "d4_teknologi_rekayasa_multimedia",
    title: "Teknologi Rekayasa Multimedia",
    degree: "D4",
    subtitle: "Creative Media & Visual Technology",
    description: "Ciptakan konten digital yang memukau melalui penguasaan videografi, animasi 3D, UI/UX design, dan Mixed Reality.",
    longDescription: "Program ini menggabungkan sisi artistik dengan teknologi media terkini. Mahasiswa dibekali kemampuan produksi film mini, desain antarmuka aplikasi, hingga pengembangan konten VR/AR.",
    heroImage: "/images/facility/poltek-presma6-1024x768.jpg",
    color: "#F15A24",
    competencies: [
      { title: "Video Production", desc: "Editing video dan sinematografi kelas industri.", icon: "RiVideoLine" },
      { title: "3D Animation", desc: "Pemodelan dan animasi karakter untuk berbagai media.", icon: "RiMagicLine" },
      { title: "UI/UX Design", desc: "Merancang pengalaman pengguna aplikasi yang intuitif.", icon: "RiLayoutMasonryLine" },
      { title: "Motion Graphics", desc: "Menciptakan visual dinamis untuk iklan dan branding.", icon: "RiMovieFill" }
    ],
    careers: ["Creative Director", "UI/UX Designer", "Motion Designer", "Video Editor", "AR/VR Developer"],
    tools: [
      { name: "Adobe Creative Cloud", icon: "RiPaletteLine" },
      { name: "Figma", icon: "RiFigmaFill" },
      { name: "Blender", icon: "RiBox3Fill" },
      { name: "Davinci Resolve", icon: "RiVideoChatLine" }
    ],
    stats: [
      { label: "Project Karya", value: "20+" },
      { label: "Lama Studi", value: "4 Tahun" },
      { label: "Gelar", value: "S.Tr.T" }
    ]
  }
};
