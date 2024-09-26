import { BadgeCounter } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './badge-counter.md?raw';
const meta = {
  title: 'Rijkshuisstijl/CounterBadge',
  id: 'rhc-counterBadge',
  component: BadgeCounter,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Text content',
      control: 'text',
    },
    value: {
      description: 'Value',
      control: 'number',
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof BadgeCounter>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '2',
  },
};

export const WithValue: Story = {
  args: {
    children: '2,002',
    value: '2002',
  },
};
