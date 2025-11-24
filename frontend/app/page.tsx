import HeroSection from "@/components/sections/HeroSection";
import QuickActionSection from "@/components/sections/QuickActionSection";
import AboutSection from "@/components/sections/AboutSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import AcademicProgramsSection from "@/components/sections/AcademicProgramsSection";
import DirectorMessageSection from "@/components/sections/DirectorMessageSection";
import VirtualTourSection from "@/components/sections/VirtualTourSection";
import NewsSection from "@/components/sections/NewsSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      
      {/* 1. Hero / Banner */}
      <HeroSection />

      {/* 2. Quick Action / Menu Singkat */}
      <QuickActionSection />

      {/* 3. Tentang Kampus */}
      <AboutSection />

      {/* 4. Visi & Misi */}
      <VisionMissionSection />

      {/* 5. Program Akademik */}
      <AcademicProgramsSection />

      {/* 6. Sambutan Direktur */}
      <DirectorMessageSection />

      {/* 7. Virtual Tour */}
      <VirtualTourSection />

      {/* 8. Berita Terbaru */}
      <NewsSection />

      {/* 9. FAQ */}
      <FAQSection />

    </main>
  );
}
