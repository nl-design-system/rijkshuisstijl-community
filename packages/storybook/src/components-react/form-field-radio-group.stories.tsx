import { FormFieldRadioGroup, Radio } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormLabel } from '@utrecht/component-library-react';
import readme from './form-field-radio-group.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Form Field/Form Field Radio Group',
  id: 'rhc-form-field-radio-group',
  component: FormFieldRadioGroup,
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
      type: 'UNSTABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add GitHub issue and NL DesignSystem links
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldRadioGroup.tsx',
  },
} satisfies Meta<typeof FormFieldRadioGroup>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    label: 'Select option',
    children: (
      <>
        <FormLabel type="radio">
          <Radio name="radio-demo" value="option1" />
          Option 1
        </FormLabel>
        <FormLabel type="radio">
          <Radio name="radio-demo" value="option2" />
          Option 2
        </FormLabel>
        <FormLabel type="radio">
          <Radio name="radio-demo" value="option3" />
          Option 3
        </FormLabel>
      </>
    ),
  },
};

export const Error: StoryObj<typeof meta> = {
  args: {
    label: 'Select option',
    children: (
      <>
        <FormLabel type="radio">
          <Radio invalid name="radio-demo" value="option1" />
          Option 1
        </FormLabel>
        <FormLabel type="radio">
          <Radio invalid name="radio-demo" value="option2" />
          Option 2
        </FormLabel>
        <FormLabel type="radio">
          <Radio invalid name="radio-demo" value="option3" />
          Option 3
        </FormLabel>
      </>
    ),
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
    status: <span>هذه هي رسالة الحالة</span>,
    children: (
      <>
        <FormLabel type="radio">
          <Radio name="radio-demo" value="option1" />1 خيار
        </FormLabel>
        <FormLabel type="radio">
          <Radio name="radio-demo" value="option2" />2 خيار
        </FormLabel>
        <FormLabel type="radio">
          <Radio name="radio-demo" value="option3" />3 خيار
        </FormLabel>
      </>
    ),
  },
};
