import { getNews } from "@/actions/cms";
import { getNewsBySlug } from "@/actions/public";
import NewsDetailClient from "./NewsDetailClient";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  try {
    const allNews = await getNews();
    return (allNews || []).map((news) => ({
      slug: news.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for news:", error);
    return [];
  }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const news = await getNewsBySlug(decodedSlug);
  
  if (!news) {
    notFound();
  }

  const allNews = await getNews();
  const relatedNews = allNews.filter((n) => n.id !== news.id).slice(0, 2);
  const hotNews = allNews.slice(0, 3);

  return (
    <NewsDetailClient 
      newsDetail={news} 
      relatedNews={relatedNews}
      hotNews={hotNews}
    />
  );
}
