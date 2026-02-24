'use client';

import Image from 'next/image';
import { UserPlus } from 'lucide-react';
import CardSkeleton from './shared/CardSkeleton';
import contributors, { Contributor } from '@/app/data/contributorsData';
import { getAssetPath } from '@/app/utils/paths';

export default function ContributorsSection() {
  return (
    <div className="space-y-8">
      {/* Section heading */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-dark-text">
        <UserPlus className="w-7 h-7 text-dark-secondary" />
        Contributors
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap gap-4 md:gap-7">
        {contributors.map((contributor: Contributor) => (
          <CardSkeleton key={contributor.id} url={contributor.linkedin}>
            {/* Card content */}
             <div className="h-full flex flex-col items-center justify-center text-center group">
              {/* Avatar */}
              <div className="relative w-16 sm:w-18 md:w-20 aspect-square mb-4 flex-shrink-0">
                <Image
                  src={contributor.avatar}
                  alt={contributor.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name — hover behavior preserved */}
             <h3 className="text-[13px] sm:text-sm font-semibold leading-tight text-dark-text group-hover:text-dark-primary transition-colors break-words">
                {contributor.name}
              </h3>

              {/* Role */}
              <p className="text-[11px] sm:text-xs opacity-70 text-center leading-tight mt-[2px]">{contributor.role}</p>
            </div>
          </CardSkeleton>
        ))}
      </div>
    </div>
  );
}
