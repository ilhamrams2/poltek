"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import {
  RiCalendarLine,
  RiUserLine,
  RiEyeLine,
  RiTimeLine,
  RiFacebookFill,
  RiTwitterFill,
  RiWhatsappFill,
  RiLinkM,
  RiArrowLeftLine,
  RiFireLine,
} from "react-icons/ri";

interface NewsItem {
  id: string;
  title: string;
  image?: string | null;
  content: string;
  createdAt: Date | string;
  published: boolean;
  slug?: string;
}

export default function NewsDetailClient({ 
  newsDetail, 
  relatedNews, 
  hotNews 
}: { 
  newsDetail: NewsItem; 
  relatedNews: NewsItem[]; 
  hotNews: NewsItem[]; 
}) {
  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = newsDetail.title;

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
        break;
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`);
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        break;
    }
  };

  const formatDate = (date: Date | string) => {
    try {
      return format(new Date(date), "dd MMM yyyy", { locale: idLocale });
    } catch (err) {
      return "Baru saja";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30 pb-32 pt-11 md:pt-11">
      <section className="px-6 pt-8 pb-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-500 transition">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-orange-500 transition">
              Berita
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium line-clamp-1">
              {newsDetail.title}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-orange-500 transition mb-6 group"
          >
            <RiArrowLeftLine className="text-lg group-hover:-translate-x-1 transition-transform" />
            Kembali ke Berita
          </Link>

          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-xl text-xs font-black uppercase tracking-wider border border-orange-200">
              News
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#1D234E] leading-tight mb-6"
          >
            {newsDetail.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <RiUserLine className="text-orange-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Ditulis oleh</div>
                <div className="text-sm font-bold text-gray-800">Admin Poltek</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <RiCalendarLine className="text-orange-500" />
              {formatDate(newsDetail.createdAt)}
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <RiTimeLine className="text-purple-500" />
              5 min read
            </div>
          </div>

          {newsDetail.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden mb-10 shadow-2xl"
            >
              <Image
                src={newsDetail.image}
                alt={newsDetail.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          )}

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: newsDetail.content }}
            style={{ color: "#374151", lineHeight: "1.8" }}
          />

          <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-[2rem] p-8 mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-black text-[#1D234E] mb-1">Bagikan Berita</h3>
                <p className="text-sm text-gray-600">Sebarkan informasi ini ke teman-temanmu</p>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => handleShare("facebook")} className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <RiFacebookFill className="text-xl" />
                </button>
                <button onClick={() => handleShare("twitter")} className="w-12 h-12 bg-sky-500 hover:bg-sky-600 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <RiTwitterFill className="text-xl" />
                </button>
                <button onClick={() => handleShare("whatsapp")} className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <RiWhatsappFill className="text-xl" />
                </button>
                <button onClick={() => handleShare("copy")} className="w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <RiLinkM className="text-xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#1D234E] mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-orange-500 rounded-full" />
              Eksplorasi Berita Terkait
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedNews.map((news) => (
                <Link
                  key={news.id}
                  href={`/news/${news.id}`}
                  className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={news.image || "/images/sections/news/newsdummy.jpeg"}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1D234E] leading-snug mb-3 line-clamp-2 group-hover:text-orange-600 transition">
                      {news.title}
                    </h3>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                      <RiCalendarLine /> {formatDate(news.createdAt)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="p-2 bg-red-100 text-red-600 rounded-xl">
                  <RiFireLine className="text-xl" />
                </div>
                <h3 className="font-black text-xl text-[#1D234E]">Hot News</h3>
              </div>

              <div className="space-y-4">
                {hotNews.map((news, idx) => (
                  <Link
                    key={news.id}
                    href={`/news/${news.id}`}
                    className="group flex items-start gap-4 cursor-pointer relative p-3 rounded-2xl hover:bg-gray-50 transition"
                  >
                    <div className="relative shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                      <Image
                        src={news.image || "/images/sections/news/newsdummy.jpeg"}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-1 left-1 w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center text-white text-xs font-black">
                        {idx + 1}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-[#1D234E] leading-snug mb-2 line-clamp-2 group-hover:text-orange-600 transition">
                        {news.title}
                      </h4>
                      <div className="text-xs text-gray-500">{formatDate(news.createdAt)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
