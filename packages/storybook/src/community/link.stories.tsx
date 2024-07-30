/* @license CC0-1.0 */

import { RhcIconArrowRight, RhcIconCalendar } from '@rijkshuisstijl-community/web-components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon, Link } from '@utrecht/component-library-react/dist/css-module';
import { PropsWithChildren } from 'react';
import readme from './link.md?raw';
interface LinkStoryProps {
  href: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}

const LinkStory = ({ href, children, iconLeft, iconRight, ...props }: PropsWithChildren<LinkStoryProps>) => (
  <Link href={href} {...props} style={{ '--utrecht-icon-inset-block-start': '0.2em' }}>
    {iconLeft && (
      <Icon>
        <RhcIconCalendar></RhcIconCalendar>
      </Icon>
    )}
    {children}
    {iconRight && (
      <Icon>
        <RhcIconArrowRight></RhcIconArrowRight>
      </Icon>
    )}
  </Link>
);

const meta = {
  title: 'Rijkshuisstijl/Link',
  id: 'rijkshuisstijl-link',
  component: LinkStory,
  argTypes: {
    href: {
      description: 'Url to link to',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Property',
      },
    },
    children: {
      description: 'Link text - default webcomponent slot',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Webcomponent Slot',
      },
      defaultValue: '',
    },
    iconLeft: {
      description: 'Icon Left',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Demo',
      },
      defaultValue: false,
    },
    iconRight: {
      description: 'Icon Right',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Demo',
      },
      defaultValue: false,
    },
  },
  args: {
    children: '',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: LinkStory,
} as Meta<typeof LinkStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://example.com/',
    children: 'Label',
  },
};

export const IconLeft: Story = {
  args: {
    href: 'https://example.com/',
    children: 'Label',
    iconLeft: true,
  },
};

export const IconRight: Story = {
  args: {
    href: 'https://example.com/',
    children: 'Label',
    iconRight: true,
  },
  name: 'Link',
};
