import React from "react";

type AccreditationItem = {
  no: number;
  program: string;
  rank: string;
  doc: string;
  docUrl: string;
};

const data: AccreditationItem[] = [
  {
    no: 1,
    program: "D3 – Administrasi Perkantoran",
    rank: "Baik",
    doc: "SK Akreditasi",
    docUrl: "#",
  },
  {
    no: 2,
    program: "D3 – Manajemen Pemasaran",
    rank: "Baik",
    doc: "SK Akreditasi",
    docUrl: "#",
  },
  {
    no: 3,
    program: "D3 – Rekayasa Perangkat Lunak Aplikasi",
    rank: "Baik",
    doc: "SK Akreditasi",
    docUrl: "#",
  },
  {
    no: 4,
    program: "D4 Sarjana Terapan – Bisnis Digital",
    rank: "Baik",
    doc: "SK Akreditasi",
    docUrl: "#",
  },
  {
    no: 5,
    program: "D4 Sarjana Terapan – Teknologi Rekayasa Multimedia",
    rank: "Baik",
    doc: "SK Akreditasi",
    docUrl: "#",
  },
  {
    no: 6,
    program: "D4 Sarjana Terapan – Teknologi Rekayasa Jaringan Komputer",
    rank: "Baik",
    doc: "SK Akreditasi",
    docUrl: "#",
  },
  {
    no: 7,
    program: "Institusi – Politeknik Prestasi Prima",
    rank: "Aktif",
    doc: "SK Pendirian",
    docUrl: "#",
  },
];

export default function AccreditationPage() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Akreditasi Program Studi</h1>
      <p className="text-gray-600 mb-10">
        Berikut adalah daftar akreditasi program studi di Politeknik Prestasi Prima.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">No</th>
              <th className="p-3 border">Program Studi</th>
              <th className="p-3 border">Peringkat</th>
              <th className="p-3 border">Dokumen SK</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.no}
                className="text-center hover:bg-gray-50 transition"
              >
                <td className="p-3 border">{item.no}</td>
                <td className="p-3 border text-left">{item.program}</td>
                <td className="p-3 border">{item.rank}</td>
                <td className="p-3 border">
                  <a
                    href={item.docUrl}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {item.doc}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
