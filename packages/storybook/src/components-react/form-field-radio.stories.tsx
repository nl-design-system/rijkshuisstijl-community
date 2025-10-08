import '@rijkshuisstijl-community/components-css/index.scss';

import { FormFieldRadio } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './form-field-radio.md?raw';
import { mergeMarkdown } from '../helpers/merge-markdown';

const meta = {
  title: 'Form field/Form Field Radio',
  id: 'rhc-form-field-radio',
  component: FormFieldRadio,
  args: {
    checked: false,
    disabled: false,
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
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    name: {
      description: 'Radio group name. Use the same name for each radio option in a group.',
    },
  },
  parameters: {
    status: {
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add NL DesignSystem links
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1039-2941&node-type=canvas&t=LKhOoi8eF3bD0IIP-0',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldRadio.tsx',
  },
} satisfies Meta<typeof FormFieldRadio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio option',
    name: 'radio-option',
    description: 'This is a radio option',
    errorMessage: '',
    required: false,
    disabled: false,
    invalid: false,
  },
  render: (args) => <FormFieldRadio {...args} onChange={() => {}} />,
};
