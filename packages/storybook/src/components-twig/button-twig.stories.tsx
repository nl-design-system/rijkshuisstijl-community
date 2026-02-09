import TwigButton from '@rijkshuisstijl-community/components-twig/src/Button.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/button.md?raw';

const meta = {
  title: 'Button',
  id: 'rhc-twig-button',
  component: TwigButton,
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'primary-action', 'secondary-action', 'subtle'],
      table: {
        category: 'Variant',
      },
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
      description: 'Disabled',
      control: { type: 'boolean' },
      table: {
        category: 'Props',
      },
      defaultValue: false,
    },
    iconLeft: {
      description: 'Icon left',
      control: { type: 'boolean' },
      table: {
        category: 'Props',
      },
      defaultValue: true,
    },
    iconRight: {
      description: 'Icon right',
      control: { type: 'boolean' },
      table: {
        category: 'Props',
      },
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    //Todo: voeg NL-Design system & Figma links toe
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Button.twig',
  },
} satisfies Meta<typeof TwigButton>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
    iconLeft: false,
    iconRight: false,
    disabled: false,
  },
};

export const PrimaryAction: StoryObj<typeof meta> = {
  args: {
    appearance: 'primary-action',
    children: 'Label',
    disabled: false,
    iconLeft: false,
    iconRight: false,
  },
};

export const SecondaryAction: StoryObj<typeof meta> = {
  args: {
    appearance: 'secondary-action',
    children: 'Label',
    iconLeft: true,
    disabled: false,
    iconRight: false,
  },
};

export const Subtle: StoryObj<typeof meta> = {
  args: {
    appearance: 'subtle',
    children: 'Label',
    disabled: false,
    iconLeft: false,
    iconRight: false,
  },
};

export const IconLeft: StoryObj<typeof meta> = {
  args: {
    icon: 'calendar-event',
    children: 'Label',
    iconLeft: true,
    disabled: false,
    iconRight: false,
  },
};

export const IconRight: StoryObj<typeof meta> = {
  args: {
    icon: 'arrow-narrow-right',
    children: 'Label',
    iconRight: true,
    disabled: false,
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

export const Pressed: StoryObj<typeof meta> = {
  args: {
    children: 'Pressed',
    disabled: false,
    iconLeft: false,
    iconRight: false,
    pressed: true
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

export const Disabled: StoryObj<typeof meta> = {
  args: {
    children: 'Disabled',
    disabled: true,
    iconLeft: false,
    iconRight: false,
  },
};

export const Busy: StoryObj<typeof meta> = {
  args: {
    children: "I'm busy",
    busy: true,
    disabled: false,
    iconLeft: false,
    iconRight: false
  },
};

export const IconOnly: StoryObj<typeof meta> = {
  args: {
    iconOnly: true,
    disabled: false,
    iconLeft: false,
    iconRight: false,
  },
};
