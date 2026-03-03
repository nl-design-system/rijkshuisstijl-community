/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { NumberBadge as NlNumberBadge } from '@nl-design-system-candidate/number-badge-react';
import clsx from 'clsx';
import { type ComponentPropsWithoutRef } from 'react';

export type NumberBadgeProps = ComponentPropsWithoutRef<typeof NlNumberBadge>;

export const NumberBadge = ({ className, ...restProps }: NumberBadgeProps) => {
  return <NlNumberBadge className={clsx('rhc-number-badge', className)} {...restProps} />;
};

NumberBadge.displayName = 'NumberBadge';
