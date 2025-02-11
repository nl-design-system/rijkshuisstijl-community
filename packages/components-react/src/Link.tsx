import { Link as UtrechtLink, type LinkProps as UtrechtLinkProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';
import { Icon } from './Icon';

export interface LinkProps extends UtrechtLinkProps {
  external?: boolean;
  externalLabel?: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
}

export const Link = ({
  ref,
  children,
  className,
  external,
  externalLabel,
  ...restProps
}: PropsWithChildren<LinkProps>) => (
  <UtrechtLink {...restProps} className={clsx('rhc-link', className)} external={external} ref={ref}>
    {children}
    {external && (
      <>
        <span className="rhc-link__sr-only">{externalLabel}</span>
        <Icon icon={'externe-link'} />
      </>
    )}
  </UtrechtLink>
);

Link.displayName = 'Link';
