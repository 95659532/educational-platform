import Link from 'next/link';
import { ArrowLeft, BookOpenCheck, LayoutDashboard, Lock, PlayCircle } from 'lucide-react';

const loginFeatures = [
  'تسجيل دخول آمن ومريح',
  'متابعة التقدم الفردي',
  'لوحة مهام تعليمية مترابطة',
  'إدارة الدروس والاختبارات',
];

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-10">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft lg:grid-cols-2">
        <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-10 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl font-black">E</div>
            <div>
              <p className="text-2xl font-black">EduNova</p>
            </div>
          </div>

          <h1 className="mt-10 text-4xl font-black leading-tight">مرحباً بعودتك إلى رحلة التعلم</h1>
          <p className="mt-4 max-w-md text-base leading-7 text-brand-100">
            تابع مسارك، استكشف الدورات الجديدة، وواصل بناء مهاراتك من خلال منصة تعليمية متكاملة.
          </p>

          <div className="mt-8 space-y-4">
            {loginFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <BookOpenCheck size={16} />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">تسجيل الدخول</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">الدخول إلى الحساب</h2>
            </div>
            <Link href="/" className="text-sm font-medium text-brand-700">العودة</Link>
          </div>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
              <input
                type="email"
                defaultValue="student@edunova.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">كلمة المرور</label>
              <input
                type="password"
                defaultValue="12345678"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-slate-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-brand-600" />
                تذكرني
              </label>
              <a href="#" className="text-brand-700">نسيت كلمة المرور؟</a>
            </div>

            <Link href="/dashboard" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-700">
              <Lock size={18} /> تسجيل الدخول
            </Link>

            <div className="flex items-center gap-3 pt-2 text-sm text-slate-500">
              <span className="h-px flex-1 bg-slate-200" /> أو <span className="h-px flex-1 bg-slate-200" />
            </div>

            <Link href="/courses" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700">
              <PlayCircle size={18} /> تصفح الدورات
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
