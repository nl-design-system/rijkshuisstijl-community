import {
  Blockquote as UtrechtBlockquote,
  BlockquoteProps as UtrechtBlockquoteProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface BlockquoteProps extends UtrechtBlockquoteProps {
  variation?: 'blue-corner-border' | 'pink-background' | 'pink-left-border' | 'pink-corner-border';
}

export const Blockquote = forwardRef(
  (
    { className, children, attribution, variation, ...restProps }: PropsWithChildren<BlockquoteProps>,
    ref: ForwardedRef<HTMLQuoteElement>,
  ) => (
    <UtrechtBlockquote
      attribution={attribution}
      className={clsx('rhc-blockquote', variation && `rhc-blockquote--${variation}-variation`, className)}
      ref={ref}
      {...restProps}
    >
      <div className="rhc-blockquote__content utrecht-blockquote__content">{children}</div>
    </UtrechtBlockquote>
  ),
);

Blockquote.displayName = 'Blockquote';
