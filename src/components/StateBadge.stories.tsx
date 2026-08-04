import type { Meta, StoryObj } from '@storybook/react';
import { StateBadge, type SpecState } from './StateBadge';

const meta: Meta<typeof StateBadge> = {
  title: 'Design System/StateBadge',
  component: StateBadge,
};
export default meta;

type Story = StoryObj<typeof StateBadge>;

const STATES: SpecState[] = [
  'prompting',
  'processing',
  'previewing',
  'comparing',
  'regenerating',
  'approving',
  'error-recovery',
];

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {STATES.map((state) => (
        <StateBadge key={state} state={state} />
      ))}
    </div>
  ),
};

export const Prompting: Story = { args: { state: 'prompting' } };
export const ErrorRecovery: Story = { args: { state: 'error-recovery' } };
