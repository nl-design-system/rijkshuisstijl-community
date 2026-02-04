/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */

import {
  type BreadcrumbNavProps,
  BreadcrumbNavSeparator,
  type BreadcrumbNavSeparatorProps,
  BreadcrumbNav as UtrechtBreadcrumbNav,
  BreadcrumbNavLink as UtrechtBreadcrumbNavLink,
  type BreadcrumbNavLinkProps as UtrechtBreadcrumbNavLinkProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Ref } from 'react';

export { type BreadcrumbNavProps, BreadcrumbNavSeparator, type BreadcrumbNavSeparatorProps };

export interface BreadcrumbNavLinkProps extends UtrechtBreadcrumbNavLinkProps {
  active?: boolean;
  ref?: Ref<HTMLAnchorElement>;
}

export const BreadcrumbNavLink = ({ children, className, active, current, ...restProps }: BreadcrumbNavLinkProps) => {
  return (
    <UtrechtBreadcrumbNavLink
      current={current}
      {...restProps}
      className={clsx({
        'rhc-breadcrumb-nav__link--active': active,
        'rhc-breadcrumb-nav__link--current': current,
        className,
      })}
    >
      {children}
    </UtrechtBreadcrumbNavLink>
  );
};

BreadcrumbNavLink.displayName = 'BreadcrumbNavLink';

export const BreadcrumbNav = ({ className, ...restProps }: BreadcrumbNavProps) => (
  <UtrechtBreadcrumbNav className={clsx('rhc-breadcrumb-nav', className)} {...restProps} />
);

BreadcrumbNav.displayName = 'BreadcrumbNav';
