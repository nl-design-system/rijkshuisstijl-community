import {
  Icon,
  Logo,
  NavBar,
  NavBarEnd,
  NavBarItem,
  NavBarStart,
  PageHeader,
} from '@rijkshuisstijl-community/components-react/no-side-effects';
import './Header.css';

export function Header() {
  return (
    <PageHeader>
      <Logo organisation="Rijkshuisstijl Community">
        <Icon icon="nederland-map" />
      </Logo>
      <NavBar>
        <NavBarStart>
          <NavBarItem href="/" id="first-link" label="Homepage" />
          <NavBarItem href="/" id="second-link" label="Componenten" />
          <NavBarItem href="/" id="third-link" label="Voorbeelden" />
        </NavBarStart>
        <NavBarEnd>
          <NavBarItem href="/" id="end-first-link" label="Figma" />
          <NavBarItem href="/" id="end-second-link" label="Github" />
          <NavBarItem href="/" id="end-third-link" label="Storybook" />
        </NavBarEnd>
      </NavBar>
    </PageHeader>
  );
}
