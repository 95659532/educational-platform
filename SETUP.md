# EduNova - منصة تعليمية احترافية

## الإعداد والتشغيل

### المتطلبات
- Node.js 18+
- PostgreSQL 12+
- npm أو yarn

### الخطوة 1: تثبيت المتطلبات

#### على Windows:
1. ثبّت PostgreSQL من https://www.postgresql.org/download/windows/
2. ثبّت Node.js من https://nodejs.org/
3. تأكد من إضافة كليهما إلى PATH

#### على macOS:
```bash
brew install postgresql
brew install node
```

#### على Linux (Ubuntu/Debian):
```bash
sudo apt-get install postgresql postgresql-contrib nodejs npm
```

### الخطوة 2: إعداد قاعدة البيانات PostgreSQL

#### أولاً: بدء خدمة PostgreSQL

**Windows:**
```bash
# PostgreSQL يبدأ تلقائياً، تحقق من Status
pg_isready
```

**macOS:**
```bash
brew services start postgresql
```

**Linux:**
```bash
sudo service postgresql start
```

#### ثانياً: الوصول إلى PostgreSQL

**Windows (عبر Command Prompt):**
```bash
psql -U postgres
```

**macOS/Linux:**
```bash
sudo -u postgres psql
```

#### ثالثاً: إنشاء قاعدة البيانات والمستخدم

أدخل الأوامر التالية في موجه psql:

```sql
-- إنشاء قاعدة البيانات
CREATE DATABASE edunova;

-- إنشاء مستخدم جديد
CREATE USER edunova_user WITH PASSWORD 'edunova_password_123';

-- منح الصلاحيات
ALTER ROLE edunova_user SET client_encoding TO 'utf8';
ALTER ROLE edunova_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE edunova_user SET default_transaction_deferrable TO on;
GRANT ALL PRIVILEGES ON DATABASE edunova TO edunova_user;

-- الخروج
\q
```

**بدلاً من ذلك، يمكنك تشغيل أمر واحد مباشرة:**
```bash
psql -U postgres -c "CREATE DATABASE edunova;"
psql -U postgres -c "CREATE USER edunova_user WITH PASSWORD 'edunova_password_123';"
psql -U postgres -c "ALTER ROLE edunova_user SET client_encoding TO 'utf8';"
psql -U postgres -c "ALTER ROLE edunova_user SET default_transaction_isolation TO 'read committed';"
psql -U postgres -c "ALTER ROLE edunova_user SET default_transaction_deferrable TO on;"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE edunova TO edunova_user;"
```

#### رابعاً: التحقق من الاتصال
```bash
psql -U edunova_user -d edunova -h localhost
```

إذا نجحت، ستظهر رسالة ترحيب، أكتب `\q` للخروج.

### الخطوة 3: نسخ واستنساخ المشروع

```bash
# استنساخ المشروع من GitHub
git clone https://github.com/YOUR_USERNAME/educational-platform.git

# الانتقال إلى مجلد المشروع
cd educational-platform

# الانتقال إلى الفرع الذي يحتوي على الكود الكامل
git checkout feature/advanced-components
```

### الخطوة 4: إعداد ملف .env

```bash
# انسخ ملف المثال
cp .env.example .env
```

**ثم قم بتعديل `.env` بالقيم التالية:**

```env
# قاعدة البيانات
DATABASE_URL="postgresql://edunova_user:edunova_password_123@localhost:5432/edunova"

# JWT والمصادقة
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production-12345"
JWT_EXPIRES_IN="7d"

# البيئة
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"

# البريد الإلكتروني للمدير
ADMIN_EMAIL="admin@edunova.com"

# SMTP (اختياري - للبريد الإلكتروني لاحقاً)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

# Stripe (اختياري - للدفع لاحقاً)
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
```

**ملاحظة: استبدل القيم بالقيم الخاصة بك في الإنتاج**

### الخطوة 5: تثبيت الحزم

```bash
npm install
```

**أو إذا كنت تستخدم yarn:**
```bash
yarn install
```

### الخطوة 6: إعداد Prisma

#### توليد Prisma Client:
```bash
npx prisma generate
```

#### رفع الـ schema إلى قاعدة البيانات:
```bash
npx prisma db push
```

**عند السؤال، اختر `yes` إذا كان هناك تغييرات**

#### (اختياري) فتح Prisma Studio للتفاعل مع البيانات:
```bash
npx prisma studio
```

هذا سيفتح واجهة ويب على `http://localhost:5555` لإدارة البيانات بصرياً.

### الخطوة 7: تشغيل المشروع

```bash
npm run dev
```

**النتيجة المتوقعة:**
```
> educational-platform@2.0.0 dev
> next dev

  ▲ Next.js 14.2.15
  - Local:        http://localhost:3000
  - Environments: .env

✓ Ready in 3.2s
```

### الخطوة 8: تهيئة البيانات التجريبية

**في نافذة متصفح جديدة، افتح:**
```
http://localhost:3000/api/seed
```

**ستظهر رسالة النجاح:**
```json
{"message":"تمت تهيئة البيانات التجريبية بنجاح"}
```

هذا سيضيف:
- حساب مدير
- حساب مدرس
- دورات تجريبية

### الخطوة 9: اختبار الصفحات الأساسية

افتح هذه الروابط في متصفحك:

#### الصفحة الرئيسية:
```
http://localhost:3000/
```

#### تسجيل حساب جديد:
```
http://localhost:3000/signup
```

#### تسجيل الدخول:
```
http://localhost:3000/login
```

