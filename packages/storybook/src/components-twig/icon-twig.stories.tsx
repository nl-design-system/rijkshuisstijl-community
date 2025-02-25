/* @license CC0-1.0 */

import TwigIcon from '@rijkshuisstijl-community/components-twig/src/Icon.twig';
import { iconSet } from '@rijkshuisstijl-community/components-twig/src/icon-sets/default-icons/icon-set';
import type { Meta, StoryObj } from '@storybook/react';
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

export const Default: StoryObj<typeof meta> = {
  args: {
    icon: 'home',
  },
  name: 'Home',
};

export const CustomIcon: StoryObj<typeof meta> = {
  args: {
    icon: 'brand-x',
  },
  name: 'Custom icon',
};
