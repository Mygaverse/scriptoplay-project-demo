import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'scriptoplay-ink',
      values: [{ name: 'scriptoplay-ink', value: '#0d0814' }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
