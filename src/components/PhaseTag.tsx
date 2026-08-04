import clsx from 'clsx';

export type Phase =
  | 'concept'
  | 'world-bible'
  | 'character-vault'
  | 'synopsis'
  | 'treatment'
  | 'outline'
  | 'first-draft'
  | 'revision'
  | 'final-draft';

export interface PhaseTagProps {
  phase: Phase;
}

const LABEL: Record<Phase, string> = {
  concept: 'Concept',
  'world-bible': 'World Bible',
  'character-vault': 'Character Vault',
  synopsis: 'Synopsis',
  treatment: 'Treatment',
  outline: 'Outline',
  'first-draft': 'First Draft',
  revision: 'Revision',
  'final-draft': 'Final Draft',
};

const BG: Record<Phase, string> = {
  concept: 'bg-phase-concept',
  'world-bible': 'bg-phase-world-bible',
  'character-vault': 'bg-phase-character-vault',
  synopsis: 'bg-phase-synopsis',
  treatment: 'bg-phase-treatment',
  outline: 'bg-phase-outline',
  'first-draft': 'bg-phase-first-draft',
  revision: 'bg-phase-revision',
  'final-draft': 'bg-phase-final-draft',
};

/** One pill per stage of the nine-phase story pipeline (Concept -> Final Draft). */
export function PhaseTag({ phase }: PhaseTagProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-token-4 py-1 rounded-token-full text-xs font-semibold text-text-inverse',
        BG[phase],
      )}
    >
      {LABEL[phase]}
    </span>
  );
}
