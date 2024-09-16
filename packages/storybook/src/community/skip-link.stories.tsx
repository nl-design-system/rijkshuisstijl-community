import { SkipLink, type SkipLinkProps } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import readme from './skip-link.md?raw';

interface SkipLinkStoryProps extends SkipLinkProps {
  focus?: boolean;
  visibility?: string | 'hidden' | 'visible';
  visibleOnFocus?: boolean;
}

const SkipLinkStory = ({ focus, visibility, visibleOnFocus, ...restProps }: SkipLinkStoryProps) => (
  <SkipLink
    className={clsx({
      'utrecht-skip-link--focus': focus,
      'rhc-skip-link--visible-on-focus': visibleOnFocus,
      'rhc-skip-link--hidden': visibility === 'hidden',
      'utrecht-skip-link--visible': visibility === 'visible',
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
    focus: false,
    visibility: '',
    visibleOnFocus: false,
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
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
        story: `Styling met de \`.utrecht-skip-link\` en \`.rhc-skip-link--visible-on-focus\` class naam.`,
      },
    },
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
          'Styling met de `.utrecht-skip-link--visible-on-focus` class naam. Standaard niet zichtbaar, wordt zichtbaar wanneer je met het toetsenbord er naar toe tabt.',
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
