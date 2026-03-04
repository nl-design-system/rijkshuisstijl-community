/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { NumberBadge as NlNumberBadge, NumberBadgeProps } from '@nl-design-system-candidate/number-badge-react';
import clsx from 'clsx';

export type { NumberBadgeProps } from '@nl-design-system-candidate/number-badge-react';

export const NumberBadge = ({ className, ...restProps }: NumberBadgeProps) => {
  return <NlNumberBadge className={clsx('rhc-number-badge', className)} {...restProps} />;
};

NumberBadge.displayName = 'NumberBadge';
