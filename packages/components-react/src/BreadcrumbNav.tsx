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
  ...restProps
}: PropsWithChildren<BreadcrumbNavLinkProps>) => {
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
      {children}
    </UtrechtBreadcrumbNavLink>
  );
};

BreadcrumbNavLink.displayName = 'BreadcrumbNavLink';
