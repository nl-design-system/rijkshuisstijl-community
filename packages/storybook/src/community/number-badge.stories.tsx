import { NumberBadge } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './number-badge.md?raw';
const meta = {
  title: 'Rijkshuisstijl/Number Badge',
  id: 'rhc-counter-badge',
  component: NumberBadge,
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
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof NumberBadge>;
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
