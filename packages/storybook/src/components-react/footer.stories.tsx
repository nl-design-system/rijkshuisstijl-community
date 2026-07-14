import {
  ColumnLayout,
  Footer,
  Icon,
  Link,
  LinkList,
  LinkListLink,
  Paragraph,
} from '@rijkshuisstijl-community/components-react';
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
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Footer.tsx',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam PageFooter), met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
  argTypes: {
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
        'De variant van de Page Footer. De compacte variant toont alleen de tagline en de links uit children, voor pagina’s met een sterke taakfocus; de overige props (heading, columns, background, subFooter, backtotop, preFooter) hebben daar geen effect.',
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
        <LinkListLink href="#" icon={<Icon icon={'chevron-right'} />}>
          {item}
        </LinkListLink>
      ))}
    </LinkList>
  );
}

export const DefaultFooter: Story = {
  args: {
    tagline: 'Footer tagline',
    appearanceLevel: 3,
    background: 'primary-filled',
    backtotop: true,
    preFooter: false,
    subFooter: (
      <LinkList>
        <LinkListLink href="#">Privacy</LinkListLink>
      </LinkList>
    ),
    columns: [
      {
        heading: 'Service',
        appearanceLevel: 3,
        children: _toLinkList(['Contact', 'Abonneren', 'RSS', 'Vacatures', 'Sitemap', 'Help', 'Archief']),
      },
      {
        heading: 'Over deze site',
        appearanceLevel: 3,
        children: (
          <>
            <Paragraph>Een behulpzame paragraaf.</Paragraph>
            {_toLinkList([
              'Over deze organisatie',
              'Wetten en regelingen',
              'Copyright',
              'Privacy',
              'Cookies',
              'Toegankelijkheid',
              'Open data',
              'Kwetsbaarheid melden',
            ])}
          </>
        ),
      },
    ],
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

export const PrimaryOutlinedFooter: Story = {
  args: {
    tagline: 'Footer tagline',
    appearanceLevel: 3,
    background: 'primary-outlined',
    preFooterMessage: '',
    preFooter: true,

    children: (
      <ColumnLayout>
        <Paragraph>Een behulpzame paragraaf.</Paragraph>
        {_toLinkList([
          'Over deze organisatie',
          'Wetten en regelingen',
          'Copyright',
          'Privacy',
          'Cookies',
          'Toegankelijkheid',
          'Open data',
          'Kwetsbaarheid melden',
        ])}
      </ColumnLayout>
    ),
  },
};

export const PrimaryOutlinedFooterSubFooter: Story = {
  args: {
    tagline: 'Footer tagline',
    appearanceLevel: 3,
    background: 'primary-outlined',
    preFooterMessage: 'Kwaliteit, vertrouwen en duurzaamheid',
    preFooter: true,
    subFooter: (
      <LinkList className="rhc-subfooter-details">
        <LinkListLink href="#">Privacy</LinkListLink>
      </LinkList>
    ),
    children: (
      <ColumnLayout>
        <Paragraph>Een behulpzame paragraaf.</Paragraph>
        {_toLinkList([
          'Over deze organisatie',
          'Wetten en regelingen',
          'Copyright',
          'Privacy',
          'Cookies',
          'Toegankelijkheid',
          'Open data',
          'Kwetsbaarheid melden',
        ])}
      </ColumnLayout>
    ),
  },
};

export const ColumnLayoutFooter: Story = {
  args: {
    tagline: 'Footer tagline',
    appearanceLevel: 3,
    background: 'primary-filled',
    children: (
      <ColumnLayout>
        <Paragraph>Een behulpzame paragraaf.</Paragraph>
        {_toLinkList([
          'Over deze organisatie',
          'Wetten en regelingen',
          'Copyright',
          'Privacy',
          'Cookies',
          'Toegankelijkheid',
          'Open data',
          'Kwetsbaarheid melden',
        ])}
      </ColumnLayout>
    ),
  },
};

export const CustomHeadingFooter: Story = {
  args: {
    background: 'primary-filled',
    columns: [
      {
        heading: 'First heading',
        appearanceLevel: 3,
        children: _toLinkList(['List item 1', 'List item 2', 'List item 3']),
      },
      {
        heading: 'Second heading',
        appearanceLevel: 3,
        children: _toLinkList(['List item 1', 'List item 2', 'List item 3']),
      },
      {
        heading: 'Third heading',
        appearanceLevel: 3,
        children: _toLinkList(['List item 1', 'List item 2', 'List item 3']),
      },
      {
        heading: 'Fourth heading',
        appearanceLevel: 3,
        children: _toLinkList(['List item 1', 'List item 2', 'List item 3']),
      },
    ],
  },
};
