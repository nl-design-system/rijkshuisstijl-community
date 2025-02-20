import {
  SkipLink as NLSkipLink,
  type SkipLinkProps as NLSkipLinkProps,
} from '@nl-design-system-candidate/skip-link-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

export interface SkipLinkProps extends NLSkipLinkProps {
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
  <NLSkipLink
    className={clsx('rhc-skip-link', { 'rhc-skip-link--visible-on-focus': visibleOnFocus }, className)}
    ref={ref}
    {...restProps}
  >
    {children}
  </NLSkipLink>
);

SkipLink.displayName = 'SkipLink';
