'use client';

import { socialPlatforms } from '@/app/data/socials';
import { useState, useRef } from 'react';
import { useTheme } from '@/app/context/ThemeContext';

interface TiltState {
  x: number;
  y: number;
}

function SocialCard({
  platform,
}: {
  platform: (typeof socialPlatforms)[0];
}) {
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const { theme } = useTheme();

  const Icon = platform.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -20, y: x * 20 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <a
      ref={cardRef}
      key={platform.name}
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="group relative flex flex-col items-center justify-between px-4 py-5 rounded-2xl overflow-hidden cursor-pointer w-36 h-36 md:w-48 md:h-48"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out',
        '--brand-color': platform.color,
      } as React.CSSProperties}
      aria-label={`${platform.name} - ${platform.description}`}
    >
      <div
        className="absolute inset-0 rounded-2xl bg-dark-card"
        style={{
          boxShadow: isHovered
            ? `0 0 40px ${platform.color}40, 0 20px 40px rgba(0,0,0,0.15)`
            : `0 8px 24px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1)`,
          transition: 'box-shadow 0.3s ease',
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      />

      <div
        className="absolute inset-[1px] rounded-2xl bg-dark-card z-[1]"
        style={{
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
        }}
      />

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${platform.color}30, transparent 30%)`,
          animation: isHovered ? 'spin 3s linear infinite' : 'none',
        }}
      />

      <div
        className="absolute inset-[2px] rounded-[14px] bg-dark-card z-[3]"
        style={{
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)',
        }}
      />

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center"
          style={{
            backgroundColor: `${platform.color}15`,
            boxShadow: isHovered
              ? `0 0 30px ${platform.color}50, inset 0 1px 1px rgba(255,255,255,0.1)`
              : 'inset 0 1px 1px rgba(255,255,255,0.05)',
            transition: 'all 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          {isHovered && (
            <div
              className="absolute inset-0 rounded-2xl animate-pulse"
              style={{
                background: `radial-gradient(circle, ${platform.color}30 0%, transparent 70%)`,
              }}
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full animate-ping"
                style={{
                  backgroundColor: platform.color,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s',
                  opacity: isHovered ? 0.6 : 0,
                  transform: `translate(${Math.cos((i * 120 * Math.PI) / 180) * 35}px, ${Math.sin((i * 120 * Math.PI) / 180) * 35}px)`,
                  transition: 'opacity 0.3s',
                }}
              />
            ))}
          </div>

          <Icon
            className="w-8 h-8 md:w-10 md:h-10 relative z-10"
            style={{
              color: platform.color,
              filter: isHovered ? `drop-shadow(0 0 8px ${platform.color})` : 'none',
              transition: 'all 0.3s ease',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 text-center">
        <span
          className="font-bold text-sm block mb-1 transition-all duration-300"
          style={{
            color: isHovered ? platform.color : 'var(--color-text)',
            textShadow: isHovered ? `0 0 20px ${platform.color}80` : 'none',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          {platform.name}
        </span>
        <span className="text-[11px] text-dark-muted leading-tight block">
          {platform.description}
        </span>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </a>
  );
}

export default function SocialLinksBar() {
  return (
    <div
      className="flex flex-wrap justify-center gap-4 md:gap-5"
      role="list"
      aria-label="Social links"
      style={{ perspective: '1000px' }}
    >
      {socialPlatforms.map((platform) => (
        <SocialCard key={platform.name} platform={platform} />
      ))}
    </div>
  );
}
