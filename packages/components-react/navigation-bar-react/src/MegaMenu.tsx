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
import { ComponentPropsWithRef, FocusEvent, ReactNode } from 'react';
import { hidePopoverOnFocusOut } from './hidePopoverOnFocusOut';

/** `Omit` per lid van een union, zodat een discriminated union intact blijft. */
type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;

export type NavBarMegaMenuProps = ComponentPropsWithRef<'li'>;

export const NavBarMegaMenu = ({ className, ...restProps }: NavBarMegaMenuProps) => (
  <li {...restProps} className={clsx('rhc-nav-bar__item', 'rhc-nav-bar__megamenu-item', className)} />
);

NavBarMegaMenu.displayName = 'NavBarMegaMenu';

export interface NavBarMegaMenuTriggerProps extends Omit<LinkButtonProps, 'popoverTarget'> {
  /** De `id` van het `NavBarMegaMenuPanel` dat deze knop opent. */
  target: string;
}

/** De knop die het paneel opent en sluit. Het icoon wisselt via CSS mee met de open-state. */
export const NavBarMegaMenuTrigger = ({ target, className, children, ...restProps }: NavBarMegaMenuTriggerProps) => (
  <LinkButton
    {...restProps}
    className={clsx('rhc-nav-bar__link', 'rhc-nav-bar__megamenu-trigger', className)}
    popoverTarget={target}
  >
    <Icon className="rhc-nav-bar__megamenu-icon-open" icon="menu" />
    <Icon className="rhc-nav-bar__megamenu-icon-close" icon="kruis" />
    <span className="rhc-nav-bar__label">{children}</span>
  </LinkButton>
);

NavBarMegaMenuTrigger.displayName = 'NavBarMegaMenuTrigger';

export interface NavBarMegaMenuPanelProps extends ComponentPropsWithRef<'div'> {
  /** Uniek id, waarnaar `target` van de Trigger en Close verwijst. */
  id: string;
}

/** Het uitklappaneel met de inhoud van het megamenu. Sluit als de focus het paneel verlaat. */
export const NavBarMegaMenuPanel = ({ id, className, children, onBlur, ...restProps }: NavBarMegaMenuPanelProps) => (
  <div
    {...restProps}
    className={clsx('rhc-nav-bar__megamenu-panel', className)}
    id={id}
    popover="auto"
    onBlur={(event: FocusEvent<HTMLDivElement>) => {
      onBlur?.(event);
      hidePopoverOnFocusOut(event);
    }}
  >
    <div className="rhc-nav-bar__megamenu">{children}</div>
  </div>
);

NavBarMegaMenuPanel.displayName = 'NavBarMegaMenuPanel';

/** De Close heeft altijd children (standaard icoon + "Sluiten"), dus geen `label`. */
export type NavBarMegaMenuCloseProps = DistributiveOmit<
  Exclude<ButtonProps, { label: ReactNode }>,
  'label' | 'popoverTarget' | 'popoverTargetAction'
> & {
  /** De `id` van het `NavBarMegaMenuPanel` dat deze knop sluit. */
  target: string;
};

/** Sluitknop voor in het paneel. Alleen zichtbaar op brede schermen. */
export const NavBarMegaMenuClose = ({ target, className, children, ...restProps }: NavBarMegaMenuCloseProps) => (
  <Button
    purpose="subtle"
    {...restProps}
    className={clsx('rhc-nav-bar__megamenu__btn-close', className)}
    popoverTarget={target}
    popoverTargetAction="hide"
  >
    {children ?? (
      <>
        <Icon icon="kruis" />
        Sluiten
      </>
    )}
  </Button>
);

NavBarMegaMenuClose.displayName = 'NavBarMegaMenuClose';

export type NavBarMegaMenuTaglineProps = ParagraphProps;

/** Optionele introductietekst boven de inhoud van het megamenu. */
export const NavBarMegaMenuTagline = ({ className, ...restProps }: NavBarMegaMenuTaglineProps) => (
  <Paragraph {...restProps} className={clsx('rhc-nav-bar__megamenu-tagline', className)} />
);

NavBarMegaMenuTagline.displayName = 'NavBarMegaMenuTagline';

export type NavBarMegaMenuSeparatorProps = SeparatorProps;

/** Scheidingslijn, bijvoorbeeld tussen de tagline en de rest van de inhoud. */
export const NavBarMegaMenuSeparator = ({ className, ...restProps }: NavBarMegaMenuSeparatorProps) => (
  <Separator {...restProps} className={clsx('rhc-nav-bar__megamenu-separator', className)} />
);

NavBarMegaMenuSeparator.displayName = 'NavBarMegaMenuSeparator';
