import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
