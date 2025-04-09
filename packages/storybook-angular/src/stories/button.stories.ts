import { ButtonComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';

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
  render: ({ disabled, appearance }) => ({
    template: `<rhc-button [appearance]="'${appearance}'" [disabled]="${disabled}">Submit</rhc-button>`,
    props: {
      appearance,
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

// export const Heading2: StoryObj<HeadingComponent> = {
//   args: {
//     level: 2,
//   },
//   name: 'Heading 2',
// };

// export const Heading3: StoryObj<HeadingComponent> = {
//   args: {
//     level: 3,
//   },
//   name: 'Heading 3',
// };

// export const Heading4: StoryObj<HeadingComponent> = {
//   args: {
//     level: 4,
//   },
//   name: 'Heading 4',
// };

// export const Heading5: StoryObj<HeadingComponent> = {
//   args: {
//     level: 5,
//   },
//   name: 'Heading 5',
// };

// export const AppearanceLevel1: StoryObj<HeadingComponent> = {
//   args: {
//     level: 5,
//     appearanceLevel: 1,
//   },
//   name: 'Appearance Level 1',
// };
