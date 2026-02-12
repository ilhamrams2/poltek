import { NextResponse, type NextRequest } from "next/server";
import { decryptPaseto } from "@/lib/auth-paseto";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("admin_token")?.value;

  // Proteksi rute admin
  if (pathname.startsWith("/admin")) {
    // Jika mencoba akses login tapi sudah punya token valid
    if (pathname.startsWith("/admin/login") && token) {
      const payload = await decryptPaseto(token);
      if (payload) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
    }

    // Proteksi area admin umum
    if (!pathname.startsWith("/admin/login")) {
      if (!token) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }

      const payload = await decryptPaseto(token);
      if (!payload) {
        // Token expired atau dimanipulasi
        const response = NextResponse.redirect(new URL("/admin/login", request.url));
        response.cookies.delete("admin_token");
        return response;
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder assets
     */
    '/admin/:path*',
  ],
};
