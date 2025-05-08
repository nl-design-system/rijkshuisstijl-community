import { ButtonComponent } from '@rijkshuisstijl-community/components-angular';
import { IconComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';
import readme from './button.md';

const meta: Meta<ButtonComponent> = {
  title: 'Rijkshuisstijl-angular/Button',
  id: 'rhc-angular-button',
  component: ButtonComponent,
  argTypes: {
    appearance: {
      description: 'Button appearance',
      control: { type: 'select' },
      options: ['', 'primary-action', 'secondary-action', 'subtle'],
      table: {
        category: 'Variant',
      },
      defaultValue: '',
    },
    disabled: {
      table: {
        category: 'Props',
      },
      defaultValue: false,
    },
  },
  args: {
    appearance: '',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ disabled, appearance }) => ({
    template: `
      <button rhc-button [appearance]="'${appearance}'" [disabled]="${disabled}">
        Label
      </button>
    `,
    props: {
      appearance,
      disabled,
    },
  }),
};

export default meta;

export const Default: StoryObj<ButtonComponent> = {
  args: {
    appearance: '',
    disabled: false,
  },
  name: 'Default',
};

export const Primary: StoryObj<ButtonComponent> = {
  args: {
    appearance: 'primary-action',
  },
  name: 'Primary',
};

export const Secondary: StoryObj<ButtonComponent> = {
  args: {
    appearance: 'secondary-action',
  },
  name: 'Secondary',
};

export const Subtle: StoryObj<ButtonComponent> = {
  args: {
    appearance: 'subtle',
  },
  name: 'Subtle',
};

export const IconLeft: StoryObj<ButtonComponent> = {
  args: {
    appearance: '',
  },
  render: ({ disabled, appearance }) => ({
    template: `
      <button rhc-button [appearance]="'${appearance}'" [disabled]="${disabled}">
        <rhc-icon icon="kalender" /> Label
      </button>
    `,
    props: {
      appearance,
      disabled,
    },
    moduleMetadata: {
      imports: [IconComponent],
    },
  }),
  name: 'Icon Left',
};

export const IconRight: StoryObj<ButtonComponent> = {
  args: {
    appearance: 'primary-action',
  },
  render: ({ disabled, appearance }) => ({
    template: `
      <button rhc-button [appearance]="'${appearance}'" [disabled]="${disabled}">
        Label <rhc-icon icon="pijl-naar-rechts" />
      </button>
    `,
    props: {
      appearance,
      disabled,
    },
    moduleMetadata: {
      imports: [IconComponent],
    },
  }),
  name: 'Icon Right',
};

export const IconOnly: StoryObj<ButtonComponent> = {
  args: {
    appearance: 'subtle',
  },
  render: ({ disabled, appearance }) => ({
    template: `
      <button rhc-button [appearance]="'${appearance}'" [disabled]="${disabled}">
        <rhc-icon icon="kalender" />
      </button>
    `,
    props: {
      appearance,
      disabled,
    },
    moduleMetadata: {
      imports: [IconComponent],
    },
  }),
  name: 'Icon Only',
};
