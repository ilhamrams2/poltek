import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seeding...");

  // Seed Admin
  const admin = await prisma.admin.upsert({
    where: { email: "admin@poltek.com" },
    update: {},
    create: {
      email: "admin@poltek.com",
      name: "Super Admin",
    },
  });
  console.log({ admin });

  // Seed News
  const news1 = await prisma.news.upsert({
    where: { slug: "pekan-kokurikuler-2025" },
    update: {},
    create: {
      title: "Pekan Kokurikuler SMK Prestasi Prima 2025",
      slug: "pekan-kokurikuler-2025",
      content: "<p>Kegiatan pengembangan minat dan bakat siswa...</p>",
      image: "/images/sections/news/newsdummy.jpeg",
      published: true,
    },
  });

  const news2 = await prisma.news.upsert({
    where: { slug: "wisuda-angkatan-ke-10" },
    update: {},
    create: {
      title: "Wisuda Angkatan ke-10 Politeknik Prestasi Prima",
      slug: "wisuda-angkatan-ke-10",
      content: "<p>Selamat kepada para lulusan tahun ini!</p>",
      image: "/images/sections/news/newsdummy.jpeg",
      published: true,
    },
  });
  console.log("Seeded News items");

  // Seed Gallery
  const gallery1 = await prisma.gallery.create({
    data: {
      title: "Prestasi Prima Highlight 2024",
      description: "Video kilas balik kegiatan setahun terakhir",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  });

  const gallery2 = await prisma.gallery.create({
    data: {
      title: "Company Profile Politeknik Prestasi Prima",
      description: "Mengenal lebih dekat kampus kami",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  });
  console.log("Seeded Gallery items");

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
