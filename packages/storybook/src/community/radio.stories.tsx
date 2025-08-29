/* @license CC0-1.0 */

import { Radio, type RadioProps } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/radio-button/README.md?raw';
import anatomyDocs from '@utrecht/components/radio-button/docs/anatomy.nl.md?raw';
import visualDesignDocs from '@utrecht/components/radio-button/docs/visual-design.nl.md?raw';
import clsx from 'clsx';
import { mergeMarkdown } from '../../helpers/merge-markdown';

interface RadioStoryProps extends RadioProps {
  focus?: boolean;
  focusVisible?: boolean;
  active?: boolean;
}

const RadioStory = ({ active, focus, focusVisible, name, ...args }: RadioStoryProps) => (
  <Radio
    aria-label="radio-label"
    name={name || undefined}
    className={clsx({
      'utrecht-radio-button--active': active,
      'utrecht-radio-button--focus': focus,
      'utrecht-radio-button--focus-visible': focusVisible,
    })}
    onChange={() => {}}
    {...args}
  />
);

const meta = {
  title: 'Radio button',
  id: 'rhc-radio',
  component: RadioStory,
  args: {
    checked: false,
    disabled: false,
    active: false,
    focus: false,
    focusVisible: false,
    invalid: false,
    name: '',
  },

  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    active: {
      description: 'Active',
      control: 'boolean',
      table: {
        category: 'Demo',
      },
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
      table: {
        category: 'Demo',
      },
    },
    focusVisible: {
      description: 'Focus-visible',
      control: 'boolean',
      table: {
        category: 'Demo',
      },
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
      table: {
        category: 'Demo',
      },
    },
    name: {
      description: 'Radio group name. Use the same name for each radio in a group.',
    },
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
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
} satisfies Meta<typeof RadioStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};

export const Active: Story = {
  name: 'Active',
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
  name: 'Hover',
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  name: 'Focus',
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  name: 'Focus Visible',
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  name: 'Invalid',
  args: {
    invalid: true,
  },
};
