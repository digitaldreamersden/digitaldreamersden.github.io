'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { PastEvent } from '../data/events';
import { useCarouselAutoRotate, useCarouselPause } from '../hooks/useCarousel';

const PLACEHOLDER_IMAGE = '/events/comingsoon.png';
const AUTO_ROTATE_INTERVAL = 5_000;
const SWIPE_THRESHOLD = 50;
const GAP = 16;

function useContainerWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, width };
}

interface PastEventsAccordionProps {
  events: PastEvent[];
}

export default function PastEventsAccordion({ events }: PastEventsAccordionProps) {
  const { ref: containerRef, width: containerWidth } = useContainerWidth();
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = useMemo(
    () => Math.min(459, containerWidth || 459),
    [containerWidth]
  );

  const visibleCount = useMemo(() => {
    if (!containerWidth) return 1;
    const count = Math.floor((containerWidth + GAP) / (cardWidth + GAP));
    return Math.max(1, Math.min(count, events.length));
  }, [cardWidth, containerWidth, events.length]);

  const maxIndex = useMemo(
    () => Math.max(0, events.length - visibleCount),
    [events.length, visibleCount]
  );

  const safeIndex = useMemo(
    () => Math.min(activeIndex, maxIndex),
    [activeIndex, maxIndex]
  );

  const { isPaused, pause, resume, pauseWithResume } = useCarouselPause();
  useCarouselAutoRotate(activeIndex, setActiveIndex, maxIndex, isPaused, AUTO_ROTATE_INTERVAL);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleMouseEnter = () => pause();
  const handleMouseLeave = () => resume(5_000);

  const handleTouchStart = (e: React.TouchEvent) => {
    const startX = e.touches[0].clientX;
    touchStartX.current = startX;
    // Reset end position at gesture start to avoid stale values
    // causing accidental extra navigation on simple taps (e.g. arrow buttons).
    touchEndX.current = startX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) < SWIPE_THRESHOLD) return;

    if (diff > 0) {
      next();
    } else {
      prev();
    }

    pauseWithResume();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      next();
      pauseWithResume();
    } else if (e.key === 'ArrowLeft') {
      prev();
      pauseWithResume();
    }
  };

  const trackTransform = `translateX(-${safeIndex * (cardWidth + GAP)}px)`;

  if (!events.length) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Past events carousel"
    >
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-out"
          style={{ transform: trackTransform }}
        >
          {events.map((event) => {
            const image = event.image || PLACEHOLDER_IMAGE;
            const dateLabel = new Date(event.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });

            const card = (
              <div
                className="rounded-2xl overflow-hidden border border-dark-border bg-dark-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg shrink-0"
                style={{ width: cardWidth, minWidth: cardWidth }}
              >
                <div className="relative aspect-square bg-black/5">
                  <Image
                    src={image}
                    alt={event.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-sm font-semibold leading-tight">{event.title}</p>
                    <p className="text-xs text-white/70">{dateLabel}</p>
                  </div>
                </div>
              </div>
            );

            return event.link ? (
              <a
                key={event.id}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full"
                onClick={() => pauseWithResume()}
                aria-label={`Learn more about ${event.title}`}
              >
                {card}
              </a>
            ) : (
              <div key={event.id} className="h-full">
                {card}
              </div>
            );
          })}
        </div>
      </div>

      {events.length > visibleCount && (
        <>
          <button
            type="button"
            onClick={() => {
              prev();
              pauseWithResume();
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white shadow-sm transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous events"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => {
              next();
              pauseWithResume();
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white shadow-sm transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next events"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  goToIndex(idx);
                  pauseWithResume();
                }}
                className={`h-2 w-2 rounded-full transition-colors ring-1 ring-dark-border/30 ${
                  idx === safeIndex
                    ? 'bg-dark-primary ring-dark-primary/40'
                    : 'bg-dark-border hover:bg-dark-primary/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
