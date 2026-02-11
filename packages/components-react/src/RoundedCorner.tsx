/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import clsx from 'clsx';
import { ComponentPropsWithoutRef, ElementType } from 'react';
import type { OverwriteTokens } from './types/tokenUtils';

type Size = 'sm' | 'md' | 'lg';
type Position = 'start-start' | 'start-end' | 'end-start' | 'end-end';

export type RoundedCornerProps<T extends ElementType> = {
  size?: Size; // We need to make size optional as otherwise --rhc-rounded-corner-border-radius will always be overridden by size class
  position: Position;
  as?: T;
  overwriteTokens?: OverwriteTokens<'--rhc-rounded-corner-', '--rhc-rounded-corner-border-radius'>;
} & ComponentPropsWithoutRef<T>;

export const RoundedCorner = <T extends ElementType = 'div'>({
  size,
  position,
  as,
  overwriteTokens,
  ...props
}: RoundedCornerProps<T>) => {
  const className = clsx(
    'rhc-rounded-corner',
    {
      [`rhc-rounded-corner--size-${size}`]: size,
      [`rhc-rounded-corner--position-${position}`]: position,
    },
    props['className'],
  );
  const Component = as || 'div';
  return <Component {...props} className={className} style={{ ...overwriteTokens, ...props['style'] }} />;
};
