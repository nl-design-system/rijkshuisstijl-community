import clsx from 'clsx';
import { CSSProperties, useMemo } from 'react';

const edgeBorderComponent = ({
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
      [`rhc-edge-border--edge-${side}`]: side,
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
  title: 'CSS Components/edge-border',
  id: 'rhc-edge-border-css',
  component: edgeBorderComponent,
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'pink'],
    },
    side: {
      control: 'select',
      options: ['block-start', 'block-end', 'inline-start', 'inline-end'],
      if: { arg: 'variant', eq: 'edge' },
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
  },
  args: {
    size: 'md',
    variant: 'border',
    color: 'blue',
    corner: 'start-start',
    side: 'inline-start',
    thickBorder: false,
  },
};

export default meta;

export const PinkEdge = {
  args: {
    variant: 'edge',
    color: 'pink',
  },
};
