import { PrismaClient } from "@prisma/client";

//install prisma documentation
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };
export const prisma = globalForPrisma.prisma || new PrismaClient();
globalForPrisma.prisma = prisma;

export default prisma;