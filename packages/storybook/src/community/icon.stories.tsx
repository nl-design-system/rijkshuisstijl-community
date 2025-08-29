import {
  defaultIconSet,
  flagIconSet,
  getIconSet,
  Icon,
  registerIconSet,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import { IconBrandX } from '@tabler/icons-react';
import readme from './icon.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

registerIconSet(defaultIconSet);
registerIconSet(flagIconSet);

const meta = {
  title: 'Icon',
  id: 'rhc-icon',
  component: Icon,
  argTypes: {
    icon: {
      control: { type: 'select' },
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
    // TODO: add Figma and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met extra functionaliteit voor het gebruiken van de iconenset van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Icon.tsx',
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'home',
  },
};

export const CustomIcon: Story = {
  args: {
    children: <IconBrandX />,
  },
};

export const FromDifferentIconSet: Story = {
  args: {
    icon: 'nl-flag',
  },
};
