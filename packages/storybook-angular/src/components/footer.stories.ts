import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { provideTablerIcons, TablerIconComponent } from 'angular-tabler-icons';
import { IconChevronRight } from 'angular-tabler-icons/icons';
import readme from './footer.md';
import {
  BackToTopComponent,
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
        BackToTopComponent,
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
    heading: 'Heading',
    preFooter: true,
    preFooterMessage: 'Pre Footer Message',
    background: 'primary-filled',
    subFooter: true,
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ heading, background, preFooter, preFooterMessage, appearanceLevel, subFooter }) => ({
    template: `
      <footer rhc-footer
        [preFooter]="${preFooter}"
        [preFooterMessage]="'${preFooterMessage}'"
        [background]="'${background}'"
        [heading]="'${heading}'"
        [appearanceLevel] = "${appearanceLevel}"
        [subFooter]="${subFooter}"
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
        <rhc-link-list subFooter></rhc-link-list>
        <rhc-back-to-top subFooter>
            Terug naar boven
            <rhc-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M16 9l-4 -4" />
                <path d="M8 9l4 -4" />
              </svg>
            </rhc-icon>
        </rhc-back-to-top>
      </footer>
    `,
    props: {
      heading,
      background,
      preFooter,
      preFooterMessage,
    },
  }),
};

export default meta;

export const Default: StoryObj<FooterComponent> = {
  args: {},
};
