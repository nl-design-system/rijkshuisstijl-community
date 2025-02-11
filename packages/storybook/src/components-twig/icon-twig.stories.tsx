/* @license CC0-1.0 */
import twigTemplate from '@rijkshuisstijl-community/components-twig/src/Icon.twig?raw';
import { iconSet } from '@rijkshuisstijl-community/components-twig/src/icon-sets/default-icons/icon-set';
import type { Meta, StoryObj } from '@storybook/react';
import { createTwigComponent } from './TwigRenderer';
import readme from './icon-twig.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const icons = Object.values(iconSet);

interface TwigIconProps {
  icon: string;
  width?: number;
  height?: number;
}

const TwigIcon = createTwigComponent<TwigIconProps>(twigTemplate);

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

export const TwigIcon1: StoryObj<typeof meta> = {
  args: {
    icon: 'home',
  },
  name: 'Home',
};

export const TwigIcon2: StoryObj<typeof meta> = {
  args: {
    icon: 'brand-x',
  },
  name: 'Custom icon',
};
