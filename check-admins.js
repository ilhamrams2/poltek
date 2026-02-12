const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  try {
    const admins = await prisma.admin.findMany();
    console.log('--- ADMIN LIST ---');
    console.log(JSON.stringify(admins, null, 2));
    console.log('------------------');
  } catch (err) {
    console.error('Error fetching admins:', err);
  } finally {
    await prisma.$disconnect();
  }
}

check();
