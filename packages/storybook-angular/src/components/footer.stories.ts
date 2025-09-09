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
    appearanceLevel: {
      description: 'Het uiterlijk van de heading in de footer.',
      defaultValue: 3,
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: {
        type: { summary: 'number' },
      },
    },

    background: {
      description: 'De achtergrondkleur van de footer.',
      control: { type: 'select' },
      options: ['primary-filled', 'primary-outlined'],
      table: {
        type: { summary: 'string' },
      },
    },

    backtotop: {
      description: 'Toon de "Terug naar boven" knop.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
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
  },
  args: {
    heading: 'Heading',
    preFooter: true,
    preFooterMessage: 'Pre Footer Message',
    background: 'primary-filled',
    backtotop: true,
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ heading, background, backtotop, preFooter, preFooterMessage, appearanceLevel }) => ({
    template: `
      <footer rhc-footer
        [preFooter]="${preFooter}"
        [preFooterMessage]="'${preFooterMessage}'"
        [background]="'${background}'"
        [backtotop]="${backtotop}"
        [heading]="'${heading}'"
        [appearanceLevel] = "${appearanceLevel}"
      >
        <div class="rhc-page-footer__section" columns>
          <rhc-heading [level]="${heading ? 3 : 2}" [appearanceLevel]="${appearanceLevel}">
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
          <rhc-heading [level]="heading ? 3 : 2" [appearanceLevel]="${appearanceLevel}">
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
                  Privacy
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Cookies
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Open data
                </a>
              </li>
              <li rhc-link-list-item>
                <a rhc-link-list-link [href]="'#'" [attr.href]="'#'">
                  <rhc-icon icon><i-tabler name="chevron-right"/></rhc-icon>
                  Kwetsbaarheid melden
                </a>
              </li>                                   
          </rhc-link-list>
        </div>
      </footer>
    `,
    props: {
      heading,
      background,
      backtotop,
      preFooter,
      preFooterMessage,
    },
  }),
};

export default meta;

export const Default: StoryObj<FooterComponent> = {
  args: {},
};
