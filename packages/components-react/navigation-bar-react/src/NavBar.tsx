/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Button } from '@rijkshuisstijl-community/button-react/no-side-effects';
import { FocusTrap } from '@rijkshuisstijl-community/focus-trap/no-side-effects';
import { Heading, HeadingLevel } from '@rijkshuisstijl-community/heading-react/no-side-effects';
import { Icon, IconProps } from '@rijkshuisstijl-community/icon-react/no-side-effects';
import { LinkButton } from '@rijkshuisstijl-community/link-button-react/no-side-effects';
import { LinkList, LinkListLink } from '@rijkshuisstijl-community/link-list-react/no-side-effects';
import { Link } from '@rijkshuisstijl-community/link-react/no-side-effects';
import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, ReactElement, ReactNode, Ref, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface NavBarIdentityProps {
  value: ReactNode;
  href: string;
  appearance?: string;
}

const NavBarIdentity = ({ value, href, appearance }: NavBarIdentityProps) => (
  <div className={clsx('rhc-nav-bar__identity', appearance && `rhc-nav-bar__identity--${appearance}`)}>
    <Link href={href} target={href}>
      {value}
    </Link>
  </div>
);

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  identity?: NavBarIdentityProps;
  items?: NavBarItemProps[];
  endItems?: ReactNode;
  megamenu?: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

export interface NavBarLinkProps {
  id: string;
  label: ReactNode;
  href: string;
  target?: string;
}

export interface NavBarItemProps extends NavBarLinkProps, HTMLAttributes<HTMLLIElement> {
  icon?: ReactElement<IconProps>;
  subList?: NavbarSubListProps;
  iconOnly?: boolean;
  currentPage?: boolean;
  id: string;
  ref?: Ref<HTMLLIElement>;
  open?: boolean;
  contentId?: string;
}

interface NavbarSubListProps {
  sections: SectionProps[];
}

export interface SubNavBarProps extends HTMLAttributes<HTMLDivElement> {
  columns: NavBarLinkProps[][];
  ref?: Ref<HTMLDivElement>;
}

export interface NavBarMegaMenuColumnProps {
  id: string;
  heading: ReactNode;
  items: NavBarLinkProps[];
}

export interface NavBarMegaMenuProps extends HTMLAttributes<HTMLDivElement> {
  tagline?: ReactNode;
  columns: NavBarMegaMenuColumnProps[];
  ref?: Ref<HTMLDivElement>;
}

interface SectionProps {
  id: string;
  heading: ReactNode;
  headingLevel?: HeadingLevel;
  items: NavBarLinkProps[];
}

