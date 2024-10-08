import { DotBadge } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './dot-badge.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Dot Badge',
  id: 'rhc-dot-badge',
  component: DotBadge,
  argTypes: {
    'aria-label': {
      control: 'text',
    },
  },
  args: {
    'aria-label': 'Nieuw Bericht',
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof DotBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
