import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
          <ArrowLeft size={16} /> العودة للرئيسية
        </Link>

        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">تواصل معنا</p>
            <h1 className="mt-3 text-4xl font-black">نحن هنا لمساعدتك</h1>
            <p className="mt-4 text-base leading-7 text-brand-100">نرحب بك في أي وقت، سواء كنت طالباً، مدرباً، أو مؤسسة تبحث عن حلول تعليمية متقدمة.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                <Phone size={18} />
                <span>+966 55 123 4567</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                <Mail size={18} />
                <span>support@edunova.com</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                <MapPin size={18} />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">الاسم الكامل</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500" placeholder="أدخل اسمك" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
              <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500" placeholder="name@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">الرسالة</label>
              <textarea rows={5} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500" placeholder="اكتب رسالتك هنا" />
            </div>
            <button className="w-full rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">إرسال الرسالة</button>
          </form>
        </div>
      </div>
    </main>
  );
}
