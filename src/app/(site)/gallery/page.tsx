import { getGallery } from "@/actions/cms";
import GalleryClient from "./GalleryClient";

export default async function GalleryPage() {
  const data = await getGallery();
  
  return <GalleryClient initialData={data} />;
}
