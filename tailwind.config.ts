import type { Config } from 'tailwindcss';

// Colors/spacing/radius below are read from CSS custom properties emitted by
// Style Dictionary (src/styles/tokens.css), generated from tokens/*.json.
// Run `npm run tokens:build` after changing tokens to regenerate that file.
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          'primary-dark': 'var(--color-brand-primary-dark)',
          ink: 'var(--color-brand-ink)',
        },
        grey: {
          50: 'var(--color-grey-50)',
          200: 'var(--color-grey-200)',
          500: 'var(--color-grey-500)',
          800: 'var(--color-grey-800)',
          900: 'var(--color-grey-900)',
        },
        success: { 500: 'var(--color-success-500)' },
        warning: { 500: 'var(--color-warning-500)' },
        danger: { 500: 'var(--color-danger-500)' },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          inverse: 'var(--text-inverse)',
        },
        surface: {
          default: 'var(--surface-default)',
          muted: 'var(--surface-muted)',
          border: 'var(--surface-border)',
        },
        phase: {
          concept: 'var(--color-phase-concept)',
          'world-bible': 'var(--color-phase-world-bible)',
          'character-vault': 'var(--color-phase-character-vault)',
          synopsis: 'var(--color-phase-synopsis)',
          treatment: 'var(--color-phase-treatment)',
          outline: 'var(--color-phase-outline)',
          'first-draft': 'var(--color-phase-first-draft)',
          revision: 'var(--color-phase-revision)',
          'final-draft': 'var(--color-phase-final-draft)',
        },
      },
      spacing: {
        'token-2': 'var(--space-2)',
        'token-4': 'var(--space-4)',
        'token-6': 'var(--space-6)',
        'token-8': 'var(--space-8)',
      },
      borderRadius: {
        'token-sm': 'var(--radius-sm)',
        'token-md': 'var(--radius-md)',
        'token-lg': 'var(--radius-lg)',
        'token-full': 'var(--radius-full)',
      },
    },
  },
  plugins: [],
};

export default config;
