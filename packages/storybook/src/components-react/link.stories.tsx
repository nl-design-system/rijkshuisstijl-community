import { Icon, Link, Paragraph } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown, replaceMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
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
import iconInline from '../documentation/components/link/icon-inline.nl.md?raw';

const meta = {
  title: 'Link',
  id: 'rhc-link',
  component: Link,
  argTypes: {
    href: {
      description: 'Waar de link naartoe leidt',
      type: {
        name: 'string',
        required: true,
      },
    },
    children: {
      description: 'Klikbaar deel van de link, dus een tekst of afbeelding',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
    className: {
      description: 'Eigen classnames om toe te voegen aan de standaard-classnames van het component',
      type: 'string',
    },
    inline: {
      description: 'Of de link onderdeel uitmaakt van lopende tekst',
      type: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    children: '',
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: replaceMarkdown(
          mergeMarkdown([
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
            iconInline,
          ]),
          'utrecht',
          'rhc',
        ),
      },
    },
    figma:
      'https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/-WIP--NL-Design-System---Bibliotheek?node-id=197-664&p=f&t=nB0V3gAhWfpilaKv-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Link.tsx',
    nldesignsystem: 'https://nldesignsystem.nl/link',
    componentOrigin:
      'Dit component is overgenomen van het NL Design System, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
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
    children: [<Icon icon="kalender" />, 'Nieuwe afspraak'],
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const IconRight: Story = {
  args: {
    href: '#',
    children: ['Verder', <Icon icon="pijl-naar-rechts" />],
  },
  argTypes: {
    children: {
      control: false,
    },
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
    className: 'nl-link--focus-visible',
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
      <Paragraph style={{ width: '423px' }}>
        Het was in het voorjaar 1345, dat een talrijk aantal van naburen en vreemdelingen naar Haarlem was toegestroomd,
        ter bijwoning van een plechtig feest, hetwelk binnen zijn muren door Graaf Willem den Vierden stond gegeven te
        worden. In deze paragraaf staat een{' '}
        <Link inline href={href}>
          link naar een voorbeeldsite
        </Link>{' '}
        en nog een{' '}
        <Link inline href={href}>
          link zonder icoon
        </Link>
        . Onder die steden, welke vanouds aan de grafelijke kroon van Holland gelijk zoovele edelgesteenten flonkerden,
        en wier macht en rijkdom tot een hechten steun verstrekten aan des Landsheer gezag, was Haarlem, gelijk genoeg
        bekend is, een der voornaamste.
      </Paragraph>
    );
  },
};
