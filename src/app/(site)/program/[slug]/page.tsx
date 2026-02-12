import { notFound } from "next/navigation";
import { getProgramBySlug } from "@/actions/public";
import ProgramDetailTemplate from "@/components/program/ProgramDetailTemplate";
import { ProgramDetail } from "@/data/programs";

// Add this to improve performance for static generation if you switch to it
export const dynamic = 'force-dynamic';

export default async function ProgramDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const programData = await getProgramBySlug(slug);

  if (!programData) {
    return notFound();
  }

  // Transform Prisma data to ProgramDetail format
  // Ensure we safely cast and provide defaults for optional fields
  const formattedData: ProgramDetail = {
    id: programData.id,
    title: programData.title,
    // Cast degree to literal union type safely
    degree: (programData.degree === "D3" || programData.degree === "D4") ? programData.degree : "D3", 
    subtitle: programData.subtitle,
    description: programData.description,
    longDescription: programData.longDescription,
    heroImage: programData.heroImage,
    color: programData.color,
    // Safely cast JSON fields to arrays, defaulting to empty arrays if null/undefined
    competencies: (programData.competencies as any[]) || [],
    careers: (programData.careers as any[]) || [],
    tools: (programData.tools as any[]) || [],
    stats: (programData.stats as any[]) || [],
  };

  return <ProgramDetailTemplate data={formattedData} />;
}
