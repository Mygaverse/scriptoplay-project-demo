import type { Meta, StoryObj } from '@storybook/react';
import { PhaseTag, type Phase } from './PhaseTag';

const meta: Meta<typeof PhaseTag> = {
  title: 'Design System/PhaseTag',
  component: PhaseTag,
};
export default meta;

type Story = StoryObj<typeof PhaseTag>;

const PHASES: Phase[] = [
  'concept',
  'world_bible',
  'character_vault',
  'synopsis',
  'treatment',
  'outline',
  'first_draft',
  'revision',
  'final_draft',
];

export const AllPhases: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {PHASES.map((phase) => (
        <PhaseTag key={phase} phase={phase} />
      ))}
    </div>
  ),
};

export const Concept: Story = { args: { phase: 'concept' } };
export const FinalDraft: Story = { args: { phase: 'final_draft' } };
