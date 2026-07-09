/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import {
  Blockquote as UtrechtBlockquote,
  BlockquoteProps as UtrechtBlockquoteProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';

export type BlockquoteOutlineCorner = 'start-start' | 'start-end' | 'end-start' | 'end-end';

export interface BlockquoteProps extends UtrechtBlockquoteProps {
  /**
   * Draw the opt-in bracket outline: a border on the two sides adjacent to the
   * given corner, with that corner rounded and the text tinted with the theme
   * accent. Omit for the default blockquote.
   */
  outlineCorner?: BlockquoteOutlineCorner;
}

export const Blockquote = ({ outlineCorner, className, ...restProps }: BlockquoteProps) => {
  return (
    <UtrechtBlockquote
      className={clsx('rhc-blockquote', outlineCorner && `rhc-blockquote--outline-${outlineCorner}`, className)}
      {...restProps}
    />
  );
};

Blockquote.displayName = 'Blockquote';
