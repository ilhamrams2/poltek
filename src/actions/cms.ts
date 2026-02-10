"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getCurrentAdmin, checkRole } from "@/lib/auth-utils";
import { createAuditLog } from "@/lib/audit";

// NEWS ACTIONS
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
    const admin = await checkRole(["SUPER_ADMIN", "NEWS_EDITOR"]);
    
    const news = await prisma.news.create({
      data,
    });

    await createAuditLog({
      adminId: admin.id,
      action: "CREATE",
      entity: "News",
      entityId: news.id,
      details: { title: news.title }
    });

    revalidatePath("/news");
    revalidatePath("/admin/news");
    return { success: true, data: news };
  } catch (error: any) {
    console.error("Error creating news:", error);
    return { success: false, error: error.message || "Gagal membuat berita" };
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
    const admin = await checkRole(["SUPER_ADMIN", "NEWS_EDITOR"]);

    const news = await prisma.news.update({
      where: { id },
      data,
    });

    await createAuditLog({
      adminId: admin.id,
      action: "UPDATE",
      entity: "News",
      entityId: news.id,
      details: { title: news.title }
    });

    revalidatePath("/news");
    revalidatePath(`/news/${id}`);
    revalidatePath("/admin/news");
    return { success: true, data: news };
  } catch (error: any) {
    console.error("Error updating news:", error);
    return { success: false, error: error.message || "Gagal memperbarui berita" };
  }
}

export async function deleteNews(id: string) {
  try {
    const admin = await checkRole(["SUPER_ADMIN", "NEWS_EDITOR"]);

    await prisma.news.delete({
      where: { id },
    });

    await createAuditLog({
      adminId: admin.id,
      action: "DELETE",
      entity: "News",
      entityId: id
    });

    revalidatePath("/news");
    revalidatePath("/admin/news");
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting news:", error);
    return { success: false, error: error.message || "Gagal menghapus berita" };
  }
}

// PROGRAM ACTIONS
export async function getPrograms() {
  try {
    return await prisma.program.findMany({
      orderBy: { degree: "asc" },
    });
  } catch (error) {
    console.error("Error fetching programs:", error);
    return [];
  }
}

export async function getProgramById(id: string) {
  try {
    return await prisma.program.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error("Error fetching program:", error);
    return null;
  }
}

export async function createProgram(data: any) {
  try {
    const admin = await checkRole(["SUPER_ADMIN", "ACADEMIC_ADMIN"]);
    
    const program = await prisma.program.create({
      data,
    });

    await createAuditLog({
      adminId: admin.id,
      action: "CREATE",
      entity: "Program",
      entityId: program.id,
      details: { title: program.title }
    });

    revalidatePath("/(site)/program", "layout");
    revalidatePath("/admin/programs");
    return { success: true, data: program };
  } catch (error: any) {
    console.error("Error creating program:", error);
    return { success: false, error: error.message || "Gagal membuat program studi" };
  }
}

export async function updateProgram(id: string, data: any) {
  try {
    const admin = await checkRole(["SUPER_ADMIN", "ACADEMIC_ADMIN"]);
    
    const program = await prisma.program.update({
      where: { id },
      data,
    });

    await createAuditLog({
      adminId: admin.id,
      action: "UPDATE",
      entity: "Program",
      entityId: program.id,
      details: { title: program.title }
    });

    revalidatePath("/(site)/program", "layout");
    revalidatePath("/admin/programs");
    return { success: true, data: program };
  } catch (error: any) {
    console.error("Error updating program:", error);
    return { success: false, error: error.message || "Gagal memperbarui program studi" };
  }
}

export async function deleteProgram(id: string) {
  try {
    const admin = await checkRole(["SUPER_ADMIN", "ACADEMIC_ADMIN"]);
    
    await prisma.program.delete({
      where: { id },
    });

    await createAuditLog({
      adminId: admin.id,
      action: "DELETE",
      entity: "Program",
      entityId: id
    });

    revalidatePath("/(site)/program", "layout");
    revalidatePath("/admin/programs");
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting program:", error);
    return { success: false, error: error.message || "Gagal menghapus program studi" };
  }
}

// ANALYTICS ACTIONS
export async function trackVisitor() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const stat = await prisma.dailyStat.upsert({
      where: { date: today },
      update: { pageViews: { increment: 1 } },
      create: { date: today, pageViews: 1, visitors: 1 },
    });
    return { success: true, data: stat };
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return { success: false };
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
    const admin = await checkRole(["SUPER_ADMIN", "NEWS_EDITOR"]);

    const item = await prisma.gallery.create({
      data,
    });

    await createAuditLog({
      adminId: admin.id,
      action: "CREATE",
      entity: "Gallery",
      entityId: item.id,
      details: { title: item.title }
    });

    revalidatePath("/gallery");
    revalidatePath("/admin/gallery");
    return { success: true, data: item };
  } catch (error: any) {
    console.error("Error creating gallery:", error);
    return { success: false, error: error.message || "Gagal menambah galeri" };
  }
}

export async function deleteGallery(id: string) {
  try {
    const admin = await checkRole(["SUPER_ADMIN", "NEWS_EDITOR"]);

    await prisma.gallery.delete({
      where: { id },
    });

    await createAuditLog({
      adminId: admin.id,
      action: "DELETE",
      entity: "Gallery",
      entityId: id
    });

    revalidatePath("/gallery");
    revalidatePath("/admin/gallery");
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting gallery:", error);
    return { success: false, error: error.message || "Gagal menghapus galeri" };
  }
}

