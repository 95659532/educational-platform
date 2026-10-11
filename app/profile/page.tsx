'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, Camera, Mail, Phone, User } from 'lucide-react';

interface UserProfile {
  id: string;
  name: string | null;
  email: string;
  phone: string | null;
  avatar: string | null;
  bio: string | null;
  role: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bio: '',
  });

  // تحميل بيانات المستخدم عند فتح الصفحة
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = document.cookie
          .split('; ')
          .find((row) => row.startsWith('token='))
          ?.split('=')[1];

        if (!token) {
          return;
        }

        const response = await fetch('/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
          setFormData({
            name: data.name || '',
            phone: data.phone || '',
            bio: data.bio || '',
          });
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // معالجة تحديث البيانات
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

      if (!token) return;

      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setEditing(false);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-slate-100 px-6 py-10">جاري التحميل...</div>;
  }

  if (!user) {
    return <div className="min-h-screen bg-slate-100 px-6 py-10">لم يتم العثور على بيانات المستخدم</div>;
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-2xl">
        <Link href="/dashboard" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
          <ArrowLeft size={16} /> العودة للوحة التحكم
        </Link>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          {/* رأس الملف الشخصي */}
          <div className="text-center">
            <div className="relative mx-auto mb-6 h-24 w-24">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-brand-100 text-3xl font-black text-brand-700">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="h-full w-full rounded-full object-cover" />
                ) : (
                  <User size={32} />
                )}
              </div>
              <button className="absolute bottom-0 right-0 rounded-full bg-brand-600 p-2 text-white">
                <Camera size={18} />
              </button>
            </div>
            <h1 className="text-2xl font-black text-slate-900">{user.name || 'مستخدم'}</h1>
            <p className="mt-1 text-sm text-slate-500">{user.email}</p>
          </div>

          {/* النموذج */}
          <form className="mt-8 space-y-5" onSubmit={handleUpdate}>
            {/* الاسم */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">الاسم الكامل</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={!editing}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition disabled:opacity-50 focus:border-brand-500 focus:bg-white"
              />
            </div>

            {/* البريد الإلكتروني */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 pr-12 pl-4 py-3 text-slate-500 outline-none disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* رقم الهاتف */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">رقم الهاتف</label>
              <div className="relative">
                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={!editing}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 pr-12 pl-4 py-3 text-slate-900 outline-none transition disabled:opacity-50 focus:border-brand-500 focus:bg-white"
                />
              </div>
            </div>

            {/* النبذة */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">النبذة الشخصية</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                disabled={!editing}
                rows={4}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition disabled:opacity-50 focus:border-brand-500 focus:bg-white"
              />
            </div>

            {/* الأزرار */}
            <div className="flex gap-3 pt-4">
              {!editing ? (
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  className="flex-1 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  تعديل الملف الشخصي
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    className="flex-1 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                  >
                    حفظ التغييرات
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="flex-1 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700"
                  >
                    إلغاء
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
