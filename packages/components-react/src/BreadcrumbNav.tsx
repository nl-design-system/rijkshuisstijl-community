import {
  BreadcrumbNav,
  type BreadcrumbNavProps,
  BreadcrumbNavSeparator,
  type BreadcrumbNavSeparatorProps,
  BreadcrumbNavLink as UtrechtBreadcrumbNavLink,
  type BreadcrumbNavLinkProps as UtrechtBreadcrumbNavLinkProps,
} from '@utrecht/component-library-react/';
import { Icon } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { ChevronRightIcon } from './icons';

export { BreadcrumbNav, type BreadcrumbNavProps, BreadcrumbNavSeparator, type BreadcrumbNavSeparatorProps };

export interface BreadcrumbNavLinkProps extends UtrechtBreadcrumbNavLinkProps {
  arrow?: boolean;
  active?: boolean;
}

export const BreadcrumbNavLink = forwardRef(
  (
    { children, className, href, arrow, active, ...restProps }: PropsWithChildren<BreadcrumbNavLinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <UtrechtBreadcrumbNavLink
        href={href}
        className={clsx({
          'utrecht-breadcrumb-nav__link--active': active,
          className,
        })}
        {...restProps}
        ref={ref}
      >
        {arrow ? (
          <span className="utrecht-breadcrumb-nav__link--arrow-wrapper">
            <Icon>
              <ChevronRightIcon />
            </Icon>
            {children}
          </span>
        ) : (
          children
        )}
      </UtrechtBreadcrumbNavLink>
    );
  },
);

BreadcrumbNavLink.displayName = 'BreadcrumbNavLink';
