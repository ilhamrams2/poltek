"use client";

import { PROGRAMS_DATA } from "@/data/programs";
import ProgramDetailTemplate from "@/components/program/ProgramDetailTemplate";

export default function ProgramD4BisnisDigitalPage() {
  const data = PROGRAMS_DATA["d4_bisnis_digital"];
  
  if (!data) return null;

  return <ProgramDetailTemplate data={data} />;
}
