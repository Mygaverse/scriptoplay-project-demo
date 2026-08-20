import clsx from 'clsx';

// Matches the real ScriptStatus/ScriptPhase enum (src/types/firestore.ts in
// scriptoplay-web) - underscored, not hyphenated. Production only renders a
// single flat blue badge for phase (dashboard/projects/[projectId]); the
// nine-color treatment here is a stylized reinterpretation, extrapolated
// from each phase editor page's own accent color, not a literal shipped
// component.
export type Phase =
  | 'concept'
  | 'world_bible'
  | 'character_vault'
  | 'synopsis'
  | 'treatment'
  | 'outline'
  | 'first_draft'
  | 'revision'
  | 'final_draft';

export interface PhaseTagProps {
  phase: Phase;
}

const LABEL: Record<Phase, string> = {
  concept: 'Concept',
  world_bible: 'World Bible',
  character_vault: 'Character Vault',
  synopsis: 'Synopsis',
  treatment: 'Treatment',
  outline: 'Outline',
  first_draft: 'First Draft',
  revision: 'Revision',
  final_draft: 'Final Draft',
};

const BG: Record<Phase, string> = {
  concept: 'bg-phase-concept',
  world_bible: 'bg-phase-world_bible',
  character_vault: 'bg-phase-character_vault',
  synopsis: 'bg-phase-synopsis',
  treatment: 'bg-phase-treatment',
  outline: 'bg-phase-outline',
  first_draft: 'bg-phase-first_draft',
  revision: 'bg-phase-revision',
  final_draft: 'bg-phase-final_draft',
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
