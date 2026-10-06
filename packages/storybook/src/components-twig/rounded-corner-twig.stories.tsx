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
      type: { name: 'string', required: true },
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
    children:
      '<div style="padding: 3rem 1rem; background-color: var(--rhc-color-primary-500)"><span style="color: white;">Rounded Corner Content</span></div>',
  },
};

export const ImageInsideRoundedCorner: StoryObj<typeof meta> = {
  args: {
    position: 'end-end',
    size: 'md',
    children: '<img alt="Nature" class="" src="./placeholder.jpg" style="width: 300px; height: auto;">',
  },
};

export const ImageBackground: StoryObj<typeof meta> = {
  args: {
    position: 'start-start',
    size: 'lg',
    style: {
      '--rhc-rounded-corner-border-radius': '1rem',
    },
    children: `
      <style>
        .image-background-wrapper {
          margin: 13rem 3rem 0rem 0rem;
          position: relative;
        }
        .image-background-wrapper::before {
          content: '';
          display: block;
          padding-top: 56.25%;
          background-image: url('./placeholder.jpg');
          background-size: cover;
          background-position: center;
        }
      </style>
      <div class="image-background-wrapper">
        <div style="padding: 3rem 1rem; background-color: var(--rhc-color-primary-500);">
          <span style="color: #fff;">Rounded Corner Content</span>
        </div>
      </div>`,
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
