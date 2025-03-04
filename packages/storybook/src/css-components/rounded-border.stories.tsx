import clsx from 'clsx';
import { CSSProperties, useMemo } from 'react';

const roundedCornerComponent = ({
  size,
  borderColor,
  backgroundColor,
  corner,
  thickBorder = false,
  backgroundColorToken,
  borderColorToken,
  borderWidthToken,
  radiusToken,
}: {
  size: string;
  variant: 'border' | 'background' | 'edge';
  borderColor?: string;
  backgroundColor?: string;
  corner: string;
  thickBorder?: boolean;
  backgroundColorToken?: string;
  borderColorToken?: string;
  borderWidthToken?: string;
  radiusToken?: string;
}) => {
  const className = useMemo(() => {
    return clsx('rhc-rounded-corner', {
      [`rhc-rounded-corner--size-${size}`]: size,
      [`rhc-rounded-corner--corner-${corner}`]: corner,
      [`rhc-rounded-corner--border-color-${borderColor}`]: borderColor,
      [`rhc-rounded-corner--background-color-${backgroundColor}`]: backgroundColor,
      'rhc-rounded-corner--thick-border': thickBorder,
    });
  }, [size, borderColor, backgroundColor, corner, thickBorder, borderWidthToken, radiusToken]);

  return (
    <div
      className={className}
      style={
        {
          '--rhc-rounded-corner-background-color': backgroundColorToken,
          '--rhc-rounded-corner-border-color': borderColorToken,
          '--rhc-rounded-corner-border-width': borderWidthToken,
          '--rhc-rounded-corner-radius': radiusToken,
        } as CSSProperties
      }
    ></div>
  );
};

const meta = {
  title: 'CSS Components/Rounded Corner',
  id: 'rhc-rounded-corner-css',
  component: roundedCornerComponent,
  argTypes: {
    borderColor: {
      name: 'rhc-rounded-corner--border-color-{color}',
      control: 'select',
      options: [undefined, 'blue', 'pink'],
      table: {
        category: 'Class names',
      },
    },
    backgroundColor: {
      name: 'rhc-rounded-corner--background-color-{color}',
      control: 'select',
      options: [undefined, 'blue', 'pink'],
      table: {
        category: 'Class names',
      },
    },
    corner: {
      name: 'rhc-rounded-corner--corner-{corner}',
      control: 'select',
      options: [undefined, 'start-start', 'start-end', 'end-start', 'end-end'],
      table: {
        category: 'Class names',
      },
    },
    size: {
      name: 'rhc-rounded-corner--size-{size}',
      control: 'select',
      options: [undefined, 'sm', 'md', 'lg'],
      table: {
        category: 'Class names',
      },
    },
    thickBorder: {
      name: 'rhc-rounded-corner--thick-border',
      control: 'boolean',
      table: {
        category: 'Class names',
      },
    },
    backgroundColorToken: {
      name: '--rhc-rounded-corner-background-color',
      control: 'color',
      table: {
        category: 'Optional Design Tokens',
      },
    },
    borderColorToken: {
      name: '--rhc-rounded-corner-border-color',
      control: 'color',
      table: {
        category: 'Optional Design Tokens',
      },
    },
    borderWidthToken: {
      name: '--rhc-rounded-corner-border-width',
      control: 'text',
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
    borderColor: 'blue',
    corner: 'start-start',
    thickBorder: false,
  },
};

export default meta;

export const BlueCurvedBorder = {};

export const PinkThickCurvedBorder = {
  args: {
    borderColor: 'pink',
    thickBorder: true,
  },
};

export const BlueBackground = {
  args: {
    borderColor: undefined,
    backgroundColor: 'blue',
  },
};

export const PinkBackground = {
  args: {
    borderColor: undefined,
    backgroundColor: 'pink',
    corner: 'end-start',
  },
};
