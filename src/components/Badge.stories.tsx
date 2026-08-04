import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Badge',
  component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Success: Story = { args: { tone: 'success', children: 'Approved' } };
export const Warning: Story = { args: { tone: 'warning', children: 'In review' } };
export const Danger: Story = { args: { tone: 'danger', children: 'Failed' } };
