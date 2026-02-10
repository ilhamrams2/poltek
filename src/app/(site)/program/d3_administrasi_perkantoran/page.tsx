"use client";

import { PROGRAMS_DATA } from "@/data/programs";
import ProgramDetailTemplate from "@/components/program/ProgramDetailTemplate";

export default function ProgramD3AdministrasiPage() {
  const data = PROGRAMS_DATA["d3_administrasi_perkantoran"];
  
  if (!data) return null;

  return <ProgramDetailTemplate data={data} />;
}
