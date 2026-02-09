import Topbar from "./Topbar";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-[999] bg-[#020617]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Desktop Topbar */}
      <div className="hidden lg:block">
        <Topbar />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:block">
        <Navbar />
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </header>
  );
}
