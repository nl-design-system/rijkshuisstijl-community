import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  organisation: string;
  subtitle?: string;
}

export const Logo = forwardRef(
  (
    { children, className, organisation, subtitle, ...restProps }: PropsWithChildren<LogoProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <figure className={clsx('rhc-logo', className)} ref={ref} {...restProps}>
        <div className="rhc-logo__img">{children}</div>
        <figcaption className="rhc-logo__caption">
          <p className="rhc-logo__title">{organisation}</p>
          {subtitle && <p className="rhc-logo__subtitle">{subtitle}</p>}
        </figcaption>
      </figure>
    );
  },
);

Logo.displayName = 'Logo';
