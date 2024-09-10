import { Icon, LinkList, LinkListLink, type LinkListProps } from '@rijkshuisstijl-community/components-react';
import { ChevronRightIcon } from '@rijkshuisstijl-community/components-react/src/icons';
import { Meta, StoryObj } from '@storybook/react/*';
import { PropsWithChildren } from 'react';
import readme from './linkList.md?raw';

interface LinkListStoryProps extends LinkListProps {
  active: boolean;
  visited: boolean;
  focus: boolean;
  focusVisible: boolean;
  hasIcons: boolean;
}

const LinkListStory = ({
  // active,
  // visited,
  // focus,
  // focusVisible,
  hasIcons = true,
  ...props
}: PropsWithChildren<LinkListStoryProps>) => (
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
  title: 'Rijkshuisstijl/Link list',
  id: 'rijkshuisstijl-linklist',
  component: LinkListStory,
  args: {
    children: '',
  },
  argTypes: {
    active: {
      description: 'Whether the link is active',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Demo',
      },
    },
    visited: {
      description: 'Whether the link is visited',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Demo',
      },
    },
    focus: {
      description: 'Whether the link is focused',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Demo',
      },
    },
    focusVisible: {
      description: 'Whether the link is focus visible',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Demo',
      },
    },
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
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: LinkListStory,
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLinkList: Story = {};

export const NoIcon: Story = {
  args: {
    hasIcons: false,
  },
};
