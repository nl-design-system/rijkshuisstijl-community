import { PageHeader } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './page-header.md?raw';
import SharedHeader from '../templates/shared/header';

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
    layout: 'fullscreen',
    figma: 'https://www.figma.com/design/Lcb6LFWJhL69h6UANxICTz/Page-Header---Schetsboek?node-id=1-631&m=dev',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/page-header-react/src/PageHeader.tsx',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: SharedHeader,
  args: {
    children: undefined,
  },
};
