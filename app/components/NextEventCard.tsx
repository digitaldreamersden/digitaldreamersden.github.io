"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useMemo, useCallback } from "react";
import eventsData from "../data/events";
import { useCarouselAutoRotate, useCarouselPause } from "../hooks/useCarousel";
import type { UpcomingEvent } from "../data/events";

const PLACEHOLDER_IMAGE = "/events/comingsoon.png";

export default function NextEventCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const upcomingEvents = useMemo(() => {
    return eventsData.upcomingEvents ?? [];
  }, []);

  const { isPaused, pause, resume, pauseWithResume } = useCarouselPause();

  const maxIndex = useMemo(() => {
    if (!upcomingEvents.length) return 0;
    return Math.max(0, upcomingEvents.length - 1);
  }, [upcomingEvents.length]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  useCarouselAutoRotate(currentIndex, setCurrentIndex, maxIndex, isPaused, 4000);

  const nextEvent = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevEvent = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToEvent = useCallback(
    (index: number) => {
      setCurrentIndex(Math.min(index, maxIndex));
    },
    [maxIndex]
  );

  const handleButtonClick = useCallback(
    (callback: () => void) => {
      pauseWithResume(5000);
      callback();
    },
    [pauseWithResume]
  );

  const handleMouseEnter = useCallback(() => pause(), [pause]);
  const handleMouseLeave = useCallback(() => resume(), [resume]);

  const cardWidth = "100%";

  const transform = useMemo(
    () => `translateX(-${currentIndex * 100}%)`,
    [currentIndex]
  );

  const dotsArray = useMemo(() => {
    return Array.from({ length: Math.max(0, maxIndex + 1) }, (_, i) => i);
  }, [maxIndex]);

  // Empty state: single "no upcoming events" card
  if (!upcomingEvents.length) {
    return (
      <div
        className="w-full lg:max-w-[1200px] rounded-bento p-4 sm:p-5 md:p-6 border border-dark-border bg-dark-card flex flex-col overflow-hidden"
        role="region"
        aria-label="Upcoming Events"
      >
        <div className="relative h-[300px] max-w-[400px] mx-auto w-full rounded-lg overflow-hidden border border-dark-border">
          <Image
            src={PLACEHOLDER_IMAGE}
            alt="No upcoming events"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <p className="text-white text-lg font-semibold text-center px-4">
              No upcoming events. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full lg:max-w-[1200px] rounded-bento p-8 border border-dark-border bento-card flex flex-col relative overflow-hidden group bg-dark-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Upcoming Events Carousel"
    >
      <div className="relative z-10 h-full flex flex-col">
        <div
          className="relative overflow-hidden mb-6"
          role="group"
          aria-label={`Carousel showing 1 of ${upcomingEvents.length} upcoming events`}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform }}
            aria-live="polite"
            aria-atomic="false"
          >
            {upcomingEvents.map((event) => (
              <UpcomingEventTile
                key={event.id}
                event={event}
                cardWidth={cardWidth}
                marginRight="0"
              />
            ))}
          </div>
        </div>

        <div
          className="flex items-center justify-between mt-auto pt-4 border-t border-dark-border"
          role="toolbar"
          aria-label="Carousel navigation"
        >
          <button
            onClick={() => handleButtonClick(prevEvent)}
            disabled={currentIndex === 0 || maxIndex === 0}
            className="w-8 h-8 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-dark-primary"
            aria-label="Previous events"
            aria-disabled={currentIndex === 0 || maxIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          </button>

          <div className="flex gap-2 items-center" role="tablist" aria-label="Event indicators">
            {dotsArray.map((dotIndex) => (
              <button
                key={`dot-${dotIndex}`}
                onClick={() => handleButtonClick(() => goToEvent(dotIndex))}
                role="tab"
                aria-selected={dotIndex === currentIndex}
                aria-label={`Go to event ${dotIndex + 1} of ${maxIndex + 1}`}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-dark-primary ${
                  dotIndex === currentIndex
                    ? "bg-dark-primary w-6"
                    : "bg-dark-card hover:bg-dark-card-hover border border-dark-border"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => handleButtonClick(nextEvent)}
            disabled={currentIndex >= maxIndex || maxIndex === 0}
            className="w-8 h-8 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-dark-primary"
            aria-label="Next events"
            aria-disabled={currentIndex >= maxIndex || maxIndex === 0}
          >
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

function UpcomingEventTile({
  event,
  cardWidth,
  marginRight,
}: {
  event: UpcomingEvent;
  cardWidth: string;
  marginRight: string;
}) {
  const hasRsvp = Boolean(event.rsvpUrl);

  return (
    <div
      className="flex-shrink-0 rounded-bento p-3 sm:p-4 md:p-5 border border-dark-border bg-dark-card flex flex-col relative overflow-hidden group hover:border-dark-primary transition-colors h-[300px] focus-within:ring-2 focus-within:ring-dark-primary focus-within:ring-offset-2"
      style={{ width: cardWidth, marginRight }}
      role="article"
      aria-label={`Upcoming event: ${event.title}`}
    >
      {event.image && (
        <div className="absolute inset-0 -m-2 sm:-m-4 md:-m-6 rounded-lg overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover"
          />
        </div>
      )}

      {hasRsvp && (
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
          <a
            href={event.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-dark-primary hover:bg-dark-primary-light text-white rounded-lg text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-dark-primary focus:ring-offset-2"
            aria-label="RSVP (opens in new tab)"
          >
            <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
            <span>RSVP</span>
          </a>
        </div>
      )}
      {!hasRsvp && (
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
          <span className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 bg-dark-card border border-dark-border text-dark-muted rounded-lg text-sm font-medium">
            Coming soon
          </span>
        </div>
      )}
    </div>
  );
}
