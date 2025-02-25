import { getIconSet, Icon, registerIconSet } from '@rijkshuisstijl-community/components-react';
import { iconSet } from '@rijkshuisstijl-community/components-react/src/icon-sets/flag-icons/icon-set';
import { Meta, StoryObj } from '@storybook/react/*';
import { IconBrandX } from '@tabler/icons-react';
import readme from './icon.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

registerIconSet(iconSet);

const meta = {
  title: 'Rijkshuisstijl/Icon',
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
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met extra functionaliteit voor het gebruiken van de iconenset van de Rijkshuisstijl Community.',
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
