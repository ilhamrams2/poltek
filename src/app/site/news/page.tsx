"use client";

import Image from "next/image";
import React, { useState } from "react";
import { PlayCircle, Clock, Tag, ArrowRight } from "lucide-react";

const FEATURE_IMG = "/mnt/data/8f9274f7-ecbf-40f3-a94f-fa3fcbe3948c.png";
const THUMB = "/mnt/data/8f9274f7-ecbf-40f3-a94f-fa3fcbe3948c.png";

const categories = [
  "Pendidikan",
  "Event",
  "Prestasi",
  "Kampus",
  "Mahasiswa",
  "Perpustakaan",
  "Semua",
];

const popular = [
  {
    title: "Rapat Guru",
    subtitle: "Persiapan UN",
    date: "10 Juni 2024",
    img: THUMB,
  },
  {
    title: "Apresiasi Guru",
    subtitle: "Penghargaan",
    date: "22 Des 2024",
    img: THUMB,
  },
  {
    title: "Apresiasi Guru",
    subtitle: "Penghargaan",
    date: "22 Des 2024",
    img: THUMB,
  },
];

const rightList = new Array(4).fill(0).map((_, i) => ({
  title: "Pendidikan Digital Era Baru Untuk Guru Indonesia",
  tag: "Pendidikan",
  date: "18 Des 2024",
  time: "5 mnt",
}));

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Top grid: Featured left, sidebar right */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <article className="lg:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="relative">
            <Image
              src={FEATURE_IMG}
              alt="Featured"
              width={1200}
              height={700}
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                Memberikan penghargaan kepada para guru berprestasi sebagai bentuk
                apresiasi atas dedikasi dan kontribusi mereka dalam pendidikan.
              </h2>
              <p className="text-sm text-gray-500 mt-4">
                Ikatan Guru Indonesia (IGI) berkomitmen untuk terus mendukung dan
                mengembangkan kualitas pendidikan di Indonesia melalui berbagai
                program pengembangan profesional guru.
              </p>
              <div className="mt-6">
                <a
                  className="text-orange-500 text-sm font-medium inline-flex items-center gap-2"
                  href="#"
                >
                  ReadMore &gt;&gt;
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="flex items-center gap-2 text-gray-800 font-semibold">
              <span className="w-1 h-6 bg-orange-500 rounded mr-2 inline-block" />
              Hot News
            </h3>
            <div className="mt-3">
              <div className="rounded-xl overflow-hidden shadow-inner bg-white">
                <Image
                  src={THUMB}
                  alt="hot"
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <h4 className="text-gray-800 font-semibold mb-3">Akses Cepat</h4>
            <ul className="space-y-3">
              {['Pendidikan','Event','Prestasi','Olahraga'].map((a) => (
                <li key={a} className="flex items-center justify-between bg-gray-50 rounded-md p-3">
                  <span className="text-sm text-gray-700">{a}</span>
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* Popular */}
      <section className="mt-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-6 bg-orange-500 rounded inline-block" />
          <h3 className="text-lg font-semibold">Populer</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {popular.map((p, idx) => (
            <article key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative">
                <Image src={p.img} alt={p.title} width={600} height={300} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs bg-black/40 px-2 py-1 rounded">{p.subtitle}</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">{p.title}</h4>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-3">
                  <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{p.date}</span>
                  <span className="inline-flex items-center gap-2">👁 126</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Global News Section */}
      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden">
          <Image src={THUMB} alt="global" width={1200} height={700} className="w-full h-80 object-cover" />
          <div className="p-6">
            <div className="text-sm text-gray-400 mb-3">10 Juni 2024</div>
            <h3 className="text-2xl font-bold text-gray-800">Rapat Guru</h3>
            <p className="mt-3 text-gray-600">Periapan UN</p>
            <div className="mt-4">
              <a className="text-orange-500 font-medium" href="#">ReadMore&gt;&gt;</a>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          {rightList.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-orange-500 font-semibold mb-1">{r.tag} • {r.time}</div>
                <div className="font-semibold text-gray-800">{r.title}</div>
                <div className="text-xs text-gray-400 mt-2">{r.date}</div>
              </div>
              <div className="ml-4">
                <ArrowRight className="w-5 h-5 text-orange-400" />
              </div>
            </div>
          ))}
        </aside>
      </section>

      {/* Footer CTA */}
      <div className="mt-12 flex justify-center">
        <button className="px-6 py-3 bg-[#0F1B3D] text-white rounded-full hover:bg-[#16285A] transition shadow-md">
          Lihat Semua Berita
        </button>
      </div>
    </main>
  );
}
