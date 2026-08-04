import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from './Button';

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-sm">
      <h3 className="text-sm font-semibold text-text-primary">Scene Simulator</h3>
      <p className="mt-1 text-sm text-text-secondary">
        Rehearse a scene with a specialist advisor before committing it to the page.
      </p>
      <div className="mt-4">
        <Button>Open</Button>
      </div>
    </Card>
  ),
};
