import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import readme from './link-list.md';
import {
  ColumnLayoutComponent,
  IconComponent,
  LinkListComponent,
  LinkListItemComponent,
  LinkListLinkComponent,
} from '../../../components-angular/src/public-api';

type StoryType = LinkListComponent & { hasIcons?: boolean };

const meta: Meta<StoryType> = {
  title: 'Rijkshuisstijl/Link list',
  id: 'rhc-angular-link-list',
  component: LinkListComponent,
  decorators: [
    moduleMetadata({
      imports: [LinkListLinkComponent, LinkListItemComponent, IconComponent],
    }),
  ],
  argTypes: {
    hasIcons: {
      description: 'Whether the links have an icon or not',
      type: { name: 'boolean' },
      table: { category: 'Demo only' },
    },
  },
  args: {
    hasIcons: true,
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ hasIcons }) => ({
    template: `
      <rhc-link-list>
        <li rhc-link-list-item>
          <a rhc-link-list-link href="#">
            ${hasIcons ? "<rhc-icon icon='chevron-right' />" : ''}
            Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
          </a>
        </li>
        <li rhc-link-list-item>
          <a rhc-link-list-link href="#">
            ${hasIcons ? "<rhc-icon icon='chevron-right' />" : ''}
            Link 2
          </a>
        </li>
        <li rhc-link-list-item>
          <a rhc-link-list-link href="#">
            ${hasIcons ? "<rhc-icon icon='chevron-right' />" : ''}
            Link 3
          </a>
        </li>
      </rhc-link-list>
    `,
  }),
};

export default meta;

export const Default: StoryObj<LinkListComponent> = {
  name: 'Default',
};

export const ColumnsLayout: StoryObj<LinkListComponent> = {
  name: 'Columns Layout',
  render: () => ({
    template: `
    <rhc-column-layout>
      <rhc-link-list>
        <li rhc-link-list-item>
          <a rhc-link-list-link href="#">
            <rhc-icon icon='chevron-right' />
            Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
          </a>
        </li>
        <li rhc-link-list-item>
          <a rhc-link-list-link href="#">
            <rhc-icon icon='chevron-right' />
            Link 2
          </a>
        </li>
        <li rhc-link-list-item>
          <a rhc-link-list-link href="#">
            <rhc-icon icon='chevron-right' />
            Link 3
          </a>
        </li>
      </rhc-link-list>
    </rhc-column-layout>
    `,
    moduleMetadata: {
      imports: [ColumnLayoutComponent],
    },
  }),
};
