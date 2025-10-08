import { FormFieldRadioWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';
import readme from '../components-react/form-field-radio.md?raw';
import { mergeMarkdown } from '../helpers/merge-markdown';

FormFieldRadioWebComponent.define();

const RadioWrapper = ({
  label,
  description,
  errormessage,
  status,
  invalid,
  dir,
  disabled,
  checked,
  ...restProps
}: any) => {
  return createElement('rhc-form-radio', {
    label,
    description,
    errormessage,
    status,
    dir,
    checked: checked?.toString(),
    disabled: disabled?.toString(),
    invalid: invalid?.toString(),
    ...restProps,
  });
};

const meta = {
  title: 'Form field/Form Field Radio',
  id: 'rhc-form-field-radio-web',
  component: RadioWrapper,
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
    // TODO: add NL DesignSystem link
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1039-2941&node-type=canvas&t=LKhOoi8eF3bD0IIP-0',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldRadio.tsx',
  },
} as Meta<typeof FormFieldRadioWebComponent>;

export default meta;

export const Default = {
  args: {
    label: 'Radio option',
    name: 'radio-option',
    description: 'This is a radio option',
    errorMessage: '',
    required: false,
    disabled: false,
    invalid: false,
  },
} as StoryObj<typeof meta>;
