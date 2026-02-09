'use client';

import { Info } from 'lucide-react';
import NarrativeBlock from './NarrativeBlock';
import { aboutData } from '../../data/aboutData'; // Back to TS import

export default function About() {
  return (
    // REMOVED: <section> wrapper and col-span classes
    // NOW: Just the inner content (The Card + Title)
    <div className="flex flex-col h-full w-full">
      {/* Title */}
      <div className="flex items-center gap-3 mb-6">
        <Info className="w-6 h-6 text-dark-secondary" />
        <h2 className="text-3xl font-bold font-sans text-[var(--color-text)]">
          About Us
        </h2>
      </div>

      {/* Card Content */}
      <div className="bento-card w-full h-full overflow-hidden rounded-bento bg-dark-card border border-dark-border p-6 md:p-8 relative group flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <NarrativeBlock data={aboutData} />
      </div>
    </div>
  );
}
