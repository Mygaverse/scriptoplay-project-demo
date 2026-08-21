import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/app/globals.css';

// Matches scriptoplay-web's real breakpoint evidence: mobile is the
// unprefixed base, `tablet` is stock Tailwind's md (768px), `web` is the
// app's own --breakpoint-lg override (1440px, not Tailwind's stock 1024px).
const viewports = {
  mobile: {
    name: 'Mobile',
    styles: { width: '375px', height: '667px' },
    type: 'mobile' as const,
  },
  tablet: {
    name: 'Tablet',
    styles: { width: '768px', height: '1024px' },
    type: 'tablet' as const,
  },
  web: {
    name: 'Web',
    styles: { width: '1440px', height: '900px' },
    type: 'desktop' as const,
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports,
      defaultViewport: 'web',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Light / dark theme (theme-light / theme-dark tokens)',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === 'dark';
      document.documentElement.classList.toggle('dark', isDark);
      return React.createElement(
        'div',
        { style: { background: 'var(--surface-muted)', minHeight: '100vh', padding: '1.5rem' } },
        React.createElement(Story),
      );
    },
  ],
};

export default preview;
