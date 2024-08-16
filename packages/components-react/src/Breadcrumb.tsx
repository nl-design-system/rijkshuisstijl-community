import {
  BreadcrumbNav as UtrechtBreadcrumbNav,
  // BreadcrumbNavLink as UtrechtBreadcrumbNavLink,
  // type BreadcrumbNavLinkProps,
  // Link,
} from '@utrecht/component-library-react/dist/css-module';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export const BreadcrumbNav = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLOListElement>>,
    ref: ForwardedRef<HTMLOListElement>,
  ) => {
    return (
      <UtrechtBreadcrumbNav className={className} {...restProps} ref={ref}>
        {children}
      </UtrechtBreadcrumbNav>
    );
  },
);

BreadcrumbNav.displayName = 'BreadcrumbNav';

// export const BreadcrumbNavLink = forwardRef(
//   (
//     {
//       children,
//       className,
//       href,
//       arrow,
//       ...restProps
//     }: PropsWithChildren<
//       BreadcrumbNavLinkProps & {
//         arrow: boolean;
//       }
//     >,
//     ref: ForwardedRef<HTMLAnchorElement>,
//   ) => {
//     return (
//       <UtrechtBreadcrumbNavLink href={href} className={className} {...restProps} ref={ref}>
//         {children}
//       </UtrechtBreadcrumbNavLink>
//     );
//   },
// );

// BreadcrumbNavLink.displayName = 'BreadcrumbNavLink';
