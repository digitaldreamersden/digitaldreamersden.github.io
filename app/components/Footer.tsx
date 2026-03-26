import { Mail } from 'lucide-react';
import { COMMUNITY_EMAIL } from '@/app/constants/contact';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-auto border-t border-dark-border bg-dark-card/50 pt-12 pb-12 md:pt-12 md:pb-12"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-4">
          <p className="text-dark-muted text-lg">
            Have a question or want to collaborate? Reach out to us.
          </p>
          <a
            href={`mailto:${COMMUNITY_EMAIL}`}
            className="inline-flex items-center gap-2 text-dark-primary hover:underline font-medium text-lg"
          >
            <Mail className="w-4 h-4 shrink-0" />
            Get in Touch
          </a>
        </div>
      </div>
    </footer>
  );
}
