import { NextResponse } from "next/server";
import { encryptPaseto } from "@/lib/auth-paseto";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // MOCK LOGIN VALIDATION
    // Di aplikasi nyata, cek ke database (Prisma) dan verifikasi password (bcrypt/argon2)
    if (email === "admin@poltek.ac.id" && password === "admin123") {
      const payload = {
        userId: "mock-admin-id",
        role: "SUPER_ADMIN",
        email: email,
      };

      const token = await encryptPaseto(payload);
      const cookieStore = await cookies();

      cookieStore.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 3600, // 1 hour
      });

      return NextResponse.json({ 
        success: true, 
        message: "Login berhasil",
        role: payload.role 
      });
    }

    return NextResponse.json(
      { success: false, error: "Email atau password salah" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan sistem" },
      { status: 500 }
    );
  }
}
