import { LinkListComponent, LinkListLinkComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { provideTablerIcons, TablerIconComponent } from 'angular-tabler-icons';
import { IconChevronRight } from 'angular-tabler-icons/icons';

const meta: Meta<LinkListComponent> = {
  title: 'Rijkshuisstijl-angular/Link list',
  id: 'rhc-angular-link-list',
  component: LinkListComponent,
  decorators: [
    moduleMetadata({
      imports: [LinkListLinkComponent],
    }),
  ],
  render: () => ({
    template: `
      <rhc-link-list>
        <rhc-link-list-link>
          <tabler-icon icon name="chevron-right"></tabler-icon>
          Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
        </rhc-link-list-link>
        <rhc-link-list-link>
          <tabler-icon icon name="chevron-right"></tabler-icon>
          Link 2</rhc-link-list-link>
        <rhc-link-list-link>
          <tabler-icon icon name="chevron-right"></tabler-icon>
          Link 3
        </rhc-link-list-link>
      </rhc-link-list>
    `,
    moduleMetadata: {
      imports: [TablerIconComponent],
      providers: [provideTablerIcons({ IconChevronRight })],
    },
  }),
};

export default meta;

export const Default: StoryObj<LinkListComponent> = {
  name: 'Default',
};
