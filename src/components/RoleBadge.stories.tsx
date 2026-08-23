import type { Meta, StoryObj } from '@storybook/react';
import { RoleBadge, type CharacterRole } from './RoleBadge';

const meta: Meta<typeof RoleBadge> = {
  title: 'Design System/RoleBadge',
  component: RoleBadge,
};
export default meta;

type Story = StoryObj<typeof RoleBadge>;

const ROLES: CharacterRole[] = [
  'protagonist',
  'antagonist',
  'supporting',
  'mentor',
  'comic_relief',
  'love_interest',
  'other',
];

export const AllRoles: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {ROLES.map((role) => (
        <RoleBadge key={role} role={role} />
      ))}
    </div>
  ),
};

export const Protagonist: Story = { args: { role: 'protagonist' } };
export const Antagonist: Story = { args: { role: 'antagonist' } };
