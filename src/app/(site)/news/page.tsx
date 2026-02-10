import { getNews } from "@/actions/cms";
import NewsClient from "./NewsClient";

export default async function NewsPage() {
  const news = await getNews();
  
  return <NewsClient initialNews={news} />;
}
