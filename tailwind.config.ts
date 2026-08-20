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
          bg: 'var(--color-grey-bg)',
          surface: 'var(--color-grey-surface)',
          'surface-raised': 'var(--color-grey-surface-raised)',
          border: 'var(--color-grey-border)',
          'border-strong': 'var(--color-grey-border-strong)',
          text: 'var(--color-grey-text)',
          'text-muted': 'var(--color-grey-text-muted)',
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
          world_bible: 'var(--color-phase-world-bible)',
          character_vault: 'var(--color-phase-character-vault)',
          synopsis: 'var(--color-phase-synopsis)',
          treatment: 'var(--color-phase-treatment)',
          outline: 'var(--color-phase-outline)',
          first_draft: 'var(--color-phase-first-draft)',
          revision: 'var(--color-phase-revision)',
          final_draft: 'var(--color-phase-final-draft)',
        },
      },
      spacing: {
        'token-1': 'var(--space-1)',
        'token-1_5': 'var(--space-1-5)',
        'token-2': 'var(--space-2)',
        'token-2_5': 'var(--space-2-5)',
        'token-3': 'var(--space-3)',
        'token-4': 'var(--space-4)',
        'token-5': 'var(--space-5)',
        'token-6': 'var(--space-6)',
        'token-8': 'var(--space-8)',
        'token-10': 'var(--space-10)',
        'token-12': 'var(--space-12)',
      },
      borderRadius: {
        'token-sm': 'var(--radius-sm)',
        'token-md': 'var(--radius-md)',
        'token-lg': 'var(--radius-lg)',
        'token-full': 'var(--radius-full)',
      },
      fontFamily: {
        sans: ['var(--font-family-sans)', 'sans-serif'],
      },
      fontSize: {
        'token-xs': 'var(--font-size-xs)',
        'token-sm': 'var(--font-size-sm)',
        'token-base': 'var(--font-size-base)',
        'token-lg': 'var(--font-size-lg)',
        'token-xl': 'var(--font-size-xl)',
        'token-2xl': 'var(--font-size-2xl)',
      },
      fontWeight: {
        'token-normal': 'var(--font-weight-normal)',
        'token-medium': 'var(--font-weight-medium)',
        'token-semibold': 'var(--font-weight-semibold)',
        'token-bold': 'var(--font-weight-bold)',
        'token-black': 'var(--font-weight-black)',
      },
      lineHeight: {
        'token-tight': 'var(--line-height-tight)',
        'token-snug': 'var(--line-height-snug)',
        'token-normal': 'var(--line-height-normal)',
        'token-relaxed': 'var(--line-height-relaxed)',
      },
      boxShadow: {
        'token-sm': 'var(--shadow-sm)',
        'token-md': 'var(--shadow-md)',
        'token-lg': 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
};

export default config;
