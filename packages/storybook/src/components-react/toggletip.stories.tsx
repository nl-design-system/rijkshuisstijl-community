import { Toggletip } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './toggletip.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Toggletip',
  id: 'rhc-toggletip',
  component: Toggletip,
  args: {
    children: 'Lorem ipsum dolor sit amet, consecteur ad * isicing elit, sed do eiusmod *',
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    status: {
      type: 'UNSTABLE',
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Toggletip.tsx',
  },
} satisfies Meta<typeof Toggletip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
