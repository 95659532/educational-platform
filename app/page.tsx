import Link from 'next/link';
import {
  ArrowLeft,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  Clock3,
  GraduationCap,
  MessageSquareQuote,
  PlayCircle,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';

const stats = [
  { label: 'طلاب نشطون', value: '24K+' },
  { label: 'دورات متاحة', value: '320+' },
  { label: 'مدربين خبراء', value: '150+' },
  { label: 'معدل الإكمال', value: '92%' },
];

const courses = [
  {
    title: 'تطوير الويب الاحترافي',
    category: 'برمجة',
    duration: '8 أسابيع',
    students: '3.2K',
    price: '299 ر.س',
    badge: 'الأكثر مبيعاً',
  },
  {
    title: 'تصميم تجربة المستخدم',
    category: 'تصميم',
    duration: '6 أسابيع',
    students: '2.4K',
    price: '249 ر.س',
    badge: 'جديد',
  },
  {
    title: 'تحليل البيانات',
    category: 'أعمال',
    duration: '10 أسابيع',
    students: '4.1K',
    price: '349 ر.س',
    badge: 'متميز',
  },
];

const features = [
  {
    icon: BookOpen,
    title: 'محتوى تعليمي متكامل',
    text: 'مكتبات فيديو، ملفات، وملخصات مصممة لتسهيل التعلم.',
  },
  {
    icon: TrendingUp,
    title: 'متابعة تقدم الطالب',
    text: 'لوحات تقدم تتيح لك معرفة التقدم وتحفيز الطالب باستمرار.',
  },
  {
    icon: Users,
    title: 'تعلم جماعي',
    text: 'مجتمعات تفاعلية ومناقشات تعمل على تحسين تجربة التعلم.',
  },
];

const testimonials = [
  {
    name: 'سارة الحربي',
    role: 'مصممة تجربة مستخدم',
    quote:
      'المنصة رائعة وسهلة الاستخدام، وقد ساعدتني على بناء مهاراتي في مدة قصيرة جدًا.',
  },
  {
    name: 'أحمد الزهراني',
    role: 'مطور واجهات',
    quote:
      'أفضل تجربة تعلم واجهتها بسبب جودة المحتوى وتنوع الدروس وواجهة المتابعة.',
  },
];

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-lg font-bold text-white shadow-soft">
              E
            </div>
            <div>
              <p className="text-xl font-extrabold text-slate-900">EduNova</p>
              <p className="text-xs text-slate-500">منصة تعليمية</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="#about">عن المنصة</Link>
            <Link href="#courses">الدورات</Link>
            <Link href="#features">المزايا</Link>
            <Link href="#reviews">التقييمات</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:text-brand-600"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/courses"
              className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
            >
              ابدأ التعلم
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(42,140,255,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.15),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
              <Sparkles size={16} />
              تعليم ذكي، تجربة احترافية
            </span>

            <h1 className="mt-8 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              تعلم مهاراتك المستقبلية من خلال منصة احترافية ومصممة بعناية.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              ابدأ رحلتك التعليمية مع دورات مميزة، محتوى حديث، متابعة دقيقة للتقدم، وتجربة تفاعلية
              تجمع بين الجودة والسهولة.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700"
              >
                استكشف الدورات
                <ChevronLeft size={18} />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
              >
                <PlayCircle size={18} />
                مشاهدة التجربة
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500" size={18} />
                محتوى مصادق
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500" size={18} />
                دعم فني مستمر
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500" size={18} />
                شهادات معتمدة
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
            <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">مسار التدريب</p>
                  <h3 className="mt-2 text-2xl font-bold">تطوير الويب</h3>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                  +24% هذا الشهر
                </span>
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>التقدم العام</span>
                    <span>78%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-700">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-brand-400 to-accent" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-800 p-4">
                    <p className="text-xs text-slate-300">الوحدات المكتملة</p>
                    <p className="mt-1 text-2xl font-bold">12</p>
                  </div>
                  <div className="rounded-2xl bg-slate-800 p-4">
                    <p className="text-xs text-slate-300">الساعات</p>
                    <p className="mt-1 text-2xl font-bold">24h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-300">الدروس القادمة</p>
                    <p className="mt-2 font-semibold">Next.js المتقدم</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white">
                    <Clock3 size={18} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-3xl font-black text-slate-900">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">الدورات</p>
              <h2 className="mt-3 text-3xl font-black text-slate-900">اختر المسار الذي يناسبك</h2>
            </div>
            <Link href="/courses" className="hidden items-center gap-2 text-sm font-medium text-brand-700 md:inline-flex">
              عرض الكل <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-44 bg-gradient-to-br from-brand-500 via-brand-600 to-sky-500 p-6 text-white">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="rounded-full bg-white/20 px-2 py-1">{course.category}</span>
                    <span className="rounded-full bg-white/15 px-2 py-1">{course.badge}</span>
                  </div>
                  <div className="mt-12 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">{course.price}</p>
                    </div>
                    <div className="rounded-full bg-white/15 p-2">
                      <GraduationCap size={18} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900">{course.title}</h3>
                  <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <Clock3 size={16} /> {course.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users size={16} /> {course.students}
                    </span>
                  </div>
                  <button className="mt-6 w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                    ابدأ الآن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">لماذا نحن؟</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">تجربة تعليمية متكاملة ومميزة</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="reviews" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">آراء الطلاب</p>
            <h2 className="mt-3 text-3xl font-black">ماذا يقول طلابنا عن تجربتهم؟</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[2rem] border border-slate-700 bg-slate-800 p-7">
                <div className="mb-5 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>
                <MessageSquareQuote className="text-slate-400" size={28} />
                <p className="mt-4 text-lg leading-8 text-slate-200">“{item.quote}”</p>
                <div className="mt-6 border-t border-slate-700 pt-4">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-r from-brand-600 to-brand-700 p-8 text-white shadow-soft md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">ابدأ اليوم</p>
              <h2 className="mt-3 text-3xl font-black">انضم إلى مجتمع التعليم الرقمي</h2>
            </div>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-700 transition hover:bg-slate-100"
            >
              إنشاء حساب
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
