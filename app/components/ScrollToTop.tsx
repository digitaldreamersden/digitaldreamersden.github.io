'use client';

import { useEffect } from 'react';

/**
 * Simple client‑side helper that scrolls the window to the top when the component mounts.
 * It can be placed anywhere inside a page component – the effect runs once on mount.
 */
export default function ScrollToTop() {
  useEffect(() => {
    // Using a short timeout ensures the browser has finished any navigation transition.
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // This component renders nothing; it only triggers the effect.
  return null;
}
