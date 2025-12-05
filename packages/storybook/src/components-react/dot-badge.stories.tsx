import { DotBadge } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './dot-badge.md?raw';

const meta = {
  title: 'Dot Badge',
  id: 'rhc-dot-badge',
  component: DotBadge,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  args: {
    label: 'Nieuw bericht',
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    nldesignsystem: 'https://www.nldesignsystem.nl/dot-badge',
    figma: 'https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/DotBadge.tsx',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof DotBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
