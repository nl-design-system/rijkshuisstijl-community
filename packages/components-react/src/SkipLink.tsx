import {
  SkipLink as UtrechtSkipLink,
  type SkipLinkProps as UtrechtSkipLinkProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface SkipLinkProps extends UtrechtSkipLinkProps {
  visibleOnFocus?: boolean;
}

export const SkipLink = forwardRef(
  (
    { children, className, visibleOnFocus, ...restProps }: PropsWithChildren<SkipLinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <UtrechtSkipLink
      className={clsx('rhc-skip-link', { 'rhc-skip-link--visible-on-focus': visibleOnFocus }, className)}
      ref={ref}
      {...restProps}
    >
      {children}
    </UtrechtSkipLink>
  ),
);

SkipLink.displayName = 'SkipLink';
