import TwigCheckbox from '@rijkshuisstijl-community/components-twig/src/Checkbox.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/checkbox.md?raw';

const setIndeterminate: Story['play'] = async ({ canvasElement }) => {
  const input = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]');
  if (input) input.indeterminate = true;
};

const meta = {
  title: 'Checkbox',
  id: 'rhc-twig-checkbox',
  component: TwigCheckbox,
  argTypes: {
    ariaLabel: {
      description: 'aria-label',
      control: { type: 'text' as const },
      table: {
        defaultValue: { summary: 'checkbox-label' },
      },
    },
    checked: {
      description: 'checked',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'disabled',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    indeterminate: {
      description: 'indeterminate',
      control: 'boolean',
      table: {
        defaultValue: { summary: '' },
      },
    },
    invalid: {
      description: 'invalid',
      control: 'boolean',
      table: {
        defaultValue: { summary: '' },
      },
    },
    value: {
      description: 'value',
      control: { type: 'text' as const },
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source (including with usage and wcag documentation)
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=944-1535&node-type=canvas&t=HiNKOQhf1hQtLZrr-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Checkbox.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/checkbox/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof TwigCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'checkbox-label',
  },
};
export const Active: Story = {
  args: {
    ariaLabel: 'checkbox-label',
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};
export const Hover: Story = {
  args: {
    ariaLabel: 'checkbox-label',
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};
export const Focus: Story = {
  args: {
    ariaLabel: 'checkbox-label',
  },
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};
export const FocusVisible: Story = {
  args: {
    ariaLabel: 'checkbox-label',
  },
  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
};
export const Disabled: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    disabled: true,
  },
};
export const Invalid: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    invalid: true,
  },
};
export const Checked: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    checked: true,
  },
};
export const CheckedAndActive: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    checked: true,
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};
export const CheckedAndHover: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    checked: true,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};
export const CheckedAndFocus: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    checked: true,
  },
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};
export const CheckedAndFocusVisible: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    checked: true,
  },
  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
};
export const CheckedAndDisabled: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    checked: true,
    disabled: true,
  },
};
export const Indeterminate: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    indeterminate: true,
  },
  play: setIndeterminate,
};
export const IndeterminateAndActive: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    indeterminate: true,
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
  play: setIndeterminate,
};
export const IndeterminateAndHover: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    indeterminate: true,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
  play: setIndeterminate,
};
export const IndeterminateAndFocus: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    indeterminate: true,
  },
  parameters: {
    pseudo: {
      focus: true,
    },
  },
  play: setIndeterminate,
};
export const IndeterminateAndFocusVisible: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    indeterminate: true,
  },
  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
  play: setIndeterminate,
};
export const IndeterminateAndDisabled: Story = {
  args: {
    ariaLabel: 'checkbox-label',
    indeterminate: true,
    disabled: true,
  },
  play: setIndeterminate,
};
