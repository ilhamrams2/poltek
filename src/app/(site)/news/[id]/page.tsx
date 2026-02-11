import { getNewsById, getNews } from "@/actions/cms";
import NewsDetailClient from "./NewsDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const allNews = await getNews();
    return (allNews || []).map((news) => ({
      id: news.id,
    }));
  } catch (error) {
    console.error("Error generating static params for news:", error);
    return [];
  }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = await getNewsById(id);
  
  if (!news) {
    notFound();
  }

  const allNews = await getNews();
  const relatedNews = allNews.filter((n) => n.id !== id).slice(0, 2);
  const hotNews = allNews.slice(0, 3);

  return (
    <NewsDetailClient 
      newsDetail={news} 
      relatedNews={relatedNews}
      hotNews={hotNews}
    />
  );
}
