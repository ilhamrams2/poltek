"use client";

import { PROGRAMS_DATA } from "@/data/programs";
import ProgramDetailTemplate from "@/components/program/ProgramDetailTemplate";

export default function ProgramD3RPLPage() {
  const data = PROGRAMS_DATA["d3_rekayasa_perangkat_lunak"];
  
  if (!data) return null;

  return <ProgramDetailTemplate data={data} />;
}
