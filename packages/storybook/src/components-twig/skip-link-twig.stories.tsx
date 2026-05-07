import TwigSkipLink from '@rijkshuisstijl-community/components-twig/src/SkipLink.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/skip-link.md?raw';

const meta = {
  title: 'Skip link',
  id: 'twig-skip-link',
  component: TwigSkipLink,
  argTypes: {
    href: {
      description: 'string',
      control: { type: 'text' },
    },
    lang: {
      description: 'string',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    componentOrigin: 'Dit component is overgenomen vanuit de NL-Design system candidate repo.',
    figma: 'https://www.figma.com/design/2cCxjvY0jNjdhp7wkZVBnr/button?node-id=2217-10122&m=dev',
    nldesignsystem: 'https://nldesignsystem.nl/skip-link/',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/SkipLink.twig',
  },
} satisfies Meta<typeof TwigSkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#main',
    children: 'Skip to main content',
  },
  parameters: {
    docs: {
      description: {
        story: `Styling met de \`.rhc-skip-link\` en \`.rhc-skip-link--visible-on-focus\` class naam.`,
      },
    },
  },
};

export const RightToLeft: Story = {
  args: {
    href: '#main',
    children: 'تخطي إلى المحتوى الرئيسي',
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

export const FocusVisible: Story = {
  args: {
    href: '#main',
    children: 'Skip to main content',
  },
  name: 'Focus visible',
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};
