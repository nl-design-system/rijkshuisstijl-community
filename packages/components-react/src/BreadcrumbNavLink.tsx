import {
  Icon,
  BreadcrumbNavLink as UtrechtBreadcrumbNavLink,
  type BreadcrumbNavLinkProps as UtrechtBreadcrumbNavLinkProps,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

interface BreadcrumbNavLinkProps extends UtrechtBreadcrumbNavLinkProps {
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
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l14 0" />
    <path d="M5 12l4 4" />
    <path d="M5 12l4 -4" />
  </svg>
);
