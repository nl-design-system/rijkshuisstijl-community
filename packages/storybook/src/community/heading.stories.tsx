/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@utrecht/component-library-react/dist/css-module';
import readme from './heading.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Heading',
  id: 'rijkshuisstijl-heading',
  component: Heading,
  argTypes: {
    level: {
      description: 'Heading level',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      defaultValue: 1,
      table: {
        category: 'Property',
      },
    },
    children: {
      description: 'Heading text - default webcomponent slot',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Webcomponent Slot',
      },
      defaultValue: '',
    },
  },
  args: {
    children: '',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading>;

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

export const Heading6: StoryObj<typeof meta> = {
  args: {
    level: 6,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 6',
};