export const NavBarItem = ({
  ref,
  children,
  className,
  href,
  target,
  label,
  icon,
  subList,
  iconOnly = false,
  currentPage = false,
  open = false,
  contentId = '1',
  ...restProps
}: PropsWithChildren<NavBarItemProps>) => {
  const [isItemOpen, setIsItemOpen] = useState(open);

  return (
    <li className={clsx('rhc-nav-bar__item', isItemOpen && 'is-open', className)} ref={ref} {...restProps}>
      {subList ? (
        <LinkButton
          aria-controls={`rhc-nav-bar__item-dropdown-${contentId}`}
          aria-expanded={isItemOpen}
          onClick={() => setIsItemOpen((prev) => !prev)}
        >
          <Icon icon={isItemOpen ? 'chevron-up' : 'chevron-down'} />
          <span className={clsx('rhc-nav-bar__label', iconOnly && 'rhc-nav-bar__label--sr-only')}>{label}</span>
        </LinkButton>
      ) : (
        <Link
          aria-current={currentPage ? 'page' : undefined}
          className={clsx('rhc-nav-bar__link')}
          href={href}
          target={target}
        >
          {icon}
          <span className={clsx('rhc-nav-bar__label', iconOnly && 'rhc-nav-bar__label--sr-only')}>{label}</span>
        </Link>
      )}
      {subList && isItemOpen && (
        <div className="rhc-nav-bar__item-dropdown" id={`rhc-nav-bar__item-dropdown-${contentId}`}>
          {subList.sections.map(({ id, heading, headingLevel = 3, items }) => (
            <div className="rhc-nav-bar__item-dropdown-section" key={id}>
              <Heading className="rhc-nav-bar__item-dropdown-section-title" level={headingLevel}>
                {heading}
              </Heading>
              <ul className="rhc-nav-bar__item-dropdown-section-list">
                {items.map(({ id, href, target, label }) => (
                  <li className="rhc-nav-bar__item-dropdown-section-item" key={id}>
                    <Link href={href} target={target}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {children}
    </li>
  );
};

NavBarItem.displayName = 'NavBarItem';

export const NavBar = ({
  ref,
  children,
  className,
  identity,
  items,
  endItems,
  megamenu,
  ...restProps
}: PropsWithChildren<NavBarProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMainNavOpen, setIsMainNavOpen] = useState(false);
  const [overlayContainer, setOverlayContainer] = useState<Element | null>(null);
  const itemsSlotRef = useRef<HTMLDivElement>(null);
  const endItemsSlotRef = useRef<HTMLDivElement>(null);
  const hamburgerLiRef = useRef<HTMLLIElement>(null);
  const wasOpenRef = useRef(false);
  const isAnyMenuOpen = isOpen || isMainNavOpen;

  useEffect(() => {
    const pageHeader = document.querySelector('.rhc-page-header');
    setOverlayContainer(pageHeader?.parentElement ?? document.body);
  }, []);

  // Op desktop, maak de endItems niet-focusbaar (via tabindex) maar wel klikbaar.
  // Op mobiel worden ze volledig inert (overlay dekt ze af). Houdt rekening met resizing.
  useEffect(() => {
    const endItemsSlot = endItemsSlotRef.current;
    const itemsSlot = itemsSlotRef.current;

    if (!isOpen) {
      itemsSlot?.removeAttribute('inert');
      endItemsSlot?.removeAttribute('inert');
      return;
    }

    const setEndItemsTabIndex = (disabled: boolean) => {
      if (!endItemsSlot) return;
      if (disabled) {
        for (const el of endItemsSlot.querySelectorAll<HTMLElement>('a[href], button, input, select, textarea')) {
          el.dataset['savedTabindex'] = el.getAttribute('tabindex') ?? '';
          el.tabIndex = -1;
        }
      } else {
        for (const el of endItemsSlot.querySelectorAll<HTMLElement>('[data-saved-tabindex]')) {
          const saved = el.dataset['savedTabindex'];
          if (saved === '') {
            el.removeAttribute('tabindex');
          } else {
            el.setAttribute('tabindex', saved!);
          }
          delete el.dataset.savedTabindex;
        }
      }
    };

    const mq = globalThis.matchMedia('(min-width: 769px)');
    const applyInert = () => {
      itemsSlot?.toggleAttribute('inert', mq.matches);
      if (mq.matches) {
        // Desktop: endItems zijn zichtbaar en klikbaar, maar niet in de tab-volgorde
        setEndItemsTabIndex(false);
        endItemsSlot?.removeAttribute('inert');
        setEndItemsTabIndex(true);
      } else {
        // Mobiel: endItems zijn onderdeel van de focus trap, volledig toegankelijk
        setEndItemsTabIndex(false);
        endItemsSlot?.removeAttribute('inert');
      }
    };

    applyInert();
    mq.addEventListener('change', applyInert);

    // Stuck between a rock and a hard place here: without the ignore line, eslint complains that the function sometimes
    // returns something, sometimes nothing. But when putting `return undefined` above instead of just `return`, it will
    // complain about a different rule called `unicorn/no-useless-undefined`.
    // eslint-disable-next-line consistent-return
    return () => {
      mq.removeEventListener('change', applyInert);
      setEndItemsTabIndex(false);
    };
  }, [isOpen]);

  // escape sluit het menu;
  useEffect(() => {
    if (!isAnyMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setIsMainNavOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    // Stuck between a rock and a hard place here: without the ignore line, eslint complains that the function sometimes
    // returns something, sometimes nothing. But when putting `return undefined` above instead of just `return`, it will
    // complain about a different rule called `unicorn/no-useless-undefined`.
    // eslint-disable-next-line consistent-return
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isAnyMenuOpen]);

  // Reset the focustrap naar btn-trigger (hamburger menu) na sluiten van megamenu;
  useEffect(() => {
    if (!isOpen && wasOpenRef.current) {
      hamburgerLiRef.current?.querySelector<HTMLElement>('button, [href]')?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    document.documentElement.classList.toggle('rhc-nav-bar--megamenu-open', isOpen);
    return () => document.documentElement.classList.remove('rhc-nav-bar--megamenu-open');
  }, [isOpen]);

  useEffect(() => {
    document.documentElement.classList.toggle('rhc-nav-bar--main-open', isMainNavOpen);
    return () => document.documentElement.classList.remove('rhc-nav-bar--main-open');
  }, [isMainNavOpen]);

  return (
    <div className={clsx('rhc-nav-bar', { 'is-open': isOpen })}>
      <h2 className="rhc-visually-hidden">Hoofd navigatie</h2>
      {identity && (
        <div className="rhc-nav-bar__slot-identity">
          <NavBarIdentity {...identity} />
        </div>
      )}

      {megamenu ? (
        <FocusTrap
          active={isOpen}
          className={clsx('rhc-nav-bar__slot-megamenu', { 'rhc-nav-bar--megamenu-open': isOpen })}
        >
          <ul className="rhc-nav-bar__list">
            <li className="rhc-nav-bar__item" ref={hamburgerLiRef}>
              <LinkButton
                aria-expanded={isOpen}
                className={clsx('rhc-nav-bar__link')}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <Icon icon={isOpen ? 'kruis' : 'menu'} />

                <span className={clsx('rhc-nav-bar__label', 'rhc-visually-hidden-mobile')}>
                  Kies een onderwerp of dienst
                </span>
              </LinkButton>
            </li>
          </ul>
          <div className="rhc-nav-bar__slots">
            {isOpen && <div className="rhc-nav-bar__megamenu">{megamenu}</div>}
            {items && (
              <div className="rhc-nav-bar__slot" ref={itemsSlotRef}>
                <nav
                  aria-label="todo-geefnaam"
                  className={clsx('rhc-nav-bar__nav', className)}
                  ref={ref}
                  {...restProps}
                >
                  <ul className="rhc-nav-bar__list">
                    {items.map((item) => (
                      <NavBarItem key={item.id} {...item} />
                    ))}
                  </ul>
                </nav>
              </div>
            )}
            {endItems && (
              <div className="rhc-nav-bar__slot" ref={endItemsSlotRef}>
                <nav
                  aria-label="todo-geefnaam"
                  className={clsx('rhc-nav-bar__nav', className)}
                  ref={ref}
                  {...restProps}
                >
                  <ul className="rhc-nav-bar__list">{endItems}</ul>
                </nav>
              </div>
            )}
            {isOpen && (
              <Button
                appearance="subtle-button"
                aria-label="Sluit menu"
                className="rhc-nav-bar__megamenu__btn-close"
                onClick={() => setIsOpen(false)}
              >
                <Icon icon="kruis" />
                Sluiten
              </Button>
            )}
          </div>
        </FocusTrap>
      ) : (
        <FocusTrap
          active={isMainNavOpen}
          className={clsx('rhc-nav-bar__slot-main', { 'rhc-nav-bar--main-open': isMainNavOpen })}
        >
          <LinkButton
            aria-expanded={isMainNavOpen}
            className="rhc-nav-bar__slot-main__btn-trigger"
            data-role="toggle"
            onClick={() => setIsMainNavOpen((prev) => !prev)}
          >
            <Icon icon={isMainNavOpen ? 'kruis' : 'menu'} />
          </LinkButton>
          <div className="rhc-nav-bar__slots">
            {items && (
              <div className="rhc-nav-bar__slot">
                <nav
                  aria-label="todo-geefnaam"
                  className={clsx('rhc-nav-bar__nav', className)}
                  ref={ref}
                  {...restProps}
                >
                  <ul className="rhc-nav-bar__list">
                    {items.map((item) => (
                      <NavBarItem key={item.id} {...item} />
                    ))}
                  </ul>
                </nav>
              </div>
            )}
            {endItems && (
              <div className="rhc-nav-bar__slot">
                <nav
                  aria-label="todo-geefnaam"
                  className={clsx('rhc-nav-bar__nav', className)}
                  ref={ref}
                  {...restProps}
                >
                  <ul className="rhc-nav-bar__list">{endItems}</ul>
                </nav>
              </div>
            )}
          </div>
        </FocusTrap>
      )}

      {children}
      {isAnyMenuOpen &&
        overlayContainer &&
        createPortal(
          <div
            aria-hidden="true"
            className="rhc-nav-bar__shade"
            onClick={() => {
              setIsOpen(false);
              setIsMainNavOpen(false);
            }}
          />,
          overlayContainer,
        )}
    </div>
  );
};

NavBar.displayName = 'NavBar';

export const NavBarMegaMenu = ({
  ref,
  children,
  className,
  tagline,
  columns,
  ...restProps
}: PropsWithChildren<NavBarMegaMenuProps>) => {
  return (
    <div className={clsx(className)} ref={ref} {...restProps}>
      {tagline && <p className="rhc-nav-bar__megamenu-tagline">{tagline}</p>}
      <div className="rhc-grid">
        {columns.map(({ id, heading, items }) => (
          <div className="rhc-grid__cell--cols-421" key={id}>
            <p className="rhc-nav-bar__megamenu-column-heading">{heading}</p>
            <LinkList>
              {items.map(({ id: itemId, href, target, label }) => (
                <LinkListLink href={href} key={itemId} target={target}>
                  {label}
                </LinkListLink>
              ))}
            </LinkList>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

NavBarMegaMenu.displayName = 'NavBarMegaMenu';

export const SubNavBar = ({ ref, children, className, columns, ...restProps }: PropsWithChildren<SubNavBarProps>) => {
  return (
    <div className={clsx('', className)} ref={ref} {...restProps}>
      <div className="rhc-sub-nav-bar__content">
        {columns.map((column: NavBarLinkProps[]) => (
          <div className="rhc-sub-nav-bar__list" key={column.map((item) => item.id).join('-')}>
            <LinkList>
              {column.map(({ id, href, target, label }) => (
                <LinkListLink href={href} icon={<Icon icon={'chevron-right'} />} key={id} target={target}>
                  {label}
                </LinkListLink>
              ))}
            </LinkList>
          </div>
        ))}

        {children}
      </div>
    </div>
  );
};

SubNavBar.displayName = 'SubNavBar';
