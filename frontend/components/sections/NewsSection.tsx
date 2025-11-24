"use client";

import Image from "next/image";

export default function NewsSection() {
  const news = [
    {
      category: "Event",
      title: "Campus Tour, Menyaksikan Keseruan Film Merdeka Atau Mati",
      img: "/images/sections/news/newsdummy.jpeg",
      link: "#",
    },
    {
      category: "Event",
      title: "Campus Tour, Menyaksikan Keseruan Film Merdeka Atau Mati",
      img: "/images/sections/news/newsdummy.jpeg",
      link: "#",
    },
    {
      category: "Event",
      title: "Campus Tour, Menyaksikan Keseruan Film Merdeka Atau Mati",
      img: "/images/sections/news/newsdummy.jpeg",
      link: "#",
    },
  ];

  return (
    <section className="py-24 bg-white px-6 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-14">
        <span className="text-purple-800">Update </span>
        <span className="text-orange-500">Terbaru kami</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="w-full h-56 relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-orange-600 text-sm font-semibold mb-1">
                {item.category}
              </p>

              <h3 className="text-gray-800 font-semibold text-lg leading-snug">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Footer link */}
      <a
        href="#"
        className="mt-10 text-sm text-gray-600 hover:text-orange-500 transition-all"
      >
        Berita selengkapnya
      </a>
    </section>
  );
}