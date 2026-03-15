import { socialPlatforms } from '@/app/data/socials';

const hoverColorClasses: Record<string, string> = {
  LinkedIn: 'hover:border-[#0077B5] hover:text-[#0077B5]',
  Instagram: 'hover:border-[#E4405F] hover:text-[#E4405F]',
  YouTube: 'hover:border-[#FF0000] hover:text-[#FF0000]',
  'X (Twitter)': 'hover:border-[#1DA1F2] hover:text-[#1DA1F2]',
  WhatsApp: 'hover:border-[#25D366] hover:text-[#25D366]',
  'Luma Events': 'hover:border-[#FF6B00] hover:text-[#FF6B00]',
};

export default function SocialLinksBar() {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
      role="list"
      aria-label="Social links"
    >
      {socialPlatforms.map((platform) => {
        const Icon = platform.icon;
        return (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-card border border-dark-border text-dark-muted transition-all duration-300 ${hoverColorClasses[platform.name] ?? ''}`}
            aria-label={`${platform.name} - ${platform.description}`}
          >
            <Icon
              className="w-5 h-5 shrink-0"
              style={{ color: platform.color }}
            />
            <span className="font-medium text-sm whitespace-nowrap">
              {platform.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
