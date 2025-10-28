import { RoundedCorner } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import readme from './rounded-corner.md?raw';

const meta = {
  title: 'Rounded Corner',
  id: 'rhc-rounded-corner',
  component: RoundedCorner,
  parameters: {
    controls: {
      expanded: true,
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    showHtml: true,
  },
  args: {
    corner: 'start-start',
    children: (
      <div style={{ padding: '3rem 1rem', backgroundColor: 'var(--rhc-color-primary-500)' }}>
        <span style={{ color: 'white' }}>Rounded Corner Content</span>
      </div>
    ),
  },
  argTypes: {
    overwriteTokens: {
      description: 'Custom CSS variables to overwrite the default styling of the RoundedCorner component.',
      table: {
        type: {
          summary: 'object',
          detail: `{
  '--rhc-rounded-corner-radius': CSSProperties['borderRadius'];
  '--rhc-rounded-corner-overflow': CSSProperties['overflow'];
};`,
        },
      },
    },
    as: {
      description: 'The HTML element or React component to render as the rounded corner wrapper.',
      table: {
        type: {
          summary: 'React.ElementType',
        },
      },
    },
  },
};

export default meta;

export const BlueCurvedBorder = {};

export const ImageInsideRoundedCorner = {
  args: {
    corner: 'end-end',
    as: 'img',
    style: { width: '300px', height: 'auto' },
    src: './placeholder.jpg',
    alt: 'Nature',
    children: undefined,
  },
};

export const ImageBackground = {
  args: {
    corner: 'start-start',
    size: 'lg',
    style: {
      width: 'full',
      height: 'full',
      backgroundImage: 'url(./placeholder.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    children: (
      <RoundedCorner corner="start-end" size="md" style={{ margin: '13rem 3rem 0rem 0rem' }}>
        <div style={{ padding: '3rem 1rem', backgroundColor: 'var(--rhc-color-primary-500)' }}>
          <span style={{ color: 'white' }}>Rounded Corner Content</span>
        </div>
      </RoundedCorner>
    ),
  },
};

export const CustomTokens = {
  args: {
    corner: 'end-start',
    overwriteTokens: {
      '--rhc-rounded-corner-radius': '1rem',
      '--rhc-rounded-corner-overflow': 'clip',
    },
  },
};
