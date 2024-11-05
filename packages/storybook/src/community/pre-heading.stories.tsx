/* @license CC0-1.0 */

import { Heading, PreHeading } from '@rijkshuisstijl-community/components-react';
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
  name: 'Default',
  args: {
    children: 'Stap 1 van 8',
    heading: <Heading level={2}>Introductie</Heading>,
  },
};
