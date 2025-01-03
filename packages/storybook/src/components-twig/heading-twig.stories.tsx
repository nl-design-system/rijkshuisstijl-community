/* @license CC0-1.0 */

import twigTemplate from '@rijkshuisstijl-community/components-twig/src/Heading.twig?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { createTwigComponent } from './TwigRenderer';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/heading.md?raw';

interface TwigHeadingProps {
  appearance?: string;
  level: number;
  children: string;
  attributes?: object;
}

const TwigHeading = createTwigComponent<TwigHeadingProps>(twigTemplate);

const meta = {
  title: 'Twig Components/Heading',
  id: 'rhc-twig-heading',
  component: TwigHeading,
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
        'utrecht-heading-6',
      ],
    },
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof TwigHeading>;

export default meta;

export const TwigHeading1: StoryObj<typeof meta> = {
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: {
      class: ['my-heading-1'],
    },
    appearance: 'utrecht-heading-3',
  },
  name: 'Heading 1',
};

export const TwigHeading2: StoryObj<typeof meta> = {
  args: {
    level: 2,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 2',
};

export const TwigHeading3: StoryObj<typeof meta> = {
  args: {
    level: 3,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 3',
};

export const TwigHeading4: StoryObj<typeof meta> = {
  args: {
    level: 4,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 4',
};

export const TwigHeading5: StoryObj<typeof meta> = {
  args: {
    level: 5,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 5',
};

export const TwigHeading6: StoryObj<typeof meta> = {
  args: {
    level: 6,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  },
  name: 'Heading 6',
};
