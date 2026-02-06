"use client";

import Hero from "@/components/program/Hero";
import About from "@/components/program/About";
import Prospects from "@/components/program/Prospects";
import Tools from "@/components/program/Tools";
import Tour from "@/components/program/Tour";
import FAQ from "@/components/program/FAQ";

export default function ProgramRPLPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero program="rpl" /> {/* rpl / manajemen / administrasi */}
      <About program="rpl" />
<Prospects program="rpl" />
<Tools program="rpl" />
      <Tour program="rpl" />
      <FAQ program="rpl" />
    </main>
  );
}
