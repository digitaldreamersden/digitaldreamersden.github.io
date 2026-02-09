'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  NAVIGATION_SECTIONS,
  NAVIGATION_ITEMS,
  SCROLL_CONFIG,
  EXTERNAL_LINKS,
} from '../constants/navigation';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * SCROLL_CONFIG.DETECTION_OFFSET;

      // Find the current section
      let currentSection = 'home';

      for (let i = 0; i < NAVIGATION_SECTIONS.length; i++) {
        const section = document.getElementById(NAVIGATION_SECTIONS[i]);
        if (section) {
          const sectionTop = section.offsetTop;

          if (scrollPosition >= sectionTop - SCROLL_CONFIG.SECTION_OFFSET) {
            currentSection = NAVIGATION_SECTIONS[i];
          }
        }
      }

      setActiveSection(currentSection);

      // Check if we're at the top of the page
      if (window.scrollY < SCROLL_CONFIG.TOP_THRESHOLD) {
        setActiveSection('home');
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    itemId?: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on mobile when link is clicked

    if (itemId === 'home' || !itemId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(itemId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50 nav-glass text-dark-text px-6 py-3 rounded-full border border-dark-nav-border shadow-[0_0_20px_rgba(0,0,0,0.5)] items-center gap-6">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'home')}
          className={`font-bold flex items-center gap-2 transition-colors ${
            activeSection === 'home'
              ? 'nav-active'
              : 'text-dark-muted hover:text-dark-text'
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full transition-all ${
              activeSection === 'home' ? 'nav-active-dot' : 'bg-dark-muted'
            }`}
          ></div>
          <span>Home</span>
        </a>
        <div className="h-4 w-px divider-dark-bg"></div>
        {NAVIGATION_ITEMS.filter((item) => item.id !== 'home').map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`text-sm font-medium transition-colors ${
              activeSection === item.id
                ? 'nav-active font-bold'
                : 'text-dark-muted hover:text-dark-text'
            }`}
          >
            {item.label}
          </a>
        ))}
        <div className="h-4 w-px divider-dark-bg"></div>
        <a
          href={EXTERNAL_LINKS.WHATS_APP}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark-primary text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-indigo-400 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]"
        >
          Join
        </a>
      </nav>

      {/* Mobile Navigation - Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 nav-glass text-dark-text p-4 rounded-full border border-dark-border shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-105"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-dark-bg/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="nav-glass border border-dark-border rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.8)] absolute bottom-20 left-1/2 -translate-x-1/2 w-auto min-w-[200px] max-w-[90vw] p-4 h-[auto] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-3 flex-1 justify-between">
              <div className="flex flex-col gap-3">
                {/* Home Link */}
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className={`font-bold flex items-center gap-3 transition-colors py-2 ${
                    activeSection === 'home'
                      ? 'nav-active'
                      : 'text-dark-muted hover:text-dark-text'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeSection === 'home'
                        ? 'nav-active-dot'
                        : 'bg-dark-muted'
                    }`}
                  ></div>
                  <span>Home</span>
                </a>

                <div className="h-px w-full divider-dark-bg opacity-30"></div>

                {/* Other Navigation Items */}
                {NAVIGATION_ITEMS.filter((item) => item.id !== 'home').map(
                  (item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`text-base font-medium transition-colors py-2 ${
                        activeSection === item.id
                          ? 'nav-active font-bold'
                          : 'text-dark-muted hover:text-dark-text'
                      }`}
                    >
                      {item.label}
                    </a>
                  )
                )}

                <div className="h-px w-full divider-dark-bg opacity-30"></div>
              </div>

              {/* Join Button - Fixed at bottom */}
              <a
                href={EXTERNAL_LINKS.WHATS_APP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="bg-dark-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-indigo-400 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)] text-center"
              >
                Join WhatsApp
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
