import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getCourseAnalytics() {
  const totalCourses = await prisma.course.count();
  const totalStudents = await prisma.enrollment.groupBy({
    by: ['userId'],
    _count: {
      userId: true,
    },
  });
  const totalRevenue = await prisma.payment.aggregate({
    _sum: {
      amount: true,
    },
  });

  return {
    totalCourses,
    totalStudents: totalStudents.length,
    totalRevenue: totalRevenue._sum.amount || 0,
  };
}

export async function getAdminCourses() {
  return prisma.course.findMany({
    include: {
      instructor: {
        select: { id: true, name: true, email: true },
      },
      _count: {
        select: {
          enrollments: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
