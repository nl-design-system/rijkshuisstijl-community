import { Drawer } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './drawer.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/Drawer',
  id: 'rhc-drawer',
  component: Drawer,
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
  },
  args: {
    isOpen: true,
  },
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    nldesignsystem: 'https://www.nldesignsystem.nl/drawer',
    figma: 'https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Drawer.tsx',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
