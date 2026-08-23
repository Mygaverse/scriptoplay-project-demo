import clsx from 'clsx';

// Matches the real CharacterAgentRole enum (scriptoplay-web's
// CharacterCard.tsx ROLE_COLORS) exactly, including the underscored
// multi-word values and the 'other' fallback.
export type CharacterRole =
  | 'protagonist'
  | 'antagonist'
  | 'supporting'
  | 'mentor'
  | 'comic_relief'
  | 'love_interest'
  | 'other';

export interface RoleBadgeProps {
  role: CharacterRole;
}

const LABEL: Record<CharacterRole, string> = {
  protagonist: 'Protagonist',
  antagonist: 'Antagonist',
  supporting: 'Supporting',
  mentor: 'Mentor',
  comic_relief: 'Comic Relief',
  love_interest: 'Love Interest',
  other: 'Other',
};

const COLORS: Record<CharacterRole, string> = {
  protagonist: 'bg-role-bg-protagonist text-role-fg-protagonist border-role-border-protagonist',
  antagonist: 'bg-role-bg-antagonist text-role-fg-antagonist border-role-border-antagonist',
  supporting: 'bg-role-bg-supporting text-role-fg-supporting border-role-border-supporting',
  mentor: 'bg-role-bg-mentor text-role-fg-mentor border-role-border-mentor',
  comic_relief: 'bg-role-bg-comic_relief text-role-fg-comic_relief border-role-border-comic_relief',
  love_interest: 'bg-role-bg-love_interest text-role-fg-love_interest border-role-border-love_interest',
  other: 'bg-role-bg-other text-role-fg-other border-role-border-other',
};

/** The role badge on a character portrait card (e.g. "Protagonist", "Antagonist"). */
export function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-token-2_5 py-0.5 rounded-token-full border text-xs font-semibold',
        COLORS[role],
      )}
    >
      {LABEL[role]}
    </span>
  );
}
