"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme, ThemeProvider } from "@/components/ThemeProvider";
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
  ExternalLink,
  GraduationCap,
  Inbox,
  ShieldAlert,
  Moon,
  Sun
} from "lucide-react";
import { useState, useEffect } from "react";

import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

const sidebarItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "News Management", href: "/admin/news", icon: Newspaper },
  { name: "Program Studies", href: "/admin/programs", icon: GraduationCap },
  { name: "Media Gallery", href: "/admin/gallery", icon: ImageIcon },
  { name: "Inbox Messages", href: "/admin/inbox", icon: Inbox },
  { name: "Audit Logs", href: "/admin/audit", icon: ShieldAlert },
  { name: "System Settings", href: "/admin/settings", icon: Settings },
];

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [supabase, setSupabase] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize Supabase client only on the client side
  useEffect(() => {
    setSupabase(createClient());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    if (!supabase) return;
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
    <div className={`flex h-screen ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-[#F8FAFC] text-slate-900'} font-sans overflow-hidden transition-colors duration-500`}>
      
      {/* SIDEBAR */}
      <aside 
        className={`${
          isSidebarOpen ? "w-72" : "w-24"
        } ${theme === 'dark' ? 'bg-slate-900 border-r border-slate-800' : 'bg-[#0F172A]'} text-white transition-all duration-500 ease-in-out flex flex-col relative z-30 shadow-[4px_0_24px_rgba(0,0,0,0.1)]`}
      >
        {/* Sidebar Header */}
        <div className="p-6 flex items-center h-24 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
               <Settings size={22} className="text-white animate-spin-slow" />
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tight leading-none uppercase">
                  Poltek<span className="text-orange-500">CMS</span>
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
                    ? "bg-orange-600 text-white shadow-xl shadow-orange-600/20"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <div className={`${isActive ? "text-white" : "text-slate-500 group-hover:text-orange-400"} transition-colors`}>
                  <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                {isSidebarOpen && (
                  <>
                    <span className="flex-1 font-bold text-sm tracking-tight">
                      {item.name}
                    </span>
                    {isActive && <ChevronRight size={16} className="text-orange-200" />}
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
          className={`absolute -right-4 top-10 w-8 h-8 ${theme === 'dark' ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-white text-slate-600 border-slate-200'} border rounded-full shadow-lg flex items-center justify-center hover:text-orange-600 transition-all z-40 group`}
        >
          {isSidebarOpen ? <X size={14} className="group-hover:rotate-90 transition-transform" /> : <Menu size={14} />}
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className={`h-24 px-10 flex items-center justify-between transition-all duration-300 z-20 ${
          isScrolled 
            ? theme === 'dark' ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 shadow-lg' : 'bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm'
            : "bg-transparent"
        }`}>
          <div className="flex items-center gap-6">
             <div className="relative group hidden md:block">
                <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'} group-focus-within:text-orange-500 transition-colors`} size={18} />
                <input 
                  type="text" 
                  placeholder="Cari fitur atau data..." 
                  className={`pl-12 pr-6 py-2.5 ${theme === 'dark' ? 'bg-slate-800/50 focus:bg-slate-800 text-slate-200 border-slate-700' : 'bg-slate-100/50 focus:bg-white text-slate-900 border-transparent'} border focus:border-orange-200 rounded-xl outline-none w-80 text-sm font-medium transition-all focus:ring-4 focus:ring-orange-500/5`} 
                />
             </div>
          </div>

          <div className="flex items-center gap-4">
             <button 
               onClick={toggleTheme}
               className={`p-2.5 rounded-xl border transition-all ${
                 theme === 'dark' 
                   ? 'bg-slate-800 border-slate-700 text-amber-400 shadow-lg shadow-amber-500/5' 
                   : 'bg-white border-slate-100 text-slate-500 hover:shadow-md'
               }`}
             >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
             </button>

             <Link href="/" target="_blank" className={`flex items-center gap-2 px-4 py-2 ${theme === 'dark' ? 'text-slate-400 hover:text-orange-400' : 'text-slate-500 hover:text-orange-600'} font-bold text-xs uppercase tracking-widest transition-colors`}>
               <ExternalLink size={14} />
               <span>Lihat Web</span>
             </Link>
             
             <button className={`relative p-2.5 ${theme === 'dark' ? 'text-slate-400 bg-slate-800 hover:bg-slate-700 border-slate-700' : 'text-slate-500 bg-white hover:bg-slate-50 border-transparent'} transition-all rounded-xl border hover:shadow-md`}>
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 border-2 border-slate-800 rounded-full" />
             </button>

             <div className={`h-10 w-[1px] ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'} mx-2`} />
             
             <div className="flex items-center gap-3 group cursor-pointer">
                <div className="flex flex-col items-end">
                   <span className={`text-sm font-black ${theme === 'dark' ? 'text-slate-200' : 'text-slate-900'} leading-none`}>Super Admin</span>
                   <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-1">Online</span>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 p-[2px] shadow-lg shadow-orange-500/20">
                  <div className={`w-full h-full rounded-[14px] ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center font-black text-orange-600`}>
                    SA
                  </div>
                </div>
             </div>
          </div>
        </header>

        {/* Scrollable Workspace */}
        <main className={`flex-1 overflow-y-auto p-10 custom-scrollbar ${theme === 'dark' ? 'bg-slate-950' : 'bg-[#F8FAFC]'}`}>
           <div className="max-w-7xl mx-auto">
             {children}
           </div>
           
           {/* Footer Copyright */}
           <footer className={`mt-20 py-8 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]`}>
              <span>&copy; 2026 Politeknik Prestasi Prima - All Rights Reserved.</span>
              <div className="flex items-center gap-6">
                 <Link href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</Link>
                 <Link href="#" className="hover:text-orange-600 transition-colors">Terms of Service</Link>
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
          background: ${theme === 'dark' ? '#1E293B' : '#E2E8F0'};
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${theme === 'dark' ? '#334155' : '#CBD5E1'};
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

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </ThemeProvider>
  );
}
