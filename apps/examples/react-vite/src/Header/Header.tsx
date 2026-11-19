import {
  Icon,
  Logo,
  NavBar,
  NavBarEnd,
  NavBarItem,
  NavBarLink,
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
          <NavBarItem>
            <NavBarLink href="/">Homepage</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href="/">Componenten</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href="/">Voorbeelden</NavBarLink>
          </NavBarItem>
        </NavBarStart>
        <NavBarEnd>
          <NavBarItem>
            <NavBarLink href="/">Figma</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href="/">Github</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href="/">Storybook</NavBarLink>
          </NavBarItem>
        </NavBarEnd>
      </NavBar>
    </PageHeader>
  );
}
