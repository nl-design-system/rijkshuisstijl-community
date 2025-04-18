import { LinkListLinkComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, type StoryObj } from '@storybook/angular';
import { provideTablerIcons, TablerIconComponent } from 'angular-tabler-icons';
import { IconChevronRight } from 'angular-tabler-icons/icons';

type StoryType = LinkListLinkComponent & { label?: string };

const meta: Meta<StoryType> = {
  title: 'Rijkshuisstijl-angular/Link list link',
  id: 'rhc-angular-link-list-link',
  component: LinkListLinkComponent,
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
      <rhc-link-list-link href="${href}">
        <tabler-icon icon name="chevron-right"></tabler-icon>
        ${label}
      </rhc-link-list-link>
    `,
    moduleMetadata: {
      imports: [TablerIconComponent],
      providers: [provideTablerIcons({ IconChevronRight })],
    },
  }),
};

export default meta;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};

export const NoIcon: StoryObj<StoryType> = {
  name: 'NoIcon',
  render: ({ href, label }) => ({
    template: `
      <rhc-link-list-link href="${href}">
        ${label}
      </rhc-link-list-link>
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
