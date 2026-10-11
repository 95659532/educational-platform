import Link from 'next/link';
import { ArrowLeft, ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'هل المنصة مناسبة للمبتدئين؟', a: 'نعم، تم تصميم المسارات لتناسب جميع المستويات مع دعم تدريجي وتفسيرات واضحة.' },
  { q: 'هل يوجد شهادات؟', a: 'نعم. كل مسار يتيح شهادة عند إكمال التقييمات والمهام المطلوبة.' },
  { q: 'هل يمكن التعلم من الهاتف؟', a: 'نعم، المنصة متجاوبة بالكامل مع جميع الأجهزة.' },
  { q: 'هل هناك دعم فني؟', a: 'نعم، لدينا فريق دعم متاح عبر البريد الإلكتروني أو الاتصال المباشر.' },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
          <ArrowLeft size={16} /> العودة للرئيسية
        </Link>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">الأسئلة الشائعة</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">كل ما تريد أن تعرفه</h1>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-lg font-bold text-slate-900">{item.q}</p>
                  <ChevronDown className="text-slate-500" size={18} />
                </div>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
