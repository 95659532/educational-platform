import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { hashPassword, createToken } from '@/lib/auth';

const prisma = new PrismaClient();

// تسجيل مستخدم جديد
// يقبل البريد والاسم وكلمة المرور ويقوم بتسجيل مستخدم جديد في قاعدة البيانات
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, confirmPassword } = body;

    // التحقق من أن جميع الحقول مملوءة
    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: 'جميع الحقول مطلوبة' },
        { status: 400 }
      );
    }

    // التحقق من تطابق كلمات المرور
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: 'كلمات المرور غير متطابقة' },
        { status: 400 }
      );
    }

    // التحقق من طول كلمة المرور
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'كلمة المرور يجب أن تكون 8 أحرف على الأقل' },
        { status: 400 }
      );
    }

    // التحقق من صيغة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'صيغة البريد الإلكتروني غير صحيحة' },
        { status: 400 }
      );
    }

    // التحقق من عدم وجود مستخدم بنفس البريد
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'هذا البريد الإلكتروني مستخدم سابقاً' },
        { status: 409 }
      );
    }

    // تشفير كلمة المرور
    const passwordHash = await hashPassword(password);

    // إنشاء المستخدم الجديد في قاعدة البيانات
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: 'STUDENT', // الدور الافتراضي هو طالب
      },
    });

    // إنشاء رمز JWT
    const token = createToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    // إرجاع البيانات مع الرمز
    return NextResponse.json(
      {
        message: 'تم إنشاء الحساب بنجاح',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    );
  }
}
