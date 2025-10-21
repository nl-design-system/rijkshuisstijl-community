import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import clsx from 'clsx';
import { CSSProperties, useMemo } from 'react';
import readme from './rounded-border.md?raw';

const RoundedCornerComponent = ({
  size,
  borderColor,
  backgroundColor,
  corner,
  thickBorder = false,
  noPadding = false,
  backgroundColorToken,
  borderColorToken,
  borderWidthToken,
  paddingBlockToken,
  paddingInlineToken,
  paddingToken,
  radiusToken,
}: {
  size: string;
  borderColor?: string;
  backgroundColor?: string;
  corner: string;
  thickBorder?: boolean;
  noPadding?: boolean;
  backgroundColorToken?: string;
  borderColorToken?: string;
  borderWidthToken?: string;
  paddingBlockToken?: string;
  paddingInlineToken?: string;
  paddingToken?: string;
  radiusToken?: string;
}) => {
  const className = useMemo(() => {
    return clsx('rhc-rounded-corner', {
      [`rhc-rounded-corner--size-${size}`]: size,
      [`rhc-rounded-corner--corner-${corner}`]: corner,
      [`rhc-rounded-corner--border-color-${borderColor}`]: borderColor,
      [`rhc-rounded-corner--background-color-${backgroundColor}`]: backgroundColor,
      'rhc-rounded-corner--thick-border': thickBorder,
      'rhc-rounded-corner--no-padding': noPadding,
    });
  }, [
    size,
    borderColor,
    backgroundColor,
    corner,
    thickBorder,
    noPadding,
    borderWidthToken,
    paddingBlockToken,
    paddingInlineToken,
    paddingToken,
    radiusToken,
  ]);

  return (
    <div
      className={className}
      style={
        {
          '--rhc-rounded-corner-background-color': backgroundColorToken,
          '--rhc-rounded-corner-border-color': borderColorToken,
          '--rhc-rounded-corner-border-width': borderWidthToken,
          '--rhc-rounded-corner-padding-block': paddingBlockToken,
          '--rhc-rounded-corner-padding-inline': paddingInlineToken,
          '--rhc-rounded-corner-padding': paddingToken,
          '--rhc-rounded-corner-radius': radiusToken,
        } as CSSProperties
      }
    ></div>
  );
};

const meta = {
  title: 'CSS Components/Rounded Corner',
  id: 'rhc-rounded-corner-css',
  component: RoundedCornerComponent,
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
    noPadding: {
      name: 'rhc-rounded-corner--no-padding',
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
    paddingBlockToken: {
      name: '--rhc-rounded-corner-padding-block',
      control: 'text',
      table: {
        category: 'Optional Design Tokens',
      },
    },
    paddingInlineToken: {
      name: '--rhc-rounded-corner-padding-inline',
      control: 'text',
      table: {
        category: 'Optional Design Tokens',
      },
    },
    paddingToken: {
      name: '--rhc-rounded-corner-padding',
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
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    showHtml: true,
  },
  args: {
    size: 'md',
    borderColor: 'blue',
    corner: 'start-start',
    thickBorder: false,
    noPadding: false,
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
