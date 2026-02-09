'use client';

import { MessageSquare } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Header */}
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-dark-secondary" />
        Get in Touch
      </h2>

      {/* Combined Email Card */}
      <div className="bg-dark-card rounded-3xl border border-dark-border p-8 flex-1 flex items-center">
        <div className="text-center w-full space-y-6">
          <div>
            <h3 className="font-bold text-2xl mb-3 bg-gradient-to-r from-dark-primary to-dark-primary-light bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <p className="text-dark-muted mb-6">
              Have a question or want to collaborate? Reach out to us!
            </p>
            <a
              href="mailto:d3communityofficial@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-primary hover:bg-dark-primary-light text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-dark-primary/50"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">Email Us</span>
            </a>
          </div>

          {/* Additional Info */}
          <p className="text-dark-muted text-sm">
            {' '}
            Email us at{' '}
            <a
              href="mailto:d3communityofficial@gmail.com"
              className="text-dark-primary hover:underline font-medium"
            >
              d3communityofficial@gmail.com
            </a>{' '}
            with the subject line "Partnership Inquiry"
          </p>
        </div>
      </div>
    </div>
  );
}