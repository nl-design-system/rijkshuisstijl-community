import {
  SkipLink as UtrechtSkipLink,
  type SkipLinkProps as UtrechtSkipLinkProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

export interface SkipLinkProps extends UtrechtSkipLinkProps {
  visibleOnFocus?: boolean;
  ref?: Ref<HTMLAnchorElement>;
}

export const SkipLink = ({
  ref,
  children,
  className,
  visibleOnFocus,
  ...restProps
}: PropsWithChildren<SkipLinkProps>) => (
  <UtrechtSkipLink
    className={clsx('rhc-skip-link', { 'rhc-skip-link--visible-on-focus': visibleOnFocus }, className)}
    ref={ref}
    {...restProps}
  >
    {children}
  </UtrechtSkipLink>
);

SkipLink.displayName = 'SkipLink';
