"use server";

import { prisma } from "@/lib/prisma";

export async function getProgramBySlug(slug: string) {
  try {
    const program = await prisma.program.findUnique({
      where: { slug },
    });
    return program;
  } catch (error) {
    console.error("Error fetching program:", error);
    return null;
  }
}

export async function getAllProgramsMenu() {
  try {
    const programs = await prisma.program.findMany({
      select: {
        title: true,
        slug: true,
        degree: true,
      },
      orderBy: {
        title: 'asc',
      }
    });

    // Group by degree for menu structure
    const grouped = {
      D3: programs.filter(p => p.degree === 'D3'),
      D4: programs.filter(p => p.degree === 'D4'),
      S1: programs.filter(p => p.degree === 'S1'),
    };

    return grouped;
  } catch (error) {
    console.error("Error fetching programs menu:", error);
    return { D3: [], D4: [], S1: [] };
  }
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  category?: string;
  subject?: string;
  message: string;
}) {
  try {
    // @ts-ignore - Prisma client needs generation for new phone/category fields
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        // @ts-ignore
        phone: data.phone,
        // @ts-ignore
        category: data.category,
        subject: data.subject || "No Subject",
        message: data.message,
      },
    });

    return { success: true, data: contactMessage };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Gagal mengirim pesan. Silakan coba lagi nanti." };
  }
}
