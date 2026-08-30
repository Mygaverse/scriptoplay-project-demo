import clsx from 'clsx';
import type { ReactNode } from 'react';

// Matches scriptoplay-web's ModuleLauncherCard.tsx real 6-hue palette
// (blue/purple/emerald/amber/cyan/rose) and its icon-chip + CTA-pill shape.
export type ToolCardColor = 'blue' | 'purple' | 'emerald' | 'amber' | 'cyan' | 'rose';

export interface ToolCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  status: string;
  ctaLabel?: string;
  color?: ToolCardColor;
  /** Real evidence (ModuleLauncherCard.tsx:68-69): disabled tools dim to
   * opacity-50 and suppress the hover ring/surface-swap entirely. */
  disabled?: boolean;
}

const ICON_BG: Record<ToolCardColor, string> = {
  blue: 'bg-tool-icon-bg-blue border-tool-icon-border-blue text-tool-icon-fg-blue',
  purple: 'bg-tool-icon-bg-purple border-tool-icon-border-purple text-tool-icon-fg-purple',
  emerald: 'bg-tool-icon-bg-emerald border-tool-icon-border-emerald text-tool-icon-fg-emerald',
  amber: 'bg-tool-icon-bg-amber border-tool-icon-border-amber text-tool-icon-fg-amber',
  cyan: 'bg-tool-icon-bg-cyan border-tool-icon-border-cyan text-tool-icon-fg-cyan',
  rose: 'bg-tool-icon-bg-rose border-tool-icon-border-rose text-tool-icon-fg-rose',
};

const CTA: Record<ToolCardColor, string> = {
  blue: 'bg-tool-cta-bg-blue text-tool-cta-fg-blue',
  purple: 'bg-tool-cta-bg-purple text-tool-cta-fg-purple',
  emerald: 'bg-tool-cta-bg-emerald text-tool-cta-fg-emerald',
  amber: 'bg-tool-cta-bg-amber text-tool-cta-fg-amber',
  cyan: 'bg-tool-cta-bg-cyan text-tool-cta-fg-cyan',
  rose: 'bg-tool-cta-bg-rose text-tool-cta-fg-rose',
};

// Real evidence (ModuleLauncherCard.tsx:42-47, 68-69): hover swaps the card
// surface bg-sunken -> bg-card and adds a colored ring, hover:border-{hue}-500/40.
const HOVER_BORDER: Record<ToolCardColor, string> = {
  blue: 'hover:border-tool-hover-border-blue',
  purple: 'hover:border-tool-hover-border-purple',
  emerald: 'hover:border-tool-hover-border-emerald',
  amber: 'hover:border-tool-hover-border-amber',
  cyan: 'hover:border-tool-hover-border-cyan',
  rose: 'hover:border-tool-hover-border-rose',
};

/** A module-launcher tile: icon, title, description, status, and a colored CTA pill. */
export function ToolCard({
  icon,
  title,
  description,
  status,
  ctaLabel = 'Open',
  color = 'blue',
  disabled = false,
}: ToolCardProps) {
  return (
    <div
      className={clsx(
        'border border-surface-border rounded-token-lg p-token-4 transition-colors',
        // Real value is opacity-50 here (ModuleLauncherCard.tsx:69), not the
        // opacity.disabled token (40%) - that token was scoped from bg-brand
        // button evidence specifically, a different disabled convention
        // than this large surface card uses.
        disabled
          ? 'bg-surface-muted opacity-50 cursor-not-allowed'
          : clsx('bg-surface-muted hover:bg-surface-default cursor-pointer', HOVER_BORDER[color]),
      )}
    >
      <div
        className={clsx(
          'w-10 h-10 rounded-token-md border flex items-center justify-center mb-token-3',
          ICON_BG[color],
        )}
      >
        {icon}
      </div>
      <p className="text-title text-text-primary mb-1">{title}</p>
      <p className="text-caption text-text-secondary leading-relaxed mb-token-3 min-h-[2.4em]">{description}</p>
      <div className="flex items-center justify-between gap-token-2">
        <span className="text-caption text-text-secondary truncate">{status}</span>
        <span
          className={clsx(
            'shrink-0 inline-flex items-center px-token-3 py-1.5 rounded-token-md text-xs font-bold',
            CTA[color],
          )}
        >
          {ctaLabel} →
        </span>
      </div>
    </div>
  );
}
