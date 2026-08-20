import clsx from 'clsx';

// Matches the real ClipStatus enum (src/app/dashboard/trainer-studio/page.tsx
// in scriptoplay-web), the closest shipped equivalent to an AI-generation
// state badge. 'pending_qa' -> amber, 'approved' -> green, 'killed' -> red
// are confirmed by the real card-border color mapping there; 'idle',
// 'generating', 'polling', and 'failed' aren't explicitly colored in
// production and are inferred here to complete the set.
export type ClipStatus =
  | 'idle'
  | 'generating'
  | 'polling'
  | 'pending_qa'
  | 'approved'
  | 'killed'
  | 'failed';

export interface StateBadgeProps {
  state: ClipStatus;
}

const LABEL: Record<ClipStatus, string> = {
  idle: 'Idle',
  generating: 'Generating',
  polling: 'Polling',
  pending_qa: 'Pending QA',
  approved: 'Approved',
  killed: 'Killed',
  failed: 'Failed',
};

const CLASSES: Record<ClipStatus, string> = {
  idle: 'bg-surface-border text-text-primary',
  generating: 'bg-brand-primary text-white',
  polling: 'bg-phase-world_bible text-text-inverse',
  pending_qa: 'bg-warning-500 text-text-inverse',
  approved: 'bg-success-500 text-text-inverse',
  killed: 'bg-danger-500 text-white',
  failed: 'bg-danger-500 text-white',
};

/**
 * The seven states an AI clip-generation job can be in, mirroring
 * scriptoplay-web's trainer-studio ClipStatus lifecycle.
 */
export function StateBadge({ state }: StateBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-token-4 py-1 rounded-token-full text-xs font-semibold',
        CLASSES[state],
      )}
    >
      {LABEL[state]}
    </span>
  );
}
