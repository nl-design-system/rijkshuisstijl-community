import { Article, ColumnLayout, Heading } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './column-layout.md?raw';

const meta = {
  title: 'Column Layout',
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
} satisfies Meta<typeof ColumnLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Heading level={2}>Column Layout</Heading>
        <Article>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum magnam magni expedita modi sit quasi, natus
          nobis sint hic, eum illum quis laboriosam pariatur quo alias eaque qui quae recusandae?
        </Article>
      </>
    ),
  },
};
