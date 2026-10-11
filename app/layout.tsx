import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EduNova | منصة تعليمية احترافية',
  description: 'منصة تعليمية متقدمة للتعلم الإلكتروني، الدورات، المتابعة، والتقارير.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
