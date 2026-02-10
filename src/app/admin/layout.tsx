"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Newspaper, 
  Image as ImageIcon, 
  LogOut, 
  Settings,
  Menu,
  X,
  Bell,
  Search,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";

import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

const sidebarItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "News Management", href: "/admin/news", icon: Newspaper },
  { name: "Media Gallery", href: "/admin/gallery", icon: ImageIcon },
  { name: "System Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.auth.signOut();
    console.log(`[AUTH] Logout success for: ${user?.email} at ${new Date().toLocaleString()}`);
    router.push("/admin/login");
    router.refresh();
  };

  // Skip layout for login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside 
        className={`${
          isSidebarOpen ? "w-72" : "w-24"
        } bg-[#0F172A] text-white transition-all duration-500 ease-in-out flex flex-col relative z-30 shadow-[4px_0_24px_rgba(0,0,0,0.1)]`}
      >
        {/* Sidebar Header */}
        <div className="p-6 flex items-center h-24 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
               <Settings size={22} className="text-white animate-spin-slow" />
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tight leading-none">
                  POLTEK<span className="text-blue-500">CMS</span>
                </span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Management System</span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto custom-scrollbar">
          {sidebarItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 relative ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <div className={`${isActive ? "text-white" : "text-slate-500 group-hover:text-blue-400"} transition-colors`}>
                  <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                {isSidebarOpen && (
                  <>
                    <span className="flex-1 font-bold text-sm tracking-tight">
                      {item.name}
                    </span>
                    {isActive && <ChevronRight size={16} className="text-blue-200" />}
                  </>
                )}
                {isActive && (
                  <div className="absolute left-0 w-1.5 h-8 bg-white rounded-r-full shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800/50 bg-slate-900/50">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-4 text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 rounded-2xl transition-all duration-300 font-bold group"
          >
            <div className="p-2 bg-slate-800 rounded-xl group-hover:bg-rose-500/20 transition-colors">
              <LogOut size={20} />
            </div>
            {isSidebarOpen && (
              <span className="text-sm uppercase tracking-widest">Logout</span>
            )}
          </button>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-4 top-10 w-8 h-8 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all z-40 group"
        >
          {isSidebarOpen ? <X size={14} className="group-hover:rotate-90 transition-transform" /> : <Menu size={14} />}
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className={`h-24 px-10 flex items-center justify-between transition-all duration-300 z-20 ${
          isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm" : "bg-transparent"
        }`}>
          <div className="flex items-center gap-6">
             <div className="relative group hidden md:block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Cari fitur atau data..." 
                  className="pl-12 pr-6 py-2.5 bg-slate-100/50 focus:bg-white border-transparent focus:border-blue-200 rounded-xl outline-none w-80 text-sm font-medium transition-all focus:ring-4 focus:ring-blue-500/5" 
                />
             </div>
          </div>

          <div className="flex items-center gap-4">
             <Link href="/" target="_blank" className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-blue-600 font-bold text-xs uppercase tracking-widest transition-colors">
               <ExternalLink size={14} />
               <span>Lihat Web</span>
             </Link>
             <button className="relative p-2.5 text-slate-500 hover:bg-white hover:shadow-md transition-all rounded-xl border border-transparent hover:border-slate-100">
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 border-2 border-[#F8FAFC] rounded-full" />
             </button>
             <div className="h-10 w-[1px] bg-slate-200 mx-2" />
             <div className="flex items-center gap-3 group cursor-pointer">
                <div className="flex flex-col items-end">
                   <span className="text-sm font-black text-slate-900 leading-none">Super Admin</span>
                   <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-1">Online</span>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] shadow-lg shadow-indigo-200">
                  <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-black text-indigo-600">
                    SA
                  </div>
                </div>
             </div>
          </div>
        </header>

        {/* Scrollable Workspace */}
        <main className="flex-1 overflow-y-auto p-10 custom-scrollbar">
           <div className="max-w-7xl mx-auto">
             {children}
           </div>
           
           {/* Footer Copyright */}
           <footer className="mt-20 py-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
              <span>&copy; 2026 Politeknik Prestasi Prima - All Rights Reserved.</span>
              <div className="flex items-center gap-6">
                 <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                 <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
              </div>
           </footer>
        </main>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #CBD5E1;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
