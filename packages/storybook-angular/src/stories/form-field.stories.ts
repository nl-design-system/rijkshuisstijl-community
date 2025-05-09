import { FormFieldComponent, ParagraphComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<FormFieldComponent> = {
  title: 'Rijkshuisstijl-angular/Form field',
  id: 'rhc-angular-form-field',
  component: FormFieldComponent,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['checkbox', 'radio', 'text'],
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
    showInput: {
      table: {
        category: 'Props',
      },
    },
    showLabel: {
      table: {
        category: 'Props',
      },
    },
  },
  args: {
    invalid: false,
    type: 'text',
    showLabel: true,
    showInput: true,
    showDescription: true,
  },
  render: ({ invalid, type, showLabel, showInput, showDescription }) => ({
    template: `
    <rhc-form-field
      [type]="type"
      [invalid]="invalid"
      [showLabel]="showLabel"
      [showInput]="showInput"
      [showDescription]="showDescription"
      >
        <input rhc-input />
        <rhc-paragraph rhc-error-message>Foutmelding...</rhc-paragraph>
        <label rhc-label>Label...</label>
        <rhc-paragraph rhc-description>Beschrijving...</rhc-paragraph>
    </rhc-form-field>
    `,
    props: {
      type,
      invalid,
      showInput,
      showDescription,
      showLabel,
    },
    moduleMetadata: {
      imports: [ParagraphComponent],
    },
  }),
};

export default meta;

export const Default: StoryObj<FormFieldComponent> = {
  args: {
    invalid: false,
    type: 'text',
  },
  name: 'Default',
};
