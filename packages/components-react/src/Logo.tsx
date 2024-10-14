/**
 * Copyright (c) 2023 Rijksoverheid
 *
 * Er gelden auteursrechten op het logo en de huisstijl. De Rijksoverheid heeft
 * het beeldmerk als hoogheidsteken gedeponeerd. Daardoor kan zij actie
 * ondernemen tegen een (vermoedelijke) inbreuk op deze rechten. Het gaat dan
 * om het gebruik en de toepassing van het ontwerp van het logo en de
 * huisstijl. Waaronder ook de lettertypes RijksoverheidSerif en
 * RijksoverheidSans.
 */

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
