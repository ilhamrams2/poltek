import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return response;
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          const { maxAge, ...rest } = options;
          request.cookies.set({
            name,
            value,
            ...rest,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...rest,
          });
        },
        remove(name: string, options: CookieOptions) {
          const { maxAge, ...rest } = options;
          request.cookies.set({
            name,
            value: "",
            ...rest,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...rest,
          });
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Proteksi rute admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!session && !request.nextUrl.pathname.startsWith("/admin/login")) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    
    /* 
    // Redirect ke dashboard jika sudah login tapi akses halaman login
    if (session && request.nextUrl.pathname.startsWith("/admin/login")) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
    */
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
