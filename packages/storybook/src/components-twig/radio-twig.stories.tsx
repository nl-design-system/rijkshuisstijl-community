import TwigRadio from '@rijkshuisstijl-community/components-twig/src/Radio.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/components/radio-button/README.md?raw';
import anatomyDocs from '@utrecht/components/radio-button/docs/anatomy.nl.md?raw';
import visualDesignDocs from '@utrecht/components/radio-button/docs/visual-design.nl.md?raw';
import DrupalAttribute from 'drupal-attribute';

interface RadioStoryArgs {
  checked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  name?: string;
  className?: string;
  attributes?: DrupalAttribute;
  // Demo-only args (not real component props)
  active?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
}

const meta = {
  title: 'Radio Button',
  id: 'rhc-twig-radio',
  component: TwigRadio,
  args: {
    checked: false,
    disabled: false,
    active: false,
    focus: false,
    focusVisible: false,
    invalid: false,
    name: '',
  },
  decorators: [
    (Story, context) => {
      // fresh instance every render, so classes never leak between stories
      context.args.attributes = new DrupalAttribute();
      return Story();
    },
  ],
  argTypes: {
    checked: {
      description: 'Checked',
      control: { type: 'boolean' },
      default: false,
    },
    disabled: {
      description: 'Disabled',
      control: { type: 'boolean' },
      default: false,
    },
    active: {
      description: 'Active',
      control: { type: 'boolean' },
      default: false,
      table: {
        category: 'Demo',
      },
    },
    focus: {
      description: 'Focus',
      control: { type: 'boolean' },
      default: false,
      table: {
        category: 'Demo',
      },
    },
    focusVisible: {
      description: 'Focus-visible',
      control: { type: 'boolean' },
      default: false,
      table: {
        category: 'Demo',
      },
    },
    invalid: {
      description: 'Invalid',
      control: { type: 'boolean' },
      default: false,
      table: {
        category: 'Demo',
      },
    },
    name: {
      description: 'Radio group name. Use the same name for each radio in a group.',
    },
  },
  parameters: {
    docs: {
      description: {
        // TODO: add usage documentation
        component: mergeMarkdown([readme, anatomyDocs, visualDesignDocs]),
      },
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin:
      'Dit component en de documentatie hieronder is overgenomen van de Gemeente Utrecht (daar heeft het de naam RadioButton), met styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Radio.tsx',
  },
} satisfies Meta<RadioStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Active: Story = {
  args: {
    active: true,
    focus: true,
  },
  parameters: {
    docs: {
      description: {
        story: `When the component is \`active\`, it always has \`focus\` too. Test these states together for accurate results.`,
      },
    },
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    checked: false,
  },
};
