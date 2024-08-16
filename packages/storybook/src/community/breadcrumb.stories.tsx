import {
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Icon,
  BreadcrumbNav as UtrechtBreadcrumb,
} from '@rijkshuisstijl-community/components-react';
import { RhcIconArrowRight } from '@rijkshuisstijl-community/web-components-react';
import { Meta, StoryObj } from '@storybook/react';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import readme from './breadcrumb..md?raw';

const meta = {
  title: 'Rijkshuisstijl/Breadcrumb navigation',
  id: 'rijkshuisstijl-breadcrumb-nav',
  component: UtrechtBreadcrumb,

  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/" index={1}>
        Label
      </BreadcrumbNavLink>,
      <BreadcrumbNavLink href="/a/b/" index={2}>
        Label
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
    status: {
      type: 'ALPHA',
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
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export const Arrow: Story = {
  args: {
    children: [
      <BreadcrumbNavLink href="/" rel="home" index={0}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            style={{
              transform: 'rotate(180deg)',
            }}
          >
            <RhcIconArrowRight />
          </Icon>
          Label
        </div>
      </BreadcrumbNavLink>,
    ],
  },
};
