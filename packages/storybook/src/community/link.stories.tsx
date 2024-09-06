/* @license CC0-1.0 */

import { Link } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react';
import { Icon } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import readme from './link.md?raw';
interface LinkStoryProps {
  active?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  href: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  external?: boolean;
  externalLabel?: string;
  visited?: boolean;
}

const LinkStory = ({
  active,
  focus,
  focusVisible,
  visited,
  href,
  children,
  iconLeft,
  iconRight,
  external,
  ...props
}: PropsWithChildren<LinkStoryProps>) => (
  <Link
    external={external}
    href={href}
    className={clsx({
      'utrecht-link--active': active,
      'utrecht-link--external': external,
      'utrecht-link--focus': focus,
      'utrecht-link--focus-visible': focusVisible,
      'utrecht-link--visited': visited,
    })}
    {...props}
  >
    {iconLeft && (
      <Icon>
        <IconCalendarEvent />
      </Icon>
    )}
    {children}
    {iconRight && (
      <Icon>
        <IconArrowRight />
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
    active: {
      description: 'Whether the link is active',
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
    external: {
      description: 'Whether the link is external',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Property',
      },
    },
    externalLabel: {
      description: 'SR only label for external link icon',
      type: {
        name: 'string',
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

export const External: Story = {
  args: {
    href: 'https://example.com/',
    children: 'Label',
    external: true,
    externalLabel: 'example external label',
  },
};
