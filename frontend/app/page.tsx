import SubNavbar from "./components/SubNavbar";
import Navbar from "./components/Navbar";
import HeroMedia from "./components/HeroMedia";
import AbaoutSection from "./components/AboutSection";
import PmbSection from "./components/PmbSection";
import FaktaSection from "./components/FaktaSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <SubNavbar />
      <Navbar />

      <main className="pt-0">
        <HeroMedia />

        <div className="mt-28">
          <AbaoutSection />

          <PmbSection />
          <FaktaSection />
          {/* <BlogSection /> */}
        </div>
      </main>
    </div>
  );
}
