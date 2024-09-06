/* @license CC0-1.0 */

import { Heading } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import readme from './heading.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Heading',
  id: 'rijkshuisstijl-heading',
  component: Heading,
  argTypes: {
    level: {
      description: 'Heading level',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5],
    },
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: [
        undefined,
        'utrecht-heading-1',
        'utrecht-heading-2',
        'utrecht-heading-3',
        'utrecht-heading-4',
        'utrecht-heading-5',
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

export const Heading1: StoryObj<typeof meta> = {
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 1',
};

export const Heading2: StoryObj<typeof meta> = {
  args: {
    level: 2,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 2',
};

export const Heading3: StoryObj<typeof meta> = {
  args: {
    level: 3,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 3',
};

export const Heading4: StoryObj<typeof meta> = {
  args: {
    level: 4,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 4',
};

export const Heading5: StoryObj<typeof meta> = {
  args: {
    level: 5,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 5',
};
