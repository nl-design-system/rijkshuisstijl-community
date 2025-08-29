import {
  FormField,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
  FormFieldRadio,
  FormFieldRadioGroup,
} from '@rijkshuisstijl-community/components-react';
import { type Meta, type StoryObj } from '@storybook/react';
import readme from './form-field.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Form Field/Form Field',
  id: 'rhc-form-field',
  component: FormField,
  argTypes: {
    label: {
      description: 'Label',
      control: 'text',
      table: { category: 'Demo', defaultValue: { summary: '' } },
    },
    description: {
      description: 'Description',
      control: 'text',
      table: { category: 'Demo', defaultValue: { summary: '' } },
    },
    errorMessage: {
      description: 'Error message',
      control: 'text',
      table: { category: 'Demo', defaultValue: { summary: '' } },
      if: { arg: 'invalid', eq: true },
    },
    input: {
      description: 'Input component',
      control: false,
      table: { category: 'Demo' },
    },
    status: {
      description: 'Status message',
      control: 'text',
      table: { category: 'Demo', defaultValue: { summary: '' } },
    },
    invalid: {
      description: 'Invalid state',
      control: 'boolean',
      table: { category: 'Demo', defaultValue: { summary: 'false' } },
    },
  },
  args: {
    label: 'Onderwerp',
    description: '',
    errorMessage: '',
    status: '',
    invalid: false,
  },
  render: (args) => <FormField {...args} />,
  tags: ['autodocs'],
  parameters: {
    status: { type: 'STABLE' },
    docs: {
      description: { component: mergeMarkdown([readme]) },
    },
    nldesignsystem: 'https://nldesignsystem.nl/form-field',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&p=f',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormField.tsx',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Onderwerp',
    description: 'Beschrijving van het onderwerp',
    input: (
      <FormFieldCheckboxGroup>
        <FormFieldCheckboxOption key="1" label="Checkbox 1" />
        <FormFieldCheckboxOption key="2" label="Checkbox 2" />
        <FormFieldCheckboxOption key="3" label="Checkbox 3" />
      </FormFieldCheckboxGroup>
    ),
    statusId: 'status',
    errorMessageId: 'error',
    descriptionId: 'description',
  },
};

export const WithRadioGroup: Story = {
  args: {
    label: 'Onderwerp',
    description: 'Beschrijving van het onderwerp',
    input: (
      <FormFieldRadioGroup>
        <FormFieldRadio label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio label="Option 2" name="radio-demo" value="option2" />
        <FormFieldRadio label="Option 3" name="radio-demo" value="option3" />
      </FormFieldRadioGroup>
    ),
    statusId: 'status',
    errorMessageId: 'error',
    descriptionId: 'description',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Onderwerp',
    input: (
      <FormFieldRadioGroup>
        <FormFieldRadio label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio label="Option 2" name="radio-demo" value="option2" />
        <FormFieldRadio label="Option 3" name="radio-demo" value="option3" />
      </FormFieldRadioGroup>
    ),
    statusId: 'status',
    errorMessageId: 'error',
    descriptionId: 'description',
    errorMessage: 'Dit is een foutmelding',
    invalid: true,
  },
};
