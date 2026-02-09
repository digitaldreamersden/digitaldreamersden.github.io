/**
 * Navigation Constants
 *
 * This file contains all constants related to the navigation component,
 * including section IDs, navigation items, and scroll detection settings.
 */

/**
 * Array of all section IDs in the order they appear on the page.
 * Used for scroll-based active section detection.
 */
export const NAVIGATION_SECTIONS = [
  'home',
  'about-socials',
  'team',
  'events',
  // 'mission-logs',
  'partners',
  'sponsors',
  'contributors',
  'contact',
] as const;

/**
 * Navigation items configuration.
 * Defines the navigation links displayed in the navigation bar.
 */
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'about-socials', label: 'About', href: '#about-socials' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'events', label: 'Events', href: '#events' },
  // { id: 'mission-logs', label: 'Mission', href: '#mission-logs' },
  { id: 'partners', label: 'Partners', href: '#partners' },
  { id: 'sponsors', label: 'Sponsors', href: '#sponsors' },
  { id: 'contributors', label: 'Contributors', href: '#contributors' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

/**
 * Scroll detection configuration
 */
export const SCROLL_CONFIG = {
  /**
   * Offset from viewport top for section detection (as fraction of viewport height).
   * Used to determine when a section is considered "active" during scrolling.
   */
  DETECTION_OFFSET: 1 / 3,

  /**
   * Offset in pixels from section top for detection threshold.
   * Helps with more accurate section detection.
   */
  SECTION_OFFSET: 100,

  /**
   * Scroll position threshold (in pixels) to consider user at the top of the page.
   * Below this value, the 'home' section is considered active.
   */
  TOP_THRESHOLD: 50,
} as const;

/**
 * External links
 */
export const EXTERNAL_LINKS = {
  WHATS_APP: 'https://chat.whatsapp.com/KtHsxrTG3m5F4Jv6Z1W61Y',
} as const;
