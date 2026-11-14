'use client';

import { useState } from 'react';
import { Quote } from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import { testimonialsData, Testimonial } from '../data/testimonialsData';

function RatingStars({ rating = 5 }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[...Array(5)].map((_, i) => {
        const isFilled = i < rating;
        return (
          <svg
            key={i}
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            fill={isFilled ? '#ffba00' : 'none'}
            stroke={isFilled ? '#ffba00' : 'currentColor'}
            style={{ color: isFilled ? '#ffba00' : '#d1d5db' }}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        );
      })}
    </div>
  );
}

function TestimonialAvatar({ testimonial }: { testimonial: Testimonial }) {
  const [imageError, setImageError] = useState(false);

  if (testimonial.avatarType === 'image' && testimonial.avatarUrl && !imageError) {
    return (
      <img
        src={testimonial.avatarUrl}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover shrink-0"
        loading="lazy"
        onError={() => setImageError(true)}
      />
    );
  }

  if (
    testimonial.avatarType === 'initials' ||
    (testimonial.avatarType === 'image' && imageError)
  ) {
    return (
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0 shadow-xs"
        style={{
          background:
            testimonial.gradient || 'linear-gradient(135deg, #6366f1, #3b82f6)',
        }}
      >
        {testimonial.initials || testimonial.name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  // Anonymous avatar
  return (
    <div
      className="w-10 h-10 rounded-full bg-[#1F1F1F] flex items-center justify-center shrink-0 overflow-hidden text-white"
      aria-label="Anonymous attendee"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          d="M49.5714 42.25C49.5714 35.948 54.6857 30.8438 61 30.8438C67.3143 30.8438 72.4286 35.948 72.4286 42.25C72.4286 48.552 67.3143 53.6562 61 53.6562C54.6857 53.6562 49.5714 48.552 49.5714 42.25ZM79.2857 42.25C79.2857 32.1697 71.1 24 61 24C50.9 24 42.7143 32.1697 42.7143 42.25C42.7143 52.3303 50.9 60.5 61 60.5C71.1 60.5 79.2857 52.3303 79.2857 42.25ZM35.8571 92.4375C35.8571 82.3572 44.0429 74.1875 54.1429 74.1875H67.8571C77.9571 74.1875 86.1429 82.3572 86.1429 92.4375V93.5781C86.1429 95.4744 87.6714 97 89.5714 97C91.4714 97 93 95.4744 93 93.5781V92.4375C93 78.5789 81.7429 67.3438 67.8571 67.3438H54.1429C40.2571 67.3438 29 78.5789 29 92.4375V93.5781C29 95.4744 30.5286 97 32.4286 97C34.3286 97 35.8571 95.4744 35.8571 93.5781V92.4375Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      role="article"
      aria-label={`Testimonial by ${testimonial.name}`}
      className="group relative rounded-2xl p-5 border border-dark-border bg-dark-card flex flex-col transition-all duration-300 hover:border-dark-primary/60"
    >
      {/* Decorative quote icon */}
      <div className="absolute top-4 right-4 pointer-events-none">
        <svg
          className="w-8 h-8 text-dark-muted opacity-10 group-hover:opacity-20 transition-opacity"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Rating stars */}
      <div className="mb-4">
        <RatingStars rating={testimonial.rating} />
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed mb-4 flex-1 text-dark-text whitespace-pre-line">
        {testimonial.content}
      </p>

      {/* Author row */}
      <div className="flex items-center gap-3 pt-3 border-t border-dark-border">
        <TestimonialAvatar testimonial={testimonial} />
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm truncate text-dark-text">
            {testimonial.name}
          </p>
          {testimonial.role && (
            <p className="text-xs text-dark-muted truncate">
              {testimonial.role}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AttendeeTestimonials() {
  return (
    <section id="testimonials" className="pt-16 space-y-6">
      <SectionHeader title="What our attendees say" icon={Quote} />
      <div
        role="region"
        aria-label="Testimonials"
        className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"
      >
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="break-inside-avoid mb-4">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
}
