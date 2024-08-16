import {
  Icon,
  Link as UtrechtLink,
  type LinkProps as UtrechtLinkProps,
} from '@utrecht/component-library-react/dist/css-module';
import { ForwardedRef, forwardRef } from 'react';
import '@rijkshuisstijl-community/components-css/index.scss';

const IconExternalLink = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C11.4477 2 11 1.55228 11 1C11 0.447715 11.4477 0 12 0H17C17.5523 0 18 0.447715 18 1V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6V3.41421L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L14.5858 2H12ZM0 6C0 4.34315 1.34315 3 3 3H8C8.55228 3 9 3.44772 9 4C9 4.55228 8.55228 5 8 5H3C2.44772 5 2 5.44772 2 6V15C2 15.5523 2.44772 16 3 16H12C12.5523 16 13 15.5523 13 15V10C13 9.44771 13.4477 9 14 9C14.5523 9 15 9.44771 15 10V15C15 16.6569 13.6569 18 12 18H3C1.34315 18 0 16.6569 0 15V6Z"
      fill="#01689B"
    />
  </svg>
);

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
