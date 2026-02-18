import { defaultIconSet, flagIconSet, getIconSet, registerIconSet } from '@rijkshuisstijl-community/icon-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { IconWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { IconBrandX } from '@tabler/icons-react';
import readme from '../components-react/icon.md?raw';

registerIconSet(defaultIconSet);
registerIconSet(flagIconSet);

IconWebComponent.define();

const meta = {
  title: 'Icon',
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
    // TODO: add Figma and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met extra functionaliteit voor het gebruiken van de iconenset van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/Icon.tsx',
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
