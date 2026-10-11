import { NextResponse } from 'next/server';
import { verifyToken, getUserById } from '@/lib/auth';

// التحقق من صحة الرمز واستعادة بيانات المستخدم
// يستخدم في الصفحات المحمية للتحقق من أن المستخدم لا يزال مسجلاً
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { error: 'الرمز مطلوب' },
        { status: 400 }
      );
    }

    // التحقق من صحة الرمز
    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.json(
        { error: 'الرمز غير صحيح أو منتهي الصلاحية' },
        { status: 401 }
      );
    }

    // الحصول على بيانات المستخدم من قاعدة البيانات
    const user = await getUserById(decoded.id);

    if (!user) {
      return NextResponse.json(
        { error: 'المستخدم غير موجود' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        valid: true,
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
    console.error('Verify error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    );
  }
}
