import { Link as UtrechtLink, type LinkProps as UtrechtLinkProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Icon } from './Icon';

export interface LinkProps extends UtrechtLinkProps {
  external?: boolean;
  externalLabel?: ReactNode;
}

export const Link = forwardRef(
  (
    { children, className, external, externalLabel, ...restProps }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <UtrechtLink {...restProps} className={clsx('rhc-link', className)} external={external} ref={ref}>
      {children}
      {external && (
        <>
          <span className="rhc-link__sr-only">{externalLabel}</span>
          <Icon icon={'externe-link'} />
        </>
      )}
    </UtrechtLink>
  ),
);

Link.displayName = 'Link';
