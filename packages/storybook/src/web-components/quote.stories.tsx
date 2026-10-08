import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { QuoteWebComponent } from '@rijkshuisstijl-community/web-components';
import { Meta, StoryObj } from '@storybook/web-components-vite';
import readme from '../components-react/quote.md?raw';

QuoteWebComponent.define();

const meta = {
  title: 'Quote',
  id: 'rhc-quote-web',
  component: 'rhc-quote',
  argTypes: {
    heading: {
      name: 'heading',
      control: { type: 'text' },
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
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/Quote.tsx',
  },
} as Meta<typeof QuoteWebComponent>;

export default meta;

export const Default = {} as StoryObj<typeof meta>;
