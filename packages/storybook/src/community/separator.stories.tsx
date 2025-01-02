import { Separator } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './separator.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Separator',
  id: 'rhc-separator',
  component: Separator,
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: readme,
      },
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
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
