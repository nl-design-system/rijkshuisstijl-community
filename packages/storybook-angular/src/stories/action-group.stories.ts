import { ActionGroupComponent } from '@rijkshuisstijl-community/components-angular';
import { ButtonComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<ActionGroupComponent> = {
  title: 'Rijkshuisstijl-angular/Action Group',
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
