import TwigSkiplink from '@rijkshuisstijl-community/components-twig/src/Skip-link.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/skip-link.md?raw';

const meta = {
  title: 'Skip-link',
  id: 'rhc-twig-skiplink',
  component: TwigSkiplink,
  argTypes: {
    href: {
      description: 'string',
      control: { type: 'text' },
    },
    lang: {
      description: 'string',
      control: { type: 'text' },
    }
  },
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    componentOrigin:
      'Dit component is overgenomen vanuit de NL-Design system candidate repo.',
    figma:
      'https://www.figma.com/design/2cCxjvY0jNjdhp7wkZVBnr/button?node-id=2217-10122&m=dev',
    nldesignsystem: 'https://nldesignsystem.nl/skip-link/',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Skip-link.twig',
  },
} satisfies Meta<typeof TwigSkiplink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SkiplinkDefault: Story = {
  args: {
    href: '#main',
    children: 'Skip to main content',
  },
  name: 'Default',
};

export const SkiplinkRightToLeft: Story = {
  args: {
    href: '#main',
    children: 'تخطي إلى المحتوى الرئيسي',
    lang: 'ar',
    dir: 'rtl',
  },
  name: 'Right-to-left',
};

export const SkiplinkFocusVisible: Story = {
  args: {
    href: '#main',
    children: 'Skip to main content',
  },
  name: 'Focus visible',
};
