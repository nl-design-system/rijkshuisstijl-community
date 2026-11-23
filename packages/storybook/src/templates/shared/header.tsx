'use client';

import {
  Icon,
  Logo,
  NavBar,
  NavBarEnd,
  NavBarItem,
  NavBarLink,
  NavBarStart,
  PageHeader,
  Separator,
  SkipLink,
} from '@rijkshuisstijl-community/components-react';
import { CSSProperties } from 'react';

export function SharedHeader() {
  const items = [
    {
      href: '/',
      label: 'Homepage',
    },
    {
      href: '/componenten/',
      label: 'Componenten',
    },
    {
      href: '/design-tokens/',
      label: 'Design Tokens',
    },
    {
      href: '/voorbeelden/',
      label: 'Voorbeelden',
    },
  ].map(({ ...props }) => ({
    ...props,
    id: props.href,
  }));

  const endItems = [
    {
      target: '_blank',
      href: 'https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/NL-Design-System---Bibliotheek---Rijkshuisstijl-Community',
      label: 'Figma',
    },
    {
      target: '_blank',
      href: 'https://github.com/nl-design-system/rijkshuisstijl-community',
      label: 'GitHub',
    },
    { target: '_blank', href: 'https://rijkshuisstijl-community.vercel.app/', label: 'Storybook' },
  ];

  return (
    <PageHeader>
      <div className="rhc-page-section">
        <div className="rhc-page-section__content">
          <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
            Ga naar hoofdinhoud
          </SkipLink>
          <Logo organisation="Rijkshuisstijl Community">
            <Icon className={'dutch-map'} icon={'nederland-map'} />
          </Logo>
          <NavBar>
            <NavBarStart>
              {items.map((item) => (
                <NavBarItem key={item.label}>
                  <NavBarLink {...item}>{item.label}</NavBarLink>
                </NavBarItem>
              ))}
            </NavBarStart>
            <NavBarEnd>
              {endItems.map((item) => (
                <NavBarItem key={item.label}>
                  <NavBarLink {...item}>{item.label}</NavBarLink>
                </NavBarItem>
              ))}
            </NavBarEnd>
          </NavBar>
          <Separator style={{ '--utrecht-space-around': 0 } as CSSProperties} />
        </div>
      </div>
    </PageHeader>
  );
}

export default SharedHeader;
