/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Link as CandidateLink, type LinkProps as CandidateLinkProps } from '@nl-design-system-candidate/link-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

export interface LinkProps extends Omit<CandidateLinkProps, 'disabled'> {
  ref?: Ref<HTMLAnchorElement>;
  inline?: boolean;
}

export const Link = ({ ref, children, className, inline, ...restProps }: PropsWithChildren<LinkProps>) => (
  <CandidateLink
    {...restProps}
    className={clsx('rhc-link', { 'rhc-link--inline': inline }, className)}
    disabled={false}
    ref={ref}
  >
    {children}
  </CandidateLink>
);

Link.displayName = 'Link';
