import { getSession } from "./auth-paseto";
import { createClient } from "./supabase-server";
import { prisma } from "./prisma";

export async function getCurrentAdmin() {
  // 1. Try PASETO session first (The new primary auth)
  const pasetoSession = await getSession();
  if (pasetoSession) {
    return {
      id: pasetoSession.userId,
      email: pasetoSession.email,
      role: pasetoSession.role,
      name: pasetoSession.email.split('@')[0]
    };
  }

  // 2. Fallback to Supabase (For backward compatibility or transition)
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  // Check if this admin exists in Database
  let admin = await prisma.admin.findUnique({
    where: { email: user.email },
  });

  // AUTO-BOOTSTRAP: If no admin exists for this user, and we want to allow them (e.g., first user or in dev)
  if (!admin) {
    // In development, ALWAYS bootstrap the current user as SUPER_ADMIN if they don't exist
    // This allows you to login with any account and immediately have access
    if (process.env.NODE_ENV === 'development') {
      try {
        admin = await prisma.admin.create({
          data: {
            email: user.email!,
            name: user.user_metadata?.full_name || user.email?.split('@')[0],
            role: "SUPER_ADMIN",
          },
        });
        console.log("Auto-bootstrapped new Super Admin:", admin.email);
      } catch (err) {
        console.error("Failed to auto-bootstrap admin:", err);
      }
    }
  } else if (process.env.NODE_ENV === 'development' && admin.role !== 'SUPER_ADMIN') {
      // FORCE UPGRADE: If user exists but isn't SUPER_ADMIN in dev, upgrade them.
      console.log(`Dev Mode: Force upgrading ${admin.email} from ${admin.role} to SUPER_ADMIN`);
      admin = await prisma.admin.update({
        where: { email: admin.email },
        data: { role: 'SUPER_ADMIN' }
      });
  }

  return admin;
}

export async function checkRole(allowedRoles: string[]) {
  const admin = await getCurrentAdmin();
  console.log("CheckRole - Current Admin:", admin?.email, "Role:", admin?.role);
  console.log("CheckRole - Allowed Roles:", allowedRoles);
  
  if (!admin || !allowedRoles.includes(admin.role)) {
    console.error("Permission Denied for:", admin?.email);
    throw new Error(`Unauthorized: Insufficient permissions (Role: ${admin?.role || 'Guest'})`);
  }
  return admin;
}
