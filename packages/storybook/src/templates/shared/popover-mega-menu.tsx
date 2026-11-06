'use client';

import { Heading, Icon, LinkButton, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
import { clsx } from 'clsx';
import { ComponentPropsWithRef } from 'react';
import './popover-mega-menu.css';

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
    <div className="rhc-popover-mega-menu">
      <MegaMenuTrigger>
        <Icon icon="menu" />
        Kies een onderwerp of dienst
      </MegaMenuTrigger>

      <MegaMenuPanel>
        <p>Ingang naar informatie en diensten van alle overheden</p>
        <div className="rhc-grid">
          {exampleColumns.map(({ heading, items }, index) => (
            <div className="rhc-grid__cell rhc-grid__cell-d-3" key={heading + index}>
              <Heading className="rhc-popover-mega-menu__column-heading" level={3}>
                {heading}
              </Heading>
              <LinkList>
                {items.map(({ label: itemLabel, href }) => (
                  <LinkListLink href={href} key={itemLabel + href}>
                    {itemLabel}
                  </LinkListLink>
                ))}
              </LinkList>
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
  ...restProps
}: ComponentPropsWithRef<typeof LinkButton>) => {
  const panelId = `${id}-panel`;
  const anchorName = `--${id}-anchor`;

  return (
    <LinkButton
      popoverTarget={panelId}
      {...restProps}
      className={clsx('rhc-popover-mega-menu__trigger', { positionAnchor: anchorName }, className)}
    />
  );
};

interface MegaMenuPanelProps extends ComponentPropsWithRef<'div'> {}

export const MegaMenuPanel = ({ id = 'NavigationBarMegaMenu', className, ...restProps }: MegaMenuPanelProps) => {
  const panelId = `${id}-panel`;
  const anchorName = `--${id}-anchor`;

  return (
    <div
      className={clsx('rhc-popover-mega-menu__panel', { positionAnchor: anchorName }, className)}
      id={panelId}
      popover="auto"
      {...restProps}
    />
  );
};

export default PopoverMegaMenu;
