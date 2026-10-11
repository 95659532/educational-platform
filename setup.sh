#!/bin/bash

# سكريبت إعداد تلقائي لـ EduNova على macOS/Linux

echo "🚀 إعداد منصة EduNova التعليمية..."

# الخطوة 1: التحقق من Node.js و npm
echo "1️⃣ التحقق من Node.js و npm..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js غير مثبت. يرجى تثبيت Node.js 18+ من https://nodejs.org/"
    exit 1
fi
echo "✅ Node.js مثبت: $(node -v)"
echo "✅ npm مثبت: $(npm -v)"

# الخطوة 2: التحقق من PostgreSQL
echo ""
echo "2️⃣ التحقق من PostgreSQL..."
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL غير مثبت. يرجى تثبيت PostgreSQL من https://www.postgresql.org/download/"
    exit 1
fi
echo "✅ PostgreSQL مثبت: $(psql --version)"

# الخطوة 3: إنشاء قاعدة البيانات
echo ""
echo "3️⃣ إنشاء قاعدة البيانات..."
sudo -u postgres createdb edunova 2>/dev/null || echo "قاعدة البيانات قد تكون موجودة بالفعل"
echo "✅ تم إنشاء/التحقق من قاعدة البيانات"

# الخطوة 4: تثبيت الحزم
echo ""
echo "4️⃣ تثبيت الحزم..."
npm install
echo "✅ تم تثبيت الحزم"

# الخطوة 5: توليد Prisma Client
echo ""
echo "5️⃣ توليد Prisma Client..."
npx prisma generate
echo "✅ تم توليد Prisma Client"

# الخطوة 6: رفع schema
echo ""
echo "6️⃣ رفع schema إلى قاعدة البيانات..."
npx prisma db push --skip-generate
echo "✅ تم رفع schema"

# الخطوة 7: إنشاء ملف .env
echo ""
echo "7️⃣ إعداد ملف .env..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ تم إنشاء ملف .env من .env.example"
    echo "⚠️ تأكد من تحديث قيم DATABASE_URL و JWT_SECRET في .env"
else
    echo "✅ ملف .env موجود بالفعل"
fi

echo ""
echo "✅ تم إعداد المشروع بنجاح!"
echo ""
echo "الخطوات التالية:"
echo "1. تأكد من تحديث .env بالقيم الصحيحة"
echo "2. شغّل: npm run dev"
echo "3. افتح: http://localhost:3000/api/seed لتهيئة البيانات"
echo "4. افتح: http://localhost:3000 في المتصفح"
