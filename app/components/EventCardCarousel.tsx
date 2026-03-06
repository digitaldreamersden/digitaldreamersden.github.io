'use client';

import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  useResponsiveCardsPerView,
  useCarouselAutoRotate,
  useCarouselPause,
} from '../hooks/useCarousel';
import type { PastEvent, UpcomingEvent } from '../data/events';

const PLACEHOLDER_IMAGE = '/events/comingsoon.png';

type EventItem = PastEvent | UpcomingEvent;
type Variant = 'past' | 'upcoming';

function isPastEvent(e: EventItem): e is PastEvent {
  return 'link' in e && typeof (e as PastEvent).link === 'string';
}

interface EventCardCarouselProps {
  events: EventItem[];
  variant: Variant;
  ariaLabel: string;
  emptyMessage?: string;
}

export default function EventCardCarousel({
  events,
  variant,
  ariaLabel,
  emptyMessage = 'No upcoming events. Stay tuned!',
}: EventCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = useResponsiveCardsPerView();
  const { isPaused, pause, resume, pauseWithResume } = useCarouselPause();

  const maxIndex = useMemo(() => {
    if (!events.length) return 0;
    return Math.max(0, events.length - cardsPerView);
  }, [events.length, cardsPerView]);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [cardsPerView, currentIndex, maxIndex]);

  useCarouselAutoRotate(
    currentIndex,
    setCurrentIndex,
    maxIndex,
    isPaused,
    4000
  );

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => setCurrentIndex(Math.min(index, maxIndex)),
    [maxIndex]
  );

  const handleButtonClick = useCallback(
    (fn: () => void) => {
      pauseWithResume(5000);
      fn();
    },
    [pauseWithResume]
  );

  const cardWidth = useMemo(() => {
    if (cardsPerView === 1) return '100%';
    const margins = cardsPerView - 1;
    return `calc((100% - ${margins}rem) / ${cardsPerView})`;
  }, [cardsPerView]);

  const transform = useMemo(() => {
    if (cardsPerView === 1) return `translateX(-${currentIndex * 100}%)`;
    const cardWidthPercent = 100 / cardsPerView;
    const marginPerCard = 1 / cardsPerView;
    return `translateX(calc(-${currentIndex * cardWidthPercent}% - ${currentIndex * marginPerCard}rem))`;
  }, [currentIndex, cardsPerView]);

  const dotsArray = useMemo(
    () => Array.from({ length: Math.max(0, maxIndex + 1) }, (_, i) => i),
    [maxIndex]
  );

  const showCarousel = events.length > cardsPerView;

  if (!events.length) {
    if (variant === 'past') return null;
    return (
      <div
        className="w-full rounded-bento p-4 sm:p-5 border border-dark-border bg-dark-card flex flex-col overflow-hidden"
        role="region"
        aria-label={ariaLabel}
      >
        <div className="relative h-[200px] max-w-[280px] mx-auto w-full rounded-lg overflow-hidden border border-dark-border">
          <Image
            src={PLACEHOLDER_IMAGE}
            alt="No events"
            fill
            sizes="280px"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <p className="text-white text-sm font-semibold text-center px-4">
              {emptyMessage}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!showCarousel) {
    return (
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        role="region"
        aria-label={ariaLabel}
      >
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            variant={variant}
            cardWidth="100%"
            marginRight="0"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="w-full rounded-bento p-4 sm:p-5 md:p-6 border border-dark-border bg-dark-card flex flex-col relative overflow-hidden group"
      onMouseEnter={() => pause()}
      onMouseLeave={() => resume()}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div
          className="relative overflow-hidden mb-4"
          role="group"
          aria-label={`Carousel showing ${cardsPerView} of ${events.length} events`}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform }}
            aria-live="polite"
            aria-atomic="false"
          >
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                variant={variant}
                cardWidth={cardWidth}
                marginRight={
                  cardsPerView === 1 || index === events.length - 1
                    ? '0'
                    : '1rem'
                }
              />
            ))}
          </div>
        </div>

        <div
          className="flex items-center justify-between mt-auto pt-3 border-t border-dark-border"
          role="toolbar"
          aria-label="Carousel navigation"
        >
          <button
            onClick={() => handleButtonClick(prev)}
            disabled={currentIndex === 0 || maxIndex === 0}
            className="w-7 h-7 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-dark-primary"
            aria-label="Previous events"
            aria-disabled={currentIndex === 0 || maxIndex === 0}
          >
            <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <div
            className="flex gap-1.5 items-center"
            role="tablist"
            aria-label="Event indicators"
          >
            {dotsArray.map((i) => (
              <button
                key={`dot-${i}`}
                onClick={() => handleButtonClick(() => goTo(i))}
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Go to event ${i + 1} of ${maxIndex + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-dark-primary ${
                  i === currentIndex
                    ? 'bg-dark-primary w-5'
                    : 'bg-dark-card hover:bg-dark-card-hover border border-dark-border'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => handleButtonClick(next)}
            disabled={currentIndex >= maxIndex || maxIndex === 0}
            className="w-7 h-7 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-dark-primary"
            aria-label="Next events"
            aria-disabled={currentIndex >= maxIndex || maxIndex === 0}
          >
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

function EventCard({
  event,
  variant,
  cardWidth,
  marginRight,
}: {
  event: EventItem;
  variant: Variant;
  cardWidth: string;
  marginRight: string;
}) {
  const past = variant === 'past' && isPastEvent(event);
  const link = past ? (event as PastEvent).link : null;
  const rsvpUrl =
    variant === 'upcoming' ? (event as UpcomingEvent).rsvpUrl : undefined;
  const image = event.image || PLACEHOLDER_IMAGE;

  const cardClass =
    'flex-shrink-0 rounded-bento p-2 sm:p-3 border border-dark-border bg-dark-card flex flex-col relative overflow-hidden group hover:border-dark-primary transition-colors aspect-[4/3] min-h-0 focus-within:ring-2 focus-within:ring-dark-primary focus-within:ring-offset-2';

  const content = (
    <>
      {past && link && (
        <div className="absolute top-2 right-2 z-10">
          <div className="w-6 h-6 rounded-full bg-gray-500/80 backdrop-blur-sm flex items-center justify-center border border-gray-400/50">
            <ExternalLink className="w-3 h-3 text-white" />
          </div>
        </div>
      )}

      {variant === 'upcoming' && (
        <div className="absolute bottom-2 right-2 z-10">
          {rsvpUrl ? (
            <a
              href={rsvpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-primary hover:bg-dark-primary-light text-white rounded-md text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-dark-primary focus:ring-offset-2"
              aria-label="RSVP (opens in new tab)"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden />
              <span>RSVP</span>
            </a>
          ) : (
            <span className="inline-flex items-center px-2.5 py-1.5 bg-dark-card border border-dark-border text-dark-muted rounded-md text-xs font-medium">
              Coming soon
            </span>
          )}
        </div>
      )}

      <div className="absolute inset-0 -m-2 sm:-m-3">
        <Image
          src={image}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 280px"
        />
      </div>
    </>
  );

  if (past && link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
        style={{ width: cardWidth, marginRight }}
        aria-label={event.title}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={cardClass}
      style={{ width: cardWidth, marginRight }}
      role="article"
      aria-label={`${variant === 'upcoming' ? 'Upcoming' : 'Past'} event: ${event.title}`}
    >
      {content}
    </div>
  );
}
