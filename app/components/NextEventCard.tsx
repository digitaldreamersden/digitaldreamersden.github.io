"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import eventsData from "../data/events";


export default function NextEventCard() {
  const event = eventsData.upcomingEvents?.[0] || null;
  const hasRsvp = Boolean(event?.rsvpUrl);

  return (
    <div
      className="w-full lg:max-w-[1200px] h-[400px] rounded-bento p-4 sm:p-5 md:p-6 border border-dark-border bg-dark-card flex flex-col overflow-hidden group hover:border-dark-primary transition-colors"
      role="article"
      aria-label={event ? `Upcoming event: ${event.title}` : "Next event"}
    >
      {/* Responsive image block - fills remaining height */}
      {event?.image && (
        <div className="relative w-full flex-1 min-h-0 rounded-lg overflow-hidden border border-dark-border">
          <Image
            src={event.image}
            alt={event.title || "Event coming soon"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover"
          />
        </div>
      )}

      {/* Footer with RSVP button */}
      {hasRsvp && (
        <div className="mt-4 flex justify-end">
          <a
            href={event!.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 w-full sm:w-auto justify-center bg-dark-primary hover:bg-dark-primary-light text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-dark-primary focus:ring-offset-2 focus:ring-offset-[var(--color-card)]"
            aria-label="RSVP (opens in new tab)"
          >
            <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden />
            <span>RSVP</span>
          </a>
        </div>
      )}
    </div>
  );
}
