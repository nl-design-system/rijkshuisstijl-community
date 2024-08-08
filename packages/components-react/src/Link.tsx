import { IconExternalLink } from '@tabler/icons-react';
import {
  Icon,
  Link as UtrechtLink,
  type LinkProps as UtrechtLinkProps,
} from '@utrecht/component-library-react/dist/css-module';
import { ForwardedRef, forwardRef } from 'react';
import '@rijkshuisstijl-community/components-css/index.scss';

interface RhcLinkProps extends UtrechtLinkProps {
  externalLabel?: string;
}

export const Link = forwardRef(
  ({ children, externalLabel, ...restProps }: RhcLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <UtrechtLink {...restProps} ref={ref}>
      {children}
      {restProps.external && (
        <Icon role="img" aria-label={externalLabel}>
          <IconExternalLink />
        </Icon>
      )}
    </UtrechtLink>
  ),
);

Link.displayName = 'Link';
