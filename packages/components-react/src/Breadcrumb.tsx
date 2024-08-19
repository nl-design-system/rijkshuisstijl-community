import { IconArrowLeft } from '@tabler/icons-react';
import {
  BreadcrumbNavLinkProps,
  Icon,
  BreadcrumbNav as UtrechtBreadcrumbNav,
  BreadcrumbNavLink as UtrechtBreadcrumbNavLink,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

interface BreadcrumbNavProps extends HTMLAttributes<HTMLOListElement> {
  active?: boolean;
}

export const BreadcrumbNav = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<BreadcrumbNavProps>,
    ref: ForwardedRef<HTMLOListElement>,
  ) => {
    return (
      <UtrechtBreadcrumbNav className={className} ref={ref} {...restProps}>
        {children}
      </UtrechtBreadcrumbNav>
    );
  },
);

BreadcrumbNav.displayName = 'BreadcrumbNav';

export const BreadcrumbNavLink = forwardRef(
  (
    {
      children,
      className,
      href,
      arrow,
      active,
      ...restProps
    }: PropsWithChildren<
      BreadcrumbNavLinkProps & {
        arrow?: boolean;
        active?: boolean;
      }
    >,
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
              <IconArrowLeft />
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
