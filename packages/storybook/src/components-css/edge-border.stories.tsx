import clsx from 'clsx';
import { CSSProperties, useMemo } from 'react';

const EdgeBorderComponent = ({
  color,
  side,
  borderWidthToken,
  colorToken,
  adjacentPaddingToken,
  perpendicularPaddingToken,
}: {
  color: string;
  side: string;
  borderWidthToken?: string;
  colorToken?: string;
  adjacentPaddingToken?: string;
  perpendicularPaddingToken?: string;
}) => {
  const className = useMemo(() => {
    return clsx('rhc-edge-border', {
      [`rhc-edge-border--color-${color}`]: color,
      [`rhc-edge-border--side-${side}`]: side,
    });
  }, [color, side, borderWidthToken, colorToken, adjacentPaddingToken, perpendicularPaddingToken]);

  return (
    <div
      className={className}
      style={
        {
          '--rhc-edge-border-border-width': borderWidthToken,
          '--rhc-edge-border-color': colorToken,
          '--rhc-edge-border-adjacent-padding': adjacentPaddingToken,
          '--rhc-edge-border-perpendicular-padding': perpendicularPaddingToken,
        } as CSSProperties
      }
    ></div>
  );
};

const meta = {
  title: 'CSS Components/Edge Border',
  id: 'rhc-edge-border-css',
  component: EdgeBorderComponent,
  argTypes: {
    color: {
      name: 'rhc-edge-border--color-{color}',
      control: 'select',
      options: [undefined, 'blue', 'pink'],
      table: {
        category: 'Class names',
      },
    },
    side: {
      name: 'rhc-edge-border--side-{side}',
      control: 'select',
      options: [undefined, 'block-start', 'block-end', 'inline-start', 'inline-end'],
      table: {
        category: 'Class names',
      },
    },
    borderWidthToken: {
      name: '--rhc-edge-border-border-width',
      control: 'text',
      table: {
        category: 'Optional Design Tokens',
      },
    },
    colorToken: {
      name: '--rhc-edge-border-border-color',
      control: 'color',
      table: {
        category: 'Optional Design Tokens',
      },
    },
    adjacentPaddingToken: {
      name: '--rhc-edge-border-adjacent-padding',
      control: 'text',
      table: {
        category: 'Optional Design Tokens',
      },
    },
    perpendicularPaddingToken: {
      name: '--rhc-edge-border-perpendicular-padding',
      control: 'text',
      table: {
        category: 'Optional Design Tokens',
      },
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
    showHtml: true,
    docs: {
      description: {
        // TODO: add documentation
        // component: mergeMarkdown([readme]),
      },
    },
  },
  args: {
    side: 'inline-start',
  },
};

export default meta;

export const PinkEdge = {
  args: {
    color: 'pink',
  },
};
