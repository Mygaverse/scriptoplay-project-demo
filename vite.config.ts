import path from 'path';
import { defineConfig } from 'vite';

// Only used by Storybook's Vite builder — the Next.js app itself uses
// tsconfig "paths" directly.
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