#### لوحة التحكم (تحتاج تسجيل دخول):
```
http://localhost:3000/dashboard
```

#### قائمة الدورات:
```
http://localhost:3000/courses
```

#### لوحة الإدارة (تحتاج تسجيل دخول كمدير):
```
http://localhost:3000/admin
```

#### صفحة التواصل:
```
http://localhost:3000/contact
```

#### الأسئلة الشائعة:
```
http://localhost:3000/faq
```

#### الملف الشخصي (تحتاج تسجيل دخول):
```
http://localhost:3000/profile
```

### الخطوة 10: بيانات تسجيل الدخول التجريبية

#### حساب المدير:
```
البريد: admin@edunova.com
كلمة المرور: Admin123!
```

#### حساب المدرس:
```
البريد: instructor@edunova.com
كلمة المرور: Instructor123!
```

#### إنشاء حساب طالب جديد:
- افتح `http://localhost:3000/signup`
- أدخل بيانات جديدة
- سيتم تسجيل الدخول تلقائياً

### الخطوة 11: الأوامر المفيدة الأخرى

#### إعادة تعيين قاعدة البيانات (حذف كل البيانات):
```bash
npx prisma migrate reset
```

#### إنشاء migration جديد:
```bash
npx prisma migrate dev --name add_new_table
```

#### عرض الأخطاء والتحذيرات:
```bash
npm run lint
```

#### بناء المشروع للإنتاج:
```bash
npm run build
```

#### تشغيل المشروع المُبني:
```bash
npm run start
```

### الخطوة 12: استكشاف الأخطاء وإصلاحها

#### المشكلة: `Error: connect ECONNREFUSED`
**الحل:**
- تأكد من تشغيل PostgreSQL
- تحقق من DATABASE_URL في .env
- جرب:
  ```bash
  pg_isready
  ```

#### المشكلة: `Error: relation "User" does not exist`
**الحل:**
- قم بتشغيل:
  ```bash
  npx prisma db push
  ```

#### المشكلة: `Error: JWT_SECRET is missing`
**الحل:**
- تأكد من وجود JWT_SECRET في .env
- أضف قيمة قوية:
  ```env
  JWT_SECRET="your-long-random-secret-key-min-32-chars"
  ```

#### المشكلة: `Port 3000 is already in use`
**الحل:**
- استخدم port مختلف:
  ```bash
  npm run dev -- -p 3001
  ```
- أو اقتل العملية على Port 3000:
  ```bash
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  
  # macOS/Linux
  lsof -i :3000
  kill -9 <PID>
  ```

#### المشكلة: `npm ERR! ERESOLVE unable to resolve dependency tree`
**الحل:**
```bash
npm install --legacy-peer-deps
```

### الخطوة 13: نشر المشروع على Vercel (اختياري)

#### أولاً: دفع الكود إلى GitHub
```bash
git add .
git commit -m "نسخة نهائية جاهزة للنشر"
git push origin feature/advanced-components
```

#### ثانياً: إنشاء حساب على Vercel
- اذهب إلى https://vercel.com
- سجل دخول باستخدام حساب GitHub

#### ثالثاً: ربط المستودع
- اختر "New Project"
- اختر repository "educational-platform"
- اختر الفرع "feature/advanced-components"

#### رابعاً: إعداد متغيرات البيئة
في صفحة إعدادات Vercel، أضف:
```
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
ADMIN_EMAIL=admin@edunova.com
```

#### خامساً: النشر
- اضغط "Deploy"
- انتظر انتهاء النشر
- افتح الرابط الذي يظهر

### الخطوة 14: قاعدة بيانات للإنتاج (Vercel)

#### استخدام Supabase (مجاني):
1. اذهب إلى https://supabase.com
2. أنشئ project جديد
3. انسخ CONNECTION STRING من Settings
4. أضفها إلى متغيرات Vercel كـ DATABASE_URL

#### أو استخدام Railway (مجاني):
1. اذهب إلى https://railway.app
2. أنشئ project جديد
3. أضف PostgreSQL service
4. انسخ DATABASE_URL
5. أضفها إلى Vercel

### الخطوة 15: التحديثات والصيانة

#### تحديث الحزم:
```bash
npm update
```

#### تنظيف الذاكرة:
```bash
rm -rf node_modules
npm install
```

#### فحص الأمان:
```bash
npm audit
```

### ملاحظات مهمة

1. **الأمان:**
   - غيّر JWT_SECRET و DATABASE_URL في الإنتاج
   - لا تشارك .env على الإنترنت
   - استخدم HTTPS في الإنتاج

2. **الأداء:**
   - استخدم CDN للصور
   - فعّل caching في Next.js
   - استخدم database connection pooling

3. **النسخ الاحتياطية:**
   - احفظ نسخة من قاعدة البيانات بشكل دوري
   - استخدم GitHub للنسخ الاحتياطية من الكود

### التطوير المستقبلي

المرحلة التالية:
- إضافة Stripe للدفع الحقيقي
- إضافة نظام البريد الإلكتروني
- لوحة تحكم متقدمة للمدرس
- شهادات الإتمام
- نظام التقييمات والتعليقات
- تحسين الأداء والـ SEO

### الدعم والمساعدة

إذا حصلت على مشاكل:
1. تحقق من ملف .env
2. انظر في logs المشروع
3. جرّب `npm install` مرة أخرى
4. امسح مجلد `.next`
5. أعد تشغيل المشروع

---

**شكراً لاستخدام EduNova! 🚀**
