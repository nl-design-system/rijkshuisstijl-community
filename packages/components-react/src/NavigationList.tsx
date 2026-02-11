/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import clsx from 'clsx';
import { HTMLAttributes, Ref } from 'react';

export interface NavigationListProps extends HTMLAttributes<HTMLUListElement> {
  ref?: Ref<HTMLUListElement>;
}

export const NavigationList = ({ ref, children, className, ...restProps }: NavigationListProps) => {
  return (
    <ul
      aria-label="Navigation List"
      className={clsx('rhc-navigation-list rhc-navigation-list--container-small', className)}
      ref={ref}
      role={'list'}
      {...restProps}
    >
      {children}
    </ul>
  );
};

NavigationList.displayName = 'NavigationList';
