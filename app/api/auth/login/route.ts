import { NextResponse } from 'next/server';
import { verifyPassword, createToken, getUserByEmail } from '@/lib/auth';

// تسجيل الدخول
// يتحقق من البريد وكلمة المرور ويرجع رمز JWT إذا كانت البيانات صحيحة
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // التحقق من أن البريد وكلمة المرور مملوءة
    if (!email || !password) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني وكلمة المرور مطلوبة' },
        { status: 400 }
      );
    }

    // البحث عن المستخدم بالبريد الإلكتروني
    const user = await getUserByEmail(email);

    if (!user) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' },
        { status: 401 }
      );
    }

    // التحقق من كلمة المرور
    const isPasswordValid = await verifyPassword(password, user.passwordHash);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' },
        { status: 401 }
      );
    }

    // إنشاء رمز JWT
    const token = createToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    // إرجاع البيانات مع الرمز
    return NextResponse.json(
      {
        message: 'تم تسجيل الدخول بنجاح',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    );
  }
}
