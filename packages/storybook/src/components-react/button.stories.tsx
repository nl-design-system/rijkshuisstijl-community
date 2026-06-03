import { Button, Icon, IconButton, IconButtonProps } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react';
import readme from '@utrecht/components/button/README.md?raw';
import anatomyDocs from '@utrecht/components/button/docs/anatomy.nl.md?raw';
import htmlDocs from '@utrecht/components/button/docs/technology-html.nl.md?raw';
import visualDesignDocs from '@utrecht/components/button/docs/visual-design.nl.md?raw';
import wcagDocs from '@utrecht/components/button/docs/wcag.nl.md?raw';
import rhcReadme from './button.md?raw';
const meta = {
  title: 'Button',
  id: 'rhc-button',
  component: Button,
  argTypes: {
    appearance: {
      description: 'Button appearance',
      control: { type: 'select' },
      options: ['', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
      table: {
        category: 'Variant',
      },
    },
    children: {
      description: 'Button text - default webcomponent slot',
      table: {
        category: 'Webcomponent Slot',
      },
    },
    disabled: {
      table: {
        category: 'Props',
      },
    },
  },
  args: {
    appearance: undefined,
    children: 'Label',
    disabled: false,
  },
  parameters: {
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
} satisfies Meta<typeof Button>;

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
    appearance: 'secondary-action-button',
  },
  render: (args) => (
    <Button {...args}>
      <Icon>
        <IconCalendarEvent />
      </Icon>
      Label
    </Button>
  ),
};

export const IconRight: Story = {
  args: {
    appearance: 'primary-action-button',
  },
  render: (args) => (
    <Button {...args}>
      Label
      <Icon>
        <IconArrowRight />
      </Icon>
    </Button>
  ),
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
  args: {
    appearance: 'subtle-button',
    children: null,
    icon: 'kalender',
    label: 'calendar',
  },
  render: ({ icon, ...args }) => <IconButton {...args} icon={icon as IconButtonProps['icon']} />,
};
