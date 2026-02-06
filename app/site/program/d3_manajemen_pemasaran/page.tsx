"use client";

import Hero from "@/components/program/Hero";
import About from "@/components/program/About";
import Prospects from "@/components/program/Prospects";
import Tools from "@/components/program/Tools";
import Tour from "@/components/program/Tour";
import FAQ from "@/components/program/FAQ";

export default function ProgramManajemenPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero program="manajemen" /> 
      <About program="manajemen" />
<Prospects program="manajemen" />
<Tools program="manajemen" />
      <Tour program="manajemen" />
      <FAQ program="manajemen" />
    </main>
  );
}
