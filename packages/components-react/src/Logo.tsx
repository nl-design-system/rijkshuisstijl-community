import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  organisation: ReactNode;
  subtitle?: ReactNode;
}

export const Logo = forwardRef(
  (
    { children, className, organisation, subtitle, ...restProps }: PropsWithChildren<LogoProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <figure className={clsx('rhc-logo', className)} ref={ref} {...restProps}>
        <div className="rhc-logo__image">{children}</div>
        <figcaption className="rhc-logo__caption">
          <p className="rhc-logo__title">{organisation}</p>
          {subtitle && <p className="rhc-logo__subtitle">{subtitle}</p>}
        </figcaption>
      </figure>
    );
  },
);

Logo.displayName = 'Logo';
