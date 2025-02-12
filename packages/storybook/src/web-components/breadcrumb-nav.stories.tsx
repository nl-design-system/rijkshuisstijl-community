// import { BreadcrumbNavLink, BreadcrumbNavSeparator, Icon } from '@rijkshuisstijl-community/components-react';
import {
  BreadcrumbNavLinkWebComponent,
  BreadcrumbNavSeparatorWebComponent,
  BreadcrumbNavWebComponent,
  IconWebComponent,
} from '@rijkshuisstijl-community/web-components';
import { Meta, StoryObj } from '@storybook/web-components';
import readme from '@utrecht/components/breadcrumb-nav/README.md?raw';
import { createElement } from 'react';
import { mergeMarkdown } from '../../helpers/merge-markdown';

BreadcrumbNavWebComponent.define();
BreadcrumbNavLinkWebComponent.define();
BreadcrumbNavSeparatorWebComponent.define();
IconWebComponent.define();

const meta = {
  title: 'Web Components/Breadcrumb navigation',
  id: 'rhc-breadcrumb-nav-web',
  component: 'rhc-breadcrumb-nav',
  argTypes: {},
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1862-9575&t=YSjs9i2uQ5Eq3wto-0',
    github: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues/443',
    nldesignsystem: 'https://www.nldesignsystem.nl/breadcrumb-navigation/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof BreadcrumbNavWebComponent>;

export default meta;

export const Default = {
  args: {
    children: [
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: 'https://example.com/',
          index: 0,
          key: 'home',
          rel: 'home',
        },
        'Home',
      ),
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: 'https://example.com/search',
          index: 1,
          key: 'search',
          rel: 'up',
        },
        'Zoeken',
      ),
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: 'https://example.com/example',
          index: 2,
          key: 'example',
          rel: 'first',
        },
        'Example',
      ),
    ],
  },
} as StoryObj<typeof meta>;

export const Current = {
  args: {
    children: [
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/',
          index: 0,
          key: 'home',
          rel: 'home',
        },
        'Home',
      ),
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/a/',
          index: 1,
          key: 'label',
        },
        'Label',
      ),
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/a/b',
          index: 2,
          key: 'label-2',
          current: 'true',
        },
        'Label',
      ),
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
    children: [
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/',
          index: 0,
          key: 'home',
          rel: 'home',
        },
        'Home',
      ),
      createElement(
        'rhc-breadcrumb-nav-separator',
        {
          key: 'icon',
        },
        createElement('rhc-icon', {
          icon: 'chevron-right',
        }),
      ),
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/a/',
          index: 1,
          key: 'label',
        },
        'Label',
      ),
      createElement(
        'rhc-breadcrumb-nav-separator',
        {
          key: 'icon-2',
        },
        createElement('rhc-icon', {
          icon: 'chevron-right',
        }),
      ),
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/a/b/',
          index: 2,
          key: 'label-2',
        },
        'Label',
      ),
    ],
  },
} as StoryObj<typeof meta>;

export const Active = {
  args: {
    children: [
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/',
          index: 0,
          key: 'home',
          rel: 'home',
        },
        'Home',
      ),
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/a/',
          index: 1,
          key: 'label',
        },
        'Label',
      ),
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/a/b/',
          index: 2,
          key: 'label-2',
          active: 'true',
          current: 'true',
        },
        'Label',
      ),
    ],
  },
} as StoryObj<typeof meta>;

export const DisabledAndCurrent = {
  args: {
    children: [
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/',
          index: 0,
          key: 'home',
          rel: 'home',
        },
        'Home',
      ),
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/a/',
          index: 1,
          key: 'label',
        },
        'Label',
      ),
      createElement(
        'rhc-breadcrumb-nav-link',
        {
          href: '/a/b/',
          index: 2,
          key: 'label-2',
          active: 'true',
          disabled: 'true',
        },
        'Label',
      ),
    ],
  },
} as StoryObj<typeof meta>;
