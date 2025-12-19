import { type Meta, type StoryObj } from '@storybook/angular';
import readme from './text-input.md';
import { TextInputComponent } from '../../../components-angular/src/public-api';

type StoryType = TextInputComponent & {
  type: string;
};

const meta: Meta<StoryType> = {
  title: 'Text Input',
  id: 'rhc-text-input',
  component: TextInputComponent,
  argTypes: {
    invalid: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
      description:
        'Whether the input is required. Maps to the HTML `aria-required` attribute. Use this if you want to use Angular validation (recommended).',
    },
    inputRequired: {
      control: 'boolean',
      description:
        'Maps to the HTML `required` attribute. Use this if you want to use HTML validation (not recommended).',
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['email', 'number', 'password', 'search', 'tel', 'text', 'url', 'date'],
    },
  },
  args: {
    invalid: false,
    required: false,
    inputRequired: false,
    disabled: false,
    readonly: false,
    type: 'text',
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ disabled, required, readonly, invalid, type }) => ({
    template: `
    <input rhc-text-input
      [invalid]="invalid"
      [disabled]="disabled"
      [readonly]="readonly"
      [required]="required"
      [type]="type"
    />
    `,
    props: {
      invalid,
      readonly,
      required,
      disabled,
      type,
    },
  }),
};

export default meta;

export const Default: StoryObj<StoryType> = {
  args: {
    disabled: false,
  },
};

export const Disabled: StoryObj<StoryType> = {
  args: {
    disabled: true,
  },
  render: ({ disabled, required, readonly, invalid, type }) => ({
    template: `
    <input rhc-text-input
      value="Hello, World!"
      [invalid]="invalid"
      [disabled]="disabled"
      [readonly]="readonly"
      [required]="required"
      [type]="type"
    />
    `,
    props: {
      invalid,
      readonly,
      required,
      disabled,
      type,
    },
  }),
};

export const Invalid: StoryObj<StoryType> = {
  args: {
    invalid: true,
  },
};
