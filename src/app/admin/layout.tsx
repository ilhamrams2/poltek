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
  ExternalLink,
  GraduationCap,
  Inbox,
  ShieldAlert,
  ChevronDown,
  Layers,
  FileText,
  Globe,
  HelpCircle,
  Plus,
  AlertCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";
import { getAdminProfile } from "@/actions/cms";

const sidebarCategories = [
  {
    label: "MAIN MENU",
    items: [
      { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      { name: "News Management", href: "/admin/news", icon: Newspaper },
      { name: "Program Studies", href: "/admin/programs", icon: GraduationCap },
      { name: "Media Gallery", href: "/admin/gallery", icon: ImageIcon },
      { name: "Inbox Messages", href: "/admin/inbox", icon: Inbox },
      { name: "Audit Logs", href: "/admin/audit", icon: ShieldAlert },
      { name: "System Settings", href: "/admin/settings", icon: Settings },
    ]
  },
  {
    label: "EKSTERNAL",
    items: [
      { name: "Dokumentasi API", href: "#", icon: FileText },
      { name: "Dokumentasi Sistem", href: "#", icon: HelpCircle },
      { name: "Lihat Website Utama", href: "/", icon: Globe, external: true },
    ]
  }
];

const pageTitles: Record<string, { title: string, subtitle: string }> = {
  "/admin/dashboard": { title: "Dashboard Overview", subtitle: "Selamat datang kembali, Admin!" },
  "/admin/news": { title: "News Management", subtitle: "Kelola informasi dan berita terbaru" },
  "/admin/news/new": { title: "Buat Berita", subtitle: "Tulis warta baru untuk publik" },
  "/admin/programs": { title: "Program Studies", subtitle: "Manajemen kurikulum prodi" },
  "/admin/programs/new": { title: "Tambah Prodi", subtitle: "Konfigurasi program studi baru" },
  "/admin/gallery": { title: "Media Gallery", subtitle: "Koleksi foto dan video kegiatan" },
  "/admin/inbox": { title: "Inbox Messages", subtitle: "Pesan dari pengunjung website" },
  "/admin/audit": { title: "Audit Logs", subtitle: "Rekam jejak aktivitas sistem" },
  "/admin/settings": { title: "System Settings", subtitle: "Konfigurasi parameter aplikasi" },
};

import { Notifications } from "@/components/admin/Notifications";
import { UserDropdown } from "@/components/admin/UserDropdown";

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Get active title
  const activePage = Object.entries(pageTitles).find(([route]) => pathname.startsWith(route));
  const currentTitle = activePage ? activePage[1] : { title: "Admin Panel", subtitle: "Portal Management" };

  const [supabase, setSupabase] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [admin, setAdmin] = useState<any>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    setSupabase(createClient());
    
    // Fetch Admin Profile
    const fetchProfile = async () => {
      try {
        const profile = await getAdminProfile();
        setAdmin(profile);
      } catch (err) {
        console.error("Failed to fetch admin profile:", err);
      } finally {
        setLoadingProfile(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    
    try {
      await fetch("/api/logout", { method: "POST" });
      // Give time for animation
      setTimeout(() => {
        router.push("/admin/login");
        router.refresh();
      }, 400);
    } catch (err) {
      console.error("Logout failed:", err);
      setIsLoggingOut(false);
    }
  };

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Skip layout for login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoggingOut ? (
        <motion.div
          key="logout-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-[#0F172A]/90 backdrop-blur-sm flex flex-col items-center justify-center p-4"
        >
          <div className="relative">
            {/* Center Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-gradient-to-tr from-[#4338CA] via-indigo-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/20">
                <GraduationCap size={28} className="text-white" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center"
          >
            <h2 className="text-white text-sm font-black uppercase tracking-[0.3em] mb-1">
              Admin<span className="text-orange-500">PP</span>
            </h2>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest opacity-60">Sesi Berakhir</p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
          key="admin-layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
          transition={{ duration: 0.3 }}
          className={`flex h-screen bg-[#FDFDFD] text-slate-800 font-sans overflow-hidden`}
        >
      
      {/* SIDEBAR */}
      <aside 
        className={`${
          isSidebarOpen ? "w-72" : "w-0"
        } bg-white transition-all duration-300 ease-in-out flex flex-col relative z-30 border-r border-slate-100`}
      >
        {/* Sidebar Header */}
        <div className="p-8 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#4338CA] to-orange-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 relative group">
               <GraduationCap size={24} className="text-white" />
               <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse"></div>
               </div>
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight leading-none text-slate-900">
                  Admin<span className="text-orange-500">PP</span>
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Portal Management</span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto custom-scrollbar">
          {sidebarCategories.map((category) => (
            <div key={category.label} className="space-y-4">
              {isSidebarOpen && (
                <h3 className="px-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{category.label}</h3>
              )}
              <div className="space-y-1">
                {category.items.map((item) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <div key={item.name} className="space-y-1">
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        className={`group flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 relative ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-50 to-orange-50 text-[#4338CA] border border-orange-100 shadow-md shadow-orange-500/5 ring-1 ring-orange-200"
                            : "text-slate-500 hover:bg-slate-50 hover:text-[#4338CA]"
                        }`}
                      >
                        <div className={`${isActive ? "text-[#4338CA]" : "text-slate-400 group-hover:text-indigo-500"}`}>
                          <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                        </div>
                        {isSidebarOpen && (
                          <span className={`flex-1 font-bold text-[13px] ${isActive ? "text-slate-900" : ""}`}>
                            {item.name}
                          </span>
                        )}
                        {isActive && isSidebarOpen && (
                          <div className={`absolute left-0 w-1.5 h-6 bg-gradient-to-b from-[#4338CA] to-orange-500 rounded-r-full shadow-lg`} />
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-50">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-5 py-4 text-slate-400 hover:bg-rose-50 hover:text-rose-600 rounded-2xl transition-all duration-300 font-bold group"
          >
            <LogOut size={20} className="text-slate-400 group-hover:text-rose-600" />
            {isSidebarOpen && (
              <span className="text-[13px] font-bold">Keluar Panel</span>
            )}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className={`h-22 px-10 flex items-center justify-between z-20 bg-white/70 backdrop-blur-xl border-b border-slate-50`}>
          <div className="flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-3 hover:bg-slate-100 rounded-2xl text-slate-400 transition-all flex items-center justify-center active:scale-90">
                <Menu size={20} />
             </button>
             <div>
                <h1 className="text-lg font-black text-slate-900 leading-none tracking-tight">{currentTitle.title}</h1>
                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter opacity-70">{currentTitle.subtitle}</p>
             </div>
          </div>

          <div className="flex items-center gap-6">
             <Notifications />
             <UserDropdown admin={admin} onLogout={handleLogout} />
          </div>
        </header>

         <main className={`flex-1 overflow-y-auto px-10 py-6 custom-scrollbar bg-[#FDFDFD]`}>
            <div className="max-w-[1600px] mx-auto">
              {!loadingProfile && !admin && (
                <div className="mb-8 p-6 bg-rose-50 border border-rose-100 rounded-[2rem] flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                   <div className="w-12 h-12 bg-rose-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-rose-500/20">
                      <AlertCircle size={24} />
                   </div>
                   <div>
                      <h4 className="text-sm font-black text-rose-900 uppercase tracking-tight">Akun Tidak Terdaftar</h4>
                      <p className="text-xs font-bold text-rose-600/80">Email Anda tidak terdaftar sebagai admin. Anda hanya memiliki akses baca terbatas.</p>
                   </div>
                   <button 
                     onClick={handleLogout}
                     className="ml-auto px-4 py-2 bg-white text-rose-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-rose-100 hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                   >
                     Ganti Akun
                   </button>
                </div>
              )}
              {children}
            </div>
           
           {/* Footer Copyright */}
           <footer className={`mt-20 py-8 text-center text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]`}>
              <span>&copy; 2026 SMK PRESTASI PRIMA • DEVELOPED BY ARDY & ABI</span>
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
          background: #F1F5F9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #E2E8F0;
        }
      `}</style>
    </motion.div>
      )}
    </AnimatePresence>
  );
}

import { AdminUIProvider } from "@/providers/AdminUIProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminUIProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AdminUIProvider>
  );
}
