import { Separator } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './separator.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Separator',
  id: 'rhc-separator',
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
