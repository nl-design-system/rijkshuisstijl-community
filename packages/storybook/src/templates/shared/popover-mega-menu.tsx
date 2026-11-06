'use client';

import {
  Heading,
  Icon,
  LanguageNavigation,
  LinkButton,
  LinkList,
  LinkListLink,
} from '@rijkshuisstijl-community/components-react';
import { clsx } from 'clsx';
import { ComponentPropsWithRef, CSSProperties } from 'react';
import './popover-mega-menu.css';

const languages = {
  nl: { href: '#', lang: 'nl', languageName: 'Nederlands' },
  en: { href: '#', lang: 'en', languageName: 'English' },
  de: { href: '#', lang: 'de', languageName: 'Deutsch' },
  fr: { href: '#', lang: 'fr', languageName: 'Français' },
  es: { href: '#', lang: 'es', languageName: 'Español' },
  it: { href: '#', lang: 'it', languageName: 'Italiano' },
  pt: { href: '#', lang: 'pt', languageName: 'Português' },
  pl: { href: '#', lang: 'pl', languageName: 'Polski' },
  ar: { href: '#', lang: 'ar', languageName: 'العربية' },
};
const exampleColumns = [
  {
    heading: 'Diensten van de overheid',
    items: [
      { label: 'Dienstenoverzicht', href: '/' },
      { label: 'Berichten over uw buurt', href: '/' },
      { label: 'Gegevens bij besluiten', href: '/' },
      { label: 'Internetconsultatie', href: '/' },
      { label: 'Levensgebeurtenissen', href: '/' },
    ],
  },
  {
    heading: 'Beleid en regelgeving',
    items: [
      { label: 'Overzicht', href: '/' },
      { label: 'Wetten', href: '/' },
      { label: 'Verdragen', href: '/' },
      { label: 'Lokale regelgeving', href: '/' },
    ],
  },
  {
    heading: 'Transparantie',
    items: [
      { label: 'Standaarden', href: '/' },
      { label: 'Open Data', href: '/' },
      { label: 'Linked data', href: '/' },
    ],
  },
];

export const PopoverMegaMenu = () => {
  return (
    <div>
      <MegaMenuTrigger>
        <Icon icon="menu" />
        Kies een onderwerp of dienst
      </MegaMenuTrigger>

      <MegaMenuPanel>
        <p>Ingang naar informatie en diensten van alle overheden</p>
        <div className="rhc-grid">
          {exampleColumns.map(({ heading, items }, index) => (
            <div className="rhc-grid__cell rhc-grid__cell-d-3" key={heading + index}>
              <Heading level={3}>{heading}</Heading>
              <LinkList>
                {items.map(({ label: itemLabel, href }) => (
                  <LinkListLink href={href} key={itemLabel + href}>
                    {itemLabel}
                  </LinkListLink>
                ))}
              </LinkList>
              <LanguageNavigation defaultSelectedLanguage="Nederlands">
                <LanguageNavigation.Trigger />
                <LanguageNavigation.Content>
                  {[languages.nl, languages.en, languages.de].map((language) => (
                    <LanguageNavigation.Item key={language.lang} {...language} />
                  ))}
                </LanguageNavigation.Content>
              </LanguageNavigation>
            </div>
          ))}
        </div>
      </MegaMenuPanel>
    </div>
  );
};
export const MegaMenuTrigger = ({
  id = 'NavigationBarMegaMenu',
  className,
  style,
  ...restProps
}: ComponentPropsWithRef<typeof LinkButton>) => {
  const panelId = `${id}-panel`;
  const anchorName = `--${id}-anchor`;

  return (
    <LinkButton
      popoverTarget={panelId}
      {...restProps}
      className={clsx('rhc-popover-mega-menu__trigger', className)}
      style={{ anchorName, ...style } as CSSProperties}
    />
  );
};

interface MegaMenuPanelProps extends ComponentPropsWithRef<'div'> {}

export const MegaMenuPanel = ({
  id = 'NavigationBarMegaMenu',
  className,
  style,
  children,
  ...restProps
}: MegaMenuPanelProps) => {
  const panelId = `${id}-panel`;
  const anchorName = `--${id}-anchor`;

  return (
    <div
      className={clsx('rhc-popover-mega-menu__panel', className)}
      id={panelId}
      popover="auto"
      style={{ positionAnchor: anchorName, ...style } as CSSProperties}
      {...restProps}
    >
      <div className="rhc-popover-mega-menu__panel-content">{children}</div>
    </div>
  );
};

export default PopoverMegaMenu;
