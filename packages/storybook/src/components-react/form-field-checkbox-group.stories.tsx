import { FormFieldCheckboxGroup } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, FormLabel } from '@utrecht/component-library-react';
import readme from './form-field-checkbox-group.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Form Field/Form Field Checkbox Group',
  id: 'rhc-form-field-checkbox-group',
  component: FormFieldCheckboxGroup,
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
    nldesignsystem: 'https://nldesignsystem.nl/checkbox-group',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=954-2226&p=f&t=W7gmQ0rB1py9AmaO-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldCheckboxGroup.tsx',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof FormFieldCheckboxGroup>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    label: 'Select option',
    children: [
      <FormLabel key="1" type="checkbox">
        <Checkbox />
        Checkbox 1
      </FormLabel>,
      <FormLabel key="2" type="checkbox">
        <Checkbox />
        Checkbox 2
      </FormLabel>,
      <FormLabel key="3" type="checkbox">
        <Checkbox />
        Checkbox 3
      </FormLabel>,
    ],
  },
};

export const Error: StoryObj<typeof meta> = {
  args: {
    label: 'Select option',
    children: [
      <FormLabel key="1" type="checkbox">
        <Checkbox invalid />
        Checkbox 1
      </FormLabel>,
      <FormLabel key="2" type="checkbox">
        <Checkbox invalid />
        Checkbox 2
      </FormLabel>,
      <FormLabel key="3" type="checkbox">
        <Checkbox invalid />
        Checkbox 3
      </FormLabel>,
    ],
    errorMessage: 'This is an error message',
    invalid: true,
  },
};

export const Description: StoryObj<typeof meta> = {
  args: {
    ...Default.args,
    description: 'This is a description',
  },
};
export const Status: StoryObj<typeof meta> = {
  args: {
    ...Default.args,
    status: 'This is a status',
  },
};
export const RightToLeft: StoryObj<typeof meta> = {
  args: {
    label: 'حدد خياراً',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    children: [
      <FormLabel key="1" type="checkbox">
        <Checkbox />1 خيار
      </FormLabel>,
      <FormLabel key="2" type="checkbox">
        <Checkbox />2 خيار
      </FormLabel>,
      <FormLabel key="3" type="checkbox">
        <Checkbox />3 خيار
      </FormLabel>,
    ],
    dir: 'rtl',
  },
};
