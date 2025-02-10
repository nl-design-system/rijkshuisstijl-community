/* @license CC0-1.0 */

import twigTemplate from '@rijkshuisstijl-community/components-twig/src/OrderedListItem.twig?raw';
import type { Meta } from '@storybook/react';
import { createTwigComponent } from './TwigRenderer';
import readme from '../community/orderedList.md?raw';

interface TwigOrderedListItemProps {
  children?: string;
}

export const TwigOrderedListItem = createTwigComponent<TwigOrderedListItemProps>(twigTemplate);

const OrderedListItem = {
  title: 'Twig Components/Ordered list item',
  id: 'rhc-twig-orderedlist-item',
  component: TwigOrderedListItem,
  args: {
    children: 'List item',
  },
  decorators: [
    (Story) => (
      <ol className={'utrecht-ordered-list'}>
        <Story />
      </ol>
    ),
  ],
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
} satisfies Meta<typeof TwigOrderedListItem>;

export default OrderedListItem;
