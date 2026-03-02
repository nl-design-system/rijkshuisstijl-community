/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import {
  BreadcrumbNavSeparator,
  type BreadcrumbNavSeparatorProps,
  BreadcrumbNav as UtrechtBreadcrumbNav,
  BreadcrumbNavLink as UtrechtBreadcrumbNavLink,
  type BreadcrumbNavLinkProps as UtrechtBreadcrumbNavLinkProps,
  type BreadcrumbNavProps as UtrechtBreadcrumbNavProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Ref } from 'react';

type BreadcrumbNavProps = UtrechtBreadcrumbNavProps & {
  ref?: Ref<HTMLOListElement>;
};

export { type BreadcrumbNavProps, BreadcrumbNavSeparator, type BreadcrumbNavSeparatorProps };

export interface BreadcrumbNavLinkProps extends UtrechtBreadcrumbNavLinkProps {
  active?: boolean;
  ref?: Ref<HTMLAnchorElement>;
}

export const BreadcrumbNavLink = ({ children, className, active, current, ...restProps }: BreadcrumbNavLinkProps) => (
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

BreadcrumbNavLink.displayName = 'BreadcrumbNavLink';

export const BreadcrumbNav = ({ className, ...restProps }: BreadcrumbNavProps) => (
  <UtrechtBreadcrumbNav className={clsx('rhc-breadcrumb-nav', className)} {...restProps} />
);

BreadcrumbNav.displayName = 'BreadcrumbNav';
