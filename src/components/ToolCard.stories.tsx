import type { Meta, StoryObj } from '@storybook/react';
import { ToolCard, type ToolCardColor } from './ToolCard';

const meta: Meta<typeof ToolCard> = {
  title: 'Design System/ToolCard',
  component: ToolCard,
};
export default meta;

type Story = StoryObj<typeof ToolCard>;

const COLORS: ToolCardColor[] = ['blue', 'purple', 'emerald', 'amber', 'cyan', 'rose'];

export const AllColors: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-3 max-w-2xl">
      {COLORS.map((color) => (
        <ToolCard
          key={color}
          color={color}
          icon={<span>◆</span>}
          title={`${color[0].toUpperCase()}${color.slice(1)} Tool`}
          description="Cast voices for each character and generate narrated audio."
          status="3 of 3 cast"
        />
      ))}
    </div>
  ),
};

export const VoiceStudio: Story = {
  args: {
    color: 'blue',
    icon: <span>🔊</span>,
    title: 'Voice Studio',
    description: 'Cast voices for each character and the narrator. Generate narrated audio from your dialogue lines.',
    status: '3 of 3 cast',
  },
};
