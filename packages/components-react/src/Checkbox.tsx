/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */
import { type CheckboxProps, Checkbox as UtrechtCheckbox } from '@utrecht/component-library-react';
import clsx from 'clsx';

export type { CheckboxProps } from '@utrecht/component-library-react';
export const Checkbox = ({ className, ...restProps }: CheckboxProps) => {
  return <UtrechtCheckbox className={clsx('rhc-checkbox', className)} {...restProps} />;
};

Checkbox.displayName = 'Checkbox';
