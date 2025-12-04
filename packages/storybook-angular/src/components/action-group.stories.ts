import type { Meta, StoryObj } from '@storybook/angular';
import readme from './action-group.md';
import { ActionGroupComponent, ButtonComponent } from '../../../components-angular/src/public-api';
import usageDocs from '../../../storybook/src/components-react/action-group.md';
import { mergeMarkdown, replaceMarkdown } from '../../../storybook-tooling/src/markdownUtils';

const meta: Meta<ActionGroupComponent> = {
  title: 'Action Group',
  id: 'rhc-angular-action-group',
  component: ActionGroupComponent,
  argTypes: {
    direction: {
      description: 'Layout of the action group',
      control: 'select',
      options: ['column', 'row', 'column-stretch'],
    },
  },
  args: {
    direction: 'column',
  },
  parameters: {
    docs: {
      description: {
        component: replaceMarkdown(mergeMarkdown([readme, usageDocs]), 'Button Group', 'Action Group'),
      },
    },
    nldesignsystem: 'https://www.nldesignsystem.nl/action-group/',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/ActionGroup.tsx',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=4626-10492&p=f&t=MHYw4lXBHCryrwek-0',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community.',
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
};

export const Column: StoryObj<ActionGroupComponent> = {
  args: {
    direction: 'column',
  },
};

export const ColumnStretch: StoryObj<ActionGroupComponent> = {
  args: {
    direction: 'column-stretch',
  },
};
