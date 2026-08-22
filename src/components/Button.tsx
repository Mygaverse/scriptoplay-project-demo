import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient';
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center px-token-4 py-token-2 rounded-token-md text-sm font-medium transition-colors',
        variant === 'primary' && 'bg-brand-primary text-white hover:bg-brand-primary-dark',
        variant === 'secondary' &&
          'bg-surface-default text-text-primary border border-surface-border hover:bg-surface-muted',
        // Real evidence (ChatbotBanner.tsx:19, InviteSection.tsx:42): gradient
        // CTAs use hover:opacity-90, not a color swap - a gradient has no
        // single "darker" version the way a solid fill does.
        variant === 'gradient' && 'bg-button-gradient text-white hover:opacity-90',
        className,
      )}
      {...props}
    />
  );
}
