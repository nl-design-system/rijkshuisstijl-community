/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react';

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  organisation?: ReactNode;
  subtitle?: ReactNode;
  ref?: Ref<HTMLDivElement>;
  href?: string;
  hrefProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

export const Logo = ({
  ref,
  children,
  className,
  organisation,
  subtitle,
  href,
  hrefProps,
  ...restProps
}: PropsWithChildren<LogoProps>) => {
  const content = (
    <>
      <div className="rhc-logo__image">{children}</div>
      {organisation ? (
        <figcaption className="rhc-logo__caption">
          <p className="rhc-logo__title">{organisation}</p>
          {subtitle && <p className="rhc-logo__subtitle">{subtitle}</p>}
        </figcaption>
      ) : null}
    </>
  );

  return (
    <figure className={clsx('rhc-logo', className)} ref={ref} {...restProps}>
      {href ? (
        <a {...hrefProps} className={clsx('rhc-logo__link', hrefProps?.className)} href={href}>
          {content}
        </a>
      ) : (
        content
      )}
    </figure>
  );
};

Logo.displayName = 'Logo';
