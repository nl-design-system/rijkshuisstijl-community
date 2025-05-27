import { LinkComponent, ParagraphComponent } from '@rijkshuisstijl-community/components-angular';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

const meta: Meta<LinkComponent> = {
  decorators: [
    moduleMetadata({
      imports: [ParagraphComponent],
    }),
  ],
  title: 'Rijkshuisstijl/Link',
  id: 'rhc-angular-link',
  component: LinkComponent,
  argTypes: {
    href: {
      description: 'Link href',
      control: { type: 'text' },
      required: true,
    },
  },
  args: {
    href: 'https://nldesignsystem.nl/',
  },
  render: ({ href }) => ({
    template: `<rhc-link [href]="'${href}'" >
    NL-Design System
    </rhc-link>`,
    props: {
      href,
    },
  }),
};

export default meta;

export const Default: StoryObj<LinkComponent> = {};

export const InAParagraph: StoryObj<LinkComponent> = {
  args: {
    href: 'https://nldesignsystem.nl/project/over-nl-design-system/',
  },
  render: ({ href }) => ({
    template: `
    <rhc-paragraph>
        NL Design System maakt toegankelijk, inclusief en gebruiksvriendelijk ontwikkelen makkelijk. Op deze pagina lees je meer over wat dat technisch betekent. Voor meer informatie over het project zelf, zie
        <rhc-link [href]="'${href}'" >Over NL-Design System</rhc-link>.
    </rhc-paragraph>`,
    props: {
      href,
    },
  }),
};
