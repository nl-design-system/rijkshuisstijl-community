import { Separator } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './separator.md?raw';
import { mergeMarkdown } from '../helpers/merge-markdown';

const meta = {
  title: 'Separator',
  id: 'rhc-separator',
  component: Separator,
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Separator.tsx',
  },
  argTypes: {
    invisible: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Invisible: Story = {
  args: {
    invisible: true,
  },
};
