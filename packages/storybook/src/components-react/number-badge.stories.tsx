import { NumberBadge } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './number-badge.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Number Badge',
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
    nldesignsystem: 'https://www.nldesignsystem.nl/number-badge/',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1233-4274&t=AHS0qWRed9fEffkN-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/NumberBadge.tsx',
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
