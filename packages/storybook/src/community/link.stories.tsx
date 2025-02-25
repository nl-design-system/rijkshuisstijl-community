/* @license CC0-1.0 */

import { Icon, Link } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react';
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
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { mergeMarkdown } from '../../helpers/merge-markdown';
interface LinkStoryProps {
  href: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  external?: boolean;
  externalLabel?: string;
  className?: string;
}

const LinkStory = ({
  href,
  children,
  iconLeft,
  iconRight,
  external,
  className,
  ...props
}: PropsWithChildren<LinkStoryProps>) => (
  <Link
    external={external}
    href={href}
    className={clsx(
      {
        'utrecht-link--external': external,
      },
      className,
    )}
    {...props}
  >
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
  </Link>
);

const meta = {
  title: 'Rijkshuisstijl/Link',
  id: 'rhc-link',
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
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
  render: LinkStory,
} as Meta<typeof LinkStory>;

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
    children: 'Label',
    iconLeft: true,
  },
};

export const IconRight: Story = {
  args: {
    href: '#',
    children: 'Label',
    iconRight: true,
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
    className: 'utrecht-link--focus-visible',
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
