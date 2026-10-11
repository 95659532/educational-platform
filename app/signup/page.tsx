'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft, Lock, Mail, User } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // تعديل بيانات النموذج عند الكتابة
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // معالجة تسجيل حساب جديد
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'حدث خطأ في التسجيل');
        return;
      }

      // حفظ الرمز في الكوكيز
      document.cookie = `token=${data.token}; path=/; max-age=604800`;

      // إعادة التوجيه إلى لوحة التحكم
      router.push('/dashboard');
    } catch (err) {
      setError('حدث خطأ في الاتصال بالخادم');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 to-slate-100 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
          <ArrowLeft size={16} /> العودة للرئيسية
        </Link>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">إنشاء حساب</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">انضم إلى EduNova</h1>
            <p className="mt-2 text-slate-600">ابدأ رحلتك التعليمية معنا اليوم</p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSignup}>
            {/* رسالة الخطأ */}
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* الاسم */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">الاسم الكامل</label>
              <div className="relative">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 pr-12 pl-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white"
                  placeholder="أحمد محمد"
                />
              </div>
            </div>

            {/* البريد الإلكتروني */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 pr-12 pl-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* كلمة المرور */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 pr-12 pl-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* تأكيد كلمة المرور */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">تأكيد كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 pr-12 pl-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* الشروط والأحكام */}
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" required className="h-4 w-4 accent-brand-600" />
              أوافق على <Link href="#" className="text-brand-700 underline">الشروط والأحكام</Link> و <Link href="#" className="text-brand-700 underline">سياسة الخصوصية</Link>
            </label>

            {/* زر التسجيل */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white transition disabled:opacity-50 hover:bg-brand-700"
            >
              {loading ? 'جاري التسجيل...' : 'إنشاء الحساب'}
            </button>
          </form>

          {/* رابط تسجيل الدخول */}
          <div className="mt-6 text-center text-sm text-slate-600">
            هل لديك حساب بالفعل؟{' '}
            <Link href="/login" className="text-brand-700 font-medium underline">
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
