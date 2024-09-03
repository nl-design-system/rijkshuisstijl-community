import {
  Icon,
  Link as UtrechtLink,
  type LinkProps as UtrechtLinkProps,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { ExternalLinkIcon } from './icons';

export interface LinkProps extends UtrechtLinkProps {
  external?: boolean;
  externalLabel?: string;
}

export const Link = forwardRef(
  ({ children, className, external, externalLabel, ...restProps }: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <UtrechtLink {...restProps} className={clsx('rhc-link', className)} external={external} ref={ref}>
      {children}
      {external && (
        <>
          <span className="rhc-link__sr-only">{externalLabel}</span>
          <Icon role="img">
            <ExternalLinkIcon />
          </Icon>
        </>
      )}
    </UtrechtLink>
  ),
);

Link.displayName = 'Link';
