import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Only used by Storybook's Vite builder — the Next.js app itself uses
// tsconfig "paths" directly. The react plugin must be explicit here: without
// it esbuild falls back to the classic JSX transform (React.createElement(...)
// with an implicit global `React`), which throws "React is not defined" since
// no component file imports React (they rely on the automatic JSX runtime).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
