import { Meta, StoryObj } from '@storybook/react/*';
import { LinkList, LinkListLink } from '@utrecht/component-library-react';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import readme from './linkList.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Link list',
  id: 'rijkshuisstijl-linklist',
  component: LinkList,
  args: {
    children: '',
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLinkList: Story = {
  args: {
    children: (
      <>
        <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
          Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
        </LinkListLink>
        <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
          Link 2
        </LinkListLink>
        <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
          Link 3
        </LinkListLink>
      </>
    ),
  },
};
