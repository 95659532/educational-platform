import Link from 'next/link';
import { BarChart3, BookOpen, CreditCard, LayoutDashboard, MessageSquareText, UserCog, Users } from 'lucide-react';

const metrics = [
  { title: 'الطلاب المسجلين', value: '12.4K', icon: Users },
  { title: 'الدورات النشطة', value: '320', icon: BookOpen },
  { title: 'الإيرادات', value: 'SAR 18K', icon: CreditCard },
  { title: 'معدل التفاعل', value: '91%', icon: BarChart3 },
];

const cards = [
  { title: 'إدارة الطلبات', value: '486', icon: LayoutDashboard },
  { title: 'الرسائل', value: '132', icon: MessageSquareText },
  { title: 'المدربين', value: '34', icon: UserCog },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">لوحة الإدارة</p>
              <h1 className="mt-2 text-3xl font-black">نظرة عامة على المنصة</h1>
            </div>
            <Link href="/" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">العودة للموقع</Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-4">
          {metrics.map(({ title, value, icon: Icon }) => (
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
            <h2 className="text-2xl font-black text-slate-900">إحصائيات الأداء</h2>
            <div className="mt-6 space-y-5">
              {[
                { label: 'مسارات التعليم', progress: '82%', color: 'bg-brand-600' },
                { label: 'الطلبة النشطون', progress: '74%', color: 'bg-emerald-500' },
                { label: 'التحويلات', progress: '68%', color: 'bg-amber-500' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>{item.label}</span>
                    <span>{item.progress}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-200">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: item.progress }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
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
          </div>
        </section>
      </div>
    </main>
  );
}
