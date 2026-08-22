import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  args: { children: 'Generate' },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Cancel' } };
export const Gradient: Story = { args: { variant: 'gradient', children: 'Launch New IP' } };
export const Disabled: Story = { args: { variant: 'primary', disabled: true } };
