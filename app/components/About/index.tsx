'use client';
import Image from 'next/image';
import { Info } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import NarrativeBlock from './NarrativeBlock';
import { aboutData } from '../../data/aboutData'; // Back to TS import

export default function About() {
  return (
    // REMOVED: <section> wrapper and col-span classes
    // NOW: Just the inner content (The Card + Title)
    <div className="flex flex-col h-full w-full">
      {/* Title */}
      <div className="mb-6">
        <SectionHeader title="About Us" icon={Info} />
      </div>

      {/* Card Content */}
      <div className="bento-card w-full h-full overflow-hidden rounded-bento bg-dark-card border border-dark-border p-6 md:p-8 relative group flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 w-full">
          {/* LEFT — text */}
          <div className="flex-1">
            <NarrativeBlock data={aboutData} />
          </div>

          {/* RIGHT — image */}
          <div className="relative w-full md:w-[320px] h-[220px] rounded-xl overflow-hidden">
            <Image
              src="https://www.podu.pics/cAruo9Zi2u"
              alt="About visual"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 320px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
