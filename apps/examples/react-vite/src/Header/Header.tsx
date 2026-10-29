import { Icon, Logo, NavBar, NavBarItem, PageHeader } from '@rijkshuisstijl-community/components-react/no-side-effects';
import './Header.css';

export function Header() {
  return (
    <PageHeader>
      <Logo organisation="Rijkshuisstijl Community">
        <Icon icon="nederland-map" />
      </Logo>
      <NavBar
        className="rhc-nav-bar"
        endItems={
          <>
            <NavBarItem href="/" id="end-first-link" label="Figma" />
            <NavBarItem href="/" id="end-second-link" label="Github" />
            <NavBarItem href="/" id="end-third-link" label="Storybook" />
          </>
        }
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
