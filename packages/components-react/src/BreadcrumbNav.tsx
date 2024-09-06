import {
  BreadcrumbNav,
  type BreadcrumbNavProps,
  BreadcrumbNavSeparator,
  type BreadcrumbNavSeparatorProps,
  BreadcrumbNavLink as UtrechtBreadcrumbNavLink,
  type BreadcrumbNavLinkProps as UtrechtBreadcrumbNavLinkProps,
} from '@utrecht/component-library-react/';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { Icon } from './';

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
              <Arrow />
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

const Arrow = () => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M5 12l14 0" />
    <path d="M5 12l4 4" />
    <path d="M5 12l4 -4" />
  </svg>
);
