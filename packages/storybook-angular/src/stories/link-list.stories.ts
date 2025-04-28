import { IconComponent, LinkListComponent, LinkListLinkComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type StoryType = LinkListComponent & { hasIcons?: boolean };

const meta: Meta<StoryType> = {
  title: 'Rijkshuisstijl-angular/Link list',
  id: 'rhc-angular-link-list',
  component: LinkListComponent,
  decorators: [
    moduleMetadata({
      imports: [LinkListLinkComponent, IconComponent],
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
  render: ({ hasIcons }) => ({
    template: `
      <rhc-link-list>
        <li rhc-link-list-link href="#">
          ${hasIcons ? "<rhc-icon icon='chevron-right' />" : ''}
          Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
        </li>
        <li rhc-link-list-link href="#">
          ${hasIcons ? "<rhc-icon icon='chevron-right' />" : ''}
          Link 2
        </li>
        <li rhc-link-list-link href="#">
          ${hasIcons ? "<rhc-icon icon='chevron-right' />" : ''}
          Link 3
        </li>
      </rhc-link-list>
    `,
  }),
};

export default meta;

export const Default: StoryObj<LinkListComponent> = {
  name: 'Default',
};

export const LinkListWithLinksViaInput: StoryObj<LinkListComponent> = {
  render: () => ({
    template: `
    <rhc-link-list [linkListLinks]="[
      { href: '#', label: 'Label 1', icon: 'chevron-right'},
      { href: '#', label: 'Label 2', icon: 'instellingen'},
      { href: '#', label: 'Label 3'},
    ]">
    </rhc-link-list>
    `,
  }),
};
