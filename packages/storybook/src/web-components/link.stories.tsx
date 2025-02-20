import { LinkWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/react';
import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react';
import { Icon } from '@utrecht/component-library-react';
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

const LinkWrapper = ({ external, externalLabel, iconRight, iconLeft, classname, ...restProps }: any) => {
  return createElement('rhc-link', {
    external: external?.toString(),
    externalLabel,
    iconRight: iconRight?.toString(),
    iconLeft: iconLeft?.toString(),
    classname,
    ...restProps,
  });
};

const LinkStory = ({ children, iconLeft, iconRight, classname, ...props }: any) => (
  <LinkWrapper classname={classname} {...props}>
    {iconLeft && (
      <Icon>
        <IconCalendarEvent />
      </Icon>
    )}
    {children}
    {iconRight && (
      <Icon>
        <IconArrowRight />
      </Icon>
    )}
  </LinkWrapper>
);

const meta = {
  title: 'Web Components/Link',
  id: 'rhc-link-web',
  component: LinkStory,
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
    iconLeft: {
      description: 'Icon Left',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Demo',
      },
      defaultValue: false,
    },
    iconRight: {
      description: 'Icon Right',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Demo',
      },
      defaultValue: false,
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
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
  render: LinkStory,
} as Meta<typeof LinkWebComponent>;

export default meta;

export const Default = {
  args: {
    children: 'Link',
    href: '#',
    external: false,
  },
} as StoryObj<typeof meta>;

export const External = {
  args: {
    children: 'Link',
    href: '#',
    external: true,
  },
} as StoryObj<typeof meta>;

export const iconRight = {
  args: {
    children: 'Link',
    href: '#',
    iconRight: true,
  },
} as StoryObj<typeof meta>;

export const iconLeft = {
  args: {
    children: 'Link',
    href: '#',
    iconLeft: true,
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
};

export const Focus = {
  parameters: {
    pseudo: { focus: '#link' },
  },
  args: {
    href: '#',
    children: 'Label',
  },
};

export const FocusVisible = {
  parameters: {},
  args: {
    href: '#',
    children: 'Label',
    classname: 'utrecht-link--focus-visible',
  },
};

export const Visited = {
  args: {
    href: 'https://example.com/',
    children: 'Label',
  },
  parameters: {
    pseudo: { visited: '#link' },
  },
};
