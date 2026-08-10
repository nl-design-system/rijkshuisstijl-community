/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import {
  Separator as UtrechtSeparator,
  SeparatorProps as UtrechtSeparatorProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Ref } from 'react';

export interface SeparatorProps extends UtrechtSeparatorProps {
  invisible?: boolean;
  ref?: Ref<HTMLHRElement>;
}

export const Separator = ({ className, ref, ...restProps }: SeparatorProps) => {
  return <UtrechtSeparator className={clsx('rhc-separator', className)} ref={ref} {...restProps} />;
};

Separator.displayName = 'Separator';
