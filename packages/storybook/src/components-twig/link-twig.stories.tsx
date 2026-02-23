import TwigLink from '@rijkshuisstijl-community/components-twig/src/Link.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
// import readme from '../components-react/link.md?raw';
import readme from '@utrecht/components/link/README.md?raw';

const meta = {
  title: 'Link',
  id: 'rhc-twig-link',
  component: TwigLink,
  argTypes: {
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
    href: {
      description: 'Link URL',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '#',
    },
    inline: {
      description: 'inline',
      control: { type: 'boolean' },
      default: false,
    },
    className: {
      description: 'Add class to the link',
      type: {
        name: 'string',
      },
      defaultValue: '',
    },
    iconLeft: {
      description: 'Icon left',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    iconRight: {
      description: 'Icon right',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/-WIP--NL-Design-System---Bibliotheek?node-id=197-664&p=f&t=nB0V3gAhWfpilaKv-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-link/src/Link.twig',
    nldesignsystem: 'https://nldesignsystem.nl/link',
    componentOrigin:
      'Dit component is overgenomen van het NL Design System, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof TwigLink>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    iconLeft: false,
    iconRight: false,
  },
};

export const IconLeft: StoryObj<typeof meta> = {
  args: {
    icon: 'calendar-event',
    children: 'Afspraak maken',
    iconLeft: true,
    iconRight: false,
  },
};

export const IconRight: StoryObj<typeof meta> = {
  args: {
    icon: 'arrow-narrow-right',
    children: 'Verder',
    iconRight: true,
    iconLeft: false,
  },
};

export const Active: StoryObj<typeof meta> = {
  args: {
    children: 'Active',
    disabled: false,
    iconLeft: false,
    iconRight: false,
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Hover: StoryObj<typeof meta> = {
  args: {
    children: 'Hover',
    disabled: false,
    iconLeft: false,
    iconRight: false,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Focus: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    disabled: false,
    iconLeft: false,
    iconRight: false,
  },
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};

export const FocusVisible: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    disabled: false,
    iconLeft: false,
    iconRight: false,
  },
};

export const Visited: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    disabled: false,
    iconLeft: false,
    iconRight: false,
  },
  parameters: {
    pseudo: {
      visited: true,
    },
  },
};
