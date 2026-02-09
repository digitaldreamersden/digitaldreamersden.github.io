'use client';

import { ExternalLink } from 'lucide-react';
import { ReactNode } from 'react';

interface CardSkeletonProps {
  children: ReactNode;
  url?: string;
  fixedBg?: string;
}

export default function CardSkeleton({
  children,
  url,
  fixedBg,
}: CardSkeletonProps) {
  const backgroundStyle = fixedBg ? { backgroundColor: fixedBg } : {};
  const backgroundClass = fixedBg ? '' : 'bg-dark-card';

  const CardContent = (
    <div
      className={`rounded-bento p-6 border border-dark-border ${backgroundClass} flex flex-col relative overflow-hidden group hover:border-dark-primary transition-colors w-[160px] h-[160px] md:w-[200px] md:h-[200px]`}
      style={backgroundStyle}
    >
      {/* External link icon at top right */}
      {url && (
        <div className="absolute top-4 right-4 z-10">
          <div className="w-8 h-8 rounded-full bg-gray-500/80 backdrop-blur-sm flex items-center justify-center border border-gray-400/50">
            <ExternalLink className="w-4 h-4 text-white group-hover:text-gray-100 transition-colors" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-0 h-full flex flex-col">{children}</div>
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Visit ${url}`}
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
