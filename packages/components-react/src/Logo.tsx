/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react';

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  organisation: ReactNode;
  subtitle?: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

export const Logo = ({
  ref,
  children,
  className,
  organisation,
  subtitle,
  ...restProps
}: PropsWithChildren<LogoProps>) => {
  return (
    <figure className={clsx('rhc-logo', className)} ref={ref} {...restProps}>
      <div className="rhc-logo__image">{children}</div>
      <figcaption className="rhc-logo__caption">
        <p className="rhc-logo__title">{organisation}</p>
        {subtitle && <p className="rhc-logo__subtitle">{subtitle}</p>}
      </figcaption>
    </figure>
  );
};

Logo.displayName = 'Logo';
