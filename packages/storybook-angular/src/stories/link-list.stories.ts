import { IconComponent, LinkListComponent, LinkListLinkComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

const meta: Meta<LinkListComponent> = {
  title: 'Rijkshuisstijl-angular/Link list',
  id: 'rhc-angular-link-list',
  component: LinkListComponent,
  decorators: [
    moduleMetadata({
      imports: [LinkListLinkComponent, IconComponent],
    }),
  ],
  render: () => ({
    template: `
      <rhc-link-list>
        <rhc-link-list-link href="#">
          <rhc-icon icon='chevron-right' />
          Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
        </rhc-link-list-link>
        <rhc-link-list-link href="#">
          <rhc-icon icon='chevron-right' />
          Link 2</rhc-link-list-link>
        <rhc-link-list-link href="#">
          <rhc-icon icon='chevron-right' />
          Link 3
        </rhc-link-list-link>
      </rhc-link-list>
    `,
  }),
};

export default meta;

export const Default: StoryObj<LinkListComponent> = {
  name: 'Default',
};
