import { getNews } from "@/actions/cms";
import EditNewsClient from "./EditNewsClient";

export async function generateStaticParams() {
  try {
    const allNews = await getNews();
    return (allNews || []).map((news) => ({
      id: news.id,
    }));
  } catch (error) {
    console.error("Error generating static params for news admin edit:", error);
    return [];
  }
}

export default async function EditNewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EditNewsClient id={id} />;
}
