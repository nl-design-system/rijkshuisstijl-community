import {
  ColumnLayout,
  Icon,
  LinkList,
  LinkListLink,
  type LinkListProps,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';
import { PropsWithChildren } from 'react';

interface LinkListStoryProps extends LinkListProps {
  hasIcons?: boolean;
}

const LinkListStory = ({ hasIcons = true, ...props }: PropsWithChildren<LinkListStoryProps>) => (
  <LinkList {...props}>
    <LinkListLink href="#" icon={hasIcons ? <Icon icon={'chevron-right'} /> : undefined}>
      Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
    </LinkListLink>
    <LinkListLink href="#" icon={hasIcons ? <Icon icon={'chevron-right'} /> : undefined}>
      Link 2
    </LinkListLink>
    <LinkListLink href="#" icon={hasIcons ? <Icon icon={'chevron-right'} /> : undefined}>
      Link 3
    </LinkListLink>
  </LinkList>
);

const meta = {
  title: 'Rijkshuisstijl/Link List',
  id: 'rhc-link-list',
  component: LinkListStory,
  args: {
    children: '',
  },
  argTypes: {
    hasIcons: {
      description: 'Whether the links have an icon',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Demo',
      },
    },
  },
  parameters: {
    // TODO: add documentation from Utrecht, but not until readme is correctly structurized in the Utrecht documentation source
    status: {
      type: 'UNSTABLE',
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
  },
  render: LinkListStory,
} satisfies Meta<typeof LinkListStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ColumnsLayout: Story = {
  render: (args) => <ColumnLayout>{LinkListStory(args)}</ColumnLayout>,
};
