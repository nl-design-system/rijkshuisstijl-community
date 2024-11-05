/* @license CC0-1.0 */

import { PreHeading } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './pre-heading.md?raw';

const meta = {
  title: 'Rijkshuisstijl/PreHeading',
  id: 'rhc-pre-heading',
  component: PreHeading,
  argTypes: {},
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
} satisfies Meta<typeof PreHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Pre Heading',
};