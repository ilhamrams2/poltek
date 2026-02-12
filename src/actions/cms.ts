"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
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
  } catch (err: unknown) {
    const error = err as Error;
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
  } catch (err: unknown) {
    const error = err as Error;
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
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Error deleting news:", error);
    return { success: false, error: error.message || "Gagal menghapus berita" };
  }
}

// PROGRAM ACTIONS
interface ProgramInput {
  title: string;
  slug: string;
  degree: string;
  subtitle: string;
  description: string;
  longDescription: string;
  heroImage: string;
  color?: string;
  competencies: any; // Relaxed type for array of objects
  careers: any; // Relaxed type
  tools: any; // Relaxed type
  stats: any; // Relaxed type
}

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

export async function createProgram(data: ProgramInput) {
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
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Error creating program:", error);
    return { success: false, error: error.message || "Gagal membuat program studi" };
  }
}

export async function updateProgram(id: string, data: Partial<ProgramInput>) {
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
  } catch (err: unknown) {
    const error = err as Error;
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
  } catch (err: unknown) {
    const error = err as Error;
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
  category?: string;
  categoryIcon?: string;
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
  } catch (err: unknown) {
    const error = err as Error;
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
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Error deleting gallery:", error);
    return { success: false, error: error.message || "Gagal menghapus galeri" };
  }
}

// ADMIN PROFILE
export async function getAdminProfile() {
  try {
    const admin = await getCurrentAdmin();
    return admin;
  } catch (error) {
    console.error("Error fetching admin profile:", error);
    return null;
  }
}

// INBOX ACTIONS
export async function markMessageAsRead(id: string) {
  try {
    await checkRole(["SUPER_ADMIN"]);
    await prisma.contactMessage.update({
      where: { id },
      data: { isRead: true },
    });
    revalidatePath("/admin/inbox");
    return { success: true };
  } catch (error) {
    console.error("Error marking message as read:", error);
    return { success: false, error: "Gagal memperbarui status pesan" };
  }
}

export async function deleteMessage(id: string) {
  try {
    await checkRole(["SUPER_ADMIN"]);
    await prisma.contactMessage.delete({
      where: { id },
    });
    revalidatePath("/admin/inbox");
    return { success: true };
  } catch (error) {
    console.error("Error deleting message:", error);
    return { success: false, error: "Gagal menghapus pesan" };
  }
}

export async function clearMessages() {
  try {
    await checkRole(["SUPER_ADMIN"]);
    await prisma.contactMessage.deleteMany({});
    revalidatePath("/admin/inbox");
    return { success: true };
  } catch (error) {
    console.error("Error clearing messages:", error);
    return { success: false, error: "Gagal membersihkan kotak masuk" };
  }
}

export async function getUnreadMessagesCount() {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) return 0;
    
    return await prisma.contactMessage.count({
      where: { isRead: false }
    });
  } catch (error) {
    console.error("Error fetching unread count:", error);
    return 0;
  }
}

import { createClient as createServerClient } from "@/lib/supabase-server";

export async function changeAdminPassword(data: { oldPassword: string, newPassword: string }) {
  try {
    const admin = await checkRole(["SUPER_ADMIN", "NEWS_EDITOR", "ACADEMIC_ADMIN"]);
    const supabase = await createServerClient();

    // Verify old password by attempting to sign in
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: admin.email,
      password: data.oldPassword
    });

    if (signInError) {
      throw new Error("Password lama salah");
    }

    // Update to new password
    const { error: updateError } = await supabase.auth.updateUser({
      password: data.newPassword
    });

    if (updateError) {
      throw new Error(updateError.message);
    }

    await createAuditLog({
      adminId: admin.id,
      action: "UPDATE",
      entity: "Admin",
      entityId: admin.id,
      details: { action: "CHANGE_PASSWORD" }
    });

    return { success: true };
  } catch (err: any) {
    console.error("Error changing password:", err);
    return { success: false, error: err.message || "Gagal mengganti password" };
  }
}
