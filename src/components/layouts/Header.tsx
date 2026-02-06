import Topbar from "./Topbar";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-[999] bg-white shadow-sm">
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
