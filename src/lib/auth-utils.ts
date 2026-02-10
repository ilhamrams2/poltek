import { createClient } from "./supabase-server";
import { prisma } from "./prisma";

export async function getCurrentAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const admin = await prisma.admin.findUnique({
    where: { email: user.email },
  });

  return admin;
}

export async function checkRole(allowedRoles: string[]) {
  const admin = await getCurrentAdmin();
  if (!admin || !allowedRoles.includes(admin.role)) {
    throw new Error("Unauthorized: Insufficient permissions");
  }
  return admin;
}
