'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import type { PastEvent } from '../data/events';

const PLACEHOLDER_IMAGE = '/events/comingsoon.png';

interface PastEventsAccordionProps {
  events: PastEvent[];
}

export default function PastEventsAccordion({ events }: PastEventsAccordionProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal');

  // Ensure enough items to create a seamless infinite loop
  const displayEvents = useMemo(() => {
    if (!events.length) return [];
    const minItems = 5;
    const repeat = Math.max(1, Math.ceil(minItems / events.length));
    return Array.from({ length: repeat }, () => events).flat();
  }, [events]);

  if (!events.length) return null;

  const renderCard = (event: PastEvent, key: string, isDuplicate = false) => {
    const image = event.image || PLACEHOLDER_IMAGE;
    const dateLabel = new Date(event.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    const cardContent = (
      <div className="w-[270px] sm:w-[330px] md:w-[380px] lg:w-[420px] shrink-0 rounded-2xl overflow-hidden border border-dark-border bg-dark-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-dark-primary/60 group/card">
        <div className="relative aspect-square bg-black/10">
          <Image
            src={image}
            alt={event.title}
            fill
            className="object-contain transition-transform duration-500 group-hover/card:scale-105"
            sizes="(max-width: 640px) 270px, (max-width: 768px) 330px, (max-width: 1024px) 380px, 420px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
            <p className="text-xs sm:text-sm font-semibold leading-tight line-clamp-2">
              {event.title}
            </p>
            <p className="text-[11px] sm:text-xs text-white/70 mt-1 truncate">
              {dateLabel} {event.venue ? `• ${event.venue}` : ''}
            </p>
          </div>
        </div>
      </div>
    );

    return event.link ? (
      <a
        key={key}
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={isDuplicate ? -1 : 0}
        aria-hidden={isDuplicate ? 'true' : undefined}
        className="block shrink-0 cursor-pointer"
        aria-label={`Learn more about ${event.title}`}
      >
        {cardContent}
      </a>
    ) : (
      <div
        key={key}
        className="shrink-0"
        aria-hidden={isDuplicate ? 'true' : undefined}
      >
        {cardContent}
      </div>
    );
  };

  const isMotionPaused = isPaused || isHovered;

  return (
    <div className="space-y-3">
      {/* Slider viewport */}
      <div
        className="relative w-full overflow-hidden rounded-2xl py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        aria-label="Past events continuous slider"
      >
        {/* Left edge gradient mask */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-10"
          style={{
            background:
              'linear-gradient(to right, var(--color-bg), transparent)',
          }}
          aria-hidden="true"
        />

        {/* Right edge gradient mask */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-10"
          style={{
            background:
              'linear-gradient(to left, var(--color-bg), transparent)',
          }}
          aria-hidden="true"
        />

        {/* Continuous marquee track */}
        <div
          className="flex w-max animate-marquee-scroll will-change-transform"
          style={{
            animationPlayState: isMotionPaused ? 'paused' : 'running',
            animationDirection: direction,
          }}
        >
          {/* First set */}
          <div className="flex gap-4 shrink-0 pr-4">
            {displayEvents.map((event, idx) =>
              renderCard(event, `set1-${event.id}-${idx}`, false)
            )}
          </div>

          {/* Second identical set for seamless infinite loop */}
          <div className="flex gap-4 shrink-0 pr-4" aria-hidden="true">
            {displayEvents.map((event, idx) =>
              renderCard(event, `set2-${event.id}-${idx}`, true)
            )}
          </div>
        </div>
      </div>

      {/* Control bar */}
      <div className="flex items-center justify-between gap-3 px-1">
        <span className="text-xs text-dark-muted hidden sm:inline-flex items-center gap-1.5">
          <span
            className={`w-2 h-2 rounded-full transition-colors ${isMotionPaused ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'
              }`}
          />
          {isMotionPaused ? 'Paused (hover/touch)' : 'Auto-scrolling'}
        </span>

        <div className="flex items-center gap-2 ml-auto">
          {/* Direction toggle */}
          <button
            type="button"
            onClick={() =>
              setDirection((d) => (d === 'normal' ? 'reverse' : 'normal'))
            }
            className="h-8 px-3 rounded-full border border-dark-border bg-dark-card text-dark-muted hover:text-dark-text hover:border-dark-primary text-xs font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            aria-label="Switch scroll direction"
            title="Switch scroll direction"
          >
            {direction === 'normal' ? (
              <>
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Scroll Left</span>
              </>
            ) : (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span>Scroll Right</span>
              </>
            )}
          </button>

          {/* Pause / Resume toggle */}
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            className="h-8 px-3 rounded-full border border-dark-border bg-dark-card text-dark-muted hover:text-dark-text hover:border-dark-primary text-xs font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            aria-label={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
            title={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Resume</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
