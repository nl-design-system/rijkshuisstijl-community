import {
  EndItemDirective,
  HeadingItemDirective,
  IconComponent,
  NavbarComponent,
  NavbarItemComponent,
} from '@rijkshuisstijl-community/components-angular';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { provideTablerIcons, TablerIconComponent } from 'angular-tabler-icons';
import { IconCalendarCheck, IconHome, IconSearch, IconTransfer, IconUser } from 'angular-tabler-icons/icons';
import readme from './navbar.md';

const meta: Meta<NavbarComponent> = {
  title: 'Rijkshuisstijl/Navbar',
  id: 'rhc-navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [NavbarItemComponent, HeadingItemDirective, TablerIconComponent],
      providers: [
        provideTablerIcons({
          IconHome,
          IconUser,
          IconSearch,
          IconCalendarCheck,
          IconTransfer,
        }),
      ],
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
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
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
            <rhc-icon>
              <i-tabler name="home"/>
            </rhc-icon>
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon>
              <i-tabler name="search"/>
            </rhc-icon>
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon>
              <i-tabler name="transfer"/>
            </rhc-icon>
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon>
              <i-tabler name="user"/>
            </rhc-icon>
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
            <rhc-icon>
              <i-tabler name="search"/>
            </rhc-icon>
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon>
              <i-tabler name="transfer"/>
            </rhc-icon>
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon>
              <i-tabler name="user"/>
            </rhc-icon>
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
            <rhc-icon>
              <i-tabler name="home"/>
            </rhc-icon>
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon>
              <i-tabler name="search"/>
            </rhc-icon>
            Link
        </li>
        <li rhc-navbar-item href="#">
            <rhc-icon>
              <i-tabler name="transfer"/>
            </rhc-icon>
            Link
        </li>
        <li rhc-navbar-item rhcEndItem href="#">
            <rhc-icon>
              <i-tabler name="user"/>
            </rhc-icon>
            Link
        </li>
        <li rhc-navbar-item rhcEndItem href="#">
            <rhc-icon>
              <i-tabler name="calendar-check"/>
            </rhc-icon>
            Link
        </li>
    </rhc-navbar>
    `,
    moduleMetadata: {
      imports: [IconComponent, HeadingItemDirective, EndItemDirective],
    },
  }),
};
