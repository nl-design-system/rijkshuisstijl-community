import { BreadcrumbNav, BreadcrumbNavLink, BreadcrumbNavSeparator } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import readme from './breadcrumb..md?raw';

const meta = {
  title: 'Rijkshuisstijl/Breadcrumb navigation',
  id: 'rijkshuisstijl-breadcrumb-nav',
  component: BreadcrumbNav,

  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof BreadcrumbNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="https://example.com/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/search" rel="up" index={1}>
        Zoeken
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/search?q=example" rel="first" index={2}>
        Example
      </BreadcrumbNavLink>,
    ],
  },
};

export const Current: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/" index={1}>
        Label
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/b/" index={2} current>
        Label
      </BreadcrumbNavLink>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `For accessibility specify the \`current\` property, to render \`aria-current="page"\`.`,
      },
    },
  },
};

export const Separator: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="/a/" index={1}>
        Label
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="/a/b/" index={2}>
        Label
      </BreadcrumbNavLink>,
    ],
  },
};
export const Arrow: Story = {
  args: {
    children: [
      <BreadcrumbNavLink arrow href="/a" rel="label" index={0}>
        Label
      </BreadcrumbNavLink>,
    ],
  },
};

export const Active: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/" index={1}>
        Label
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/b/" index={2} active current>
        Label
      </BreadcrumbNavLink>,
    ],
  },
};

export const DisabledAndCurrent: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/" index={1}>
        Label
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/b/" index={2} current disabled>
        Label
      </BreadcrumbNavLink>,
    ],
  },
};
