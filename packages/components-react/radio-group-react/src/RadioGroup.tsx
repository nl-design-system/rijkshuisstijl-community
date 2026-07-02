/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import clsx from 'clsx';
import { Children, HTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react';

const hasManyChildren = (children: ReactNode) => {
  return Children.count(children) > 1;
};

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

export const RadioGroup = ({ ref, children, className, ...restProps }: PropsWithChildren<RadioGroupProps>) => {
  return (
    <div
      className={clsx('rhc-radio-group rhc-radio', className)}
      ref={ref}
      role={hasManyChildren(children) ? 'group' : undefined}
      {...restProps}
    >
      {children}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';
