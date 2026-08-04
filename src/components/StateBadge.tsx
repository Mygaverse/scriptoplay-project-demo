import clsx from 'clsx';

export type SpecState =
  | 'prompting'
  | 'processing'
  | 'previewing'
  | 'comparing'
  | 'regenerating'
  | 'approving'
  | 'error-recovery';

export interface StateBadgeProps {
  state: SpecState;
}

const LABEL: Record<SpecState, string> = {
  prompting: 'Prompting',
  processing: 'Processing',
  previewing: 'Previewing',
  comparing: 'Comparing',
  regenerating: 'Regenerating',
  approving: 'Approving',
  'error-recovery': 'Error recovery',
};

const CLASSES: Record<SpecState, string> = {
  prompting: 'bg-brand-primary text-white',
  processing: 'bg-warning-500 text-text-inverse',
  previewing: 'bg-surface-border text-text-primary',
  comparing: 'bg-phase-concept text-text-inverse',
  regenerating: 'bg-phase-world-bible text-text-inverse',
  approving: 'bg-success-500 text-text-inverse',
  'error-recovery': 'bg-danger-500 text-white',
};

/**
 * The seven states an AI-generation component can be in, from the
 * Scriptoplay case study's component spec (prompting through error recovery).
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
