/* @license CC0-1.0 */

import twigTemplate from '@rijkshuisstijl-community/components-twig/src/OrderedList.twig?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { createTwigComponent } from './TwigRenderer';
import readme from '../community/orderedList.md?raw';

interface TwigOrderedListProps {
  reversed?: boolean;
  type?: string;
  start?: number;
  children?: string[];
}

const TwigOrderedList = createTwigComponent<TwigOrderedListProps>(twigTemplate);

const OrderedList = {
  title: 'Twig Components/Ordered list',
  id: 'rhc-twig-orderedlist',
  component: TwigOrderedList,
  argTypes: {
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['1', 'a', 'A', 'i', 'I'],
    },
    reversed: {
      description: 'Reversed',
    },
    start: {
      description: 'Start',
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
} satisfies Meta<typeof TwigOrderedList>;

export default OrderedList;

export const TwigOrderedList1: StoryObj<typeof OrderedList> = {
  args: {
    type: 'a',
    reversed: false,
    start: 1,
    children: [
      '<li class="utrecht-ordered-list__item">Item 1</li>',
      '<li class="utrecht-ordered-list__item">Item 2</li>',
      '<li class="utrecht-ordered-list__item">Item 3</li>',
    ],
  },
  name: 'Default ordered list',
};
