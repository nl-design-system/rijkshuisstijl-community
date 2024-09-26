import { Icon, LinkList, LinkListLink, type LinkListProps } from '@rijkshuisstijl-community/components-react';
import { ChevronRightIcon } from '@rijkshuisstijl-community/components-react/src/icons';
import { Meta, StoryObj } from '@storybook/react/*';
import { PropsWithChildren } from 'react';

interface LinkListStoryProps extends LinkListProps {
  hasIcons?: boolean;
}

const LinkListStory = ({ hasIcons = true, ...props }: PropsWithChildren<LinkListStoryProps>) => (
  <LinkList {...props}>
    <LinkListLink
      href="#"
      icon={
        hasIcons ? (
          <Icon>
            <ChevronRightIcon />
          </Icon>
        ) : undefined
      }
    >
      Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
    </LinkListLink>
    <LinkListLink
      href="#"
      icon={
        hasIcons ? (
          <Icon>
            <ChevronRightIcon />
          </Icon>
        ) : undefined
      }
    >
      Link 2
    </LinkListLink>
    <LinkListLink
      href="#"
      icon={
        hasIcons ? (
          <Icon>
            <ChevronRightIcon />
          </Icon>
        ) : undefined
      }
    >
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
  render: LinkListStory,
} satisfies Meta<typeof LinkListStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
