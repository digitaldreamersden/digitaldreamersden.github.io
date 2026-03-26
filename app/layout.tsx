import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Digital Dreamers Den | D3 Community',
  description:
    'The definitive community for AI Engineers & Full-Stack Developers. Less talk, more shipping.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="48x48" />
      </head>
      <body
        className={`${jakarta.variable} antialiased selection:bg-indigo-500 selection:text-white p-2 md:p-6 lg:p-12 xl:p-12`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
