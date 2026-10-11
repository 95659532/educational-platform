import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// تشفير كلمة المرور باستخدام bcrypt
// يأخذ كلمة المرور النصية ويرجع نسختها المشفرة
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// التحقق من كلمة المرور
// يقارن كلمة المرور النصية مع النسخة المشفرة المحفوظة في قاعدة البيانات
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// إنشاء رمز JWT (JSON Web Token)
// يستخدم لحفظ بيانات المستخدم في Token آمن
interface UserToken {
  id: string;
  email: string;
  role: string;
}

export function createToken(user: UserToken): string {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
}

// التحقق من صحة رمز JWT
// يفك تشفير الـ Token والتحقق من صحته
export function verifyToken(token: string): UserToken | null {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'secret'
    ) as UserToken;
    return decoded;
  } catch (error) {
    return null;
  }
}

// البحث عن مستخدم بواسطة البريد الإلكتروني
export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

// البحث عن مستخدم بواسطة المعرف
export async function getUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
  });
}

// تحديث بيانات المستخدم
export async function updateUser(
  id: string,
  data: {
    name?: string;
    avatar?: string;
    bio?: string;
    phone?: string;
  }
) {
  return prisma.user.update({
    where: { id },
    data,
  });
}
