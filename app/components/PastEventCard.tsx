"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useMemo, useCallback } from "react";
import eventsData from "../data/events";
import { useResponsiveCardsPerView, useCarouselAutoRotate, useCarouselPause } from "../hooks/useCarousel";

export default function PastEventCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = useResponsiveCardsPerView();
  
  // Memoize pastEvents to prevent array recreation on every render
  const pastEvents = useMemo(() => {
    return eventsData.pastEvents || [];
  }, []);
  
  const { isPaused, pause, resume, pauseWithResume } = useCarouselPause();

  // Early return check (moved after hooks to follow rules of hooks)
  const maxIndex = useMemo(() => {
    if (!pastEvents || pastEvents.length === 0) return 0;
    return Math.max(0, pastEvents.length - cardsPerView);
  }, [pastEvents.length, cardsPerView]);

  // Reset index when cardsPerView changes to prevent out of bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, currentIndex, maxIndex]);

  // Auto-rotate functionality
  useCarouselAutoRotate(currentIndex, setCurrentIndex, maxIndex, isPaused, 4000);

  // Navigation handlers
  const nextEvent = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevEvent = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToEvent = useCallback((index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  }, [maxIndex]);

  // Consolidated event handlers
  const handleButtonClick = useCallback((callback: () => void) => {
    pauseWithResume(5000);
    callback();
  }, [pauseWithResume]);

  const handleMouseEnter = useCallback(() => pause(), [pause]);
  const handleMouseLeave = useCallback(() => resume(), [resume]);

  // Memoized calculations
  const cardWidth = useMemo(() => {
    if (cardsPerView === 1) return '100%';
    const margins = cardsPerView - 1;
    return `calc((100% - ${margins}rem) / ${cardsPerView})`;
  }, [cardsPerView]);

  const transform = useMemo(() => {
    if (cardsPerView === 1) {
      return `translateX(-${currentIndex * 100}%)`;
    }
    const cardWidthPercent = 100 / cardsPerView;
    const marginPerCard = 1 / cardsPerView; // Each card contributes 1rem / cardsPerView to the total margin
    return `translateX(calc(-${currentIndex * cardWidthPercent}% - ${currentIndex * marginPerCard}rem))`;
  }, [currentIndex, cardsPerView]);

  // Memoize dots array to prevent React children change error
  const dotsArray = useMemo(() => {
    return Array.from({ length: Math.max(0, maxIndex + 1) }, (_, i) => i);
  }, [maxIndex]);

  // Early return after all hooks
  if (!pastEvents || pastEvents.length === 0) {
    return null;
  }

  return (
    <div 
      className="col-span-1 md:col-span-4 rounded-bento p-8 border border-dark-border bento-card flex flex-col relative overflow-hidden group bg-dark-card" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Past Events Carousel"
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Carousel Content - Responsive Cards */}
        <div 
          className="relative overflow-hidden mb-6"
          role="group"
          aria-label={`Carousel showing ${cardsPerView} of ${pastEvents.length} events`}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform }}
            aria-live="polite"
            aria-atomic="false"
          >
            {pastEvents.map((event, index) => (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                key={event.id}
                className="flex-shrink-0 rounded-bento p-3 sm:p-4 md:p-5 border border-dark-border bg-dark-card flex flex-col relative overflow-hidden group hover:border-dark-primary transition-colors cursor-pointer aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] focus:outline-none focus:ring-2 focus:ring-dark-primary focus:ring-offset-2"
                style={{ 
                  width: cardWidth,
                  marginRight: cardsPerView === 1 || index === pastEvents.length - 1 ? '0' : '1rem'
                }}
                aria-label={`${event.title}`}
              >
                {/* External link icon at top right */}
                {event.link && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-500/80 backdrop-blur-sm flex items-center justify-center border border-gray-400/50">
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-gray-100 transition-colors" />
                    </div>
                  </div>
                )}

                {/* Image filling the entire card */}
                {event.image && (
                  <div className="absolute inset-0 -m-2 sm:-m-4 md:-m-6">
                    <Image
                      src={event.image}
                      alt={`${event.title}`}
                      fill
                      className="object-contain p-4 sm:p-5 md:p-6"
                    />
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-dark-border" role="toolbar" aria-label="Carousel navigation">
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
            {dotsArray.map((index) => (
              <button
                key={`dot-${index}`}
                onClick={() => handleButtonClick(() => goToEvent(index))}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to event ${index + 1} of ${maxIndex + 1}`}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-dark-primary ${
                  index === currentIndex
                    ? 'bg-dark-primary w-6'
                    : 'bg-dark-card hover:bg-dark-card-hover border border-dark-border'
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
