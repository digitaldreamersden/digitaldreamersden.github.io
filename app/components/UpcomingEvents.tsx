'use client';

import Image from 'next/image';
import type { UpcomingEvent } from '../data/events';

const PLACEHOLDER_IMAGE = '/events/comingsoon.png';

interface UpcomingEventsProps {
  events: UpcomingEvent[];
  emptyMessage?: string;
}

export default function UpcomingEvents({
  events,
  emptyMessage = 'No upcoming events. Stay tuned!',
}: UpcomingEventsProps) {
  if (!events.length) {
    return (
      <div className="relative w-[459px] max-w-full aspect-square rounded-2xl overflow-hidden border border-dark-border">
        <Image
          src={PLACEHOLDER_IMAGE}
          alt="No events"
          fill
          sizes="459px"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <p className="text-white text-sm font-semibold text-center px-4">
            {emptyMessage}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      {events.map((event) => {
        const image = event.image || PLACEHOLDER_IMAGE;
        const url = event.rsvpUrl;

        return url ? (
          <a
            key={event.id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[459px] max-w-full rounded-2xl overflow-hidden cursor-pointer"
            aria-label={event.title}
          >
            <Image
              src={image}
              alt={event.title}
              width={459}
              height={459}
              className="w-[459px] max-w-full h-auto object-cover"
            />
          </a>
        ) : (
          <div
            key={event.id}
            className="w-[459px] max-w-full rounded-2xl overflow-hidden"
            role="article"
            aria-label={`Upcoming event: ${event.title}`}
          >
            <Image
              src={image}
              alt={event.title}
              width={459}
              height={459}
              className="w-[459px] max-w-full h-auto object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
