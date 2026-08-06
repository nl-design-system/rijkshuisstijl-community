import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { provideTablerIcons, TablerIconComponent } from 'angular-tabler-icons';
import { IconChevronRight } from 'angular-tabler-icons/icons';
import readme from './footer.md';
import {
  FooterComponent,
  HeadingComponent,
  IconComponent,
  LinkListComponent,
  LinkListItemComponent,
  LinkListLinkComponent,
} from '../../../components-angular/src/public-api';

const meta: Meta<FooterComponent> = {
  title: 'Footer',
  id: 'rhc-angular-footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LinkListItemComponent,
        LinkListLinkComponent,
        LinkListComponent,
        HeadingComponent,
        TablerIconComponent,
        IconComponent,
      ],
      providers: [
        provideTablerIcons({
          IconChevronRight,
        }),
      ],
    }),
  ],
  argTypes: {
    heading: {
      description: 'Heading',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    tagline: {
      description: 'Optionele decoratieve tekst in de footer, standaard cursief.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },

    preFooter: {
      description: 'Het balkje die boven de footer wordt getoond.',
      defaultValue: false,
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },

    preFooterMessage: {
      description: 'De tekst die in het balkje boven de footer wordt getoond.',
      control: { type: 'text' },
      if: { arg: 'preFooter', eq: true },
      table: {
        type: { summary: 'string' },
      },
    },
    subFooter: {
      description: 'Het balkje die onder de footer wordt getoond.',
      defaultValue: true,
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    heading: 'Colofon',
    tagline: 'Footer tagline',
    preFooter: false,
    preFooterMessage: 'Pre Footer Message',
    subFooter: true,
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ heading, tagline, preFooter, preFooterMessage, subFooter }) => ({
    template: `
      <footer rhc-footer
        [preFooter]="${preFooter}"
        [preFooterMessage]="'${preFooterMessage}'"
        ${heading ? `[heading] = "'${heading}'"` : ''}
        ${tagline ? `[tagline] = "'${tagline}'"` : ''}
        [subFooter]="${subFooter}"
      >
        <div class="rhc-page-footer__section" columns>
          <rhc-heading [level]="${heading ? 3 : 2}" [appearanceLevel]="4">
            Service
          </rhc-heading>
            <rhc-link-list>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Contact
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Abonneren
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  RSS
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Vacatures
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Sitemap
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Help
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Archief
                </a>
              </li>
          </rhc-link-list>
        </div>
        <div class="rhc-page-footer__section" columns>
          <rhc-heading [level]="${heading ? 3 : 2}" [appearanceLevel]="4">
            Over deze site
          </rhc-heading>
          <rhc-link-list>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Over deze organisatie
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Wetten en regelingen
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Copyright
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Open data
                </a>
              </li>
          </rhc-link-list>
        </div>
        <rhc-link-list subFooter>
          <li rhc-link-list-item>
            <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">Kwetsbaarheid melden</a>
          </li>
          <li rhc-link-list-item>
            <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">Toegankelijkheid</a>
          </li>
          <li rhc-link-list-item>
            <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">Privacy</a>
          </li>
          <li rhc-link-list-item>
            <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">Cookies</a>
          </li>
        </rhc-link-list>
      </footer>
    `,
    props: {
      heading,
      preFooter,
      preFooterMessage,
    },
  }),
};

export default meta;

export const Default: StoryObj<FooterComponent> = {
  args: {},
};
