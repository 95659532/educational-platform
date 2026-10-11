import { PrismaClient } from '@prisma/client';

// إنشاء نسخة واحدة من Prisma Client لتجنب إنشاء عدة اتصالات
// هذا مهم جداً في بيئة التطوير
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// التحقق من وجود متغير عام للـ Prisma (في TypeScript)
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
