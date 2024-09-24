import {
  Blockquote as UtrechtBlockquote,
  BlockquoteProps as UtrechtBlockquoteProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export type { UtrechtBlockquoteProps as BlockquoteProps };

export const Blockquote = forwardRef(
  (
    { className, children, attribution, ...restProps }: PropsWithChildren<UtrechtBlockquoteProps>,
    ref: ForwardedRef<HTMLQuoteElement>,
  ) => (
    <UtrechtBlockquote {...restProps} attribution={attribution} className={clsx('rhc-blockquote', className)} ref={ref}>
      <div className="rhc-blockquote__content utrecht-blockquote__content">{children}</div>
    </UtrechtBlockquote>
  ),
);

Blockquote.displayName = 'Blockquote';
