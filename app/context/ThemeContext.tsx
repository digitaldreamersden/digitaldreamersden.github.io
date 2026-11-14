'use client';

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/** Must match the HTML `data-theme` default and ThemeProvider's initial state (SSR + first client paint). */
const DEFAULT_THEME: Theme = 'light';

function resolveTheme(): Theme {
  if (typeof document !== 'undefined') {
    const attributeTheme = document.documentElement.getAttribute('data-theme');
    if (attributeTheme === 'light' || attributeTheme === 'dark') {
      return attributeTheme;
    }
  }

  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }

  return DEFAULT_THEME;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useLayoutEffect(() => {
    // DOM/localStorage theme is applied by the inline script in layout before hydration; React state must start as
    // DEFAULT_THEME on server and the first client render so markup matches. Single sync after paint is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- post-hydration sync only
    setTheme(resolveTheme());
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

