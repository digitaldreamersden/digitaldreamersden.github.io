import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import HeroIcon from './HeroIcon';
import { EXTERNAL_LINKS } from '@/app/constants/navigation';
import { getAssetPath } from '@/app/utils/paths';
// import Robot3D from './Robot3D'; // Commented out for now, will be used in future

export default function HeroSection() {
  return (
    <div
      data-hero-section
      className="md:col-span-2 md:row-span-2 rounded-bento p-4 md:p-12 border border-dark-border bento-card relative overflow-hidden group flex flex-col justify-between"
      style={{
        background: 'linear-gradient(60deg, #050d2a 0%, #0a1f4a 25%, #050d2a 50%, #0a1f4a 75%, #1a4d9e 100%)',
      }}
    >
      {/* Animated Grid Pattern - Proper Grid with Horizontal and Vertical Lines */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 102, 255, 0.2) 25%, rgba(0, 102, 255, 0.2) 26%, transparent 27%, transparent 74%, rgba(0, 102, 255, 0.2) 75%, rgba(0, 102, 255, 0.2) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 102, 255, 0.2) 25%, rgba(0, 102, 255, 0.2) 26%, transparent 27%, transparent 74%, rgba(0, 102, 255, 0.2) 75%, rgba(0, 102, 255, 0.2) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '80px 80px',
          animation: 'grid-shift 15s ease-in-out infinite',
        }}
      ></div>

      {/* Secondary Grid Pattern - Diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 70px,
              rgba(0, 74, 173, 0.15) 70px,
              rgba(0, 74, 173, 0.15) 72px
            )
          `,
          animation: 'diagonal-shift 25s linear infinite',
        }}
      ></div>

      {/* Decorative gradient elements */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 74, 173, 0.25) 0%, transparent 70%)',
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 74, 173, 0.2) 0%, transparent 70%)',
        }}
      ></div>

      <style>{`
        @keyframes grid-shift {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(20px, 20px); opacity: 0.5; }
        }
        @keyframes diagonal-shift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(70px) translateY(70px); }
        }
      `}</style>

      {/* Hero Icon - Renders tablet and desktop images based on device type */}
      <HeroIcon variant="desktop" />

      <div className="relative z-20">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold mb-3 md:mb-6"
          style={{
            backgroundColor: 'rgba(0, 74, 173, 0.1)',
            borderColor: 'rgba(0, 74, 173, 0.3)',
            color: '#ffffff',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: 'var(--color-primary-light)' }}
            ></span>
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: 'var(--color-primary)' }}
            ></span>
          </span>
          BUILDING THE FUTURE
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3 md:mb-6 tracking-tight text-white">
          Dream. <br />
          <span>Build.Grow.</span>
        </h2>

        <p className="text-base md:text-lg text-white/85 mb-4 md:mb-8 max-w-md hero-paragraph leading-relaxed">
          A vibrant tech community bringing AI and Full-Stack Engineers together to build the future.
        </p>

        <p className="text-base md:text-lg text-white/85 mb-4 md:mb-8 max-w-md hero-paragraph leading-relaxed">
          We host events, workshops, and networking opportunities that connect
          talented engineers with cutting-edge technology and industry leaders.
        </p>

        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-start justify-center gap-1 md:gap-4 relative md:static h-[180px] md:h-auto">
          {/* Mobile Hero Icon - Centered above the button */}
          <HeroIcon variant="mobile" />
          <a
            href="#events"
            className="hidden md:inline-flex items-center gap-2 px-4 md:px-6 py-3 text-sm md:text-base rounded-xl font-bold transition-all hover:shadow-lg hover:scale-105"
            style={{ background: 'var(--gradient-primary)', color: 'white' }}
          >
            Explore Events <ArrowRight className="w-6 h-6 md:w-4 md:h-4" />
          </a>
          <a
            href={EXTERNAL_LINKS.WHATS_APP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-3 md:gap-2 w-full max-w-xs md:w-auto px-4 md:px-6 py-3 text-sm md:text-base bg-dark-card border border-dark-border text-dark-text rounded-xl font-bold hover:border-dark-primary transition-colors"
          >
            <Image
              src={getAssetPath('/hero/whats-app.png')}
              alt="join community"
              width={24}
              height={24}
            />
            Join Community
          </a>
        </div>
      </div>
    </div>
  );
}
