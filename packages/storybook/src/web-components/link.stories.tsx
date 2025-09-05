import { LinkWebComponent } from '@rijkshuisstijl-community/web-components';
import { IconWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/link/README.md?raw';
import anatomyDocs from '@utrecht/components/link/docs/anatomy.nl.md?raw';
import contentDocs from '@utrecht/components/link/docs/content.nl.md?raw';
import failureNoAriaCurrentDocs from '@utrecht/components/link/docs/failure-no-aria-current.nl.md?raw';
import failureNoContextGoalDocs from '@utrecht/components/link/docs/failure-no-context-goal.nl.md?raw';
import failureNoHrefDocs from '@utrecht/components/link/docs/failure-no-href.nl.md?raw';
import failureNoLangDocs from '@utrecht/components/link/docs/failure-no-lang.nl.md?raw';
import failurePerceivableFocusDocs from '@utrecht/components/link/docs/failure-perceivable-focus.nl.md?raw';
import failureUnecessaryHomeLinkDocs from '@utrecht/components/link/docs/failure-unecessary-home-link.md?raw';
import interactionDocs from '@utrecht/components/link/docs/interaction.nl.md?raw';
import privacyDocs from '@utrecht/components/link/docs/privacy.md?raw';
import referencesDocs from '@utrecht/components/link/docs/references.nl.md?raw';
import relatedComponentsDocs from '@utrecht/components/link/docs/related-components.nl.md?raw';
import technologyHtmlDocs from '@utrecht/components/link/docs/technology-html.nl.md?raw';
import usageDocs from '@utrecht/components/link/docs/usage.nl.md?raw';
import visualDesignDocs from '@utrecht/components/link/docs/visual-design.nl.md?raw';
import wcagDocs from '@utrecht/components/link/docs/wcag.nl.md?raw';
import { createElement } from 'react';
import { mergeMarkdown } from '../../helpers/merge-markdown';

LinkWebComponent.define();
IconWebComponent.define();

const LinkWrapper = ({ external, externalLabel, classname, ...restProps }: any) =>
  createElement('rhc-link', {
    external: external?.toString(),
    externalLabel,
    classname,
    ...restProps,
  });

const meta = {
  title: 'Link',
  id: 'rhc-link-web',
  component: LinkWrapper,
  argTypes: {
    href: {
      description: 'Url to link to',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Property',
      },
    },
    external: {
      description: 'Whether the link is external',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Property',
      },
    },
    externalLabel: {
      description: 'SR only label for external link icon',
      type: {
        name: 'string',
      },
      table: {
        category: 'Property',
      },
    },
    children: {
      description: 'Link text - Custom Elements',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Attributes',
      },
      defaultValue: 'Label',
    },
  },
  args: {
    id: 'link',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([
          readme,
          interactionDocs,
          usageDocs,
          relatedComponentsDocs,
          visualDesignDocs,
          contentDocs,
          anatomyDocs,
          technologyHtmlDocs,
          privacyDocs,
          failurePerceivableFocusDocs,
          failureNoContextGoalDocs,
          failureNoLangDocs,
          failureNoAriaCurrentDocs,
          failureUnecessaryHomeLinkDocs,
          failureNoHrefDocs,
          referencesDocs,
          wcagDocs,
        ]),
      },
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/Link.tsx',
  },
  render: LinkWrapper,
} as Meta<typeof LinkWebComponent>;

export default meta;

export const Default = {
  args: {
    children: 'Link',
    href: '#',
    external: false,
  },
} as StoryObj<typeof meta>;

export const iconLeft = {
  args: {
    children: [createElement('rhc-icon', { icon: 'home', classname: 'rhc-link__icon' }), 'Link'],
    href: '#',
  },
} as StoryObj<typeof meta>;

export const iconRight = {
  args: {
    children: ['Link', createElement('rhc-icon', { icon: 'chevron-right', classname: 'rhc-link__icon' })],
    href: '#',
  },
} as StoryObj<typeof meta>;

export const Active = {
  parameters: {
    pseudo: { active: '#link' },
  },
  args: {
    href: '#',
    children: 'Label',
  },
} as StoryObj<typeof meta>;

export const Focus = {
  parameters: {
    pseudo: { focus: '#link' },
  },
  args: {
    href: '#',
    children: 'Label',
  },
} as StoryObj<typeof meta>;

export const FocusVisible = {
  parameters: {},
  args: {
    href: '#',
    children: 'Label',
    classname: 'utrecht-link--focus-visible',
  },
} as StoryObj<typeof meta>;

export const Visited = {
  args: {
    href: 'https://example.com/',
    children: 'Label',
  },
  parameters: {
    pseudo: { visited: '#link' },
  },
} as StoryObj<typeof meta>;
