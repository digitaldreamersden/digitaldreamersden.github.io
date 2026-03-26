'use client';

import Image from 'next/image';
import { getAssetPath } from '../../utils/paths';

type HeroIconVariant = 'mobile' | 'desktop' | 'all';

interface HeroIconProps {
  variant?: HeroIconVariant;
}

export default function HeroIcon({ variant = 'all' }: HeroIconProps) {
  return (
    <>
      {/* Mobile: Robot Sitting - Above Join Discord button */}
      {variant === 'mobile' && (
        <div className="flex md:hidden w-32 h-32 mx-auto pointer-events-none z-30 items-end justify-end">
          <Image
            src={getAssetPath('/hero/D3 robot sitting.png')}
            alt="D3 Robot Sitting"
            width={200}
            height={200}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      )}

      {/* Tablet: Robot Flying - Top right corner */}
      {(variant === 'desktop' || variant === 'all') && (
        <>
          <div className="hidden md:flex lg:hidden absolute top-10 right-6 w-64 h-64 pointer-events-none z-10 items-start justify-end">
            <Image
              src={getAssetPath('/hero/D3 robot flying.png')}
              alt="D3 Robot Flying"
              width={400}
              height={400}
              className="object-contain w-full h-full"
              priority
            />
          </div>

          {/* Desktop: Robot Pose - Right center */}
          <div className="hidden lg:flex absolute top-1/2 right-0 xl:right-40 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none z-10 items-center justify-center">
            <Image
              src={getAssetPath('/hero/D3 robot pose.png')}
              alt="D3 Robot"
              width={800}
              height={800}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </>
      )}
    </>
  );
}
