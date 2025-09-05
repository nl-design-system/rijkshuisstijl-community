import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { type Meta, type StoryObj } from '@storybook/angular';
import readme from './form-field-text-input.md';
import { FormFieldTextInputComponent } from '../../../components-angular/src/public-api';

const meta: Meta<FormFieldTextInputComponent> = {
  title: 'Form Field Text Input',
  id: 'rhc-angular-form-field-text-input',
  component: FormFieldTextInputComponent,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    inputId: {
      table: {
        category: 'Props',
      },
    },
    invalid: {
      table: {
        category: 'Props',
      },
    },
    showDescription: {
      table: {
        category: 'Props',
      },
    },
    label: {
      table: {
        category: 'Props',
      },
    },
    errorMessage: {
      table: {
        category: 'Props',
      },
    },
    description: {
      table: {
        category: 'Props',
      },
    },
    status: {
      table: {
        category: 'Props',
      },
      type: 'string',
    },
    required: {
      table: {
        category: 'Props',
      },
      control: { type: 'boolean' },
      description:
        'Whether the input is required. Maps to the HTML `aria-required` attribute. Use this if you want to use Angular validation (recommended).',
    },
    inputRequired: {
      table: {
        category: 'Props',
      },
      control: { type: 'boolean' },
      description:
        'Maps to the HTML `required` attribute. Use this if you want to use HTML validation (not recommended).',
    },
    readonly: {
      table: {
        category: 'Props',
      },
    },
    type: {
      table: {
        category: 'Props',
      },
      control: { type: 'select' },
      options: [
        'date',
        'datetime-local',
        'email',
        'month',
        'number',
        'password',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
    },
    dir: {
      table: {
        category: 'Props',
      },
      control: { type: 'select' },
      options: ['auto', 'ltr', 'rtl'],
    },
    name: {
      table: {
        category: 'Props',
      },
    },
    value: {
      table: {
        category: 'Props',
      },
    },
    autocomplete: {
      table: {
        category: 'Props',
      },
      control: { type: 'select' },
      options: [
        '',
        'additional-name',
        'address-level1',
        'address-level2',
        'address-level3',
        'address-level4',
        'address-line1',
        'address-line2',
        'address-line3',
        'bday',
        'bday-day',
        'bday-month',
        'bday-year',
        'cc-additional-name',
        'cc-csc',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-family-name',
        'cc-given-name',
        'cc-name',
        'cc-number',
        'cc-type',
        'country',
        'country-name',
        'current-password',
        'email',
        'family-name',
        'fax',
        'given-name',
        'home',
        'honorific-prefix',
        'honorific-suffix',
        'impp',
        'language',
        'mobile',
        'name',
        'new-password',
        'nickname',
        'one-time-code',
        'organization',
        'organization-title',
        'pager',
        'photo',
        'postal-code',
        'sex',
        'street-address',
        'tel',
        'tel-area-code',
        'tel-country-code',
        'tel-extension',
        'tel-local',
        'tel-local-prefix',
        'tel-local-suffix',
        'tel-national',
        'transaction-amount',
        'transaction-currency',
        'url',
        'username',
        'work',
      ],
    },
    placeholder: {
      table: {
        category: 'Props',
      },
    },
    size: {
      table: {
        category: 'Props',
      },
      type: 'number',
    },
    minLength: {
      table: {
        category: 'Props',
      },
      type: 'number',
    },
    maxLength: {
      table: {
        category: 'Props',
      },
      type: 'number',
    },
    min: {
      table: {
        category: 'Props',
      },
      type: 'number',
    },
    max: {
      table: {
        category: 'Props',
      },
      type: 'number',
    },
    step: {
      table: {
        category: 'Props',
      },
      type: 'number',
    },
  },
  args: {
    inputId: 'my-id',
    invalid: false,
    showDescription: true,
    label: 'Label',
    errorMessage: 'Er klopt iets niet',
    description: 'Beschrijving',
    status: undefined,
    required: false,
    inputRequired: false,
    readonly: false,
    type: 'text',
    dir: 'auto',
    name: 'subject',
    value: '',
    autocomplete: '',
    placeholder: '',
    size: undefined,
    minLength: undefined,
    maxLength: undefined,
    min: undefined,
    max: undefined,
    step: undefined,
  },
  render: ({
    inputId,
    invalid,
    showDescription,
    description,
    status,
    label,
    errorMessage,
    required,
    inputRequired,
    readonly,
    dir,
    name,
    value,
    autocomplete,
    placeholder,
    size,
    minLength,
    maxLength,
    min,
    max,
    step,
    type,
  }) => ({
    template: `
    <form [formGroup]="form">
      <rhc-form-field-text-input
          formControlName="textInput"
          [inputId]="inputId"
          [invalid]="invalid"
          [showDescription]="showDescription"
          [description]="description"
          [status]="status"
          [label]="label"
          [errorMessage]="errorMessage"
          [readonly]="readonly"
          [required]="required"
          [inputRequired]="inputRequired"
          [dir]="dir"
          [name]="name"
          [autocomplete]="autocomplete"
          [placeholder]="placeholder"
          [size]="size"
          [minLength]="minLength"
          [maxLength]="maxLength"
          [min]="min"
          [max]="max"
          [step]="step"
          [type]="type"
      />
    </form>
    `,
    props: {
      form: new FormGroup({
        textInput: new FormControl(''),
      }),
      inputId,
      invalid,
      showDescription,
      description,
      status,
      label,
      errorMessage,
      required,
      inputRequired,
      readonly,
      dir,
      name,
      value,
      autocomplete,
      placeholder,
      size,
      minLength,
      maxLength,
      min,
      max,
      step,
      type,
    },
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
};

export default meta;

export const Default: StoryObj<FormFieldTextInputComponent> = {
  name: 'Default',
  args: {
    name: 'subject',
    label: 'Onderwerp',
    showDescription: false,
  },
};

export const Email: StoryObj<FormFieldTextInputComponent> = {
  name: 'Email',
  render: () => ({
    template: `
    <form [formGroup]="form">
      <rhc-form-field-text-input
        formControlName="email"
        inputId="email"
        label="Email"
        name="email"
        type="email"
      />
    </form>
    `,
    props: {
      form: new FormGroup({
        email: new FormControl(''),
      }),
    },
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
};

export const Description: StoryObj<FormFieldTextInputComponent> = {
  name: 'Description',
  args: {
    name: 'subject',
    label: 'Onderwerp',
    description: 'Kort maar krachtig.',
  },
  render: ({ name, label, description }) => ({
    template: `
    <form [formGroup]="form">
      <rhc-form-field-text-input
        formControlName="textInput"
        inputId="description"
        [name]="name"
        [label]="label"
        [showDescription]="true"
        [description]="description"
      />
    </form>
    `,
    props: {
      form: new FormGroup({
        textInput: new FormControl(''),
      }),
      name,
      label,
      description,
    },
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
};

export const ErrorMessage: StoryObj<FormFieldTextInputComponent> = {
  name: 'ErrorMessage',
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Vul een onderwerp in.',
    invalid: true,
  },
  render: ({ name, label, errorMessage, invalid }) => ({
    template: `
    <form [formGroup]="form">
      <rhc-form-field-text-input
        formControlName="textInput"
        inputId="error-message"
        [name]="name"
        [label]="label"
        [invalid]="invalid"
        [errorMessage]="errorMessage"
      />
    </form>
    `,
    props: {
      form: new FormGroup({
        textInput: new FormControl(''),
      }),
      name,
      label,
      errorMessage,
      invalid,
    },
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
};

export const Status: StoryObj<FormFieldTextInputComponent> = {
  name: 'Status',
  args: {
    name: 'subject',
    label: 'Onderwerp',
    value: 'Hello, World!',
    status: '13 van de 50 tekens gebruikt',
  },
  render: ({ name, label, value, status }) => ({
    template: `
    <form [formGroup]="form">
      <rhc-form-field-text-input
        formControlName="textInput"
        inputId="status"
        [name]="name"
        [label]="label"
        [status]="status"
      />
    </form>
    `,
    props: {
      form: new FormGroup({
        textInput: new FormControl(value),
      }),
      name,
      label,
      value,
      status,
    },
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
};

export const Password: StoryObj<FormFieldTextInputComponent> = {
  name: 'Password',
  args: {
    name: 'subject',
    label: 'Wachtwoord',
    type: 'password',
    autocomplete: 'current-password',
  },
  render: ({ name, label, type, autocomplete }) => ({
    template: `
    <form [formGroup]="form">
      <rhc-form-field-text-input
        formControlName="password"
        inputId="password"
        [name]="name"
        [label]="label"
        [type]="type"
        [autocomplete]="autocomplete"
      />
    </form>
    `,
    props: {
      form: new FormGroup({
        password: new FormControl(''),
      }),
      name,
      label,
      type,
      autocomplete,
    },
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
};

export const Disabled: StoryObj<FormFieldTextInputComponent> = {
  name: 'Disabled',
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true,
    value: 'Hello, world!',
  },
  render: ({ name, label, value, disabled }) => ({
    template: `
    <form [formGroup]="form">
      <rhc-form-field-text-input
        formControlName="textInput"
        inputId="disabled"
        [name]="name"
        [label]="label"
      />
    </form>
    `,
    props: {
      form: new FormGroup({
        textInput: new FormControl({ value: value, disabled: disabled }),
      }),
      name,
      label,
      disabled,
      value,
    },
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
};

export const Readonly: StoryObj<FormFieldTextInputComponent> = {
  name: 'Readonly',
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readonly: true,
    value: 'Hello, world!',
  },
  render: ({ name, label, value, readonly }) => ({
    template: `
    <form [formGroup]="form">
      <rhc-form-field-text-input
        formControlName="textInput"
        inputId="readonly"
        [name]="name"
        [label]="label"
        [readonly]="readonly"
      />
    </form>
    `,
    props: {
      form: new FormGroup({
        textInput: new FormControl(value),
      }),
      name,
      label,
      readonly,
      value,
    },
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
};

export const Placeholder: StoryObj<FormFieldTextInputComponent> = {
  name: 'Placeholder',
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Type some text...',
  },
  render: ({ name, label, placeholder }) => ({
    template: `
    <form [formGroup]="form">
      <rhc-form-field-text-input
        formControlName="textInput"
        inputId="placeholder"
        [name]="name"
        [label]="label"
        [placeholder]="placeholder"
      />
    </form>
    `,
    props: {
      form: new FormGroup({
        textInput: new FormControl(''),
      }),
      name,
      label,
      placeholder,
    },
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
};

export const RightToLeftInput: StoryObj<FormFieldTextInputComponent> = {
  name: 'Right-to-left input',
  args: {
    name: 'subject',
    label: 'رقم الجوال',
    dir: 'rtl',
  },
  render: ({ name, label, dir }) => ({
    template: `
    <form [formGroup]="form">
      <rhc-form-field-text-input
        formControlName="textInput"
        inputId="righttoleft"
        [name]="name"
        [label]="label"
        [dir]="dir"
      />
    </form>
    `,
    props: {
      form: new FormGroup({
        textInput: new FormControl(''),
      }),
      name,
      label,
      dir,
    },
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
};
