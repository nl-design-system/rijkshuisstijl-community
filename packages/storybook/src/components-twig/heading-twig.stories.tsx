/* @license CC0-1.0 */

import TwigHeading from '@rijkshuisstijl-community/components-twig/src/Heading.twig';
import type { Meta, StoryObj } from '@storybook/react';
import DrupalAttribute from 'drupal-attribute';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/heading.md?raw';

const meta = {
  title: 'Heading',
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
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6'],
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
    //Todo: voeg NL-Design system & Figma links toe
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Heading.twig',
  },
} satisfies Meta<typeof TwigHeading>;

export default meta;

export const TwigHeading1: StoryObj<typeof meta> = {
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute(),
  },
  name: 'Heading 1',
};

export const TwigHeading2: StoryObj<typeof meta> = {
  args: {
    level: 2,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute(),
  },
  name: 'Heading 2',
};

export const TwigHeading3: StoryObj<typeof meta> = {
  args: {
    level: 3,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute(),
  },
  name: 'Heading 3',
};

export const TwigHeading4: StoryObj<typeof meta> = {
  args: {
    level: 4,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute(),
  },
  name: 'Heading 4',
};

export const TwigHeading5: StoryObj<typeof meta> = {
  args: {
    level: 5,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute(),
  },
  name: 'Heading 5',
};

export const TwigHeading6: StoryObj<typeof meta> = {
  args: {
    level: 6,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    attributes: new DrupalAttribute(),
  },
  name: 'Heading 6',
};

export const TwigHeading5Appearance: StoryObj<typeof meta> = {
  args: {
    level: 1,
    children: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    appearance: 5,
    attributes: new DrupalAttribute(),
  },
  name: 'Heading 5 (in appearance)',
};
