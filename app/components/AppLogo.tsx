'use client';

import React from 'react';
import Image from 'next/image';

export default function AppLogo() {
  return (
    <Image
      src='/logo.png'
      alt='D3 community logo'
      width={48}
      height={48}
      className='w-full h-full'
    />
  );
}
