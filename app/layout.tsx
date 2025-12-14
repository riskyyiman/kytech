import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap', // ✅ eksplisit (walau default)
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jasa Bikin Web & Aplikasi Sat-Set | kyTech',
  description: 'Jasa Pembuatan Website & Aplikasi yang Sat-Set',
  icons: {
    icon: '/icon.jpg',
  },
  verification: {
    google: 'YTT_htZ6yKvJRXroJBB51aVr8_DSgKj7SYNMMuyY1cQ',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
