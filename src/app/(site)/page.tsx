import HeroSection from "@/components/sections/HeroSection";
import QuickActionSection from "@/components/sections/QuickActionSection";
import AboutSection from "@/components/sections/AboutSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import AcademicProgramsSection from "@/components/sections/AcademicProgramsSection";
import DirectorMessageSection from "@/components/sections/DirectorMessageSection";
import VirtualTourSection from "@/components/sections/VirtualTourSection";
import NewsSection from "@/components/sections/NewsSection";
import FAQSection from "@/components/sections/FAQSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

import { getLatestNews } from "@/actions/public";

export const revalidate = 60;

export default async function Home() {
  const latestNews = await getLatestNews();

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

      {/* 10. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 5. Program Akademik */}
      <AcademicProgramsSection />

      {/* 6. Sambutan Direktur */}
      <DirectorMessageSection />

      {/* 7. Virtual Tour */}
      <VirtualTourSection />

      {/* 8. Berita Terbaru */}
      <NewsSection initialNews={latestNews} />

      {/* 9. FAQ */}
      <FAQSection />


    </main>
  );
}
