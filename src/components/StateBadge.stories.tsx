import type { Meta, StoryObj } from '@storybook/react';
import { StateBadge, type ClipStatus } from './StateBadge';

const meta: Meta<typeof StateBadge> = {
  title: 'Design System/StateBadge',
  component: StateBadge,
};
export default meta;

type Story = StoryObj<typeof StateBadge>;

const STATES: ClipStatus[] = [
  'idle',
  'generating',
  'polling',
  'pending_qa',
  'approved',
  'killed',
  'failed',
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

export const Generating: Story = { args: { state: 'generating' } };
export const Approved: Story = { args: { state: 'approved' } };
export const Killed: Story = { args: { state: 'killed' } };
