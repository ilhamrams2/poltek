
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newsData = [
  {
    category: "Prestasi",
    title: "Tim Robotik Politeknik Prestasi Prima Borong Medali di KRI 2026",
    excerpt: "Jakarta, 12 Februari 2026 - Tim Robotik kebanggaan kampus berhasil mengukir sejarah baru dengan menyapu bersih podium juara di Kontes Robot Indonesia.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Dominasi Manis di Ajang Nasional</h2>
      <p><strong>JAKARTA, 12 Februari 2026</strong> - Politeknik Prestasi Prima kembali membuktikan kualitasnya sebagai rahim para inovator teknologi. Tim Robotik kampus secara gemilang berhasil meraih Juara 1 Nasional pada ajang Kontes Robot Indonesia (KRI) 2026 kategori Robot Tematik yang diselenggarakan di Istora Senayan, Jakarta, pada awal pekan ini.</p>
      
      <h3>Analisis Performa dan Inovasi</h3>
      <p>Perjalanan meraih gelar juara ini tidaklah mudah. Tim yang terdiri dari mahasiswa lintas program studi ini harus bersaing dengan lebih dari 50 perguruan tinggi ternama dari seluruh Indonesia. Keunggulan utama tim terletak pada sistem navigasi otonom berbasis Vision AI yang mampu memproses rintangan dengan akurasi 99%, melampaui rata-rata pesaingnya.</p>
      
      <blockquote>"Kemenangan ini adalah buah keringat malam-malam tanpa tidur dan dedikasi luar biasa para mahasiswa kami dalam mengeksplorasi batas teknologi otomasi," ungkap Direktur Politeknik dalam sambutannya saat penyambutan tim.</blockquote>
      
      <h3>Dampak Strategis Bagi Kampus</h3>
      <p>Pencapaian ini bukan sekadar piala, melainkan validasi kurikulum praktis yang selama ini diterapkan. Keberhasilan ini diharapkan memacu semangat riset dan pengembangan teknologi robotika di lingkungan kampus agar semakin relevan dengan kebutuhan industri masa depan.</p>
      <p>Humas Politeknik Prestasi Prima mengonfirmasi bahwa seluruh anggota tim akan diberikan beasiswa penuh sebagai bentuk apresiasi atas dedikasi mereka mengharumkan nama institusi.</p>
    `,
  },
  {
    category: "Akademik",
    title: "LLDIKTI Berikan Apresiasi Mutu Pendidikan Poltek Prestasi Prima",
    excerpt: "Evaluasi berkala menunjukkan peningkatan signifikan dalam standar penjaminan mutu internal kampus secara sistematis.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Peningkatan Kualitas Secara Konsisten</h2>
      <p><strong>BEKASI, 10 Februari 2026</strong> - Kunjungan monitoring dan evaluasi (Monev) dari Lembaga Layanan Pendidikan Tinggi (LLDIKTI) Wilayah IV memberikan kabar menggembirakan. Politeknik Prestasi Prima mendapatkan predikat 'Sangat Baik' dalam penerapan Sistem Penjaminan Mutu Internal (SPMI) untuk tahun akademik berjalan.</p>
      
      <h3>Metode Evaluasi dan Poin Unggulan</h3>
      <p>Kegiatan yang berlangsung selama dua hari ini meninjau aspek tata kelola, kurikulum berbasis industri, hingga fasilitas laboratorium. Evaluator menekankan bahwa integrasi sistem RPL (Rekayasa Perangkat Lunak) ke dalam layanan administrasi kampus menjadi poin plus yang tidak ditemukan di kampus lain.</p>
      
      <blockquote>"Kami melihat ada sinkronisasi yang kuat antara visi institusi dengan implementasi di lapangan. Poltek ini sudah siap melompat lebih jauh," ujar salah satu tim asesor LLDIKTI.</blockquote>
      
      <h3>Langkah Lanjutan Penjaminan Mutu</h3>
      <p>Menyikapi hasil ini, bidang akademik akan segera meluncurkan revisi kurikulum 2026 yang lebih mengarah pada teknologi hijau (Green Tech). Hal ini dilakukan untuk memastikan lulusan tidak hanya ekspert secara teknis namun juga memiliki wawasan lingkungan global.</p>
      <p>Evaluasi menyeluruh ini menjadi bukti nyata komitmen lembaga dalam menjaga amanah orang tua mahasiswa untuk memberikan pendidikan vokasi terbaik di Indonesia.</p>
    `,
  },
  {
    category: "Inovasi",
    title: "Sistem IoT Pendeteksi Bencana Karya Mahasiswa Siap Diproduksi Massal",
    excerpt: "Prototipe canggih berbasis cloud yang memenangkan hackathon nasional kini memasuki tahap sertifikasi industri.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Solusi Digital untuk Mitigasi Bencana</h2>
      <p><strong>JAKARTA, 08 Februari 2026</strong> - Mahasiswa tingkat akhir jurusan Sistem Tertanam (Embedded Systems) sukses menciptakan terobosan dalam mitigasi bencana. Alat deteksi dini banjir berbasis IoT yang mereka kembangkan telah mendapatkan minat dari BPBD untuk uji coba lapangan di daerah rawan.</p>
      
      <h3>Spesifikasi Teknis dan Cara Kerja</h3>
      <p>Alat ini menggunakan sensor ultrasonik industri yang terdistribusi secara mesh network. Data ketinggian air dan debit arus secara otomatis dikirimkan ke cloud server lewat jaringan LoRaWAN, yang memungkinkan pemantauan jarak jauh tanpa ketergantungan pada sinyal seluler yang sering terputus saat badai.</p>
      
      <blockquote>"Tujuan awal kami sederhana: memberikan waktu evakuasi yang lebih lama bagi warga. Dengan algoritma prediksi kami, waktu peringatan bisa diperoleh 15 menit lebih awal dibandingkan metode manual," jelas Ketua Tim Pengembang.</blockquote>
      
      <h3>Rencana Pengembangan Industri</h3>
      <p>Saat ini, kampus sedang memfasilitasi proses pendaftaran Paten dan HAKI. Selain itu, pembicaraan dengan sektor swasta untuk produksi massal casing alat yang tahan cuaca ekstrem sedang berlangsung di Inkubator Bisnis kampus.</p>
      <p>Diharapkan pada akhir tahun 2026, sistem ini sudah dapat terpasang di sepanjang bantaran sungai wilayah Jabodetabek sebagai kontribusi nyata akademisi bagi masyarakat.</p>
    `,
  },
  {
    category: "Event",
    title: "Job Fair 2026: Sambungkan Lulusan ke 50 Perusahaan Elite",
    excerpt: "Ribuan pencari kerja dari berbagai wilayah menghadiri bursa kerja tahunan yang mengutamakan penempatan langsung.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Jembatan Sukses Karir Masa Depan</h2>
      <p><strong>KAMPUS PUSAT, 05 Februari 2026</strong> - Politeknik Prestasi Prima menyelenggarakan Job Fair 2026 bertajuk 'Connecting Ambitions' yang dihadiri oleh lebih dari 50 perusahaan multinasional dan BUMN ternama. Acara ini menjadi bukti efektifitas program link-and-match yang dijalankan institut.</p>
      
      <h3>Strategi Penempatan dan Walk-in Interview</h3>
      <p>Berbeda dengan bursa kerja umum, Job Fair ini menyediakan fasilitas walk-in interview bagi alumni berprestasi. Sektor teknologi informasi, perbankan, dan manufaktur otomotif menjadi area yang paling banyak diincar oleh para peserta yang mencapai angka 2.500 pengunjung.</p>
      
      <blockquote>"Lulusan dari Politeknik ini dikenal memiliki etos kerja vokasi yang kuat. Kami sudah melakukan screening awal dan banyak kandidat yang kami terima saat ini juga," ungkap HR Manager salah satu perusahaan peserta.</blockquote>
      
      <h3>Dukungan Alumni dan Karir</h3>
      <p>Career Center kampus juga menyediakan booth konsultasi CV dan pelatihan simulasi interview secara gratis selama acara berlangsung. Hal ini dilakukan untuk meminimalisir gap antara ekspektasi industri dan kemampuan presentasi lulusan.</p>
      <p>Rangkaian acara ini ditutup dengan penandatanganan kerjasama rekrutmen eksklusif antara kampus dengan tiga startup unicorn untuk penempatan tahun depan.</p>
    `,
  },
  {
    category: "Teknologi",
    title: "Workshop Cloud Engineering: Bekali Mahasiswa Standar Sertifikasi AWS",
    excerpt: "Pelatihan intensif selama sepekan hasil kolaborasi dengan Amazon Web Services untuk meningkatkan daya saing global mahasiswa.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Penguasaan Infrastruktur Masa Depan</h2>
      <p><strong>LAB KOMPUTER TERPADU, 01 Februari 2026</strong> - Sebanyak 100 mahasiswa terpilih mengikuti Workshop Cloud Engineering tingkat lanjut. Kegiatan ini merupakan bagian dari kurikulum adaptif kampus untuk menjawab kelangkaan talenta cloud di Indonesia.</p>
      
      <h3>Materi dan Fokus Pembelajaran</h3>
      <p>Peserta mempelajari konsep dasar hingga implementasi infrastruktur cloud menggunakan modul resmi AWS Academy. Fokus utama pelatihan adalah pada arsitektur serverless dan keamanan data di lingkungan awan, yang saat ini menjadi skill paling dicari di pasar tenaga kerja internasional.</p>
      
      <blockquote>"Dunia industri saat ini tidak hanya mencari orang yang bisa coding, tapi orang yang tahu cara mengelola infrastruktur secara efisien. Cloud adalah jawabannya," tegas instruktur tamu dari AWS Indonesia.</blockquote>
      
      <h3>Target Sertifikasi Batch 1</h3>
      <p>Output dari workshop ini adalah persiapan ujian sertifikasi AWS Certified Solutions Architect. Kampus memberikan subsidi penuh bagi mahasiswa yang lolos evaluasi internal untuk mengambil sertifikasi internasional tersebut.</p>
      <p>Langkah ini konsisten dengan visi Politeknik untuk menghasilkan lulusan yang tidak hanya memiliki ijazah, tapi juga sertifikasi kompetensi yang diakui secara global.</p>
    `,
  },
  {
    category: "Mahasiswa",
    title: "Unit Seni Tari Poltek Raih Penghargaan Koreografi Terbaik di FSM 2026",
    excerpt: "Perpaduan tari tradisional dan kontemporer membawa tim kampus ke panggung kehormatan tingkat provinsi.",
    image: "https://images.unsplash.com/photo-1514525253440-b393452de23e?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Harmony dalam Keberagaman Budaya</h2>
      <p><strong>BANDUNG, 28 Januari 2026</strong> - Kabar membanggakan datang dari bidang non-akademik. Unit Kegiatan Mahasiswa (UKM) Seni Tari Politeknik berhasil menyabet gelar Koreografi Terbaik dalam ajang Festival Seni Mahasiswa (FSM) 2026 se-Jawa Barat.</p>
      
      <h3>Konsep Tarian 'Gema Nusantara'</h3>
      <p>Tarian yang dibawakan menggabungkan unsur pencak silat dengan gerakan balet kontemporer, melambangkan ketangguhan teknologi yang tetap berpijak pada nilai-nilai luhur nusantara. Persiapan dilakukan selama tiga bulan penuh di bawah bimbingan pelatih profesional.</p>
      
      <blockquote>"Tantangan terbesar adalah menyelaraskan detak jantung seluruh penari dalam tempo yang sangat cepat. Kami berlatih setiap sore setelah kelas berakhir," tutur Kapten Tim Seni Tari.</blockquote>
      
      <h3>Dukungan Minat dan Bakat</h3>
      <p>Kampus terus berkomitmen menyediakan fasilitas auditorium bagi kegiatan seni sebagai sarana pengembangan soft skills mahasiswa. Keseimbangan antara Hard Skills (Teknik/IT) dan Soft Skills (Seni/Budaya) dipercaya membentuk karakter lulusan yang unggul.</p>
      <p>Penghargaan ini menambah deretan piala di lemari prestasi kampus, membuktikan bahwa mahasiswa Politeknik Prestasi Prima adalah individu yang multitalenta.</p>
    `,
  },
  {
      category: "Kampus",
      title: "Peresmian Gedung Multimedia: Fasilitas Produksi Kelas Dunia for Siswa",
      excerpt: "Dilengkapi dengan studio podcast, green screen, dan perangkat editing high-end untuk menunjang kreativitas digital.",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200",
      content: `
        <h2>Era Baru Konten Kreatif Digital</h2>
        <p><strong>KAMPUS BEKASI, 25 Januari 2026</strong> - Jajaran pimpinan Yayasan bersama Direktur Politeknik meresmikan Gedung Multimedia terpadu. Fasilitas ini dirancang untuk menjadi pusat inkubasi konten kreator bagi mahasiswa lintas disiplin ilmu.</p>
        
        <h3>Spesifikasi Studio dan Peralatan</h3>
        <p>Gedung berlantai tiga ini menampung studio rekaman suara kedap suara, area produksi video dengan teknologi green screen otomatis, serta laboratorium komputer bertenaga tinggi untuk rendering grafis 3D. Seluruh perangkat menggunakan standar industri terbaru untuk memberikan pengalaman kerja nyata.</p>
        
        <blockquote>"Kita tidak bisa hanya bicara teori. Mahasiswa harus bersentuhan langsung dengan alat yang dipakai di industri media besar agar tidak canggung saat lulus nanti," tegas Kepala Unit Sarana Prasarana.</blockquote>
        
        <h3>Integrasi dengan Kurikulum</h3>
        <p>Fasilitas ini nantinya akan diintegrasikan dengan mata kuliah Digital Content Production dan Social Media Branding. Mahasiswa didorong untuk membuat proyek nyata seperti film pendek, dokumenter, hingga kampanye digital profesional.</p>
      `,
  },
  {
      category: "Event",
      title: "Dies Natalis ke-25: Refleksi Seperempat Abad Mencetak Teknokrat",
      excerpt: "Pesta perak Politeknik dimeriahkan dengan seminar internasional dan konser amal bersama musisi ternama tanah air.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
      content: `
        <h2>Pesta Perak Menuju Kampus Mandiri</h2>
        <p><strong>STADION UTAMA, 20 Januari 2026</strong> - Gemuruh sorak mahasiswa mewarnai puncak perayaan Dies Natalis ke-25 Politeknik Prestasi Prima. Seperempat abad berdirinya institusi ini menjadi momentum krusial untuk melakukan transformasi digital secara menyeluruh.</p>
        
        <h3>Rangkaian Kegiatan dan Inovasi</h3>
        <p>Perayaan dimulai dengan peresmian museum digital prestasi alumni, dilanjutkan dengan pemberian penghargaan bagi dosen peneliti terbaik. Tidak hanya seremoni, acara ini juga diisi dengan bazar UMKM digital binaan mahasiswa yang memamerkan produk-produk inovatif lokal.</p>
        
        <blockquote>"25 tahun adalah usia matang. Fokus kita lima tahun ke depan adalah internasionalisasi akreditasi dan memperkuat riset terapan di bidang kecerdasan buatan," ujar Rektor dalam pidatonya.</blockquote>
        
        <h3>Aksi Sosial dan Malam Dana</h3>
        <p>Sebagai bentuk syukur, malam puncak perayaan ditutup dengan pengumpulan dana abadi beasiswa bagi mahasiswa kurang mampu berprestasi. Hasil pengumpulan dana ini akan disalurkan melalui yayasan perguruan tinggi secara transparan.</p>
      `,
  },
  {
      category: "Info",
      title: "Update Prosedur Pendaftaran PMB 2026: Semua Proses Kini Berbasis Mobile",
      excerpt: "Calon mahasiswa baru kini dapat melacak status pendaftaran dan melakukan verifikasi dokumen langsung melalui aplikasi smartphone.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1200",
      content: `
        <h2>Transformasi Layanan Calon Mahasiswa</h2>
        <p><strong>PUSAT INFORMASI, 15 Januari 2026</strong> - Panitia Penerimaan Mahasiswa Baru (PMB) resmi meluncurkan pembaruan sistem pendaftaran online. Langkah ini diambil untuk memberikan kenyamanan maksimal bagi pendaftar dari luar wilayah yang kesulitan melakukan verifikasi fisik.</p>
        
        <h3>Fitur Unggulan Mobile PMB</h3>
        <p>Sistem baru ini menggunakan teknologi OCR untuk mengisi data otomatis dari scan KTP dan Ijazah. Selain itu, pembayaran biaya pendaftaran kini terintegrasi dengan berbagai dompet digital (e-wallet) dan virtual account perbankan utama, memastikan proses instan tanpa perlu konfirmasi manual.</p>
        
        <blockquote>"Kami ingin menunjukkan jati diri sebagai kampus IT sejak titik pertama interaksi pendaftar dengan kami. Kemudahan adalah prioritas," jelas Ketua PMB 2026.</blockquote>
        
        <h3>Sosialisasi dan Hotline</h3>
        <p>Bagi calon mahasiswa yang mengalami kendala, panitia menyediakan layanan chatbot AI dan hotline WhatsApp yang siaga 24 jam. Pendaftaran gelombang pertama akan ditutup pada akhir bulan depan dengan kuota yang semakin terbatas.</p>
      `,
  },
  {
      category: "Alumni",
      title: "Kisah Sukses Alumni: Dari Bangku Kuliah Hingga Menjadi Senior Engineer di Singapura",
      excerpt: "Andi Herlambang berbagi tips menembus pasar kerja internasional dengan mengandalkan proyek nyata selama kuliah.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
      content: `
        <h2>Inspirasi Karir Tanpa Batas Negara</h2>
        <p><strong>SINGAPURA, 10 Januari 2026</strong> - Prestasi membanggakan diukir oleh Andi Herlambang, lulusan tahun 2021. Andi kini menjabat sebagai Senior Solutions Architect di salah satu startup fintech terkemuka di kawasan Asia Tenggara yang berbasis di Singapura.</p>
        
        <h3>Pentingnya Portfolio Proyek</h3>
        <p>Dalam sesi berbagi virtual bersama mahasiswa tingkat akhir, Andi menekankan bahwa sertifikasi internasional dan portofolio proyek yang ia kerjakan selama di Politeknik menjadi kunci utama ia lolos seleksi ketat. Ia mengingatkan mahasiswa untuk tidak hanya terpaku pada IPK tinggi.</p>
        
        <blockquote>"Jangan takut untuk gagal di proyek awal. Industri mencari pemecah masalah (problem solver), bukan sekadar eksekutor instruksi. Manfaatkan laboratorium kampus semaksimal mungkin," pesannya kepada junior.</p>
        
        <h3>Jaringan Alumni Global</h3>
        <p>Keberhasilan Andi merupakan satu dari sekian banyak alumni yang berhasil menembus pasar global. Hal ini memperkuat statistik daya serap lulusan institusi yang sangat diminati oleh recruiter internasional di bidang teknologi.</p>
      `,
  },
  {
    category: "Prestasi",
    title: "Inovasi Pertanian Cerdas: Mahasiswa Poltek Menang di Global Eco-Hackathon",
    excerpt: "Sistem irigasi berbasis sensor tanah dan prediksi cuaca membawa tim mahasiswa Indonesia ke podium internasional di Berlin.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Solusi Berkelanjutan untuk Ketahanan Pangan</h2>
      <p><strong>BERLIN, 05 Januari 2026</strong> - Luar biasa! Tim 'AgriTech-Poltek' berhasil menyabet Juara 2 dalam ajang Global Eco-Hackathon yang baru saja berakhir di Jerman. Mereka menciptakan solusi inovatif untuk tantangan kekeringan global.</p>
      
      <h3>Teknologi Smart-Soil Sensor</h3>
      <p>Inovasi mereka adalah sistem irigasi presisi yang hanya mengeluarkan air saat kelembapan tanah berada di bawah titik kritis tertentu. Menggunakan integrasi API cuaca, sistem ini juga dapat menunda penyiraman jika diprediksi akan turun hujan dalam 3 jam ke depan, menghemat penggunaan air hingga 40%.</p>
      
      <blockquote>"Melihat bendera Indonesia berkibar di antara peserta dari Silicon Valley dan Eropa adalah momen paling emosional dalam hidup kami," ujar salah satu anggota tim mahasiswa tingkat tiga.</blockquote>
      
      <h3>Penerapan di Lahan Binaan</h3>
      <p>Sekembalinya ke tanah air, sistem ini akan diuji coba di lahan pertanian binaan Politeknik di Jawa Barat. Kampus berharap teknologi ini tidak hanya berhenti sebagai prototipe lomba, namun bisa diimplementasikan oleh petani lokal untuk meningkatkan hasil panen.</p>
    `,
  },
  {
    category: "Beasiswa",
    title: "Program Beasiswa Unggulan Industri 2026 Resmi Diluncurkan",
    excerpt: "Kesempatan kuliah gratis dan jaminan penempatan kerja di sektor logistik dan e-commerce bagi 50 putra-putri terbaik bangsa.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Investasi Masa Depan untuk Indonesia Emas</h2>
      <p><strong>KAMPUS PUSAT, 02 Januari 2026</strong> - Politeknik Prestasi Prima bekerjasama dengan konsorsium e-commerce Indonesia kembali meluncurkan program beasiswa penuh. Program ini ditujukan untuk menjaring talenta muda berbakat di bidang Supply Chain Management dan Data Analytics.</p>
      
      <h3>Fasilitas dan Tahapan Seleksi</h3>
      <p>Penerima beasiswa akan mendapatkan pembebasan UKT 100%, uang saku bulanan, serta program magang eksklusif di kantor pusat mitra industri. Seleksi akan dilakukan secara nasional melalui tes potensi akademik berbasis AI dan wawancara mendalam.</p>
      
      <blockquote>"Kami tidak mencari yang paling pintar di atas kertas, tapi yang memiliki kegigihan dan visi untuk membangun ekosistem digital Indonesia," ungkap perwakilan mitra industri saat peluncuran.</blockquote>
      
      <h3>Timeline Pendaftaran</h3>
      <p>Pendaftaran dibuka mulai hari ini melalui portal resmi kampus. Calon peserta diimbau untuk teliti dalam mengunggah berkas portofolio karena ini menjadi salah satu poin penilaian krusial dalam tahap eliminasi pertama.</p>
    `,
  },
  {
    category: "Event",
    title: "Seminar Kebangsaan: Menjaga Etika Digital di Tahun Politik",
    excerpt: "Pakar komunikasi dan tokoh publik diskusikan strategi menangkal hoax dan ujaran kebencian di kalangan mahasiswa.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Literasi Digital demi Demokrasi Sehat</h2>
      <p><strong>AUDITORIUM UTAMA, 20 Desember 2025</strong> - Memasuki tahun politik, Politeknik Prestasi Prima mengambil langkah proaktif dengan menyelenggarakan seminar literasi digital. Acara ini bertujuan membentengi mahasiswa dari arus disinformasi yang kian masif di media sosial.</p>
      
      <h3>Fokus Diskusi: Fact-Checking dan Etika</h3>
      <p>Para narasumber menekankan pentingnya verifikasi sumber sebelum membagikan konten. Mahasiswa diajarkan cara menggunakan alat pengecek fakta digital dan memahami konsekuensi hukum penyebaran hoax sesuai UU ITE yang berlaku.</p>
      
      <blockquote>"Mahasiswa harus menjadi penjernih informasi, bukan justru menjadi bagian dari polusi digital. Gunakan akal sehat di atas jempol," seru salah satu pakar komunikasi nasional yang hadir.</blockquote>
      
      <h3>Deklarasi Kampus Damai</h3>
      <p>Seminar ditutup dengan pembacaan deklarasi kampanye damai di ruang digital oleh perwakilan BEM. Komitmen ini diharapkan menjadikan lingkungan kampus sebagai zona bebas provokasi politik praktis yang memecah belah.</p>
    `,
  },
  {
    category: "Kerjasama",
    title: "Poltek Gandeng Bank Indonesia dalam Digitalisasi Pembayaran Kantin",
    excerpt: "Penerapan sistem QRIS menyeluruh di area kampus sebagai bagian dari program edukasi cashless society bagi generasi Z.",
    image: "https://images.unsplash.com/photo-1563725627724-5dc0fc638848?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Mewujudkan Ekosistem Smart Campus</h2>
      <p><strong>KAMPUS UTAMA, 15 Desember 2025</strong> - Politeknik Prestasi Prima resmi menjadi pilot project operasionalisasi ekosistem digital pembayaran nontunai bekerjasama dengan Bank Indonesia. Kini, seluruh transaksi di lingkungan kantin dan koperasi wajib menggunakan QRIS.</p>
      
      <h3>Manfaat Bagi Mahasiswa dan Merchant</h3>
      <p>Langkah ini memberikan kemudahan transaksi tanpa perlu uang kembalian dan pembukuan bagi pedagang kantin menjadi lebih rapi dan transparan. Selain itu, mahasiswa mendapatkan cashback menarik dari berbagai penyedia jasa pembayaran digital selama masa promosi.</p>
      
      <blockquote>"Ini adalah bagian dari mitigasi risiko fisik dan langkah nyata mendukung inklusi keuangan digital dari lingkungan terkecil yakni kampus," ungkap Deputi Gubernur Bank Indonesia yang meninjau lokasi.</blockquote>
      
      <h3>Monitoring dan Keamanan Data</h3>
      <p>Sistem ini didukung oleh infrastruktur jaringan internal kampus yang telah ditingkatkan keamanannya. Mahasiswa diimbau tetap waspada terhadap praktik phising dan selalu menjaga kerahasiaan PIN atau kode otentikasi akun masing-masing.</p>
    `,
  },
  {
    category: "Penelitian",
    title: "Jurnal Internasional: Dosen Poltek Temukan Algoritma Efisien Optimasi Trafik",
    excerpt: "Publikasi di IEEE Access membuktikan kontribusi riset terapan kampus dalam memecahkan masalah kemacetan kota metropolitan melalui AI.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Kontribusi Akademik untuk Solusi Perkotaan</h2>
      <p><strong>BANDUNG, 10 Desember 2025</strong> - Sebuah penelitian kolaboratif dosen Jurusan Teknik Lingkungan dan IT berhasil menembus jurnal internasional bereputasi tinggi. Mereka mempublikasikan algoritma baru yang mampu memprediksi titik kemacetan dengan akurasi 92% menggunakan data historis dan real-time.</p>
      
      <h3>Metodologi Riset Deep Learning</h3>
      <p>Penelitian ini memakan waktu 1,5 tahun dengan memanfaatkan superkomputer laboratorium kampus. Algoritma yang dikembangkan diklaim lebih hemat komputasi sebesar 30% dibandingkan metode standar sebelumnya, memungkinkannya berjalan di perangkat edge industri dengan murah.</p>
      
      <blockquote>"Kami tidak hanya mengejar publikasi scopus, tapi kami ingin algoritma ini bisa dipasang di lampu lalu lintas pintar Jakarta tahun depan," ungkap Dr. Ahmad, ketua tim peneliti.</blockquote>
      
      <h3>Dukungan Dana Riset Internal</h3>
      <p>Pihak yayasan kembali menegaskan komitmennya untuk meningkatkan alokasi dana riset dosen setiap tahunnya. Keberhasilan ini menempatkan Politeknik di peringkat atas perguruan tinggi swasta paling produktif dalam menghasilkan karya ilmiah berkualitas.</p>
    `,
  },
  {
    category: "Layanan",
    title: "Peresmian Pusat Konseling Mahasiswa: Sehat Mental Kunci Sukses Akademik",
    excerpt: "Layanan konsultasi psikolog gratis kini tersedia bagi mahasiswa yang mengalami tantangan stres dan tekanan kelas.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Peduli Kesejahteraan Jiwa Sivitas Akademika</h2>
      <p><strong>PUSAT LAYANAN, 05 Desember 2025</strong> - Manajemen kampus meresmikan 'Wellness Center', sebuah fasilitas konseling profesional yang dapat diakses secara gratis oleh seluruh mahasiswa aktif. Langkah ini merupakan respon atas meningkatnya tingkat kecemasan di kalangan pelajar pasca-pandemi.</p>
      
      <h3>Fasilitas dan Kerahasiaan</h3>
      <p>Fasilitas ini menyediakan ruang konsultasi privat yang nyaman dan tenaga psikolog berlisensi. Sistem pendaftaran dilakukan secara anonim melalui aplikasi internal untuk menjaga privasi dan kenyamanan mahasiswa yang ingin bercerita.</p>
      
      <blockquote>"Kuliah di Politeknik itu berat dan penuh tekanan praktikum. Kami hadir untuk memastikan tidak ada mahasiswa yang merasa sendirian dalam menghadapi masalahnya," ujar Kepala Unit Wellness Center.</blockquote>
      
      <h3>Program Mindfulness Mingguan</h3>
      <p>Selain sesi privat, Wellness Center juga akan mengadakan sesi grup mindfulness setiap akhir pekan di taman kampus. Kegiatan ini terbuka bagi siapa saja yang ingin sekadar melepas penat dengan teknik pernapasan dan meditasi ringan.</p>
    `,
  },
  {
    category: "Info",
    title: "Panduan Penulisan Tugas Akhir Format Baru: Mulai Berlaku Semester Depan",
    excerpt: "Penyederhanaan birokrasi dan standarisasi digital diharapkan mempercepat masa kelulusan mahasiswa hingga 20%.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Effisiensi Administrasi Kelulusan</h2>
      <p><strong>BAAK, 01 Desember 2025</strong> - Biro Administrasi Akademik (BAAK) menerbitkan buku panduan penulisan Tugas Akhir (TA) versi terbaru. Perubahan utama terletak pada kewajiban menyertakan prototipe fungsional dan dokumentasi video sebagai pengganti laporan tebal yang bersifat teoritis.</p>
      
      <h3>Peralihan ke Portal E-Thesis</h3>
      <p>Seluruh proses bimbingan, revisi, hingga tanda tangan pengesahan kini beralih sepenuhnya ke portal E-Thesis. Mahasiswa tidak perlu lagi mencetak draf berkali-kali, menghemat biaya dan mendukung gerakan kampanye paperless di lingkungan kampus.</p>
      
      <blockquote>"Kita fokus pada hasil nyata. Jika dia anak RPL, kita mau lihat aplikasinya jalan, bukan sekadar teori cara membuat aplikasi di kertas 200 halaman," tegas salah satu dekan.</blockquote>
      
      <h3>Sosialisasi bagi Mahasiswa Tingkat Akhir</h3>
      <p>BAAK akan mengadakan bedah panduan TA secara maraton di setiap program studi selama dua minggu ke depan. Mahasiswa diimbau segera mengunduh template terbaru agar tidak terjadi kesalahan format pada saat pengajuan proposal.</p>
    `,
  },
  {
    category: "Event",
    title: "Workshop Menulis Artikel Populer untuk Mahasiswa Teknik",
    excerpt: "Cara mengubah bahasa riset yang rumit menjadi konten yang menarik di media sosial dan blog pribadi.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Komunikasi Ilmiah bagi Khalayak Luas</h2>
      <p><strong>STUDIO CREATIVE, 25 November 2025</strong> - Bidang Kemahasiswaan menggelar workshop 'Engineering Storytelling'. Kegiatan ini bertujuan melatih mahasiswa teknik agar mampu mengomunikasikan temuan inovasi mereka dengan bahasa yang mudah dipahami oleh masyarakat awam.</p>
      
      <h3>Materi Personal Branding dan Jurnalistik</h3>
      <p>Peserta belajar teknik menulis piramida terbalik dan cara membuat headline yang memancing klik (clickworthy) tanpa menjadi clickbait. Selain menulis, mahasiswa juga diajarkan teknik dasar infografis untuk memperkuat narasi data mereka di platform visual.</p>
      
      <blockquote>"Dunia harus tahu betapa hebatnya penemuan kalian. Tanpa kemampuan komunikasi, inovasi terbaik sekalipun akan tetap tersembunyi di dalam laboratorium," ungkap editor teknologi media nasional yang menjadi pemateri.</blockquote>
      
      <h3>Kompetisi Blog Kampus</h3>
      <p>Sebagai tindak lanjut, kampus mengadakan kompetisi penulisan blog prestasi bagi seluruh peserta. Tulisan terbaik akan dipublikasikan di kanal resmi website kampus dan mendapatkan hadiah menarik berupa gadget produktivitas.</p>
    `,
  },
  {
    category: "Layanan",
    title: "Akses E-Journal Internasional Kini Bisa Dari Rumah Lewat Proxy Baru",
    excerpt: "Mahasiswa tidak lagi wajib berada di area wifi kampus untuk mendownload jurnal dari IEEE, ScienceDirect, dan Springer.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Perpustakaan dalam Genggaman Tanpa Batas Jarak</h2>
      <p><strong>PERPUSTAKAAN PUSAT, 20 November 2025</strong> - Unit TIK bersama Perpustakaan telah berhasil mengimplementasikan sistem Remote-Access Proxy. Inovasi ini memungkinkan seluruh sivitas akademika mengakses pangkalan data jurnal internasional berbayar secara sah dari manapun.</p>
      
      <h3>Cara Aktivasi Akun SSO</h3>
      <p>Mahasiswa cukup login menggunakan akun Single Sign-On (SSO) mereka melalui portal perpustakaan digital. Layanan ini aktif 24 jam penuh, memberikan fleksibilitas bagi mahasiswa tingkat akhir yang sering mengerjakan riset di malam hari atau dari luar kota.</p>
      
      <blockquote>"Cukup dengan kuota internet biasa, gerbang ilmu pengetahuan dunia kini terbuka lebar bagi mahasiswa kami di manapun mereka berada," tutur Kepala Perpustakaan.</blockquote>
      
      <h3>Edukasi Anti-Plagiarisme</h3>
      <p>Seiring dengan kemudahan akses ini, perpustakaan juga menyediakan akses gratis ke perangkat Turnitin untuk pengecekan mandiri. Hal ini dimaksudkan agar mahasiswa tetap menjunjung tinggi integritas akademik dalam setiap karya tulis yang mereka hasilkan.</p>
    `,
  },
  {
    category: "Prestasi",
    title: "Tim Futsal Putri Poltek Cetak Rekor Juara Berturut-turut di Liga Mahasiswa",
    excerpt: "Kekompakan tim dan strategi pelatih profesional bawa piala bergilir kembali ke kampus untuk ketiga kalinya.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Ketangguhan dan Mental Juara sejati</h2>
      <p><strong>STADION INDOOR, 15 November 2025</strong> - Tim Futsal Putri Politeknik Prestasi Prima kembali mengukuhkan dominasinya di kancah olahraga mahasiswa regional. Kemenangan meyakinkan 3-0 di partai final memastikan gelar juara bertahan tetap aman di genggaman.</p>
      
      <h3>Rahasia Dibalik Kemenangan</h3>
      <p>Kapten tim menyebutkan bahwa porsi latihan fisik yang disiplin dan dukungan sport science dari lab biomekanik kampus sangat membantu performa pemain di lapangan. Mereka mampu menjaga stamina tetap stabil hingga menit-menit akhir pertandingan yang sangat intens.</p>
      
      <blockquote>"Kami bermain sebagai satu keluarga. Tidak ada bintang, hanya kerja sama tim yang solid," pungkas pelatih tim futsal saat diwawancarai seusai pengangkatan trofi.</blockquote>
      
      <h3>Penyambutan dan Bonus Juara</h3>
      <p>Pihak kampus menyiapkan seremoni penyambutan khusus di lobi utama. Seluruh pemain dan ofisial akan diberikan insentif prestasi sebagai pengakuan institusi terhadap kerja keras mereka di bidang olahraga yang membawa dampak positif bagi citra kampus.</p>
    `,
  },
];

async function main() {
  console.log('Start seeding news...');
  
  // Clear existing news? Optional. Let's keep existing and add new.
  // Actually, usually seed resets or adds. I'll deleteMany to keep it clean if desired, but user might have data.
  // I'll deleteMany for clean state as requested "seeder berita 20 news".
  await prisma.news.deleteMany({});
  console.log('Deleted existing news.');

  for (const news of newsData) {
    const slug = news.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    // Construct Meta Title with Category prefix
    const metaTitle = `${news.category} | ${news.title}`;

    await prisma.news.create({
      data: {
        title: news.title,
        slug: slug,
        content: news.content,
        // Use metaDesc for excerpt
        metaDesc: news.excerpt,
        // Store category in metaTitle for now
        metaTitle: metaTitle,
        image: news.image,
        published: true,
        views: Math.floor(Math.random() * 1000), // Random views
        createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)), // Random old date
      },
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
