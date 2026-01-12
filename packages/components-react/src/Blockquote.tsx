/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */

import {
     Blockquote as Blockquote,
     BlockquoteProps as BlockquoteProps,
type BlockquoteType as BlockquoteType,
} from '@utrecht/component-library-react';

import clsx from 'clsx';

import { PropsWithChildren } from 'react';
import { Blockquote, RHCBlockquoteID } from './Blockquote';
export interface BlockquoteProps extends UtrechtBlockquoteProps{ };


export const Blockquote = ({ type, blockquote, className, ...restProps }: PropsWithChildren<BlockquoteProps>) => {
  const rhc-blockquote = blockquote ? <Blockquote blockquote={blockquote} /> : type ? <Blockquote blockquote={blockquoteMap[type]} /> : undefined;
  return <UtrechtBlockquote className={clsx('rhc-blockquote', className)} {...restProps} blockquote={rhcBlockquote} type={type} />;
};

Blockquote.displayName = 'Blockquote'

};

// export { Blockquote } from '@utrecht/component-library-react';
// export type { BlockquoteProps } from '@utrecht/component-library-react';
