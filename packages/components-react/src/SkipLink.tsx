import {
  SkipLink as NLSkipLink,
  type SkipLinkProps as NLSkipLinkProps,
} from '@nl-design-system-candidate/skip-link-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

export interface SkipLinkProps extends NLSkipLinkProps {
  ref?: Ref<HTMLAnchorElement>;
}

export const SkipLink = ({ ref, children, className, ...restProps }: PropsWithChildren<SkipLinkProps>) => (
  <NLSkipLink className={clsx('rhc-skip-link', className)} ref={ref} {...restProps}>
    {children}
  </NLSkipLink>
);

SkipLink.displayName = 'SkipLink';
