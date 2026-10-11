# EduNova - منصة تعليمية احترافية

## 📋 نظرة عامة

منصة تعليمية متكاملة مصممة بشكل احترافي توفر:
- ✅ نظام مستخدمين متقدم (طلاب، معلمين، مدراء)
- ✅ إدارة دورات ودروس
- ✅ نظام اشتراكات وتسجيل
- ✅ لوحة تحكم متقدمة
- ✅ نظام دفع آمن
- ✅ متابعة تقدم الطالب
- ✅ إدارة محتوى كامل

## 🚀 البدء السريع

### المتطلبات
- Node.js 18+
- PostgreSQL 12+
- npm أو yarn

### التشغيل السريع (3 خطوات)

**على macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

**على Windows:**
```bash
setup.bat
```

**أو يدوياً:**
```bash
# 1. تثبيت الحزم
npm install

# 2. إعداد قاعدة البيانات
npx prisma db push

# 3. تشغيل المشروع
npm run dev
```

## 📖 التوثيق الكاملة

للحصول على شرح مفصل لكل خطوة، انظر [SETUP.md](./SETUP.md)

## 🔐 بيانات التسجيل التجريبية

**مدير:**
- البريد: `admin@edunova.com`
- كلمة المرور: `Admin123!`

**معلم:**
- البريد: `instructor@edunova.com`
- كلمة المرور: `Instructor123!`

## 📂 هيكل المشروع

```
educational-platform/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── courses/
│   │   ├── users/
│   │   └── admin/
│   ├── (pages)/
│   │   ├── page.tsx
│   │   ├── login/
│   │   ├── signup/
│   │   ├── dashboard/
│   │   └── courses/
│   └── layout.tsx
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   └── courses.ts
├── prisma/
│   └── schema.prisma
├── .env.example
├── package.json
└── SETUP.md
```

## 🛠️ الأوامر المفيدة

```bash
# التطوير
npm run dev

# البناء للإنتاج
npm run build
nnpm run start

# إدارة قاعدة البيانات
npx prisma studio     # فتح لوحة تحكم الـ DB
npx prisma db push    # رفع التغييرات
npx prisma migrate reset  # إعادة تعيين كاملة

# الفحص والتنسيق
npm run lint
npm run type-check
npm run format
```

## 🌐 الروابط المهمة

عند التشغيل:
- الرئيسية: http://localhost:3000
- تسجيل: http://localhost:3000/signup
- دخول: http://localhost:3000/login
- لوحة التحكم: http://localhost:3000/dashboard
- الدورات: http://localhost:3000/courses
- الإدارة: http://localhost:3000/admin
- API Docs: http://localhost:3000/api

## 🔧 المشاكل الشائعة

**مشكلة: خطأ الاتصال بقاعدة البيانات**
```bash
# تأكد من تشغيل PostgreSQL
pg_isready

# تحقق من DATABASE_URL في .env
```

**مشكلة: Port 3000 مستخدم**
```bash
npm run dev -- -p 3001
```

**مشكلة: أخطاء في الحزم**
```bash
rm -rf node_modules
npm install
```

## 📚 التطور المستقبلي

- [ ] إضافة نظام الدفع بـ Stripe
- [ ] إرسال البريد الإلكتروني
- [ ] شهادات الإتمام
- [ ] نظام التقييمات
- [ ] الإشعارات
- [ ] التحليلات المتقدمة
- [ ] التكامل مع الفيديو

## 📄 الترخيص

هذا المشروع مرخص تحت MIT License

## 📧 الدعم

للمساعدة والدعم:
- افتح issue على GitHub
- أرسل بريد على: support@edunova.com

---

**بُنيت بـ ❤️ باستخدام Next.js و Prisma و PostgreSQL**
