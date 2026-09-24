import TwigQuote from '@rijkshuisstijl-community/components-twig/src/Quote.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/quote.md?raw';

const meta = {
  title: 'Quote',
  id: 'rhc-twig-quote',
  component: TwigQuote,
  argTypes: {
    heading: {
      description: 'string',
      control: { type: 'text' },
    },
    headingLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/v3UHyBH1FmWRhik0LyCEuf/%F0%9F%8E%A8-MinAZ-%7C-Rijkshuisstijl-Uitbreiding-Digitale-Richtlijnen?node-id=5941-84595',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Quote.twig',
  },
} satisfies Meta<typeof TwigQuote>;

export default meta;

export const TwigQuoteDefault: StoryObj<typeof meta> = {
  args: {
    heading: 'Zorgboerderij',
    children:
      'Christiaan runt samen met zijn vrouw een zorgboerderij. Op het erf stond nog een oude varkensschuur. Leeg, vervallen en vol met asbest. Christiaan besloot die flinke klus aan te pakken.',
  },
  name: 'Default',
};
