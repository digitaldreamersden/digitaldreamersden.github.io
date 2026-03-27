'use client';

import Image from 'next/image';
import { UserPlus } from 'lucide-react';
import CardSkeleton from './shared/CardSkeleton';
import SectionCardGrid from './shared/SectionCardGrid';
import contributors, { Contributor } from '@/app/data/contributorsData';

export default function ContributorsSection() {
  return (
    <SectionCardGrid title="Contributors" icon={UserPlus}>
      {contributors.map((contributor: Contributor) => (
        <CardSkeleton key={contributor.id} url={contributor.linkedin}>
          <div className="relative w-full h-full group">
            <div className="absolute -top-6 -left-6 -right-6 -bottom-6">
              <Image
                src={contributor.avatar}
                alt={contributor.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div
              className="absolute bottom-1 left-2 right-2
                opacity-0 translate-y-3
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-300"
            >
              <div
                className="px-2 py-1 sm:py-1.5 text-center shadow-md"
                style={{
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '14px',
                }}
              >
                <h3
                  className="text-[11px] sm:text-xs md:text-sm font-semibold leading-tight text-center"
                  style={{ color: 'var(--color-text)' }}
                >
                  {contributor.name}
                </h3>

                <p
                  className="text-[10px] sm:text-[11px] md:text-xs mt-0.5 text-center"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {contributor.role}
                </p>
              </div>
            </div>
          </div>
        </CardSkeleton>
      ))}
    </SectionCardGrid>
  );
}
