/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import {
  Blockquote as UtrechtBlockquote,
  BlockquoteProps as UtrechtBlockquoteProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';

export type BlockquoteBorderRadiusCorner = 'start-start' | 'start-end' | 'end-start' | 'end-end';

export interface BlockquoteProps extends UtrechtBlockquoteProps {
  /**
   * Draw the opt-in bracket outline: a border on the two sides adjacent to the
   * given corner, with that corner rounded. Omit for the default blockquote.
   */
  borderRadiusCorner?: BlockquoteBorderRadiusCorner;
}

export const Blockquote = ({ borderRadiusCorner, className, ...restProps }: BlockquoteProps) => {
  return (
    <UtrechtBlockquote
      className={clsx(
        'rhc-blockquote',
        borderRadiusCorner && `rhc-blockquote--border-radius-corner-${borderRadiusCorner}`,
        className,
      )}
      {...restProps}
    />
  );
};

Blockquote.displayName = 'Blockquote';
