import { Icon, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Link List/Link List Link',
  id: 'rijkshuisstijl-link-list-link',
  component: LinkListLink,
  args: {
    children: 'Label',
    href: '#',
    icon: <Icon icon={'chevron-right'} />,
  },
  argTypes: {
    href: {
      type: { name: 'string', required: true },
      table: {
        category: 'HTML attribute',
      },
    },
  },
  parameters: {
    // TODO: add documentation from Utrecht, but not until readme is correctly structurized in the Utrecht documentation source
    status: {
      type: 'STABLE',
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, de design tokens kunnen indien nodig nog overschreven worden.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/LinkList.tsx',
  },
  render: (args) => (
    <LinkList>
      <LinkListLink {...args} />
    </LinkList>
  ),
} satisfies Meta<typeof LinkListLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
    href: '#',
    icon: <Icon icon={'chevron-right'} />,
  },
};

export const NoIcon: Story = {
  render: () => (
    <LinkList>
      <LinkListLink href="#">Label</LinkListLink>
    </LinkList>
  ),
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};

export const Active: Story = {
  parameters: {
    pseudo: { active: true },
  },
};

export const Focus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {},
};

export const Visited: Story = {
  parameters: {
    pseudo: { visited: true },
  },
};
