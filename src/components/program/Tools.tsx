"use client";

interface ToolsProps {
  program: "rpl" | "manajemen" | "administrasi";
}

export default function Tools({ program }: ToolsProps) {
  // ===========================
  // LOGO LIST PER PROGRAM
  // ===========================
  const logoMap: Record<string, string[]> = {
    rpl: Array.from({ length: 10 }).map(
      (_, i) => `/images/program/rpl/logo (${i + 1}).png`
    ),

    manajemen: Array.from({ length: 8 }).map(
      (_, i) => `/images/program/manajemen/logo (${i + 1}).png`
    ),

    administrasi: Array.from({ length: 8 }).map(
      (_, i) => `/images/program/administrasi/logo (${i + 1}).png`
    ),
  };

  // ===========================
  // TEXT PER PROGRAM
  // ===========================
  const textMap = {
    rpl: {
      label: "Tools dan Equipment",
      desc: "untuk Pembelajaran Keahlian RPL\nRekayasa Perangkat Lunak",
    },
    manajemen: {
      label: "Marketing Tools & Platform",
      desc: "untuk Pembelajaran Keahlian Manajemen Pemasaran",
    },
    administrasi: {
      label: "Office Tools & Software",
      desc: "untuk Pembelajaran Keahlian Administrasi Perkantoran",
    },
  };

  const logos = logoMap[program];
  const text = textMap[program];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

        {/* Title Chip */}
        <span className="inline-block bg-[#0F1B3D] text-white text-sm px-6 py-2 rounded-full font-medium">
          {text.label}
        </span>

        {/* Subtitle */}
        <p className="text-[#0F1B3D] mt-3 font-medium whitespace-pre-line">
          {text.desc}
        </p>

        {/* Logo Slider */}
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee">
            {logos.concat(logos).map((src, idx) => (
              <div
                key={idx}
                className="shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow border border-gray-100"
              >
                <img
                  src={src}
                  alt={`tool-${idx}`}
                  className="max-h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
