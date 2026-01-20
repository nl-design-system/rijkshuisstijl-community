/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */
import { BlockquoteProps, Blockquote as UtrechtBlockquote } from '@utrecht/component-library-react';
import clsx from 'clsx';

export type { BlockquoteProps } from '@utrecht/component-library-react';

export const Blockquote = ({ className, ...restProps }: BlockquoteProps) => {
  return <UtrechtBlockquote className={clsx('rhc-blockquote', className)} {...restProps} />;
};

Blockquote.displayName = 'Blockquote';
