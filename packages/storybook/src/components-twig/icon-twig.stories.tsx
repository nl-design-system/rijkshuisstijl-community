/* @license CC0-1.0 */

import TwigIcon from '@rijkshuisstijl-community/components-twig/src/Icon.twig';
import { iconSet } from '@rijkshuisstijl-community/components-twig/src/icon-sets/default-icons/icon-set';
import type { Meta, StoryObj } from '@storybook/react';
import DrupalAttribute from 'drupal-attribute';
import readme from './icon-twig.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const icons = Object.values(iconSet);

const meta = {
  title: 'Twig Components/Icon',
  id: 'rhc-twig-icon',
  component: TwigIcon,
  argTypes: {
    icon: {
      options: icons,
      control: {
        type: 'select',
        labels: icons,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    status: {
      type: 'STABLE',
    },
  },
} satisfies Meta<typeof TwigIcon>;

export default meta;

const svg_attributes = new DrupalAttribute([
  ['class', ['icon', 'icon-tabler']],
  ['xmlns', 'http://www.w3.org/2000/svg'],
  ['width', 24],
  ['height', 24],
  ['viewBox', '0 0 24 24'],
  ['fill', 'none'],
  ['stroke', 'currentColor'],
  ['stroke-width', 2],
  ['stroke-linecap', 'round'],
  ['stroke-linejoin', 'round'],
]);

export const Default: StoryObj<typeof meta> = {
  args: {
    icon: 'home',
    attributes: new DrupalAttribute(),
    svg_attributes: svg_attributes,
  },
  name: 'Home',
};

export const CustomIcon: StoryObj<typeof meta> = {
  args: {
    icon: 'brand-x',
    attributes: new DrupalAttribute(),
    svg_attributes: svg_attributes,
  },
  name: 'Custom icon',
};
