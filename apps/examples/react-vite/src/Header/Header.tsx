import { Icon, Logo, NavBar, PageHeader } from '@rijkshuisstijl-community/components-react/no-side-effects';
import './Header.css';

export function Header() {
  return (
    <PageHeader>
      <Logo organisation="Rijkshuisstijl Community">
        <Icon icon="nederland-map" />
      </Logo>
      <NavBar>
        <NavBar.Start>
          <NavBar.Item href="/" id="first-link" label="Homepage" />
          <NavBar.Item href="/" id="second-link" label="Componenten" />
          <NavBar.Item href="/" id="third-link" label="Voorbeelden" />
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item href="/" id="end-first-link" label="Figma" />
          <NavBar.Item href="/" id="end-second-link" label="Github" />
          <NavBar.Item href="/" id="end-third-link" label="Storybook" />
        </NavBar.End>
      </NavBar>
    </PageHeader>
  );
}
