import { prisma } from "./prisma";

export async function createAuditLog({
  adminId,
  action,
  entity,
  entityId,
  details,
  ipAddress,
  userAgent,
}: {
  adminId: string;
  action: string;
  entity: string;
  entityId?: string;
  details?: any;
  ipAddress?: string;
  userAgent?: string;
}) {
  try {
    await prisma.auditLog.create({
      data: {
        adminId,
        action,
        entity,
        entityId,
        details,
        ipAddress,
        userAgent,
      },
    });
  } catch (error) {
    console.error("Failed to create audit log:", error);
  }
}
