import type { Meta, StoryObj } from '@storybook/angular';
import readme from './unordered-list.md';
import { UnorderedListComponent, UnorderedListItemComponent } from '../../../components-angular/src/public-api';

const meta: Meta<UnorderedListComponent> = {
  title: 'Unordered List',
  id: 'rhc-angular-unordered-list',
  component: UnorderedListComponent,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: () => ({
    template: `
    <ul rhc-unordered-list>
        <li rhc-unordered-list-item>List item 1</li>
        <li rhc-unordered-list-item>List item 2</li>
        <li rhc-unordered-list-item>List item 3</li>
    </ul>
    `,
    moduleMetadata: {
      imports: [UnorderedListItemComponent],
    },
  }),
};

export default meta;

export const Default: StoryObj<UnorderedListComponent> = {
  name: 'Default Unordered List',
};

export const Nested: StoryObj<UnorderedListComponent> = {
  name: 'Nested Unordered List',
  render: () => ({
    template: `
    <ul rhc-unordered-list>
        <li rhc-unordered-list-item>List item 1</li>
        <li rhc-unordered-list-item>
            List item 2
            <ul rhc-unordered-list [nested]="true">
                <li rhc-unordered-list-item>
                    Nested list item 1
                </li>
                <li rhc-unordered-list-item>Nested list item 2</li>
            </ul>
        </li>
        <li rhc-unordered-list-item>List item 3</li>
    </ul>
    `,
    moduleMetadata: {
      imports: [UnorderedListItemComponent],
    },
  }),
};
