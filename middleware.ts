import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

// قائمة الصفحات المحمية التي تتطلب تسجيل دخول
const protectedPaths = ['/dashboard', '/admin', '/profile', '/courses/enrolled'];

// قائمة صفحات المشرف فقط
const adminPaths = ['/admin'];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // التحقق من الصفحات المحمية
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));
  const isAdminPath = adminPaths.some((path) => pathname.startsWith(path));

  if (isProtected) {
    // الحصول على الرمز من الكوكيز
    const token = request.cookies.get('token')?.value;

    // إذا لم يكن هناك رمز، إعادة التوجيه إلى صفحة تسجيل الدخول
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // التحقق من صحة الرمز
    const decoded = verifyToken(token);

    if (!decoded) {
      // إذا كان الرمز غير صحيح، حذف الكوكي وإعادة التوجيه
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('token');
      return response;
    }

    // التحقق من صلاحيات المشرف
    if (isAdminPath && decoded.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // إضافة بيانات المستخدم إلى رؤوس الطلب
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', decoded.id);
    requestHeaders.set('x-user-role', decoded.role);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

// تحديد الصفحات التي يتم تطبيق الـ middleware عليها
export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/profile/:path*', '/courses/enrolled/:path*'],
};
