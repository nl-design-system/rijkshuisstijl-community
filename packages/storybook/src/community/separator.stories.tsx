import { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@utrecht/component-library-react/dist/css-module';
import readme from './separator.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Separator',
  id: 'rijkshuisstijl-separator',
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
