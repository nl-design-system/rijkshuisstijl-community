import TwigOrderedList from '@rijkshuisstijl-community/components-twig/src/OrderedList.twig';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Ordered List',
  id: 'rhc-twig-ordered-list',
  component: TwigOrderedList,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    componentOrigin:
      'Dit is een dummy component voor het toevoegen van support van nested Twig templates. Dit moet vervangen worden door het officiele component.',
  },
} satisfies Meta<typeof TwigOrderedList>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'],
  },
};
