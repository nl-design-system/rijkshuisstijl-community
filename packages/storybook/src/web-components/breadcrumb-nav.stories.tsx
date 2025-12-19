import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { BreadcrumbNavWebComponent } from '@rijkshuisstijl-community/web-components';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/components/breadcrumb-nav/README.md?raw';
import { createElement } from 'react';

BreadcrumbNavWebComponent.define();

const BreadcrumbNavWrapper = ({ elements }: any) => {
  return createElement('rhc-breadcrumb-nav', {
    elements: JSON.stringify(elements),
  });
};

const meta = {
  title: 'Breadcrumb Navigation',
  id: 'rhc-breadcrumb-nav-web',
  component: BreadcrumbNavWrapper,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1862-9575&t=YSjs9i2uQ5Eq3wto-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/BreadcrumbNav.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/breadcrumb-navigation/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof BreadcrumbNavWebComponent>;

export default meta;

export const Default = {
  args: {
    elements: [
      {
        type: 'LINK',
        href: 'https://example.com/',
        index: 0,
        key: 'home',
        rel: 'home',
        text: 'Home',
      },
      {
        type: 'LINK',
        href: 'https://example.com/search',
        index: 1,
        key: 'search',
        rel: 'up',
        text: 'Zoeken',
      },
      {
        type: 'LINK',
        href: 'https://example.com/example',
        index: 2,
        key: 'example',
        rel: 'first',
        text: 'Example',
      },
    ],
  },
} as StoryObj<typeof meta>;

export const Current = {
  args: {
    elements: [
      {
        type: 'LINK',
        href: 'https://example.com/',
        index: 0,
        key: 'home',
        rel: 'home',
        text: 'Home',
      },
      {
        type: 'LINK',
        href: 'https://example.com/search',
        index: 1,
        key: 'search',
        rel: 'up',
        text: 'Zoeken',
      },
      {
        type: 'LINK',
        href: 'https://example.com/example',
        index: 2,
        key: 'example',
        rel: 'first',
        text: 'Example',
        current: 'true',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `For accessibility specify the \`current\` property, to render \`aria-current="page"\`.`,
      },
    },
  },
} as StoryObj<typeof meta>;

export const Separator = {
  args: {
    elements: [
      {
        type: 'LINK',
        href: '/',
        index: 0,
        key: 'home',
        rel: 'home',
        text: 'Home',
      },
      {
        type: 'SEPARATOR',
        key: 'icon',
        icon: 'chevron-right',
      },
      {
        type: 'LINK',
        href: 'https://example.com/search',
        index: 1,
        key: 'search',
        rel: 'up',
        text: 'Zoeken',
      },
      {
        type: 'SEPARATOR',
        key: 'icon',
        icon: 'chevron-right',
      },
      {
        type: 'LINK',
        href: 'https://example.com/example',
        index: 2,
        key: 'example',
        rel: 'first',
        text: 'Example',
        current: 'true',
      },
    ],
  },
} as StoryObj<typeof meta>;

export const Active = {
  args: {
    elements: [
      {
        type: 'LINK',
        href: 'https://example.com/',
        index: 0,
        key: 'home',
        rel: 'home',
        text: 'Home',
      },
      {
        type: 'LINK',
        href: 'https://example.com/search',
        index: 1,
        key: 'search',
        rel: 'up',
        text: 'Zoeken',
      },
      {
        type: 'LINK',
        href: 'https://example.com/example',
        index: 2,
        key: 'example',
        text: 'Example',
        active: 'true',
        current: 'true',
      },
    ],
  },
} as StoryObj<typeof meta>;

export const DisabledAndCurrent = {
  args: {
    elements: [
      {
        type: 'LINK',
        href: 'https://example.com/',
        index: 0,
        key: 'home',
        rel: 'home',
        text: 'Home',
      },
      {
        type: 'LINK',
        href: 'https://example.com/search',
        index: 1,
        key: 'search',
        rel: 'up',
        text: 'Zoeken',
      },
      {
        type: 'LINK',
        href: 'https://example.com/example',
        index: 2,
        key: 'example',
        text: 'Example',
        active: 'true',
        disabled: 'true',
      },
    ],
  },
} as StoryObj<typeof meta>;
