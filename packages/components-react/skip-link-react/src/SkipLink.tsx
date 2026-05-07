/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import {
  SkipLink as NLSkipLink,
  type SkipLinkProps as NLSkipLinkProps,
} from '@nl-design-system-candidate/skip-link-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

export interface SkipLinkProps extends NLSkipLinkProps {
  ref?: Ref<HTMLAnchorElement>;
}

export const SkipLink = ({ className, ...restProps }: PropsWithChildren<SkipLinkProps>) => (
  <NLSkipLink className={clsx('rhc-skip-link', className)} {...restProps} />
);

SkipLink.displayName = 'SkipLink';
