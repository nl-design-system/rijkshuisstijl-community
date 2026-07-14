import { Button, Icon, IconButton } from '@rijkshuisstijl-community/components-react';
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
    purpose: {
      description: 'Het doel van de button',
      control: { type: 'select' },
      options: [undefined, 'primary', 'secondary', 'subtle'],
      table: {
        category: 'Variant',
      },
    },
    appearance: {
      description: 'Deprecated: gebruik `purpose`. Wordt vertaald naar de overeenkomstige `purpose`.',
      control: { type: 'select' },
      options: ['', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
      table: {
        category: 'Deprecated',
      },
    },
    children: {
      description: 'Button text - default webcomponent slot',
      table: {
        category: 'Webcomponent Slot',
      },
    },
    disabled: {
      description: 'Niet beschikbaar via `aria-disabled`; de button blijft focusbaar',
      table: {
        category: 'Props',
      },
    },
    busy: {
      table: {
        category: 'Props',
      },
    },
    pressed: {
      table: {
        category: 'Props',
      },
    },
  },
  args: {
    purpose: undefined,
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
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/button-react/src/Button.tsx',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=153-1138&p=f&t=bIUNfPQ6Tcm5rDPk-0',
    nldesignsystem: 'https://nldesignsystem.nl/button',
    componentOrigin:
      'Dit component is gebaseerd op de Button candidate van NL Design System (nl-button), met styling van de Rijkshuisstijl Community.',
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
    purpose: 'primary',
  },
};

export const SecondaryAction: Story = {
  args: {
    children: 'Label',
    purpose: 'secondary',
  },
};

export const Subtle: Story = {
  args: {
    children: 'Label',
    purpose: 'subtle',
  },
};

export const IconLeft: Story = {
  args: {
    purpose: 'secondary',
  },
  render: ({ children, purpose }) => (
    <Button
      purpose={purpose}
      iconStart={
        <Icon>
          <IconCalendarEvent />
        </Icon>
      }
    >
      {children}
    </Button>
  ),
};

export const IconRight: Story = {
  args: {
    purpose: 'primary',
  },
  render: ({ children, purpose }) => (
    <Button
      purpose={purpose}
      iconEnd={
        <Icon>
          <IconArrowRight />
        </Icon>
      }
    >
      {children}
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
    toggle: true,
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

export const FocusVisible: Story = {
  args: {
    children: 'Focus visible',
  },
  parameters: {
    pseudo: {
      focusVisible: true,
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

export const DeprecatedAppearance: Story = {
  name: 'Appearance (deprecated)',
  args: {
    appearance: 'primary-action-button',
    children: 'Label',
  },
};

export const IconOnly: Story = {
  args: {
    purpose: 'subtle',
  },
  render: ({ purpose }) => <IconButton icon="kalender" label="calendar" purpose={purpose} />,
};
