import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'success' | 'warning' | 'danger';
}

export function Badge({ tone = 'success', className, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-token-4 py-1 rounded-token-full text-xs font-semibold uppercase tracking-wide',
        tone === 'success' && 'bg-success-500 text-text-inverse',
        tone === 'warning' && 'bg-warning-500 text-text-inverse',
        tone === 'danger' && 'bg-danger-500 text-text-inverse',
        className,
      )}
      {...props}
    />
  );
}
