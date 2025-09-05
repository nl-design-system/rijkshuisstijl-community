import type { Meta, StoryObj } from '@storybook/angular';
import readme from './action-group.md';
import { ActionGroupComponent, ButtonComponent } from '../../../components-angular/src/public-api';

const meta: Meta<ActionGroupComponent> = {
  title: 'Action Group',
  id: 'rhc-angular-action-group',
  component: ActionGroupComponent,
  argTypes: {
    direction: {
      description: 'Layout of the action group',
      control: 'select',
      options: ['column', 'row'],
    },
  },
  args: {
    direction: 'column',
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ direction }) => ({
    template: `<rhc-action-group direction="${direction}">
        <button rhc-button appearance='primary-action'>
            Save and continue
        </button>
        <button rhc-button appearance='secondary-action'>
            Back
        </button>
    </rhc-action-group>`,
    props: {
      direction,
    },
    moduleMetadata: {
      imports: [ButtonComponent],
    },
  }),
};

export default meta;

export const Default: StoryObj<ActionGroupComponent> = {
  args: {
    direction: 'row',
  },
  name: 'Default',
};

export const Column: StoryObj<ActionGroupComponent> = {
  args: {
    direction: 'column',
  },
  name: 'Column',
};
