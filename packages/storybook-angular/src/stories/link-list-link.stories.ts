import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import {
  IconComponent,
  LinkListItemComponent,
  LinkListLinkComponent,
} from '../../../components-angular/src/public-api';

type StoryType = LinkListLinkComponent & { label?: string };

const meta: Meta<StoryType> = {
  title: 'Rijkshuisstijl-angular/Link List/Link list link',
  id: 'rhc-angular-link-list-link',
  component: LinkListLinkComponent,
  decorators: [
    moduleMetadata({
      imports: [IconComponent, LinkListItemComponent, LinkListLinkComponent],
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
  render: ({ href, label }) => ({
    template: `
    <rhc-link-list>
      <li rhc-link-list-item>
        <a rhc-link-list-link href="${href}">
          <rhc-icon icon='chevron-right' />
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
