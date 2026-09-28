import TwigRoundedCorner from '@rijkshuisstijl-community/components-twig/src/RoundedCorner.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/rounded-corner.md?raw';

const meta = {
  title: 'Rounded Corner',
  id: 'rhc-twig-rounded-corner',
  component: TwigRoundedCorner,
  argTypes: {
    position: {
      options: ['start-start', 'start-end', 'end-start', 'end-end'],
      control: { type: 'radio' },
      type: { required: true },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },

    overwriteTokens: {
      description: 'Custom CSS variables to overwrite the default styling of the RoundedCorner component.',
      table: {
        type: {
          summary: 'object',
          detail: `{
            '--rhc-rounded-corner-border-radius': CSSProperties['borderRadius'];
            '--rhc-rounded-corner-overflow': CSSProperties['overflow'];
          };`,
        },
      },
    },
    // as: {
    //   description: 'The HTML element or React component to render as the rounded corner wrapper.',
    //   table: {
    //     type: {
    //       summary: 'React.ElementType',
    //     },
    //   },
    // },
  },
  parameters: {
    controls: {
      expanded: true,
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
  },
} satisfies Meta<typeof TwigRoundedCorner>;

export default meta;

export const BlueCurvedBorder: StoryObj<typeof meta> = {
  args: {
    position: 'start-start',
    size: 'md',
  },
};

export const ImageInsideRoundedCorner: StoryObj<typeof meta> = {
  args: {
    position: 'end-end',
    as: 'img',
    style: { width: '300px', height: 'auto' },
    src: './placeholder.jpg',
    alt: 'Nature',
    children: undefined,
  },
};

export const ImageBackground: StoryObj<typeof meta> = {
  args: {
    position: 'start-start',
    size: 'lg',
    style: {
      width: 'full',
      height: 'full',
      backgroundImage: 'url(./placeholder.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    children: (
      <div data-position="start-end" data-size="md" style={{ margin: '13rem 3rem 0rem 0rem' }}>
        <div style={{ padding: '3rem 1rem', backgroundColor: 'var(--rhc-color-primary-500)' }}>
          <span style={{ color: 'white' }}>Rounded Corner Content</span>
        </div>
      </div>
    ),
  },
};

export const CustomTokens: StoryObj<typeof meta> = {
  args: {
    position: 'end-start',
    overwriteTokens: {
      '--rhc-rounded-corner-border-radius': '1rem',
      '--rhc-rounded-corner-overflow': 'clip',
    },
  },
};
