/* @license CC0-1.0 */

import { Button, Icon, IconButton } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react';
import readme from '@utrecht/components/button/README.md?raw';
import anatomyDocs from '@utrecht/components/button/docs/anatomy.nl.md?raw';
import htmlDocs from '@utrecht/components/button/docs/technology-html.nl.md?raw';
import visualDesignDocs from '@utrecht/components/button/docs/visual-design.nl.md?raw';
import wcagDocs from '@utrecht/components/button/docs/wcag.nl.md?raw';
import { PropsWithChildren } from 'react';
import rhcReadme from './button.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

interface ButtonStoryProps {
  appearance: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}

const ButtonStory = ({ appearance, children, iconLeft, iconRight, ...props }: PropsWithChildren<ButtonStoryProps>) => (
  <Button appearance={appearance} {...props}>
    {iconLeft && (
      <Icon>
        <IconCalendarEvent></IconCalendarEvent>
      </Icon>
    )}
    {children}
    {iconRight && (
      <Icon>
        <IconArrowRight></IconArrowRight>
      </Icon>
    )}
  </Button>
);

const meta = {
  title: 'Button',
  id: 'rhc-button',
  component: ButtonStory,
  argTypes: {
    appearance: {
      description: 'Button appearance',
      control: { type: 'select' },
      options: ['', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
      table: {
        category: 'Variant',
      },
      defaultValue: '',
    },
    children: {
      description: 'Button text - default webcomponent slot',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Webcomponent Slot',
      },
      defaultValue: '',
    },
    disabled: {
      table: {
        category: 'Props',
      },
      defaultValue: false,
    },
    iconLeft: {
      description: 'Icon Left',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Props',
      },
      defaultValue: false,
    },
    iconRight: {
      description: 'Icon Right',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Props',
      },
      defaultValue: false,
    },
  },
  args: {
    appearance: '',
    children: 'Label',
    disabled: false,
    iconLeft: false,
    iconRight: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, anatomyDocs, visualDesignDocs, htmlDocs, rhcReadme, wcagDocs]),
      },
    },
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Button.tsx',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=153-1138&p=f&t=bIUNfPQ6Tcm5rDPk-0',
    nldesignsystem: 'https://nldesignsystem.nl/button',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen (voor de IconButton) en styling van de Rijkshuisstijl Community.',
  },
  render: ButtonStory,
} as Meta<typeof ButtonStory>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const PrimaryAction: Story = {
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
  },
};

export const SecondaryAction: Story = {
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
  },
};

export const Subtle: Story = {
  args: {
    children: 'Label',
    appearance: 'subtle-button',
  },
};

export const IconLeft: Story = {
  args: {
    children: 'Label',
    appearance: 'secondary-action-button',
    iconLeft: true,
  },
};

export const IconRight: Story = {
  args: {
    children: 'Label',
    appearance: 'primary-action-button',
    iconRight: true,
  },
};

export const Active: Story = {
  args: {
    children: 'Active',
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
    children: 'Pressed',
  },
};

export const Hover: Story = {
  args: {
    children: 'Hover',
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const Busy: Story = {
  args: {
    busy: true,
    children: 'Im busy',
  },
};

export const IconOnly: Story = {
  render: () => (
    <IconButton label="calendar">
      <Icon>
        <IconCalendarEvent></IconCalendarEvent>
      </Icon>
    </IconButton>
  ),
};
