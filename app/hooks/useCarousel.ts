import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Breakpoints for responsive carousel (1 / 2 / 3 / 4 cards per row)
 */
const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  xl: 1280,
} as const;

/**
 * Debounce utility function
 */
function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Hook to handle responsive cards per view based on window size
 * Returns the number of cards to display (1 / 2 / 3 / 4 per row)
 *
 * @returns {number} Number of cards to display per view
 */
export function useResponsiveCardsPerView(): number {
  const [cardsPerView, setCardsPerView] = useState<number>(() => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth >= BREAKPOINTS.xl) return 4;
    if (window.innerWidth >= BREAKPOINTS.desktop) return 3;
    if (window.innerWidth >= BREAKPOINTS.tablet) return 2;
    if (window.innerWidth >= BREAKPOINTS.mobile) return 2;
    return 1;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateCardsPerView = () => {
      if (window.innerWidth >= BREAKPOINTS.xl) {
        setCardsPerView(4);
      } else if (window.innerWidth >= BREAKPOINTS.desktop) {
        setCardsPerView(3);
      } else if (window.innerWidth >= BREAKPOINTS.tablet) {
        setCardsPerView(2);
      } else if (window.innerWidth >= BREAKPOINTS.mobile) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    const debouncedUpdate = debounce(updateCardsPerView, 150);
    updateCardsPerView();
    window.addEventListener('resize', debouncedUpdate);
    return () => window.removeEventListener('resize', debouncedUpdate);
  }, []);

  return cardsPerView;
}

/**
 * Hook to handle carousel auto-rotate functionality with pause/resume
 * 
 * @param currentIndex - Current carousel index
 * @param setCurrentIndex - State setter for current index
 * @param maxIndex - Maximum valid index
 * @param isPaused - Whether auto-rotate is paused
 * @param intervalMs - Auto-rotate interval in milliseconds (default: 4000)
 */
export function useCarouselAutoRotate(
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
  maxIndex: number,
  isPaused: boolean,
  intervalMs: number = 4000
): void {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const setCurrentIndexRef = useRef(setCurrentIndex);

  // Keep ref updated
  useEffect(() => {
    setCurrentIndexRef.current = setCurrentIndex;
  }, [setCurrentIndex]);

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Don't auto-rotate if paused or if there's nothing to rotate
    if (isPaused || maxIndex <= 0) {
      return;
    }

    // Set up auto-rotate interval
    intervalRef.current = setInterval(() => {
      setCurrentIndexRef.current((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, intervalMs);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, maxIndex, intervalMs]);
}

/**
 * Hook to manage carousel pause state with auto-resume
 * 
 * @returns Object containing pause state and control functions
 */
export function useCarouselPause() {
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pause = useCallback(() => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
    setIsPaused(true);
  }, []);

  const resume = useCallback((delayMs: number = 0) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
    
    if (delayMs > 0) {
      resumeTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, delayMs);
    } else {
      setIsPaused(false);
    }
  }, []);

  const pauseWithResume = useCallback((delayMs: number = 5000) => {
    pause();
    resume(delayMs);
  }, [pause, resume]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  return { isPaused, pause, resume, pauseWithResume };
}
