import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

// Matches scriptoplay-web's Dashboard-home launcher tiles (Script Scan,
// Writers' Room, Story Reel, The Grail Notebook - app/dashboard/page.tsx:
// 147,166,180,194). 'pink' only appears here, not on ToolCard.
export type FeatureCardColor = 'blue' | 'purple' | 'emerald' | 'amber' | 'cyan' | 'rose' | 'pink';

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  title: string;
  description: string;
  color?: FeatureCardColor;
}

const ICON: Record<FeatureCardColor, string> = {
  blue: 'bg-feature-icon-bg-blue text-feature-icon-fg-blue group-hover:bg-feature-icon-hover-bg-blue',
  purple: 'bg-feature-icon-bg-purple text-feature-icon-fg-purple group-hover:bg-feature-icon-hover-bg-purple',
  emerald: 'bg-feature-icon-bg-emerald text-feature-icon-fg-emerald group-hover:bg-feature-icon-hover-bg-emerald',
  amber: 'bg-feature-icon-bg-amber text-feature-icon-fg-amber group-hover:bg-feature-icon-hover-bg-amber',
  cyan: 'bg-feature-icon-bg-cyan text-feature-icon-fg-cyan group-hover:bg-feature-icon-hover-bg-cyan',
  rose: 'bg-feature-icon-bg-rose text-feature-icon-fg-rose group-hover:bg-feature-icon-hover-bg-rose',
  pink: 'bg-feature-icon-bg-pink text-feature-icon-fg-pink group-hover:bg-feature-icon-hover-bg-pink',
};

/**
 * A Dashboard-home launcher tile: white->grey diagonal surface gradient,
 * a top-right icon chip that swaps tint -> solid on hover, title + description.
 */
export function FeatureCard({ icon, title, description, color = 'blue', className, ...props }: FeatureCardProps) {
  return (
    <div
      className={clsx(
        'group relative h-[180px] bg-surface-gradient border border-surface-border hover:border-surface-border-strong',
        'rounded-token-xl p-token-8 overflow-hidden transition-all hover:shadow-token-xl flex flex-col justify-center',
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          'absolute right-token-8 top-token-8 w-12 h-12 rounded-token-lg flex items-center justify-center',
          'transition-all duration-300 group-hover:text-white',
          ICON[color],
        )}
      >
        {icon}
      </div>
      <div className="relative z-10 max-w-sm">
        <h2 className="text-token-2xl font-token-bold text-text-primary mb-2">{title}</h2>
        <p className="text-token-sm text-text-secondary">{description}</p>
      </div>
    </div>
  );
}
