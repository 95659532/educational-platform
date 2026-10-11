import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  ChartColumnBig,
  ChevronRight,
  Clock3,
  GraduationCap,
  Layers3,
  MessageSquareQuote,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

const stats = [
  { label: 'طلاب نشطون', value: '24K+' },
  { label: 'دورات مميزة', value: '320+' },
  { label: 'نسبة إكمال', value: '92%' },
  { label: 'مدربين خبراء', value: '150+' },
];

const quickStats = [
  { icon: Users, value: '12.5K', label: 'متعلم مسجل' },
  { icon: BookOpen, value: '320', label: 'دروس مكتملة' },
  { icon: ShieldCheck, value: '99.9%', label: 'موثوقية' },
];

const courses = [
  {
    title: 'تطوير الويب الاحترافي',
    category: 'برمجة',
    price: '299 ر.س',
    duration: '8 أسابيع',
    lessons: '28 درس',
    badge: 'الأكثر مبيعاً',
    rating: '4.9',
  },
  {
    title: 'تصميم تجربة المستخدم',
    category: 'تصميم',
    price: '249 ر.س',
    duration: '6 أسابيع',
    lessons: '18 درس',
    badge: 'جديد',
    rating: '4.8',
  },
  {
    title: 'تحليل البيانات',
    category: 'أعمال',
    price: '349 ر.س',
    duration: '10 أسابيع',
    lessons: '32 درس',
    badge: 'مميز',
    rating: '4.9',
  },
];

const features = [
  {
    icon: Layers3,
    title: 'مسارات تعليمية متدرجة',
    text: 'تم تصميم كل مسار ليبدأ من الأساسيات ويصل إلى التطبيق العملي.',
  },
  {
    icon: TrendingUp,
    title: 'متابعة تقدمك',
    text: 'لوحة تحكم تركز على الإنجازات ونسب التقدم والتفاعل اليومي.',
  },
  {
    icon: GraduationCap,
    title: 'خبراء فعليون',
    text: 'تعلم من مدربين يعملون في السوق ويتحدثون بلغة ذات تطبيق مباشر.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'مهارات سوق العمل',
    text: 'بنية تعليمية تركز على المشاريع والمهارات المطلوبة في الوظائف الحديثة.',
  },
];

const steps = [
  'اختر المسار المناسب لك',
  'تابع الدروس والتمارين',
  'بني مشاريع عملية',
  'احصل على شهادتك',
];

const testimonials = [
  {
    name: 'سارة الحربي',
    role: 'مصممة تجربة مستخدم',
    quote: 'المنصة احترافية جدًا، والمحتوى عملي وذو قيمة حقيقية في سوق العمل.',
  },
  {
    name: 'أحمد الزهراني',
    role: 'مطور واجهات',
    quote: 'لوحة المتابعة والدروس تخلق تجربة تعلم ممتعة ومركزة على التطبيق العملي.',
  },
  {
    name: 'ليلى البكري',
    role: 'محللة بيانات',
    quote: 'اخترت مسار تحليل البيانات ووجدت محتوى واضحًا وعمليات قابلة للتنفيذ فعليًا.',
  },
];

const pricing = [
  {
    name: 'الخطة الأساسية',
    price: '99',
    features: ['دخول كامل للدورات', 'تقييمات يومية', 'دعم أساسي'],
    highlight: false,
  },
  {
    name: 'الخطة الاحترافية',
    price: '199',
    features: ['جميع الدورات', 'شهادات معتمدة', 'جلسات مباشرة', 'مشاركة المشاريع'],
    highlight: true,
  },
  {
    name: 'للفرق والمؤسسات',
    price: '399',
    features: ['لوحة تحكم للإدارة', 'تخصيص المحتوى', 'دعم مخصص'],
    highlight: false,
  },
];

