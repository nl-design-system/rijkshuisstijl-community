/* @license CC0-1.0 */

import { Heading, Icon, Link, Paragraph } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconCalendarEvent } from '@tabler/icons-react';
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
import { mergeMarkdown } from '../../helpers/merge-markdown';
import { createDesignTokensStory, createVisualRegressionStory, VisualRegressionWrapper } from '../utils';
import { VisualStates } from './link-visual/States';

const meta = {
  title: 'Rijkshuisstijl/Link',
  id: 'rhc-link',
  component: Link,
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
      description: 'Link text - default webcomponent slot',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Webcomponent Slot',
      },
      defaultValue: '',
    },
  },
  args: {
    children: '',
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
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=153-1056&p=f&t=Vqau7APnb0CBKrLh-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Link.tsx',
    nldesignsystem: 'https://nldesignsystem.nl/link',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
  render: Link,
} as Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Label',
  },
};

export const IconLeft: Story = {
  args: {
    href: '#',
    children: [<IconCalendarEvent />, 'Label'],
  },
};

export const IconRight: Story = {
  args: {
    href: '#',
    children: ['Label', <Icon icon={'pijl-naar-rechts'} />],
  },
};

export const External: Story = {
  args: {
    href: '#',
    children: 'Label',
    external: true,
    externalLabel: 'example external label',
  },
};

export const Active: Story = {
  parameters: {
    pseudo: { active: true },
  },
  args: {
    href: '#',
    children: 'Label',
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    href: '#',
    children: 'Label',
  },
};

export const Focus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    href: '#',
    children: 'Label',
  },
};

export const FocusVisible: Story = {
  parameters: {},
  args: {
    href: '#',
    children: 'Label',
    className: 'utrecht-link--focus-visible nl-link--focus-visible',
  },
};

export const Visited: Story = {
  parameters: {
    pseudo: { visited: true },
  },
  args: {
    href: 'https://example.com/',
    children: 'Label',
  },
};

export const LinkInParagraph: Story = {
  args: {
    href: 'https://example.com/',
  },
  render({ href }) {
    return (
      <Paragraph>
        In deze paragraaf staat een <Link href={href}>link naar een voorbeeldsite</Link> en{' '}
        <Link href={href}>
          <Icon icon={'pijl-naar-rechts'} />
          link met een icoon
        </Link>
        .
      </Paragraph>
    );
  },
};

export const DesignTokens = createDesignTokensStory(meta);

export const Visual = createVisualRegressionStory(() => (
  <>
    <Heading appearanceLevel={2} level={1}>
      Link
    </Heading>
    <Heading appearanceLevel={3} level={2}>
      KOOP
    </Heading>
    <VisualRegressionWrapper className={`koop`}>
      <VisualStates />
    </VisualRegressionWrapper>
    <Heading appearanceLevel={3} level={2}>
      Uitvoerend
    </Heading>
    <Heading appearanceLevel={4} level={3}>
      Paars
    </Heading>
    <VisualRegressionWrapper className={`uitvoerend-paars`}>
      <VisualStates />
    </VisualRegressionWrapper>
    <Heading appearanceLevel={4} level={3}>
      Hemelblauw
    </Heading>
    <VisualRegressionWrapper className={`uitvoerend-hemelblauw`}>
      <VisualStates />
    </VisualRegressionWrapper>
    <Heading appearanceLevel={4} level={3}>
      Groen
    </Heading>
    <VisualRegressionWrapper className={`uitvoerend-groen`}>
      <VisualStates />
    </VisualRegressionWrapper>
    <Heading appearanceLevel={4} level={3}>
      Oranje
    </Heading>
    <VisualRegressionWrapper className={`uitvoerend-oranje`}>
      <VisualStates />
    </VisualRegressionWrapper>
    <Heading appearanceLevel={4} level={3}>
      Violet
    </Heading>
    <VisualRegressionWrapper className={`uitvoerend-violet`}>
      <VisualStates />
    </VisualRegressionWrapper>
    <Heading appearanceLevel={4} level={3}>
      Mintgroen
    </Heading>
    <VisualRegressionWrapper className={`uitvoerend-mintgroen`}>
      <VisualStates />
    </VisualRegressionWrapper>
  </>
));
