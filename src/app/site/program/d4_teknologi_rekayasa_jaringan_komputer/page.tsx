"use client";

import { PROGRAMS_DATA } from "@/data/programs";
import ProgramDetailTemplate from "@/components/program/ProgramDetailTemplate";

export default function ProgramD4NetworkPage() {
  const data = PROGRAMS_DATA["d4_teknologi_rekayasa_jaringan_komputer"];
  
  if (!data) return null;

  return <ProgramDetailTemplate data={data} />;
}
