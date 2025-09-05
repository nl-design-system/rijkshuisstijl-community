import {
  FormFieldCheckboxGroupWebComponent,
  FormFieldCheckboxOptionWebComponent,
} from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/react';
import { createElement } from 'react';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../components-react/form-field-checkbox-group.md?raw';

FormFieldCheckboxGroupWebComponent.define();
FormFieldCheckboxOptionWebComponent.define();

const CheckboxGroupWrapper = ({ label, description, errormessage, status, invalid, dir, ...restProps }: any) => {
  return createElement('rhc-form-checkbox-group', {
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
  title: 'Form Field/Form Field Checkbox Group',
  id: 'rhc-form-field-checkbox-group-web',
  component: CheckboxGroupWrapper,
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
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add NL DesignSystem link
    figma:
      '(https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldCheckboxGroup.tsx',
  },
} as Meta<typeof FormFieldCheckboxGroupWebComponent>;

export default meta;

export const Default = {
  args: {
    label: 'Select option',
    children: [
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-1',
        label: 'Checkbox 1',
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-2',
        label: 'Checkbox 2',
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-3',
        label: 'Checkbox 2',
      }),
    ],
  },
} as StoryObj<typeof meta>;

export const Error = {
  args: {
    label: 'Select option',
    children: [
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-4',
        label: 'Checkbox 1',
        invalid: 'true',
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-5',
        label: 'Checkbox 2',
        invalid: 'true',
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-6',
        label: 'Checkbox 2',
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
    children: [
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-7',
        label: 'Checkbox 1',
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-8',
        label: 'Checkbox 2',
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-9',
        label: 'Checkbox 2',
      }),
    ],
    description: 'This is a description',
  },
} as StoryObj<typeof meta>;

export const Status = {
  args: {
    ...Default.args,
    children: [
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-10',
        label: 'Checkbox 1',
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-11',
        label: 'Checkbox 2',
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-12',
        label: 'Checkbox 2',
      }),
    ],
    status: 'This is a status',
  },
} as StoryObj<typeof meta>;

export const RightToLeft = {
  args: {
    label: 'حدد خياراً',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    children: [
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-13',
        label: 'خيار 1',
        invalid: true,
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-14',
        label: 'خيار 2',
        invalid: true,
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-15',
        label: 'خيار 3',
        invalid: true,
      }),
    ],
    dir: 'rtl',
  },
} as StoryObj<typeof meta>;
