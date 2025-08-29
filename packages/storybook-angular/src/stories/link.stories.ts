import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import readme from './link.md';
import { IconComponent, LinkComponent, ParagraphComponent } from '../../../components-angular/src/public-api';

const meta: Meta<LinkComponent> = {
  decorators: [
    moduleMetadata({
      imports: [ParagraphComponent, IconComponent],
    }),
  ],
  title: 'Link',
  id: 'rhc-angular-link',
  component: LinkComponent,
  argTypes: {
    href: {
      description: 'Waar de link naartoe leidt',
      control: { type: 'text' },
      required: true,
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top', '_unfencedTop'],
    },
    inline: {
      type: 'boolean',
      description: 'Of de link onderdeel uitmaakt van lopende tekst',
    },
  },
  args: {
    href: 'https://nldesignsystem.nl/',
    target: '_self',
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ href, target }) => ({
    template: `<rhc-paragraph><rhc-link [href]="'${href}'" [target]="${target}">
    NL-Design System
    </rhc-link></rhc-paragraph>`,
    props: {
      href,
      target,
    },
  }),
};

export default meta;

export const Default: StoryObj<LinkComponent> = {};

export const LinkInParagraph: StoryObj<LinkComponent> = {
  args: {
    href: 'https://nldesignsystem.nl/project/over-nl-design-system/',
  },
  render: ({ href }) => ({
    template: `
    <rhc-paragraph>
        NL Design System maakt toegankelijk, inclusief en gebruiksvriendelijk ontwikkelen makkelijk. Op <rhc-link [href]="'${href}'" inline="true">deze pagina</rhc-link> lees je meer over wat dat technisch betekent. Voor meer informatie over het project zelf, zie ook
        <rhc-link [href]="'${href}'" inline="true"><rhc-icon icon='home' />Over NL-Design System</rhc-link>.
    </rhc-paragraph>`,
    props: {
      href,
    },
  }),
};
