import { getNewsById, getNews } from "@/actions/cms";
import NewsDetailClient from "./NewsDetailClient";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = await getNewsById(id);
  
  if (!news) {
    notFound();
  }

  const allNews = await getNews();
  const relatedNews = allNews.filter((n: any) => n.id !== id).slice(0, 2);
  const hotNews = allNews.slice(0, 3);

  return (
    <NewsDetailClient 
      newsDetail={news} 
      relatedNews={relatedNews}
      hotNews={hotNews}
    />
  );
}
