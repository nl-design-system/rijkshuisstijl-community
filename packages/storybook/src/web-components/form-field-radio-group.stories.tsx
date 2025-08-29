import { FormFieldRadioGroupWebComponent, FormFieldRadioWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/react';
import { createElement } from 'react';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/form-field-radio-group.md?raw';

FormFieldRadioGroupWebComponent.define();
FormFieldRadioWebComponent.define();

const RadioGroupWrapper = ({ label, description, errormessage, status, invalid, dir, ...restProps }: any) => {
  return createElement('rhc-form-radio-group', {
    label,
    description,
    errormessage,
    status,
    dir,
    invalid: invalid?.toString(),
    ...restProps,
  });
};

const meta = {
  title: 'Form Field/Form Field Radio Group',
  id: 'rhc-form-field-radio-group-web',
  component: RadioGroupWrapper,
  argTypes: {
    label: {
      description: 'The label of the form field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Select option"' },
      },
    },
    children: {
      description: 'The options of the select',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '' },
      },
    },
    errorMessage: {
      description: 'Adds an error message',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    invalid: {
      description: 'Adds an error message',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    description: {
      description: 'The description of the form field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    dir: {
      description: 'The direction of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
  },
  args: {
    dir: '',
    description: '',
    errorMessage: '',
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
    // TODO: add and NL DesignSystem link
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldRadioGroup.tsx',
  },
} as Meta<typeof FormFieldRadioWebComponent>;

export default meta;

export const Default = {
  args: {
    label: 'Select option',
    children: [
      createElement('rhc-form-radio', {
        label: 'Option 1',
        name: 'radio-demo',
        value: 'option1',
      }),
      createElement('rhc-form-radio', {
        label: 'Option 2',
        name: 'radio-demo',
        value: 'option2',
      }),
      createElement('rhc-form-radio', {
        label: 'Option 3',
        name: 'radio-demo',
        value: 'option3',
      }),
    ],
  },
} as StoryObj<typeof meta>;

export const Error = {
  args: {
    label: 'Select option',
    children: [
      createElement('rhc-form-radio', {
        label: 'Option 1',
        name: 'radio-demo',
        value: 'option1',
        invalid: 'true',
      }),
      createElement('rhc-form-radio', {
        label: 'Option 2',
        name: 'radio-demo',
        value: 'option2',
        invalid: 'true',
      }),
      createElement('rhc-form-radio', {
        label: 'Option 3',
        name: 'radio-demo',
        value: 'option3',
        invalid: 'true',
      }),
    ],
    errorMessage: 'This is an error message',
    invalid: true,
  },
} as StoryObj<typeof meta>;

export const Description = {
  args: {
    ...Default.args,
    description: 'This is a description',
  },
} as StoryObj<typeof meta>;

export const Status = {
  args: {
    ...Default.args,
    status: 'This is a status',
  },
} as StoryObj<typeof meta>;

export const RightToLeft = {
  args: {
    label: 'حدد خياراً',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    children: [
      createElement('rhc-form-radio', {
        label: 'خيار 1',
        name: 'radio-demo',
        value: 'option1',
      }),
      createElement('rhc-form-radio', {
        label: 'خيار 2',
        name: 'radio-demo',
        value: 'option2',
      }),
      createElement('rhc-form-radio', {
        label: 'خيار 3',
        name: 'radio-demo',
        value: 'option3',
      }),
    ],
  },
} as StoryObj<typeof meta>;
