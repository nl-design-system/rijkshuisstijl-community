/* @license CC0-1.0 */

import { Heading } from '@rijkshuisstijl-community/components-react';
import TwigHeading from "../../../components-twig/src/Heading.twig";
import type { Meta, StoryObj } from '@storybook/react';
import readme from './heading.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Twig/Heading',
  id: 'rhc-twig-heading',
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
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

export const TwigHeading1: StoryObj<typeof meta> = {
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 1',
};
