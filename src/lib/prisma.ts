import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query'] // exibe no log as querys que estão sendo executadas
})