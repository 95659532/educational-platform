import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CalendarCheck2,
  ChartColumnBig,
  CheckCircle2,
  Clock3,
  ListTodo,
  PlayCircle,
  Trophy,
} from 'lucide-react';

const cards = [
  { title: 'الدورات الحالية', value: '08', icon: BookOpen },
  { title: 'ساعات التعلم', value: '72h', icon: Clock3 },
  { title: 'الإنجازات', value: '06', icon: Trophy },
  { title: 'التقدم العام', value: '82%', icon: ChartColumnBig },
];

const courseList = [
  { name: 'تطوير الويب', progress: '78%', due: 'اليوم', status: 'متقدم' },
  { name: 'تصميم واجهات', progress: '54%', due: 'غداً', status: 'قيد التنفيذ' },
  { name: 'تحليل البيانات', progress: '92%', due: 'الأسبوع القادم', status: 'مكتمل جزئياً' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">لوحة التحكم</p>
            <h1 className="mt-2 text-3xl font-black">مرحباً، محمد</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
              الصفحة الرئيسية
            </Link>
            <Link href="/courses" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
              متابعة الدورات
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-4">
          {cards.map(({ title, value, icon: Icon }) => (
            <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{title}</p>
                  <p className="mt-2 text-3xl font-black text-slate-900">{value}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon size={20} />
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-slate-900">دوراتي الحالية</h2>
              <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-medium text-brand-700">
                عرض الكل <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-6 space-y-5">
              {courseList.map((course) => (
                <div key={course.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-lg font-bold text-slate-900">{course.name}</p>
                      <p className="mt-1 text-sm text-slate-500">تاريخ التسليم: {course.due}</p>
                    </div>
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
                      {course.status}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                      <span>التقدم</span>
                      <span>{course.progress}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent"
                        style={{ width: course.progress }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <CalendarCheck2 size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">الجدول اليومي</p>
                  <p className="text-lg font-bold text-slate-900">جلسة مباشرة 18:00</p>
                </div>
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                <PlayCircle size={16} />
                الانضمام إلى الجلسة
              </button>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black text-slate-900">أهداف هذا الأسبوع</h3>
              <ul className="mt-5 space-y-4">
                {[
                  'إكمال وحدة Next.js المتقدمة',
                  'حل واجب التصميم رقم 3',
                  'مراجعة 3 دروس مسجلة',
                ].map((goal) => (
                  <li key={goal} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="text-emerald-500" size={18} />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900">روتين اليوم</h2>
            <div className="flex items-center gap-2 text-sm font-medium text-brand-700">
              <ListTodo size={16} />
              3 مهام معلقة
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              'مشاهدة فيديو HTML Fundamentals',
              'إكمال اختبار البرمجة',
              'مراجعة خطة المشروع النهائي',
            ].map((task, index) => (
              <div key={task} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Task {index + 1}</p>
                <p className="mt-3 font-semibold text-slate-800">{task}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
