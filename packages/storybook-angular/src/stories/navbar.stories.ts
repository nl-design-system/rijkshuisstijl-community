import {
  EndItemDirective,
  HeadingItemDirective,
  IconComponent,
  NavbarComponent,
  NavbarItemComponent,
} from '@rijkshuisstijl-community/components-angular';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

const meta: Meta<NavbarComponent> = {
  title: 'Rijkshuisstijl-angular/Navbar',
  id: 'rhc-navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [NavbarItemComponent, HeadingItemDirective],
    }),
  ],
  argTypes: {
    showEndItems: {
      type: 'boolean',
    },
  },
  args: {
    showEndItems: false,
  },
  render: ({ showEndItems }) => ({
    template: `
    <rhc-navbar [showEndItems]="showEndItems">
        <li rhc-navbar-item href="#">
            Link
        </li>
        <li rhc-navbar-item href="#">
            Link
        </li>
        <li rhc-navbar-item href="#">
            Link
        </li>
        <li rhc-navbar-item rhcEndItem href="#">
            Link
        </li>
    </rhc-navbar>
    `,
    props: {
      showEndItems,
    },
  }),
};

export default meta;

export const Default: StoryObj<NavbarComponent> = {
  name: 'Default',
};

export const WithIcons: StoryObj<NavbarComponent> = {
  name: 'With Icons',
  render: () => ({
    template: `
    <rhc-navbar>
        <li rhc-navbar-item href="#">
            <rhc-icon icon="home" />
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon icon="zoek" />
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon icon="gegevensuitwisseling" />
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon icon="user" />
            Link
        </li>
    </rhc-navbar>
    `,
    moduleMetadata: {
      imports: [IconComponent],
    },
  }),
};

export const WithHeading: StoryObj<NavbarComponent> = {
  name: 'With Heading',
  render: () => ({
    template: `
    <rhc-navbar>
        <li rhc-navbar-item rhcHeadingItem href="#">
            Heading
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon icon="zoek" />
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon icon="gegevensuitwisseling" />
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon icon="user" />
            Link
        </li>
    </rhc-navbar>
    `,
    moduleMetadata: {
      imports: [IconComponent, HeadingItemDirective],
    },
  }),
};

export const WithEndItems: StoryObj<NavbarComponent> = {
  name: 'With End Items',
  render: () => ({
    template: `
    <rhc-navbar [showEndItems]="true">
        <li rhc-navbar-item href="#">
            <rhc-icon icon="home" />
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon icon="zoek" />
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon icon="gegevensuitwisseling" />
            Link
        </li>
        <li rhc-navbar-item rhcEndItem href="#">
            <rhc-icon icon="user" />
            Link
        </li>
        <li rhc-navbar-item rhcEndItem href="#">
            <rhc-icon icon="kalender" />
            Link
        </li>
    </rhc-navbar>
    `,
    moduleMetadata: {
      imports: [IconComponent, HeadingItemDirective, EndItemDirective],
    },
  }),
};
