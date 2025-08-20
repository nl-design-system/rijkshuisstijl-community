import { SkipLink, type SkipLinkProps } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import readme from './skip-link.md?raw';

interface SkipLinkStoryProps extends SkipLinkProps {
  visibility?: string | 'hidden' | 'visible';
  visibleOnFocus?: boolean;
}

const SkipLinkStory = ({ visibility, visibleOnFocus, ...restProps }: SkipLinkStoryProps) => (
  <SkipLink
    className={clsx({
      'rhc-skip-link--visible-on-focus': visibleOnFocus,
      'rhc-skip-link--hidden': visibility === 'hidden',
      'rhc-skip-link--visible': visibility === 'visible',
    })}
    {...restProps}
  />
);

const meta = {
  title: 'Rijkshuisstijl/Skip link',
  id: 'rijkshuisstijl-skip-link',
  component: SkipLinkStory,
  argTypes: {
    children: {
      description: 'Link text',
      type: {
        name: 'string',
        required: false,
      },
    },
    href: {
      description: 'Target URL',
      type: {
        name: 'string',
        required: true,
      },
    },
    visibility: {
      description: 'Visibilty',
      options: ['', 'hidden', 'visible'],
    },
    visibleOnFocus: {
      description: 'Visible on focus',
      control: 'boolean',
    },
  },
  args: {
    children: '',
    href: '',
    visibility: '',
    visibleOnFocus: false,
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: readme,
      },
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
  },
  render: SkipLinkStory,
} satisfies Meta<typeof SkipLinkStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#main',
    children: 'Skip to main content',
    visibility: 'visible',
  },
  parameters: {
    docs: {
      description: {
        story: `Styling met de \`.rhc-skip-link\` en \`.rhc-skip-link--visible-on-focus\` class naam.`,
      },
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin: 'Dit component is overgenomen vanuit de NL-Design system candidate repo.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/SkipLink.tsx',
  },
};

export const VisibleOnFocus: Story = {
  args: {
    href: '#main',
    children: 'Skip to main content',
    visibleOnFocus: true,
  },
  name: 'Visible on focus',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'Styling met de `.rhc-skip-link--visible-on-focus` class naam. Standaard niet zichtbaar, wordt zichtbaar wanneer je met het toetsenbord er naar toe tabt.',
      },
    },
  },
};

export const RightToLeft: Story = {
  args: {
    href: '#main',
    children: 'تخطي إلى المحتوى الرئيسي',
    visibility: 'visible',
  },
  name: 'Right-to-left',
  decorators: [
    (Story) => (
      <div dir="rtl" lang="ar">
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `Skip link in right-to-left script.`,
      },
    },
  },
};

export const Focus: Story = {
  args: {
    href: '#main',
    children: 'Skip to main content',
  },
  name: 'Focus',
  parameters: {
    docs: {
      description: {
        story: `Styling met de \`.rhc-skip-link--focus\` class naam.`,
      },
    },
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  args: {
    href: '#main',
    children: 'Skip to main content',
  },
  name: 'Focus visible',
  parameters: {
    docs: {
      description: {
        story: `Styling met de \`.rhc-skip-link--focus-visible\` class naam.`,
      },
    },
    pseudo: { focus: true, focusVisible: true },
  },
};
