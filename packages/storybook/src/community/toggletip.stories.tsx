import { Toggletip } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Rijkshuisstijl/Toggletip',
  id: 'rhc-toggletip',
  component: Toggletip,
  args: {
    children: 'Lorem ipsum dolor sit amet, consecteur ad * isicing elit, sed do eiusmod *',
  },
  parameters: {
    // TODO: add documentation
    status: {
      type: 'UNSTABLE',
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof Toggletip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
