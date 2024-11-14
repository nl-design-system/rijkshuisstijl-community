import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Icon,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './breadcrumb-nav.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Breadcrumb navigation',
  id: 'rhc-breadcrumb-nav',
  component: BreadcrumbNav,
  argTypes: {},
  parameters: {
    status: {
      type: 'STABLE',
    },
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
      <BreadcrumbNavLink href="https://example.com/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/search" index={1} key="search" rel="up">
        Zoeken
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="https://example.com/search?q=example" index={2} key="example" rel="first">
        Example
      </BreadcrumbNavLink>,
    ],
  },
};

export const Current: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink current href="/a/b/" index={2} key="label-2">
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
      <BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator key="icon">
        <Icon icon={'chevron-right'} />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>,
      <BreadcrumbNavSeparator key="icon-2">
        <Icon icon={'chevron-right'} />
      </BreadcrumbNavSeparator>,
      <BreadcrumbNavLink href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>,
    ],
  },
};

export const Active: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink active current href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>,
    ],
  },
};

export const DisabledAndCurrent: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" index={0} key="home" rel="home">
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/" index={1} key="label">
        Label
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink current disabled href="/a/b/" index={2} key="label-2">
        Label
      </BreadcrumbNavLink>,
    ],
  },
};
