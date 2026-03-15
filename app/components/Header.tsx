'use client';

import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  CalendarDays,
  Sun,
  Moon,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AppLogo from './AppLogo';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center gap-4 sm:gap-0 px-2">
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12 shrink-0">
          <AppLogo />
        </div>
        <div className="min-w-0">
          <h1 className="font-bold text-2xl md:text-xl lg:text-4xl leading-none tracking-tight whitespace-nowrap">
            Digital Dreamers Den
          </h1>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full bg-dark-card border border-dark-border cursor-pointer flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        <a
          href="https://github.com/d3communityofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-[#8534F3] transition-all"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" style={{ color: '#8534F3' }} />
        </a>
        <a
          href="https://d3community.in/x"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-[#1DA1F2] transition-all"
          aria-label="X (Twitter)"
        >
          <Twitter className="w-5 h-5" style={{ color: '#1DA1F2' }} />
        </a>
        <a
          href="https://d3community.in/linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-[#0077B5] transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" style={{ color: '#0077B5' }} />
        </a>
        <a
          href="https://d3community.in/youtube"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-[#FF0000] transition-all"
          aria-label="YouTube"
        >
          <Youtube className="w-5 h-5" style={{ color: '#FF0000' }} />
        </a>
        <a
          href="https://d3community.in/instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-[#E4405F] transition-all"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" style={{ color: '#E4405F' }} />
        </a>
        <a
          href="https://d3community.in/luma"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-[#FF6B00] transition-all"
          aria-label="Luma Events"
        >
          <CalendarDays className="w-5 h-5" style={{ color: '#FF6B00' }} />
        </a>
      </div>
    </header>
  );
}
