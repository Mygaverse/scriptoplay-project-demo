import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard, type FeatureCardColor } from './FeatureCard';

const meta: Meta<typeof FeatureCard> = {
  title: 'Design System/FeatureCard',
  component: FeatureCard,
};
export default meta;

type Story = StoryObj<typeof FeatureCard>;

const COLORS: FeatureCardColor[] = ['blue', 'purple', 'emerald', 'amber', 'cyan', 'rose', 'pink'];

export const AllColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 max-w-3xl">
      {COLORS.map((color) => (
        <FeatureCard
          key={color}
          color={color}
          icon={<span>◆</span>}
          title={`${color[0].toUpperCase()}${color.slice(1)} Tool`}
          description="Hover to see the icon chip and border react."
        />
      ))}
    </div>
  ),
};

export const ScriptScan: Story = {
  args: {
    color: 'blue',
    icon: <span>🔍</span>,
    title: 'Script Scan',
    description: 'Has a story in mind? Paste your storyline or just upload your script.',
  },
};

export const WritersRoom: Story = {
  args: {
    color: 'pink',
    icon: <span>🎭</span>,
    title: "Writers' Room",
    description: 'Simulate scenes and dialogue with AI characters.',
  },
};
