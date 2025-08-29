import { Article, ColumnLayout, Heading } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './column-layout.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'ColumnLayout',
  id: 'rhc-columnLayout',
  component: ColumnLayout,
  parameters: {
    status: { type: 'UNSTABLE' },
    docs: { description: { component: mergeMarkdown([readme]) } },
    componentOrigin: 'Dit component is overgenomen van de Gemeente Utrecht.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/ColumnLayout.tsx',
  },
  args: {
    children: '',
  },
  render: (args) => <ColumnLayout {...args} />,
} satisfies Meta<typeof ColumnLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Heading level={2}>Column layout</Heading>,
      <Article>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum magnam magni expedita modi sit quasi, natus
        nobis sint hic, eum illum quis laboriosam pariatur quo alias eaque qui quae recusandae?
      </Article>,
    ],
  },
};
