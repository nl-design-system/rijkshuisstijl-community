import { Footer, Icon, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
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
    tagline: 'De Rijksoverheid. Voor Nederland',
    preFooter: false,
    columns: [
      {
        heading: 'Link group 1',
        children: _toLinkList(['Contact', 'Abonneren', 'RSS', 'Vacatures', 'Sitemap']),
      },
      {
        heading: 'Link group 2',
        children: _toLinkList(['Contact', 'Abonneren', 'RSS', 'Vacatures', 'Sitemap']),
      },
      {
        heading: 'Link group 3',
        children: _toLinkList(['Contact', 'Abonneren', 'RSS', 'Vacatures', 'Sitemap']),
      },
      {
        heading: 'Link group 4',
        children: _toLinkList(['Contact', 'Abonneren', 'RSS', 'Vacatures', 'Sitemap']),
      },
    ],
    subFooter: (
      <LinkList>
        <LinkListLink href="#">Contact</LinkListLink>
        <LinkListLink href="#">Privacy</LinkListLink>
        <LinkListLink href="#">Cookies en anti-spam</LinkListLink>
        <LinkListLink href="#">Toegankelijkheid</LinkListLink>
        <LinkListLink href="#">Proclaimer</LinkListLink>
      </LinkList>
    ),
  },
};
