import { Quote } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './quote.md?raw';

const meta = {
  title: 'Quote',
  id: 'rhc-quote',
  component: Quote,
  argTypes: {
    heading: {
      name: 'heading',
      control: { type: 'text' },
    },
    headingLevel: {
      name: 'headingLevel',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    headingAppearanceLevel: {
      name: 'headingAppearanceLevel',
      control: { type: 'select' },
      options: [undefined, 1, 2, 3, 4, 5, 6],
    },
  },
  args: {
    heading: 'Zorgboerderij',
    children:
      'Christiaan runt samen met zijn vrouw een zorgboerderij. Op het erf stond nog een oude varkensschuur. Leeg, vervallen en vol met asbest. Christiaan besloot die flinke klus aan te pakken.',
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
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/quote-react/src/Quote.tsx',
  },
} as Meta<typeof Quote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ZonderKop: Story = {
  name: 'Zonder kop',
  args: {
    heading: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'De kop is optioneel. Laat `heading` weg om alleen de bodytekst te tonen.',
      },
    },
  },
};
