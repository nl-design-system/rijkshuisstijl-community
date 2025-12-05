import { SkipLink, type SkipLinkProps } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './skip-link.md?raw';

// set fixed height and width so that the automatic hiding works
const StoryWrapper = (props: SkipLinkProps) => (
  <div style={{ width: '400px', height: '100px' }}>
    <SkipLink {...props} />
  </div>
);

const meta = {
  title: 'Skip link',
  id: 'rijkshuisstijl-skip-link',
  component: SkipLink,
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
  },
  args: {
    children: '',
    href: '',
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
    figma: 'https://www.figma.com/design/2cCxjvY0jNjdhp7wkZVBnr/button?node-id=2217-10122&m=dev',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/SkipLink.tsx',
    nldesignsystem: 'https://nldesignsystem.nl/skip-link/',
  },
  render: StoryWrapper,
} satisfies Meta<typeof SkipLink>;

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
    // TODO: add Figma and NL DesignSystem links
    componentOrigin: 'Dit component is overgenomen vanuit de NL-Design system candidate repo.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/SkipLink.tsx',
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
