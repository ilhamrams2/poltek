"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getNews() {
  try {
    return await prisma.news.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export async function getNewsById(id: string) {
  try {
    return await prisma.news.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error("Error fetching news by id:", error);
    return null;
  }
}

export async function createNews(data: {
  title: string;
  slug: string;
  content: string;
  image?: string;
  published?: boolean;
}) {
  try {
    const news = await prisma.news.create({
      data,
    });
    revalidatePath("/news");
    revalidatePath("/admin/news");
    return { success: true, data: news };
  } catch (error) {
    console.error("Error creating news:", error);
    return { success: false, error: "Gagal membuat berita" };
  }
}

export async function updateNews(
  id: string,
  data: {
    title?: string;
    slug?: string;
    content?: string;
    image?: string;
    published?: boolean;
  }
) {
  try {
    const news = await prisma.news.update({
      where: { id },
      data,
    });
    revalidatePath("/news");
    revalidatePath(`/news/${id}`);
    revalidatePath("/admin/news");
    return { success: true, data: news };
  } catch (error) {
    console.error("Error updating news:", error);
    return { success: false, error: "Gagal memperbarui berita" };
  }
}

export async function deleteNews(id: string) {
  try {
    await prisma.news.delete({
      where: { id },
    });
    revalidatePath("/news");
    revalidatePath("/admin/news");
    return { success: true };
  } catch (error) {
    console.error("Error deleting news:", error);
    return { success: false, error: "Gagal menghapus berita" };
  }
}

// GALLERY ACTIONS
export async function getGallery() {
  try {
    return await prisma.gallery.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return [];
  }
}

export async function createGallery(data: {
  title: string;
  description?: string;
  videoUrl: string;
}) {
  try {
    const item = await prisma.gallery.create({
      data,
    });
    revalidatePath("/gallery");
    revalidatePath("/admin/gallery");
    return { success: true, data: item };
  } catch (error) {
    console.error("Error creating gallery:", error);
    return { success: false, error: "Gagal menambah galeri" };
  }
}

export async function deleteGallery(id: string) {
  try {
    await prisma.gallery.delete({
      where: { id },
    });
    revalidatePath("/gallery");
    revalidatePath("/admin/gallery");
    return { success: true };
  } catch (error) {
    console.error("Error deleting gallery:", error);
    return { success: false, error: "Gagal menghapus galeri" };
  }
}
