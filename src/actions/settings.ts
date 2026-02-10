"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import { getCurrentAdmin, checkRole } from "@/lib/auth-utils";
import { createAuditLog } from "@/lib/audit";

export async function updateSetting(key: string, value: string) {
  try {
    const admin = await checkRole(["SUPER_ADMIN"]);
    
    await prisma.setting.upsert({
      where: { key },
      update: { value },
      create: { key, value }
    });
    
    await createAuditLog({
      adminId: admin.id,
      action: "UPDATE",
      entity: "Setting",
      details: { key, value }
    });

    revalidatePath("/admin/settings");
    return { success: true };
  } catch (error: any) {
    console.error("Error updating setting:", error);
    return { success: false, error: error.message || "Failed to update setting" };
  }
}

export async function updateMultipleSettings(settings: Record<string, string>) {
  try {
    const admin = await checkRole(["SUPER_ADMIN"]);

    await Promise.all(
      Object.entries(settings).map(([key, value]) =>
        prisma.setting.upsert({
          where: { key },
          update: { value },
          create: { key, value }
        })
      )
    );
    
    await createAuditLog({
      adminId: admin.id,
      action: "UPDATE",
      entity: "System Settings",
      details: { updatedKeys: Object.keys(settings) }
    });

    revalidatePath("/admin/settings");
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    console.error("Error updating settings:", error);
    return { success: false, error: error.message || "Failed to update settings" };
  }
}

export async function getSetting(key: string) {
  try {
    const setting = await prisma.setting.findUnique({
      where: { key }
    });
    return setting?.value || null;
  } catch (error) {
    console.error("Error getting setting:", error);
    return null;
  }
}

export async function getAllSettings() {
  try {
    const settings = await prisma.setting.findMany();
    return settings.reduce((acc: Record<string, string>, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {});
  } catch (error) {
    console.error("Error getting settings:", error);
    return {};
  }
}
