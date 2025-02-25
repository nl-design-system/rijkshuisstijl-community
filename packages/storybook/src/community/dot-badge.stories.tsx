import { DotBadge } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './dot-badge.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/Dot Badge',
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
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    nldesignsystem: 'https://www.nldesignsystem.nl/dot-badge',
    figma: 'https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/',
    github: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues/744',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof DotBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
