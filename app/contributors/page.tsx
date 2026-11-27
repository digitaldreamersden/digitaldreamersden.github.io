
// Removed useEffect import; scroll handled by client component



import ScrollToTop from '@/app/components/ScrollToTop';
import type { Metadata } from 'next';
import Link from 'next/link';


import { ArrowLeft, Heart } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContributorsSection from '@/app/components/ContributorsSection';

export const metadata: Metadata = {
  title: 'Contributors | Digital Dreamers Den (D3)',
  description:
    'Meet the amazing contributors who build, support, and grow the Digital Dreamers Den community.',
  alternates: {
    canonical: '/contributors',
  },
  openGraph: {
    url: '/contributors',
    title: 'Contributors | Digital Dreamers Den (D3)',
    description:
      'Meet the amazing contributors who build, support, and grow the Digital Dreamers Den community.',
  },
  twitter: {
    title: 'Contributors | Digital Dreamers Den (D3)',
    description:
      'Meet the amazing contributors who build, support, and grow the Digital Dreamers Den community.',
  },
};

export default function ContributorsPage() {
  return (
    <>
      <ScrollToTop />
      <Navigation />

      <div className="mx-auto space-y-8 mb-24">
        <Header />

        <div className="pt-4 space-y-6">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-dark-muted hover:text-dark-text transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <div className="rounded-bento border border-dark-border bg-dark-card p-6 md:p-8 relative overflow-hidden">
            <div className="max-w-2xl space-y-3 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dark-border bg-dark-card text-xs font-semibold text-dark-secondary">
                <Heart className="w-3.5 h-3.5 fill-dark-secondary text-dark-secondary" />
                <span>Our Community Heroes</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-sans text-dark-text tracking-tight">
                Community Contributors
              </h1>
              <p className="text-dark-muted text-sm md:text-base leading-relaxed">
                A huge shoutout to the passionate developers, designers, and innovators who dedicate their time, energy, and creativity to shaping Digital Dreamers Den.
              </p>
            </div>
          </div>

          <section id="contributors" className="pt-4">
            <ContributorsSection />
          </section>
        </div>
      </div>
    </>
  );
}
