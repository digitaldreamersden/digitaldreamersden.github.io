'use client';

import Image from 'next/image';

export default function AppLogo() {
  const logoClass =
    'app-logo-img absolute inset-0 h-full w-full object-contain';

  return (
    <div className='app-logo-slot'>
      <Image
        src='/full_logo_dark.png'
        alt='Digital Dreamers Den logo'
        width={120}
        height={60}
        className={`${logoClass} app-logo-img--light`}
      />
      <Image
        src='/full_logo_light.png'
        alt='Digital Dreamers Den logo'
        width={120}
        height={60}
        className={`${logoClass} app-logo-img--dark`}
      />
    </div>
  );
}
