import { CodeInputGroup } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';
import readme from './code-input-group.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/CodeInputGroup',
  id: 'rhc-codeInput-group',
  component: CodeInputGroup,
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add NL Design System link when there is a page for CodeInput
    figma:
      'https://www.figma.com/design/H4hSqpPbvFMLklDZgswwgd/NLDS---Rijkshuisstijl---Templates?node-id=4652-10195&node-type=frame&t=b4RSbycsPxEdIHZ6-0',
    github: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues/823',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
  argTypes: {},
  args: {
    numberOfDigits: 6,
    inValid: false,
  },
} satisfies Meta<typeof CodeInputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    inValid: true,
  },
};
