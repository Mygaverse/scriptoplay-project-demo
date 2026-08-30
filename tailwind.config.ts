import type { Config } from 'tailwindcss';

// Colors/spacing/radius below are read from CSS custom properties emitted by
// Style Dictionary (src/styles/tokens-light.css + tokens-dark.css), generated
// from tokens.json. Run `npm run tokens:build` after changing tokens.
const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // 'tablet'/'web' mirror the real breakpoint.tablet (768px) and
    // breakpoint.web (1440px) tokens - 1440 is scriptoplay-web's own
    // --breakpoint-lg override (variables.css:92), not Tailwind's stock
    // 1024px lg. Stock sm/md/lg/xl/2xl stay available alongside these.
    extend: {
      screens: {
        tablet: '768px',
        web: '1440px',
      },
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          text: 'var(--color-brand-text)',
          'tint-10': 'var(--color-brand-tint-10)',
          'tint-15': 'var(--color-brand-tint-15)',
          'tint-30': 'var(--color-brand-tint-30)',
          'tint-40': 'var(--color-brand-tint-40)',
        },
        ink: 'var(--color-ink)',
        success: { 500: 'var(--color-success-500)' },
        warning: { 500: 'var(--color-warning-500)' },
        danger: { 500: 'var(--color-danger-500)' },
        text: {
          primary: 'var(--text-primary)',
          soft: 'var(--text-soft)',
          secondary: 'var(--text-secondary)',
          subtle: 'var(--text-subtle)',
          inverse: 'var(--text-inverse)',
        },
        surface: {
          default: 'var(--surface-default)',
          muted: 'var(--surface-muted)',
          border: 'var(--surface-border)',
          'border-strong': 'var(--surface-border-strong)',
          overlay: 'var(--surface-overlay)',
          scrim: 'var(--surface-scrim)',
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
        // bg-*/text-*/border-* each need their own flat color key even
        // though they're conceptually one "role" or "tool card hue" - a
        // Tailwind color entry can only supply one value, shared by every
        // utility built from it, so bg/fg/border (and tool cards' icon/cta
        // split) can't live under a single 'role' or 'accent' key.
        'role-bg': {
          protagonist: 'var(--role-badge-protagonist-bg)',
          antagonist: 'var(--role-badge-antagonist-bg)',
          supporting: 'var(--role-badge-supporting-bg)',
          mentor: 'var(--role-badge-mentor-bg)',
          comic_relief: 'var(--role-badge-comic-relief-bg)',
          love_interest: 'var(--role-badge-love-interest-bg)',
          other: 'var(--role-badge-other-bg)',
        },
        'role-fg': {
          protagonist: 'var(--role-badge-protagonist-fg)',
          antagonist: 'var(--role-badge-antagonist-fg)',
          supporting: 'var(--role-badge-supporting-fg)',
          mentor: 'var(--role-badge-mentor-fg)',
          comic_relief: 'var(--role-badge-comic-relief-fg)',
          love_interest: 'var(--role-badge-love-interest-fg)',
          other: 'var(--role-badge-other-fg)',
        },
        'role-border': {
          protagonist: 'var(--role-badge-protagonist-border)',
          antagonist: 'var(--role-badge-antagonist-border)',
          supporting: 'var(--role-badge-supporting-border)',
          mentor: 'var(--role-badge-mentor-border)',
          comic_relief: 'var(--role-badge-comic-relief-border)',
          love_interest: 'var(--role-badge-love-interest-border)',
          other: 'var(--role-badge-other-border)',
        },
        'tool-icon-bg': {
          blue: 'var(--tool-card-blue-icon-bg)',
          purple: 'var(--tool-card-purple-icon-bg)',
          emerald: 'var(--tool-card-emerald-icon-bg)',
          amber: 'var(--tool-card-amber-icon-bg)',
          cyan: 'var(--tool-card-cyan-icon-bg)',
          rose: 'var(--tool-card-rose-icon-bg)',
        },
        'tool-icon-border': {
          blue: 'var(--tool-card-blue-icon-border)',
          purple: 'var(--tool-card-purple-icon-border)',
          emerald: 'var(--tool-card-emerald-icon-border)',
          amber: 'var(--tool-card-amber-icon-border)',
          cyan: 'var(--tool-card-cyan-icon-border)',
          rose: 'var(--tool-card-rose-icon-border)',
        },
        'tool-icon-fg': {
          blue: 'var(--tool-card-blue-icon-fg)',
          purple: 'var(--tool-card-purple-icon-fg)',
          emerald: 'var(--tool-card-emerald-icon-fg)',
          amber: 'var(--tool-card-amber-icon-fg)',
          cyan: 'var(--tool-card-cyan-icon-fg)',
          rose: 'var(--tool-card-rose-icon-fg)',
        },
        'tool-cta-bg': {
          blue: 'var(--tool-card-blue-cta-bg)',
          purple: 'var(--tool-card-purple-cta-bg)',
          emerald: 'var(--tool-card-emerald-cta-bg)',
          amber: 'var(--tool-card-amber-cta-bg)',
          cyan: 'var(--tool-card-cyan-cta-bg)',
          rose: 'var(--tool-card-rose-cta-bg)',
        },
        'tool-cta-fg': {
          blue: 'var(--tool-card-blue-cta-fg)',
          purple: 'var(--tool-card-purple-cta-fg)',
          emerald: 'var(--tool-card-emerald-cta-fg)',
          amber: 'var(--tool-card-amber-cta-fg)',
          cyan: 'var(--tool-card-cyan-cta-fg)',
          rose: 'var(--tool-card-rose-cta-fg)',
        },
        // Real evidence (ModuleLauncherCard.tsx:42-47): hover:border-{hue}-500/40
        // ring, only on hover and only when the card isn't disabled.
        'tool-hover-border': {
          blue: 'var(--tool-card-blue-hover-border)',
          purple: 'var(--tool-card-purple-hover-border)',
          emerald: 'var(--tool-card-emerald-hover-border)',
          amber: 'var(--tool-card-amber-hover-border)',
          cyan: 'var(--tool-card-cyan-hover-border)',
          rose: 'var(--tool-card-rose-hover-border)',
        },
        // Real evidence (app/dashboard/page.tsx:147-203): the Dashboard-home
        // launcher tiles' icon chip goes from a tint (bg-{hue}-500/10 +
        // text-{hue}-600/400) to a fully solid fill + white icon on
        // group-hover - same in both themes, no dark: override, unlike
        // tool card's CTA pill above.
        'feature-icon-bg': {
          blue: 'var(--feature-card-blue-icon-bg)',
          purple: 'var(--feature-card-purple-icon-bg)',
          emerald: 'var(--feature-card-emerald-icon-bg)',
          amber: 'var(--feature-card-amber-icon-bg)',
          cyan: 'var(--feature-card-cyan-icon-bg)',
          rose: 'var(--feature-card-rose-icon-bg)',
          pink: 'var(--feature-card-pink-icon-bg)',
        },
        'feature-icon-fg': {
          blue: 'var(--feature-card-blue-icon-fg)',
          purple: 'var(--feature-card-purple-icon-fg)',
          emerald: 'var(--feature-card-emerald-icon-fg)',
          amber: 'var(--feature-card-amber-icon-fg)',
          cyan: 'var(--feature-card-cyan-icon-fg)',
          rose: 'var(--feature-card-rose-icon-fg)',
          pink: 'var(--feature-card-pink-icon-fg)',
        },
        'feature-icon-hover-bg': {
          blue: 'var(--feature-card-blue-icon-hover-bg)',
          purple: 'var(--feature-card-purple-icon-hover-bg)',
          emerald: 'var(--feature-card-emerald-icon-hover-bg)',
          amber: 'var(--feature-card-amber-icon-hover-bg)',
          cyan: 'var(--feature-card-cyan-icon-hover-bg)',
          rose: 'var(--feature-card-rose-icon-hover-bg)',
          pink: 'var(--feature-card-pink-icon-hover-bg)',
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
        // 16px / rounded-2xl - the Featured Product hero banner container
        // (CartoonStudioBanner.tsx:20). Named to match Tailwind's own
        // 2xl/3xl split even though it sits BETWEEN our lg and xl below -
        // 'xl' here was named first (24px) before this 16px step was found.
        'token-2xl': 'var(--radius-2xl)',
        // 24px / rounded-3xl - the Dashboard-home launcher tiles
        // (app/dashboard/page.tsx:147 etc.), bigger than anything else here.
        'token-xl': 'var(--radius-xl)',
        'token-full': 'var(--radius-full)',
      },
      fontFamily: {
        // Token's own value already ends in ", sans-serif" (matches
        // variables.css:10's real --font-outfit definition).
        sans: ['var(--font-family-sans)'],
      },
      fontSize: {
        // 11px - not a formal Tailwind scale step in scriptoplay-web, but
        // used as an arbitrary text-[11px] value ~950x across the dashboard
        // (section headers, badges, meta labels) - more often than
        // text-xs/text-sm individually. Formalized here as its own tier.
        'token-2xs': 'var(--font-size-2xs)',
        'token-xs': 'var(--font-size-xs)',
        'token-sm': 'var(--font-size-sm)',
        'token-base': 'var(--font-size-base)',
        'token-lg': 'var(--font-size-lg)',
        'token-xl': 'var(--font-size-xl)',
        'token-2xl': 'var(--font-size-2xl)',
        'token-3xl': 'var(--font-size-3xl)',
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
        // Stock Tailwind shadow-xl (no override in scriptoplay-web's config)
        // - the Dashboard-home launcher tiles' hover:shadow-xl.
        'token-xl': 'var(--shadow-xl)',
      },
      opacity: {
        'token-hover': 'var(--opacity-hover)',
        'token-disabled': 'var(--opacity-disabled)',
      },
      backgroundImage: {
        // A gradient can't be a Figma/Token Studio variable itself - only
        // its stops can. This points at --button-gradient-bg, which Style
        // Dictionary resolved from a raw linear-gradient() string with
        // {color.brand.primary}/{color.brand.secondary} references baked
        // in, so it still flips correctly between light and dark.
        'button-gradient': 'var(--button-gradient-bg)',
        // Real evidence (app/dashboard/page.tsx:147 etc.): the Dashboard-home
        // launcher tiles' white->grey diagonal (bg-gradient-to-br from-card
        // to-raised) - a surface gradient, not a brand one, so it lives on
        // its own token rather than reusing button-gradient.
        'surface-gradient': 'var(--surface-gradient)',
        // Real evidence (CartoonStudioBanner.tsx:45-46, the Dashboard-home
        // "Featured Product" hero): two stacked overlay gradients over a
        // background image/video, explicitly documented in source as
        // theme-INDEPENDENT (a deliberate exception to the light/dark
        // contract), so these read straight off global, not a theme set.
        'hero-overlay-h': 'var(--featured-hero-overlay-horizontal)',
        'hero-overlay-v': 'var(--featured-hero-overlay-vertical)',
        // CartoonStudioBanner.tsx:65 - the "IP Studio" title text, from
        // brand-text (theme-dependent) to orange-300 (theme-neutral, no
        // dark: override in the real class).
        'text-gradient': 'var(--text-gradient)',
      },
    },
  },
  plugins: [],
};

export default config;
