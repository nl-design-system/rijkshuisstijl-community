import {
  IconComponent,
  LinkListComponent,
  LinkListItemComponent,
  LinkListLinkComponent,
} from '@rijkshuisstijl-community/components-angular';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type StoryType = LinkListComponent & { hasIcons?: boolean };

const meta: Meta<StoryType> = {
  title: 'Rijkshuisstijl-angular/Link list',
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

// export const LinkListWithLinksViaInput: StoryObj<LinkListComponent> = {
//   render: () => ({
//     template: `
//     <rhc-link-list [linkListLinks]="[
//       { href: '#', label: 'Label 1', icon: 'chevron-right'},
//       { href: '#', label: 'Label 2', icon: 'instellingen'},
//       { href: '#', label: 'Label 3'},
//     ]">
//     </rhc-link-list>
//     `,
//   }),
// };
