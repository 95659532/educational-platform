import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// إنشاء دورة جديدة
export async function createCourse(data: {
  title: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  duration: string;
  level: string;
  instructorId: string;
  thumbnail?: string;
}) {
  return prisma.course.create({
    data: {
      ...data,
      isPublished: true,
    },
  });
}

// جلب جميع الدورات
export async function getAllCourses() {
  return prisma.course.findMany({
    include: {
      instructor: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      lessons: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

// جلب دورة حسب الـ slug
export async function getCourseBySlug(slug: string) {
  return prisma.course.findUnique({
    where: { slug },
    include: {
      instructor: true,
      lessons: {
        orderBy: {
          order: 'asc',
        },
      },
    },
  });
}

// جلب دورة حسب المعرف
export async function getCourseById(id: string) {
  return prisma.course.findUnique({
    where: { id },
    include: {
      instructor: true,
      lessons: {
        orderBy: {
          order: 'asc',
        },
      },
      enrollments: true,
    },
  });
}

// تسجيل الطالب في دورة
export async function enrollStudentInCourse(userId: string, courseId: string) {
  return prisma.enrollment.upsert({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
    update: {},
    create: {
      userId,
      courseId,
      progress: 0,
    },
  });
}

// جلب الدورات المسجل بها المستخدم
export async function getUserEnrollments(userId: string) {
  return prisma.enrollment.findMany({
    where: { userId },
    include: {
      course: {
        include: {
          instructor: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
}

// إضافة درس جديد إلى دورة
export async function createLesson(data: {
  title: string;
  description: string;
  content: string;
  videoUrl?: string;
  duration?: number;
  order: number;
  courseId: string;
}) {
  return prisma.lesson.create({
    data,
  });
}

// جلب درس حسب المعرف
export async function getLessonById(id: string) {
  return prisma.lesson.findUnique({
    where: { id },
    include: {
      course: true,
    },
  });
}

// تهيئة تقدم المستخدم في درس
export async function markLessonCompleted(userId: string, lessonId: string) {
  return prisma.progress.upsert({
    where: {
      userId_lessonId: {
        userId,
        lessonId,
      },
    },
    update: {
      isCompleted: true,
      completedAt: new Date(),
    },
    create: {
      userId,
      lessonId,
      isCompleted: true,
      completedAt: new Date(),
    },
  });
}

// تحديث تقدم الدورة بعد إنهاء الدروس
export async function updateEnrollmentProgress(userId: string, courseId: string) {
  const lessons = await prisma.lesson.findMany({
    where: { courseId },
    select: { id: true },
  });

  const completedCount = await prisma.progress.count({
    where: {
      userId,
      lessonId: {
        in: lessons.map((lesson) => lesson.id),
      },
      isCompleted: true,
    },
  });

  const progress = lessons.length ? (completedCount / lessons.length) * 100 : 0;

  return prisma.enrollment.update({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
    data: {
      progress,
      completedAt: progress >= 100 ? new Date() : null,
    },
  });
}
