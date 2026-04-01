import { ColumnLayout, Icon, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './link-list.md?raw';

const meta = {
  title: 'Link List',
  id: 'rhc-link-list',
  component: LinkList,
  parameters: {
    // TODO: add documentation from Utrecht, but not until readme is correctly structurized in the Utrecht documentation source
    docs: {
      description: {
        // TODO: disconnect "Usage" from the current readme, import the readme from Utrecht afterwards and combine with our own Usage
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=15853-939&p=f&t=vEy2lEagbZuewco0-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/LinkList.tsx',
    nldesignsystem: 'https://nldesignsystem.nl/link-list',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <LinkList {...args}>
      <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
        Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
      </LinkListLink>
      <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
        Link 2
      </LinkListLink>
      <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
        Link 3
      </LinkListLink>
    </LinkList>
  ),
};

export const ColumnsLayout: Story = {
  render: (args) => (
    <ColumnLayout>
      <LinkList {...args}>
        <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
          Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
        </LinkListLink>
        <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
          Link 2
        </LinkListLink>
        <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
          Link 3
        </LinkListLink>
      </LinkList>
    </ColumnLayout>
  ),
};
