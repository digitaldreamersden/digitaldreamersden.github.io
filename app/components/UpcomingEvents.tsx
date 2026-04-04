'use client';

import Image from 'next/image';
import type { UpcomingEvent } from '../data/events';

const PLACEHOLDER_IMAGE = '/events/comingsoon.png';

interface UpcomingEventsProps {
  events: UpcomingEvent[];
  emptyMessage?: string;
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  if (!events.length) {
    return (
      <div className="relative w-[459px] max-w-full aspect-square rounded-2xl overflow-hidden border border-dark-border">
        <a
          href={'https://d3community.in/luma'}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[459px] max-w-full rounded-2xl overflow-hidden cursor-pointer"
          aria-label={'Subscribe for upcoming events'}
        >
          <Image
            src={PLACEHOLDER_IMAGE}
            alt="No events"
            fill
            sizes="459px"
            className="object-cover"
            title="Subscribe for upcoming events"
          />
        </a>
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
