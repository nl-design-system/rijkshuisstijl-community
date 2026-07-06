import { Footer, Icon, Link, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './footer.md?raw';

const meta = {
  title: 'Footer',
  id: 'rhc-footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma and NL DesignSystem links
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/footer-react/src/Footer.tsx',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam PageFooter), met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
  argTypes: {
    tagline: {
      description: 'Optionele decoratieve tekst in de footer, standaard cursief.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },

    appearanceLevel: {
      description: 'Het uiterlijk van de headings boven de kolommen in de footer.',
      defaultValue: 4,
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      table: {
        type: { summary: 'number' },
      },
    },

    preFooter: {
      description: 'Het balkje die boven de footer wordt getoond.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },

    preFooterMessage: {
      description: 'De tekst die in het balkje boven de footer wordt getoond.',
      defaultValue: '',
      control: { type: 'text' },
      if: { arg: 'preFooter', eq: true },
      table: {
        type: { summary: 'string' },
      },
    },

    variant: {
      description:
        'De variant van de Page Footer. De compacte variant toont alleen de tagline en de links uit children, voor pagina’s met een sterke taakfocus; de overige props (heading, columns, subFooter, backtotop, preFooter) hebben daar geen effect.',
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['default', 'compact'],
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

function _toLinkList(items: string[]) {
  return (
    <LinkList>
      {items.map((item) => (
        <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />} key={item}>
          {item}
        </LinkListLink>
      ))}
    </LinkList>
  );
}

export const DefaultFooter: Story = {
  args: {
    heading: 'Colofon',
    tagline: 'Footer tagline',
    preFooter: false,
    columns: [
      {
        heading: 'Service',
        children: _toLinkList(['Contact', 'Abonneren', 'RSS', 'Vacatures', 'Sitemap', 'Help', 'Archief']),
      },
      {
        heading: 'Over deze site',
        children: _toLinkList(['Over deze organisatie', 'Wetten en regelingen', 'Copyright', 'Open data']),
      },
    ],
    subFooter: (
      <LinkList>
        <LinkListLink href="#">Kwetsbaarheid melden</LinkListLink>
        <LinkListLink href="#">Toegankelijkheid</LinkListLink>
        <LinkListLink href="#">Privacy</LinkListLink>
        <LinkListLink href="#">Cookies</LinkListLink>
      </LinkList>
    ),
  },
};

export const CompactFooter: Story = {
  args: {
    variant: 'compact',
    tagline: 'De rijksoverheid. Voor Nederland',
    children: (
      <>
        <Link href="#privacy">Privacy</Link>
        <Link href="#toegankelijkheid">Toegankelijkheid</Link>
        <Link href="#kwetsbaarheid-melden">Kwetsbaarheid melden</Link>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'De compacte variant van de Page Footer bevat alleen een tagline en enkele links. Gebruik deze wanneer de footer visueel naar de achtergrond mag treden, zoals bij formulieren of andere pagina’s met een sterke taakfocus. De tagline is gewone tekst en bewust geen Heading component: het is geen kop in de documentstructuur.',
      },
    },
  },
};
