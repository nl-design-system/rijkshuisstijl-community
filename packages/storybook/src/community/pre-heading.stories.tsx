/* @license CC0-1.0 */

import { PreHeading } from '@rijkshuisstijl-community/components-react';
import type { Meta } from '@storybook/react';
import readme from './pre-heading.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Heading',
  id: 'rhc-pre-heading',
  component: PreHeading,
  argTypes: {},
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof PreHeading>;

export default meta;
