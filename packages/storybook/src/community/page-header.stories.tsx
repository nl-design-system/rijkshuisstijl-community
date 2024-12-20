/* @license CC0-1.0 */

import { Heading, PageHeader } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './page-header.md?raw';

const meta = {
  title: 'Rijkshuisstijl/PageHeader',
  id: 'rhc-page-header',
  component: PageHeader,
  args: {
    children: <Heading level={2}>Header Area</Heading>,
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
