import { PageHeader } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { SharedHeaderOverheidNl } from '../templates/shared/header';
import readme from './page-header.md?raw';

const meta = {
  title: 'Page Header',
  id: 'rhc-page-header',
  component: PageHeader,
  parameters: {
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    docs: {
      description: {
        component: readme,
      },
    },
    // TODO: add Figma and GitHub links
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/page-header-react/src/PageHeader.tsx',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: SharedHeaderOverheidNl,
  args: {
    children: undefined,
  },
};
