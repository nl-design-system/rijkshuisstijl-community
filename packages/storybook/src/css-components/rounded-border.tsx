import { CSSProperties, useMemo } from 'react';

const roundedCornerComponent = ({
  size,
  variant,
  color,
  corner,
  side,
  thickBorder = false,
  borderWidthToken,
  colorToken,
  radiusToken,
}: {
  size: string;
  variant: 'border' | 'background' | 'edge';
  color: string;
  corner: string;
  side: string;
  thickBorder?: boolean;
  borderWidthToken?: string;
  colorToken?: string;
  radiusToken?: string;
}) => {
  const className = useMemo(() => {
    if (variant === 'edge') {
      return `rhc-rounded-corner rhc-rounded-corner--color-${color} rhc-rounded-corner--edge-${side}`;
    }
    return `rhc-rounded-corner rhc-rounded-corner--size-${size} rhc-rounded-corner--corner-${corner}-${variant} rhc-rounded-corner--color-${color} ${
      thickBorder ? 'rhc-rounded-corner--thick-border' : ''
    }`;
  }, [size, variant, color, corner, side, thickBorder, borderWidthToken, colorToken, radiusToken]);

  return (
    <div
      className={className}
      style={
        {
          '--rhc-rounded-corner-border-width': borderWidthToken,
          '--rhc-rounded-corner-color': colorToken,
          '--rhc-rounded-corner-radius': radiusToken,
        } as CSSProperties
      }
    ></div>
  );
};

const meta = {
  title: 'CSS Components/rounded-corner',
  id: 'rhc-rounded-corner-css',
  component: roundedCornerComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['border', 'background', 'edge'],
    },
    color: {
      control: 'select',
      options: ['blue', 'pink'],
    },
    corner: {
      control: 'select',
      options: ['start-start', 'start-end', 'end-start', 'end-end'], // Default value
      if: { arg: 'variant', neq: 'edge' },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      if: { arg: 'variant', neq: 'edge' },
    },
    side: {
      control: 'select',
      options: ['block-start', 'block-end', 'inline-start', 'inline-end'],
      if: { arg: 'variant', eq: 'edge' },
    },
    thickBorder: {
      name: 'Thick border',
      control: 'boolean',
      if: { arg: 'variant', eq: 'border' },
    },
    borderWidthToken: {
      name: '--rhc-rounded-corner-border-width',
      control: 'text',
      table: {
        category: 'Optional Design Tokens',
      },
    },
    colorToken: {
      name: '--rhc-rounded-corner-color',
      control: 'color',
      table: {
        category: 'Optional Design Tokens',
      },
    },
    radiusToken: {
      name: '--rhc-rounded-corner-radius',
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

export const BlueCurvedBorder = {};

export const PinkThickCurvedBorder = {
  args: {
    color: 'pink',
    thickBorder: true,
  },
};

export const BlueBackground = {
  args: {
    variant: 'background',
  },
};

export const PinkBackground = {
  args: {
    variant: 'background',
    color: 'pink',
    corner: 'end-start',
  },
};
