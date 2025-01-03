import { NumberBadge } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './number-badge.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/Number Badge',
  id: 'rhc-counter-badge',
  component: NumberBadge,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Text content',
      control: 'text',
    },
    value: {
      description: 'Value',
      control: 'number',
    },
  },
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam BadgeCounter), met alleen overgeschreven design tokens van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof NumberBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '2',
  },
};

export const WithValue: Story = {
  args: {
    children: '2,002',
    value: '2002',
  },
};
