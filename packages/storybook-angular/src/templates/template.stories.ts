import { IconComponent, NavbarComponent, NavbarItemComponent } from '@rijkshuisstijl-community/components-angular';
import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Templates/helloworld',
  id: 'rhc-angular-helloworld',
  render: () => ({
    moduleMetadata: {
      imports: [NavbarComponent, NavbarItemComponent, IconComponent],
    },
    template: `
    <rhc-navbar [showEndItems]="true">
        <li rhc-navbar-item href="#">
            <rhc-icon icon="home" />
            Uw overzicht
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon icon="zoek" />
            Boete zoeken
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon icon="currency-euro" />
            Betalingsregeling
        </li>
        <li rhc-navbar-item rhcEndItem href="#">
          <rhc-icon icon="user" />
          Uitloggen
        </li>
      </rhc-navbar>
    `,
  }),
  parameters: {
    docs: {
      page: null,
    },
    isPage: true,
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj = {};
