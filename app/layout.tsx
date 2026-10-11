import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EduNova | منصة تعليمية احترافية',
  description: 'منصة تعليمية متقدمة لتقديم الدورات، التقييمات، وإدارة المتعلمين.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
