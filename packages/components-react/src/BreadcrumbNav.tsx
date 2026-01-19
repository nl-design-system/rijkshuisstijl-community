/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */

import {
  BreadcrumbNav,
  type BreadcrumbNavProps,
  BreadcrumbNavSeparator,
  type BreadcrumbNavSeparatorProps,
  BreadcrumbNavLink as UtrechtBreadcrumbNavLink,
  type BreadcrumbNavLinkProps as UtrechtBreadcrumbNavLinkProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref } from 'react';

export { BreadcrumbNav, type BreadcrumbNavProps, BreadcrumbNavSeparator, type BreadcrumbNavSeparatorProps };

export interface BreadcrumbNavLinkProps extends UtrechtBreadcrumbNavLinkProps {
  active?: boolean;
  ref?: Ref<HTMLAnchorElement>;
}

export const BreadcrumbNavLink = ({
  ref,
  children,
  className,
  href,
  active,
  current,
  ...restProps
}: PropsWithChildren<BreadcrumbNavLinkProps>) => {
  return (
    <UtrechtBreadcrumbNavLink
      href={href}
      className={clsx({
        'rhc-breadcrumb-nav__link--active': active,
        'rhc-breadcrumb-nav__link--current': current,
        className,
      })}
      {...restProps}
      ref={ref}
    >
      {children}
    </UtrechtBreadcrumbNavLink>
  );
};

BreadcrumbNavLink.displayName = 'BreadcrumbNavLink';
