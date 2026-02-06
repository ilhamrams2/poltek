"use client";

import Hero from "@/components/program/Hero";
import About from "@/components/program/About";
import Prospects from "@/components/program/Prospects";
import Tools from "@/components/program/Tools";
import Tour from "@/components/program/Tour";
import FAQ from "@/components/program/FAQ";

export default function ProgramAdministrasiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero program="administrasi" />
      <About program="administrasi" />
<Prospects program="administrasi" />
<Tools program="administrasi" />
      <Tour program="administrasi" />
      <FAQ program="administrasi" />
    </main>
  );
}
