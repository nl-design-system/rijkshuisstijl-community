import { Link as CandidateLink, type LinkProps as CandidateLinkProps } from '@nl-design-system-candidate/link-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';
import { Icon } from './Icon';

export interface LinkProps extends CandidateLinkProps {
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
  <CandidateLink {...restProps} className={clsx('rhc-link', className)} ref={ref}>
    {children}
    {external && (
      <>
        <span className="rhc-link__sr-only">{externalLabel}</span>
        <Icon icon={'externe-link'} />
      </>
    )}
  </CandidateLink>
);

Link.displayName = 'Link';
