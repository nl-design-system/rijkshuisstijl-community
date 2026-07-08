'use client';
import {
  Drawer,
  Icon,
  NumberBadge,
  RHCIconID,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavLinkLabel,
  SideNavList,
} from '@rijkshuisstijl-community/components-react';
import { useState } from 'react';
import './side-nav.css';

export const sideNav: {
  id: string;
  items: {
    href: string;
    icon: RHCIconID;
    label: string;
    numberBadgeValue?: number;
    numberBadgeLabel?: string;
  }[];
}[] = [
  {
    id: '1',
    items: [{ href: '/mijn-omgeving/', icon: 'home', label: 'Dashboard' }],
  },
  {
    id: '2',
    items: [
      {
        href: '/mijn-omgeving-berichtenbox/',
        icon: 'mail',
        label: 'Berichtenbox',
        numberBadgeValue: 9,
        numberBadgeLabel: '9 berichten',
      },
      { href: '#', icon: 'comment', label: 'MijnZaken' },
    ],
  },
  {
    id: '3',
    items: [
      { href: '/mijn-omgeving-identiteit/', icon: 'user', label: 'Identiteit' },
      { href: '/mijn-omgeving-financien/', icon: 'currency-euro', label: 'Financiën' },
      { href: '/mijn-omgeving-werk/', icon: 'hashtag', label: 'Werk' },
      { href: '/mijn-omgeving-gezondheid/', icon: 'favoriet', label: 'Gezondheid' },
      { href: '/mijn-omgeving-wonen/', icon: 'home', label: 'Wonen' },
      { href: '/mijn-omgeving-vervoer/', icon: 'car', label: 'Vervoer' },
      { href: '/mijn-omgeving-onderwijs/', icon: 'school', label: 'Onderwijs' },
    ],
  },
  {
    id: '4',
    items: [{ href: '/mijn-omgeving-instellingen/', icon: 'instellingen', label: 'Instellingen' }],
  },
];

export const useSideNav = ({ items, currentHref }: { items: typeof sideNav; currentHref?: string }) => ({
  'aria-label': 'Zijnavigatie',
  children: items.map(({ id, items }) => (
    <SideNavList key={id}>
      {items.map(({ href, icon, label, numberBadgeLabel, numberBadgeValue }) => (
        <SideNavItem key={href}>
          <SideNavLink current={href === currentHref} href={href}>
            <Icon icon={icon} />
            <SideNavLinkLabel>
              {label}
              {numberBadgeLabel && numberBadgeValue ? (
                <NumberBadge label={numberBadgeLabel}>{numberBadgeValue}</NumberBadge>
              ) : null}
            </SideNavLinkLabel>
          </SideNavLink>
        </SideNavItem>
      ))}
    </SideNavList>
  )),
});

/**
 * Zijnavigatie die op desktop inline staat en op mobiel via een "Menu"-balk een drawer opent.
 * De drawer hergebruikt dezelfde nav-data, dus er is geen dubbele bron.
 */
export const SharedSideNav = ({ currentHref }: { currentHref?: string }) => {
  const [open, setOpen] = useState(false);
  const nav = useSideNav({ items: sideNav, currentHref });
  // Figma-mobiel groepeert Dashboard/Berichtenbox/MijnZaken samen, dan de thema's, dan Instellingen.
  const mobileGroups = [[...sideNav[0].items, ...sideNav[1].items], sideNav[2].items, sideNav[3].items];

  return (
    <>
      <div className="rhc-shared-side-nav__inline">
        <SideNav {...nav} />
      </div>
      <button className="rhc-shared-side-nav__trigger" type="button" onClick={() => setOpen(true)}>
        <Icon icon="menu" />
        Menu
      </button>
      <Drawer
        modal
        align="inline-end"
        aria-label="Menu"
        className="rhc-shared-side-nav__drawer rhc-rounded-corner rhc-rounded-corner--size-md rhc-rounded-corner--position-start-start rhc-rounded-corner--position-end-start"
        open={open}
        onClose={() => setOpen(false)}
      >
        <header className="utrecht-drawer__header rhc-shared-side-nav__drawer-header" key="header">
          {/* Native sluiten: submit van een method="dialog"-form sluit de <dialog>. */}
          <form method="dialog">
            <button className="rhc-shared-side-nav__drawer-close" type="submit">
              Sluiten
              <Icon icon="kruis" />
            </button>
          </form>
        </header>
        <nav aria-label="Zijnavigatie" className="utrecht-drawer__body rhc-mobile-nav" key="body">
          {mobileGroups.map((items, index) => (
            <ul className="rhc-mobile-nav__group" key={index}>
              {items.map(({ href, icon, label }) => (
                <li key={href}>
                  <a
                    aria-current={href === currentHref ? 'page' : undefined}
                    className="rhc-mobile-nav__item"
                    href={href}
                  >
                    <Icon icon={icon} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>
      </Drawer>
    </>
  );
};
