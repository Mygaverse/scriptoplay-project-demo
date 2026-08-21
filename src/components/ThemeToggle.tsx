'use client';

import { useState } from 'react';
import { Button } from './Button';

/**
 * Demonstrates the theme-light/theme-dark token pair live: toggles the
 * `.dark` class that tokens-dark.css targets (see globals.css), the same
 * mechanism scriptoplay-web's own DashboardThemeContext uses.
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Button
      variant="secondary"
      className="whitespace-nowrap"
      onClick={() => {
        document.documentElement.classList.toggle('dark');
        setIsDark((prev) => !prev);
      }}
    >
      Switch to {isDark ? 'light' : 'dark'} mode
    </Button>
  );
}
