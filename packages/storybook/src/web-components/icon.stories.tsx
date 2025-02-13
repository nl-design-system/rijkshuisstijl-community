import { getIconSet, registerIconSet } from '@rijkshuisstijl-community/components-react';
import { iconSet } from '@rijkshuisstijl-community/components-react/src/icon-sets/flag-icons/icon-set';
import { IconWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components';
import { IconBrandX } from '@tabler/icons-react';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/icon.md?raw';

registerIconSet(iconSet);
IconWebComponent.define();

const meta = {
  title: 'Web Components/Icon',
  id: 'rhc-icon-web',
  component: 'rhc-icon',
  argTypes: {
    icon: {
      name: 'Icon',
      type: { name: 'string' },
      control: 'select',
      options: Object.keys(getIconSet()),
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
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met extra functionaliteit voor het gebruiken van de iconenset van de Rijkshuisstijl Community.',
  },
} as Meta<typeof IconWebComponent>;

export default meta;

export const Default = {
  args: {
    icon: 'home',
  },
} as StoryObj<typeof meta>;

export const CustomIcon = {
  args: {
    children: <IconBrandX />,
  },
} as StoryObj<typeof meta>;

export const FromDifferentIconSet = {
  args: {
    icon: 'nl-flag',
  },
} as StoryObj<typeof meta>;
