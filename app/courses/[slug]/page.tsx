import Link from 'next/link';
import { ArrowLeft, ArrowRight, BadgeCheck, BookOpen, Clock3, PlayCircle, Star, Users } from 'lucide-react';

const course = {
  slug: 'web-development',
  title: 'تطوير الويب الاحترافي',
  category: 'برمجة',
  badge: 'الأكثر مبيعاً',
  rating: '4.9',
  students: '12.4K',
  duration: '8 أسابيع',
  lessons: '28 درس',
  price: '299 ر.س',
  instructor: 'سارة محمد',
  overview: 'تعلم بناء مواقع إلكترونية احترافية من الصفر حتى الإطلاق، مع التركيز على HTML، CSS، JavaScript، React، وأفضل الممارسات في تطوير الواجهة وتجربة المستخدم.',
  outcomes: ['بناء صفحات ويب متجاوبة', 'تطوير واجهات عملية باستخدام React', 'ممارسة مشاريع واقعية', 'فهم أفضل ممارسات SEO و UX'],
  modules: [
    { title: 'مقدمة في HTML و CSS', lessons: '4 دروس' },
    { title: 'JavaScript المتقدم', lessons: '6 دروس' },
    { title: 'React Framework', lessons: '8 دروس' },
    { title: 'مشروع نهائي', lessons: '3 دروس' },
  ],
};

export default function CourseDetailPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <Link href="/courses" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
          <ArrowLeft size={16} /> العودة إلى الدورات
        </Link>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
          <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-8 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium">{course.category}</span>
                <h1 className="mt-4 text-4xl font-black">{course.title}</h1>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-right">
                <p className="text-sm text-brand-100">السعر</p>
                <p className="mt-2 text-3xl font-black">{course.price}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2"><Star size={16} fill="currentColor" className="text-amber-400" /> {course.rating}</span>
                <span className="inline-flex items-center gap-2"><Users size={16} /> {course.students}</span>
                <span className="inline-flex items-center gap-2"><Clock3 size={16} /> {course.duration}</span>
                <span className="inline-flex items-center gap-2"><BookOpen size={16} /> {course.lessons}</span>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-600">{course.overview}</p>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-slate-900">ماذا ستتعلم؟</h2>
                <ul className="mt-5 space-y-4">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-3 text-slate-700">
                      <BadgeCheck className="text-emerald-500" size={18} />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-slate-900">هيكل الدورة</h2>
                <div className="mt-5 space-y-3">
                  {course.modules.map((module, index) => (
                    <div key={module.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-black text-brand-700">{index + 1}</span>
                          <p className="font-semibold text-slate-900">{module.title}</p>
                        </div>
                        <span className="text-sm text-slate-500">{module.lessons}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm text-slate-500">المدرب</p>
              <p className="mt-2 text-2xl font-black text-slate-900">{course.instructor}</p>
              <div className="mt-6 rounded-2xl bg-white p-4">
                <p className="text-sm text-slate-500">الحالة</p>
                <p className="mt-2 text-lg font-bold text-emerald-600">متاح الآن</p>
              </div>

              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                <PlayCircle size={16} /> اشترك الآن
              </button>

              <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700">
                <ArrowRight size={16} /> ابدأ تجربة مجانية
              </button>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
