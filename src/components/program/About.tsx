"use client";

interface AboutProps {
  program: "rpl" | "manajemen" | "administrasi";
}

export default function About({ program }: AboutProps) {
  const content = {
    rpl: {
      title: "Tentang Program Studi Rekayasa Perangkat Lunak",
      desc: `Program Diploma III Rekayasa Perangkat Lunak berfokus pada keterampilan praktis di bidang software engineering. 
      Mahasiswa dibekali kemampuan pemrograman, database, web & mobile development, serta software testing. 
      Pembelajaran berbasis project sehingga menyerupai kebutuhan industri teknologi.`,
    },
    manajemen: {
      title: "Tentang Program Studi Manajemen Pemasaran",
      desc: `Program Manajemen Pemasaran membekali mahasiswa dengan kompetensi pemasaran modern seperti digital marketing, 
      branding, riset pasar, sales strategy, hingga pengelolaan campaign. Lulusannya siap bekerja di bidang bisnis, 
      start-up, hingga industri kreatif.`,
    },
    administrasi: {
      title: "Tentang Program Studi Administrasi Perkantoran",
      desc: `Program Administrasi Perkantoran berfokus pada pengelolaan dokumen, layanan administrasi, 
      teknologi perkantoran, komunikasi bisnis, dan manajemen arsip. Mahasiswa dipersiapkan menguasai skill 
      administrasi profesional yang dibutuhkan dunia kerja.`,
    },
  };

  const data = content[program];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-[#F15A24]">
          {data.title}
        </h2>

        {/* Card */}
        <div className="mt-10 bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
          {/* Fake Browser Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>

            <span className="ml-3 text-sm font-semibold text-orange-600">
              innovation.code
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{data.desc}</p>

          {/* Code Box */}
          <div className="mt-5 bg-[#0F1B3D] text-white rounded-xl p-4 font-mono text-sm">
            <p className="opacity-90">
              <span className="text-purple-400">program</span>
              <span className="text-white">.</span>
              <span className="text-blue-400">initialize</span>
              <span className="text-white">()</span> <br />
              <span className="text-pink-400">→</span>{" "}
              <span className="text-green-400">ready</span>
              <span className="text-white">.</span>
              <span className="text-yellow-300">
                to_build_the_future
              </span>
              <span className="text-white">()</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
