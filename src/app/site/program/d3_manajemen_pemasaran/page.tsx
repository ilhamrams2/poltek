"use client";

import { PROGRAMS_DATA } from "@/data/programs";
import ProgramDetailTemplate from "@/components/program/ProgramDetailTemplate";

export default function ProgramD3ManajemenPage() {
  const data = PROGRAMS_DATA["d3_manajemen_pemasaran"];
  
  if (!data) return null;

  return <ProgramDetailTemplate data={data} />;
}
