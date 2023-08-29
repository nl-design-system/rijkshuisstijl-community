/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { UtrechtIcon, UtrechtLink } from '@utrecht/web-component-library-react';
import { PropsWithChildren } from 'react';
import readme from './link.md?raw';
interface LinkStoryProps {
  href: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}

const LinkStory = ({ href, children, iconLeft, iconRight, ...props }: PropsWithChildren<LinkStoryProps>) => (
  <UtrechtLink href={href} {...props} style={{ '--utrecht-icon-inset-block-start': '0.2em' }}>
    {iconLeft && (
      <UtrechtIcon>
        <rhc-icon-calendar></rhc-icon-calendar>
      </UtrechtIcon>
    )}
    {children}
    {iconRight && (
      <UtrechtIcon>
        <rhc-icon-arrow-right></rhc-icon-arrow-right>
      </UtrechtIcon>
    )}
  </UtrechtLink>
);

const meta = {
  title: 'Logius/Link',
  id: 'logius-link',
  component: UtrechtLink,
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
};
