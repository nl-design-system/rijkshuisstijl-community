import type { Meta, StoryObj } from '@storybook/angular';
import readme from './button.md';
import { ButtonComponent, IconComponent } from '../../../components-angular/src/public-api';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
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
};

export const Primary: StoryObj<ButtonComponent> = {
  args: {
    appearance: 'primary-action',
  },
};

export const Secondary: StoryObj<ButtonComponent> = {
  args: {
    appearance: 'secondary-action',
  },
};

export const Subtle: StoryObj<ButtonComponent> = {
  args: {
    appearance: 'subtle',
  },
};

export const IconLeft: StoryObj<ButtonComponent> = {
  args: {
    appearance: '',
  },
  render: ({ disabled, appearance }) => ({
    template: `
      <button rhc-button [appearance]="'${appearance}'" [disabled]="${disabled}">
        <rhc-icon>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M15 19l2 2l4 -4" /></svg>
        </rhc-icon> Label
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
};

export const IconRight: StoryObj<ButtonComponent> = {
  args: {
    appearance: 'primary-action',
  },
  render: ({ disabled, appearance }) => ({
    template: `
      <button rhc-button [appearance]="'${appearance}'" [disabled]="${disabled}">
        Label <rhc-icon><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg></rhc-icon>
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
};

export const IconOnly: StoryObj<ButtonComponent> = {
  args: {
    appearance: 'subtle',
  },
  render: ({ disabled, appearance }) => ({
    template: `
      <button rhc-button [appearance]="'${appearance}'" [disabled]="${disabled}">
                <rhc-icon>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M15 19l2 2l4 -4" /></svg>
        </rhc-icon> 
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
};
