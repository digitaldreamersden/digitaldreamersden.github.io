'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import type { PastEvent } from '../data/events';

const PLACEHOLDER_IMAGE = '/events/comingsoon.png';
const AUTO_ROTATE_INTERVAL = 5_000;
const SWIPE_THRESHOLD = 50;
const EXPANDED_WIDTH = 459;
const GAP = 8;

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

function useCollapsedWidth() {
  const [collapsedWidth, setCollapsedWidth] = useState(75);

  useEffect(() => {
    const update = () => {
      setCollapsedWidth(window.innerWidth >= 1024 ? 100 : 75);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return collapsedWidth;
}

interface PastEventsAccordionProps {
  events: PastEvent[];
}

export default function PastEventsAccordion({ events }: PastEventsAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const { ref: containerRef, width: containerWidth } = useContainerWidth();
  const collapsedWidth = useCollapsedWidth();

  const maxVisibleCollapsed = useMemo(() => {
    if (!containerWidth) return events.length - 1;
    const remaining = containerWidth - EXPANDED_WIDTH;
    const fits = Math.floor((remaining + GAP) / (collapsedWidth + GAP));
    return Math.max(0, fits);
  }, [containerWidth, collapsedWidth, events.length]);

  const visibleEvents = useMemo(() => {
    const indexed = events.map((event, i) => ({ event, originalIndex: i }));
    const totalCollapsed = events.length - 1;
    if (maxVisibleCollapsed >= totalCollapsed) return indexed;

    const result: { event: PastEvent; originalIndex: number }[] = [];
    result.push(indexed[expandedIndex]);

    let count = 0;
    let i = (expandedIndex + 1) % events.length;
    while (count < maxVisibleCollapsed && i !== expandedIndex) {
      result.push(indexed[i]);
      count++;
      i = (i + 1) % events.length;
    }

    return result;
  }, [events, expandedIndex, maxVisibleCollapsed]);

  const startAutoRotate = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setExpandedIndex((prev) => (prev + 1) % events.length);
      }
    }, AUTO_ROTATE_INTERVAL);
  }, [events.length]);

  useEffect(() => {
    if (events.length <= 1) return;
    startAutoRotate();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [events.length, startAutoRotate]);

  const goTo = useCallback(
    (index: number) => {
      setExpandedIndex(index);
      startAutoRotate();
    },
    [startAutoRotate]
  );

  const handleMouseEnter = () => { isPausedRef.current = true; };
  const handleMouseLeave = () => { isPausedRef.current = false; };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) < SWIPE_THRESHOLD) return;

    if (diff > 0) {
      goTo(expandedIndex < events.length - 1 ? expandedIndex + 1 : 0);
    } else {
      goTo(expandedIndex > 0 ? expandedIndex - 1 : events.length - 1);
    }
  };

  if (!events.length) return null;

  const currentEvent = events[expandedIndex];
  const currentImage = currentEvent.image || PLACEHOLDER_IMAGE;

  return (
    <>
      {/* Mobile: swipeable single card */}
      <div
        className="sm:hidden w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
          <Image
            src={currentImage}
            alt={currentEvent.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {events.length > 1 && (
          <div className="flex justify-center gap-1.5 mt-3">
            {events.map((ev, i) => (
              <button
                key={ev.id}
                onClick={() => goTo(i)}
                aria-label={`Go to event ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === expandedIndex
                    ? 'w-6 bg-dark-primary'
                    : 'w-1.5 bg-dark-border hover:bg-dark-muted'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop: accordion layout */}
      <div
        ref={containerRef}
        className="hidden sm:flex gap-2 h-[459px] w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {visibleEvents.map(({ event, originalIndex }) => {
          const isExpanded = originalIndex === expandedIndex;
          const image = event.image || PLACEHOLDER_IMAGE;

          return (
            <div
              key={event.id}
              onClick={() => goTo(originalIndex)}
              style={isExpanded ? { width: EXPANDED_WIDTH } : { width: collapsedWidth }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out h-full flex-shrink-0 ${
                isExpanded
                  ? ''
                  : 'bg-gradient-card border border-dark-border hover:border-dark-primary'
              }`}
            >
              {isExpanded ? (
                <Image
                  src={image}
                  alt={event.title}
                  width={EXPANDED_WIDTH}
                  height={EXPANDED_WIDTH}
                  className="w-full h-full object-cover"
                  priority={originalIndex === 0}
                />
              ) : (
                <CollapsedContent event={event} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

function CollapsedContent({ event }: { event: PastEvent }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-5">
      <div className="flex flex-col items-center gap-3" style={{ writingMode: 'vertical-rl' }}>
        <span className="text-dark-text font-semibold text-xs sm:text-sm tracking-wider whitespace-nowrap">
          {event.title}
        </span>
        <span className="text-dark-muted text-[10px] sm:text-xs font-mono whitespace-nowrap">
          {new Date(event.date).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          })}
        </span>
      </div>
    </div>
  );
}
