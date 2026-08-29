import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient';
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center px-token-4 py-token-2 text-sm font-medium transition-colors disabled:opacity-token-disabled disabled:cursor-not-allowed',
        // Real evidence (projects/page.tsx:250, [projectId]/page.tsx:736):
        // every bg-brand button uses hover:opacity-90, not a color swap -
        // same mechanism as gradient below, so 'primary' matches it now
        // instead of the invented brand-primary-dark hex it used before.
        // Radius is rounded-xl (12px / radius.lg) on both real instances,
        // not the rounded-lg (8px) shared with secondary/gradient below.
        variant === 'primary' && 'bg-brand-primary text-white hover:opacity-token-hover rounded-token-lg',
        variant === 'secondary' &&
          'bg-surface-default text-text-primary border border-surface-border hover:bg-surface-muted rounded-token-md',
        // Real evidence (ChatbotBanner.tsx:19, InviteSection.tsx:42): gradient
        // CTAs use hover:opacity-90, not a color swap - a gradient has no
        // single "darker" version the way a solid fill does. Both use
        // rounded-lg (8px / radius.md), unlike the solid primary above.
        variant === 'gradient' && 'bg-button-gradient text-white hover:opacity-token-hover rounded-token-md',
        className,
      )}
      {...props}
    />
  );
}
