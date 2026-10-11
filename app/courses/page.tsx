import Link from 'next/link';
import { ArrowLeft, BadgeCheck, BookOpenText, BriefcaseBusiness, ChevronLeft, MessageSquareText } from 'lucide-react';

const categories = [
  'البرمجة',
  'التصميم',
  'الأعمال',
  'اللغة',
  'المالية',
];

const courses = [
  {
    title: 'تطوير واجهات مستخدم',
    category: 'البرمجة',
    lessons: '18 درس',
    level: 'مبتدئ',
    price: '249 ر.س',
  },
  {
    title: 'إدارة المشاريع',
    category: 'الأعمال',
    lessons: '12 درس',
    level: 'متوسط',
    price: '199 ر.س',
  },
  {
    title: 'تصميم تجربة المستخدم',
    category: 'التصميم',
    lessons: '15 درس',
    level: 'متقدم',
    price: '279 ر.س',
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">الدورات</p>
              <h1 className="mt-2 text-3xl font-black">استكشف مساراتك التعليمية</h1>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                العودة
              </Link>
              <Link href="/login" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </header>

        <section className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:text-brand-700"
            >
              {category}
            </button>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <article key={course.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
              <div className="h-44 bg-gradient-to-br from-slate-900 via-brand-700 to-brand-500 p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-medium">{course.category}</span>
                  <BadgeCheck size={18} />
                </div>
                <div className="mt-14">
                  <p className="text-2xl font-black">{course.price}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <BookOpenText size={16} />
                    {course.lessons}
                  </span>
                  <span className="rounded-full bg-brand-50 px-2 py-1 text-brand-700">{course.level}</span>
                </div>
                <h2 className="mt-4 text-2xl font-black text-slate-900">{course.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  دورات مصممة لتزويدك بالمهارات العملية والملموسة عبر مشاريع تطبيقية واقعية.
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <button className="rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                    اشترك الآن
                  </button>
                  <button className="rounded-full border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
                    تفاصيل
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
