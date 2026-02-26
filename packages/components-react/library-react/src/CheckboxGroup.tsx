/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import clsx from 'clsx';
import { Children, HTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react';

const hasManyChildren = (children: ReactNode) => {
  return Children.count(children) > 1;
};

export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

export const CheckboxGroup = ({ ref, children, className, ...restProps }: PropsWithChildren<CheckboxGroupProps>) => {
  return (
    <div
      className={clsx('rhc-checkbox-group', className)}
      ref={ref}
      role={hasManyChildren(children) ? 'group' : undefined}
      {...restProps}
    >
      {children}
    </div>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