const faqs = [
  { q: 'هل المنصة مناسبة للمبتدئين؟', a: 'نعم، تم تصميم المسارات لتناسب جميع المستويات مع دعم تدريجي وتفسيرات واضحة.' },
  { q: 'هل أستطيع الوصول من الهاتف؟', a: 'نعم، المنصة متجاوبة بالكامل، ويمكنك التعلم من الهاتف أو الكمبيوتر أو الجهاز اللوحي.' },
  { q: 'هل يوجد شهادات؟', a: 'نعم، كل مسار يضمن شهادة معتمدة عند إكمال النشاطات والتقييمات المطلوبة.' },
  { q: 'هل يمكن للمؤسسات شراء اشتراكات؟', a: 'بالتأكيد، لدينا خطط مخصصة للفرق والمؤسسات مع إدارة متقدمة.' },
];

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-black text-white shadow-soft">
              E
            </div>
            <div>
              <p className="text-xl font-black text-slate-900">EduNova</p>
              <p className="text-[11px] text-slate-500">منصة التعلم الرقمي</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="#about">عن المنصة</Link>
            <Link href="#courses">الدورات</Link>
            <Link href="#features">المزايا</Link>
            <Link href="#pricing">الأسعار</Link>
            <Link href="#faq">الأسئلة الشائعة</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:text-brand-700">تسجيل الدخول</Link>
            <Link href="/courses" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700">ابدأ الآن</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(13,148,136,0.15),_transparent_20%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
              <Sparkles size={16} /> تعلم ذكي، مهارات حقيقية
            </span>

            <h1 className="mt-8 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              المنصة التعليمية التي تحول مهاراتك إلى واقع ملموس.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              اكتسب مهارات سوق العمل من خلال مسارات تعليمية احترافية، محتوى عملي، ودعم مستمر يساعدك
              على التقدم بثقة.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/courses" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700">
                استكشف الدورات <ArrowLeft size={18} />
              </Link>
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700">
                <PlayCircle size={18} /> مشاهدة التجربة
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg gap-4 sm:grid-cols-3">
              {quickStats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                  <Icon className="text-brand-600" size={20} />
                  <p className="mt-3 text-2xl font-black text-slate-900">{value}</p>
                  <p className="text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
              <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">مسارك الحالي</p>
                    <h3 className="mt-2 text-2xl font-black">تطوير الويب</h3>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">+24% هذا الشهر</span>
                </div>

                <div className="mt-8 space-y-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>التقدم العام</span>
                      <span>78%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-700">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-brand-400 to-teal-400" />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-800 p-4">
                      <p className="text-xs text-slate-300">الوحدات المكتملة</p>
                      <p className="mt-2 text-2xl font-black">12</p>
                    </div>
                    <div className="rounded-2xl bg-slate-800 p-4">
                      <p className="text-xs text-slate-300">الساعات</p>
                      <p className="mt-2 text-2xl font-black">24h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-300">الدروس القادمة</p>
                      <p className="mt-2 font-semibold">Next.js المتقدم</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white">
                      <Clock3 size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-3xl font-black text-slate-900">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">الدورات</p>
              <h2 className="mt-3 text-3xl font-black text-slate-900">اختر مسارك المفضل</h2>
            </div>
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-medium text-brand-700">
              عرض الكل <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {courses.map((course) => (
              <article key={course.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-44 bg-gradient-to-br from-brand-500 via-brand-600 to-sky-500 p-5 text-white">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="rounded-full bg-white/15 px-2 py-1">{course.category}</span>
                    <span className="rounded-full bg-white/15 px-2 py-1">{course.badge}</span>
                  </div>
                  <div className="mt-12 flex items-center justify-between">
                    <p className="text-2xl font-black">{course.price}</p>
                    <div className="rounded-full bg-white/10 p-2">
                      <GraduationCap size={18} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="flex items-center gap-2"><Clock3 size={16} /> {course.duration}</span>
                    <span className="flex items-center gap-2"><Star size={16} fill="currentColor" className="text-amber-400" /> {course.rating}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black text-slate-900">{course.title}</h3>
                  <p className="mt-3 text-sm text-slate-500">{course.lessons}</p>

                  <Link href="/courses/web-development" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                    ابدأ الآن <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">لماذا نحن؟</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">جميع ما تحتاجه لتعلّم أفضل</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon size={28} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">كيف تبدأ؟</p>
              <h2 className="mt-3 text-3xl font-black">رحلة تعلم ميسرة حتى الوصول للنتيجة</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step} className="rounded-[1.75rem] border border-slate-700 bg-slate-800 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-base font-semibold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">التقييمات</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">آراء طلابنا</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <MessageSquareQuote className="mt-5 text-slate-400" size={28} />
              <p className="mt-4 text-lg leading-8 text-slate-600">“{item.quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-black text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">الأسعار</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">اختر الخطة المناسبة لك</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div key={plan.name} className={`rounded-[2rem] border p-7 shadow-soft ${plan.highlight ? 'border-brand-500 bg-brand-50 shadow-brand-100' : 'border-slate-200 bg-white'}`}>
                <p className="text-lg font-bold text-slate-900">{plan.name}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="pb-1 text-sm text-slate-500">ر.س / شهر</span>
                </div>

                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <BadgeCheck className="text-emerald-500" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold ${plan.highlight ? 'bg-brand-600 text-white hover:bg-brand-700' : 'border border-slate-200 bg-white text-slate-700 hover:border-brand-500 hover:text-brand-700'}`}>
                  {plan.highlight ? 'اختر الخطة' : 'اطلب الخطة'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">الأسئلة الشائعة</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">أسئلة قد تهمك</h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-lg font-bold text-slate-900">{faq.q}</p>
              <p className="mt-3 text-base leading-7 text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] bg-gradient-to-r from-brand-600 to-brand-700 p-8 text-white shadow-soft md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">ابدأ اليوم</p>
              <h2 className="mt-3 text-3xl font-black">انضم إلى مجتمع المتعلمين الآن</h2>
            </div>
            <Link href="/login" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-700 transition hover:bg-slate-100">إنشاء حساب</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

