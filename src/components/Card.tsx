import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        'bg-surface-default border border-surface-border rounded-token-lg p-token-6',
        className,
      )}
      {...props}
    />
  );
}
