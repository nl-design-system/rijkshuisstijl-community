import { LinkListCard, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentProps } from 'react';
import readme from './link-list-card.md?raw';

type StoryProps = ComponentProps<typeof LinkListCard>;
const meta: Meta<StoryProps> = {
  title: 'Link List Card',
  id: 'rijkshuisstijl-link-list-card',
  component: LinkListCard,
  argTypes: {
    headingLevel: {
      description: 'Link List Card heading level',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: {
        category: 'Demo',
      },
    },
    heading: {
      description: 'Heading Text - used in heading slot',
      type: {
        name: 'string',
      },
      table: {
        category: 'Demo',
      },
    },
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add NL Design System link when there is a page for LinkListCard
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1195-4201&t=n1djYpmvDCKmAEUi-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/LinkListCard.tsx',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    headingLevel: 2,
    heading: 'Heading',
    children: [
      <LinkListLink href="#" key="link-1">
        Link 1
      </LinkListLink>,
      <LinkListLink href="#" key="link-2">
        Link 2
      </LinkListLink>,
      <LinkListLink href="#" key="link-3">
        Link 3
      </LinkListLink>,
    ],
  },
};
