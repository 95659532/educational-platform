@echo off
REM سكريبت إعداد تلقائي لـ EduNova على Windows

echo 🚀 إعداد منصة EduNova التعليمية...

echo.
echo 1️⃣ التحقق من Node.js و npm...
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ Node.js غير مثبت. يرجى تثبيت Node.js 18+ من https://nodejs.org/
    pause
    exit /b 1
)
echo ✅ Node.js و npm مثبتان

echo.
echo 2️⃣ التحقق من PostgreSQL...
where psql >nul 2>nul
if errorlevel 1 (
    echo ⚠️ PostgreSQL قد لا يكون في PATH. تأكد من تثبيته بشكل صحيح
    echo يمكنك تثبيته من https://www.postgresql.org/download/windows/
) else (
    echo ✅ PostgreSQL مثبت
)

echo.
echo 3️⃣ تثبيت الحزم...
call npm install
if errorlevel 1 (
    echo ❌ خطأ في تثبيت الحزم
    pause
    exit /b 1
)
echo ✅ تم تثبيت الحزم

echo.
echo 4️⃣ توليد Prisma Client...
call npx prisma generate
echo ✅ تم توليد Prisma Client

echo.
echo 5️⃣ رفع schema إلى قاعدة البيانات...
call npx prisma db push --skip-generate
echo ✅ تم رفع schema

echo.
echo 6️⃣ إعداد ملف .env...
if not exist .env (
    copy .env.example .env
    echo ✅ تم إنشاء ملف .env
    echo ⚠️ ت��كد من تحديث قيم DATABASE_URL و JWT_SECRET في .env
) else (
    echo ✅ ملف .env موجود بالفعل
)

echo.
echo ✅ تم إعداد المشروع بنجاح!
echo.
echo الخطوات التالية:
echo 1. تأكد من تحديث .env بالقيم الصحيحة
echo 2. شغّل: npm run dev
echo 3. افتح: http://localhost:3000/api/seed لتهيئة البيانات
echo 4. افتح: http://localhost:3000 في المتصفح
echo.
echo اضغط أي مفتاح للخروج...
pause >nul
