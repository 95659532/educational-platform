import { NextResponse } from 'next/server';
import { verifyToken, updateUser } from '@/lib/auth';
import prisma from '@/lib/prisma';

// الحصول على بيانات الملف الشخصي للمستخدم
export async function GET(req: Request) {
  try {
    // الحصول على الرمز من رؤوس الطلب
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { error: 'الرمز مطلوب' },
        { status: 401 }
      );
    }

    // التحقق من صحة الرمز
    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.json(
        { error: 'الرمز غير صحيح' },
        { status: 401 }
      );
    }

    // الحصول على بيانات المستخدم
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        bio: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'المستخدم غير موجود' },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Get profile error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    );
  }
}

// تحديث بيانات الملف الشخصي
export async function PUT(req: Request) {
  try {
    // الحصول على الرمز من رؤوس الطلب
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { error: 'الرمز مطلوب' },
        { status: 401 }
      );
    }

    // التحقق من صحة الرمز
    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.json(
        { error: 'الرمز غير صحيح' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { name, avatar, bio, phone } = body;

    // تحديث البيانات
    const updated = await updateUser(decoded.id, {
      name,
      avatar,
      bio,
      phone,
    });

    return NextResponse.json(
      {
        message: 'تم تحديث الملف الشخصي بنجاح',
        user: {
          id: updated.id,
          name: updated.name,
          email: updated.email,
          avatar: updated.avatar,
          bio: updated.bio,
          phone: updated.phone,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update profile error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    );
  }
}
