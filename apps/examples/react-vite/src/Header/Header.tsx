import { Icon, Logo, NavBar, PageHeader } from '@rijkshuisstijl-community/components-react';

import './Header.css';

export function Header() {
  return (
    <PageHeader>
      <Logo organisation="Rijkshuisstijl Community">
        <Icon icon="nederland-map" />
      </Logo>
      <NavBar
        className="rhc-nav-bar"
        endItems={[
          {
            href: '/',
            id: 'end-first-link',
            label: 'Figma',
          },
          {
            href: '/',
            id: 'end-second-link',
            label: 'Github',
          },
          {
            href: '/',
            id: 'end-third-link',
            label: 'Storybook',
          },
        ]}
        items={[
          {
            href: '/',
            id: 'first-link',
            label: 'Homepage',
          },
          {
            href: '/',
            id: 'second-link',
            label: 'Componenten',
          },
          {
            href: '/',
            id: 'third-link',
            label: 'Voorbeelden',
          },
        ]}
      />
    </PageHeader>
  );
}
