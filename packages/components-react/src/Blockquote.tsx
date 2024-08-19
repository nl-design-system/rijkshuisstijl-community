import {
  Blockquote as UtrechtBlockquote,
  BlockquoteProps as UtrechtBlockquoteProps,
} from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import '@rijkshuisstijl-community/components-css/index.scss';

export type { UtrechtBlockquoteProps as BlockquoteProps };

export const Blockquote = forwardRef(
  (
    { children, attribution, ...restProps }: PropsWithChildren<UtrechtBlockquoteProps>,
    ref: ForwardedRef<HTMLQuoteElement>,
  ) => (
    <UtrechtBlockquote {...restProps} ref={ref} attribution={attribution}>
      <div className="utrecht-blockquote__content">{children}</div>
    </UtrechtBlockquote>
  ),
);

Blockquote.displayName = 'Blockquote';
