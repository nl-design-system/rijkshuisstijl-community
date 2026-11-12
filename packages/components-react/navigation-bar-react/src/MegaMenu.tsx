/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Button, ButtonProps } from '@rijkshuisstijl-community/button-react/no-side-effects';
import { Icon } from '@rijkshuisstijl-community/icon-react/no-side-effects';
import { LinkButton, LinkButtonProps } from '@rijkshuisstijl-community/link-button-react/no-side-effects';
import { Paragraph, ParagraphProps } from '@rijkshuisstijl-community/paragraph-react/no-side-effects';
import { Separator, SeparatorProps } from '@rijkshuisstijl-community/separator-react/no-side-effects';
import clsx from 'clsx';
import { ComponentPropsWithRef, CSSProperties, PropsWithChildren } from 'react';

export const NavBarMegaMenuTrigger = ({ id, className, ...restProps }: LinkButtonProps) => (
  <LinkButton popoverTarget={`${id}-panel`} {...restProps} className={clsx('rhc-nav-bar__link', className)} />
);

NavBarMegaMenuTrigger.displayName = 'NavBarMegaMenuTrigger';

export interface NavBarMegaMenuPanelProps extends ComponentPropsWithRef<'div'> {
  onOpenChange?: (open: boolean) => void;
}

export const NavBarMegaMenuPanel = ({
  id,
  className,
  style,
  children,
  onOpenChange,
  onToggle,
  ...restProps
}: PropsWithChildren<NavBarMegaMenuPanelProps>) => (
  <div
    className={clsx('rhc-nav-bar__megamenu-panel', className)}
    id={`${id}-panel`}
    popover="auto"
    style={
      {
        positionAnchor: `--${id}-anchor`,
        '--rhc-nav-bar-megamenu-language-nav-anchor': `--${id}-language-nav`,
        ...style,
      } as CSSProperties
    }
    onToggle={(event) => {
      onOpenChange?.(event.newState === 'open');
      onToggle?.(event);
    }}
    {...restProps}
  >
    <div className="rhc-nav-bar__megamenu">{children}</div>
  </div>
);

NavBarMegaMenuPanel.displayName = 'NavBarMegaMenuPanel';

export const NavBarMegaMenuTagline = ({ children, className, ...restProps }: ParagraphProps) => (
  <Paragraph className={clsx('rhc-nav-bar__megamenu-tagline', className)} {...restProps}>
    {children}
  </Paragraph>
);

NavBarMegaMenuTagline.displayName = 'NavBarMegaMenuTagline';

export type NavBarMegaMenuSeparatorProps = SeparatorProps;

export const NavBarMegaMenuSeparator = ({ className, ...restProps }: NavBarMegaMenuSeparatorProps) => (
  <Separator {...restProps} className={clsx('rhc-nav-bar__megamenu-separator', className)} />
);

NavBarMegaMenuSeparator.displayName = 'NavBarMegaMenuSeparator';

export const NavBarMegaMenuClose = ({ id, className, children, ...restProps }: ButtonProps) => (
  <Button
    aria-label="Sluit menu"
    popoverTarget={`${id}-panel`}
    popoverTargetAction="hide"
    purpose="subtle"
    {...restProps}
    className={clsx('rhc-nav-bar__megamenu__btn-close', className)}
  >
    {children ?? (
      <>
        <Icon icon="kruis" />
        {'Sluiten'}
      </>
    )}
  </Button>
);

NavBarMegaMenuClose.displayName = 'NavBarMegaMenuClose';
