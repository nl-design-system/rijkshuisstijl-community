import { TextInputComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';
import readme from './text-input.md';

type StoryType = TextInputComponent & {
  type: string;
};

const meta: Meta<StoryType> = {
  title: 'Rijkshuisstijl/Text input',
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
  name: 'Default',
};

export const Required: StoryObj<StoryType> = {
  args: {
    required: true,
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
