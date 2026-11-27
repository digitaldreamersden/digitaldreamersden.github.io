import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

const GA_MEASUREMENT_ID = 'G-QCVVJ10Q0T';

/** Canonical site URL for absolute OG/Twitter images. Override when deploying (e.g. GitHub Pages domain). */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://digitaldreamersden.in';

const siteTitle = 'Digital Dreamers Den (D3) | The community for Full-Stack AI Engineers.';
const siteDescription =
  'A vibrant tech community bringing Full-Stack AI Engineers together to build the future 🚀';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Digital Dreamers Den',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/full_logo.png',
        width: 1307,
        height: 600,
        alt: 'Digital Dreamers Den — full logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/full_logo.png'],
  },
};

const themeInitializerScript = `
(() => {
  try {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (_error) {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.colorScheme = 'light';
    document.documentElement.classList.remove('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo_blue.png" type="image/png" sizes="48x48" />
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${jakarta.variable} antialiased selection:bg-indigo-500 selection:text-white p-2 md:p-6 lg:p-12 xl:p-12`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
