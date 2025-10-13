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
  title: 'Link List',
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
            ${hasIcons ? `<rhc-icon icon><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="tabler-icon tabler-icon-chevron-right "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></rhc-icon>` : ''}
            Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
          </a>
        </li>
        <li rhc-link-list-item>
          <a rhc-link-list-link href="#">
            ${hasIcons ? `<rhc-icon icon><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="tabler-icon tabler-icon-chevron-right "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></rhc-icon>` : ''}
            Link 2
          </a>
        </li>
        <li rhc-link-list-item>
          <a rhc-link-list-link href="#">
            ${hasIcons ? `<rhc-icon icon><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="tabler-icon tabler-icon-chevron-right "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></rhc-icon>` : ''}
            Link 3
          </a>
        </li>
      </rhc-link-list>
    `,
  }),
};

export default meta;

export const Default: StoryObj<LinkListComponent> = {};

export const ColumnsLayout: StoryObj<LinkListComponent> = {
  render: () => ({
    template: `
    <rhc-column-layout>
      <rhc-link-list>
        <li rhc-link-list-item>
          <a rhc-link-list-link href="#">
            <rhc-icon icon><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="tabler-icon tabler-icon-chevron-right "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></rhc-icon>
            Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
          </a>
        </li>
        <li rhc-link-list-item>
          <a rhc-link-list-link href="#">
            <rhc-icon icon><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="tabler-icon tabler-icon-chevron-right "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></rhc-icon>
            Link 2
          </a>
        </li>
        <li rhc-link-list-item>
          <a rhc-link-list-link href="#">
            <rhc-icon icon><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="tabler-icon tabler-icon-chevron-right "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></rhc-icon>
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
