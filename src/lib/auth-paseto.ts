// @ts-ignore
import { encrypt, decrypt } from "paseto-ts/v4";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.PASETO_SECRET_KEY || "yoursecretkeymustbe32characters!!";
// Edge-friendly key construction (Uint8Array instead of Buffer)
const encoder = new TextEncoder();
const magicBytes = encoder.encode("k4.local.");
const rawKeyBytes = encoder.encode(SECRET_KEY.padEnd(32).slice(0, 32));
const encodedKey = new Uint8Array(magicBytes.length + rawKeyBytes.length);
encodedKey.set(magicBytes);
encodedKey.set(rawKeyBytes, magicBytes.length);

export interface AdminPayload {
  userId: string;
  role: "SUPER_ADMIN" | "NEWS_EDITOR" | "ACADEMIC_ADMIN";
  email: string;
  iat?: string;
  exp?: string;
}

export async function encryptPaseto(payload: any) {
  return await encrypt(encodedKey, payload);
}

export async function decryptPaseto(token: string) {
  try {
    const { payload } = await decrypt(encodedKey, token);
    return payload as unknown as AdminPayload;
  } catch (error) {
    console.error("PASETO Decryption failed:", error);
    return null;
  }
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) return null;
  return await decryptPaseto(token);
}
