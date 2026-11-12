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
import { ComponentPropsWithRef, CSSProperties } from 'react';

/*
 * Het megamenu werkt zonder JavaScript via de native Popover API. Trigger en Close
 * vinden het paneel via `target`, net als `popovertarget` in HTML: geef het paneel
 * een `id` en geef dezelfde waarde als `target` aan de Trigger en de Close.
 */

export type NavBarMegaMenuProps = ComponentPropsWithRef<'li'>;

/**
 * Een item voor in `NavBar.Start` of `NavBar.End` dat de Trigger en het Panel bevat.
 * Op brede schermen opent de Trigger het Panel onder de balk; op smalle schermen is de
 * Trigger verborgen en staat de inhoud van het Panel direct in het menu van de `NavBar`.
 */
const Root = ({ className, ...restProps }: NavBarMegaMenuProps) => (
  <li {...restProps} className={clsx('rhc-nav-bar__item', 'rhc-nav-bar__megamenu-item', className)} />
);

Root.displayName = 'NavBar.MegaMenu';

export interface NavBarMegaMenuTriggerProps extends Omit<LinkButtonProps, 'popoverTarget'> {
  /** De `id` van het `NavBar.MegaMenu.Panel` dat deze knop opent. */
  target: string;
}

/** De knop die het paneel opent en sluit. Het icoon wisselt via CSS mee met de open-state. */
const Trigger = ({ target, className, children, ...restProps }: NavBarMegaMenuTriggerProps) => (
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

Trigger.displayName = 'NavBar.MegaMenu.Trigger';

export interface NavBarMegaMenuPanelProps extends ComponentPropsWithRef<'div'> {
  /** Uniek id, waarnaar `target` van de Trigger en Close verwijst. */
  id: string;
}

/** Het uitklappaneel met de inhoud van het megamenu. */
const Panel = ({ id, className, style, children, ...restProps }: NavBarMegaMenuPanelProps) => (
  <div
    {...restProps}
    className={clsx('rhc-nav-bar__megamenu-panel', className)}
    id={id}
    popover="auto"
    style={{ '--rhc-nav-bar-megamenu-language-nav-anchor': `--${id}-language-nav`, ...style } as CSSProperties}
  >
    <div className="rhc-nav-bar__megamenu">{children}</div>
  </div>
);

Panel.displayName = 'NavBar.MegaMenu.Panel';

export type NavBarMegaMenuCloseProps = Omit<ButtonProps, 'popoverTarget' | 'popoverTargetAction'> & {
  /** De `id` van het `NavBar.MegaMenu.Panel` dat deze knop sluit. */
  target: string;
};

/** Sluitknop voor in het paneel. Alleen zichtbaar op brede schermen. */
const Close = ({ target, className, children, ...restProps }: NavBarMegaMenuCloseProps) => (
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

Close.displayName = 'NavBar.MegaMenu.Close';

export type NavBarMegaMenuTaglineProps = ParagraphProps;

/** Optionele introductietekst boven de inhoud van het megamenu. */
const Tagline = ({ className, ...restProps }: NavBarMegaMenuTaglineProps) => (
  <Paragraph {...restProps} className={clsx('rhc-nav-bar__megamenu-tagline', className)} />
);

Tagline.displayName = 'NavBar.MegaMenu.Tagline';

export type NavBarMegaMenuSeparatorProps = SeparatorProps;

/** Scheidingslijn, bijvoorbeeld tussen de tagline en de rest van de inhoud. */
const MegaMenuSeparator = ({ className, ...restProps }: NavBarMegaMenuSeparatorProps) => (
  <Separator {...restProps} className={clsx('rhc-nav-bar__megamenu-separator', className)} />
);

MegaMenuSeparator.displayName = 'NavBar.MegaMenu.Separator';

export const NavBarMegaMenu = Object.assign(Root, {
  Trigger,
  Panel,
  Close,
  Tagline,
  Separator: MegaMenuSeparator,
});
