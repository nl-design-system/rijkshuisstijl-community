import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import readme from './link-list-link.md';
import {
  IconComponent,
  LinkListComponent,
  LinkListItemComponent,
  LinkListLinkComponent,
} from '../../../components-angular/src/public-api';

type StoryType = LinkListLinkComponent & { label?: string };

const meta: Meta<StoryType> = {
  title: 'Link List/Link list link',
  id: 'rhc-angular-link-list-link',
  component: LinkListLinkComponent,
  decorators: [
    moduleMetadata({
      imports: [IconComponent, LinkListItemComponent, LinkListLinkComponent, LinkListComponent],
    }),
  ],
  argTypes: {
    href: {
      type: { name: 'string', required: true },
      table: {
        category: 'Input attributes',
      },
    },
    label: {
      type: { name: 'string' },
    },
  },
  args: {
    href: '#',
    label: 'Label',
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ href, label }) => ({
    template: `
    <rhc-link-list>
      <li rhc-link-list-item>
        <a rhc-link-list-link href="${href}">
          <rhc-icon icon>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="tabler-icon tabler-icon-chevron-right "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
          </rhc-icon>
          ${label}
        </a>
      </li>
    </rhc-link-list>
    `,
  }),
};

export default meta;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};

export const NoIcon: StoryObj<StoryType> = {
  name: 'No Icon',
  render: ({ href, label }) => ({
    template: `
    <rhc-link-list>
      <li rhc-link-list-item>
        <a rhc-link-list-link href="${href}">
          ${label}
        </a>
      </li>
    </rhc-link-list>
    `,
  }),
};

export const Hover: StoryObj<StoryType> = {
  parameters: {
    pseudo: { hover: true },
  },
  name: 'Hover',
};

export const Active: StoryObj<StoryType> = {
  parameters: {
    pseudo: { active: true },
  },
  name: 'Active',
};

export const Focus: StoryObj<StoryType> = {
  parameters: {
    pseudo: { focus: true },
  },
  name: 'Focus',
};

export const Visited: StoryObj<StoryType> = {
  parameters: {
    pseudo: { visited: true },
  },
  name: 'Visited',
};
