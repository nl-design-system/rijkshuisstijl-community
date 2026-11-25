import {
  Icon,
  Logo,
  NavBar,
  NavBarEnd,
  NavBarIdentity,
  NavBarItem,
  NavBarLink,
  NavBarMegaMenu,
  NavBarMegaMenuClose,
  NavBarMegaMenuPanel,
  NavBarMegaMenuTrigger,
  NavBarStart,
  PageHeader,
  Separator,
} from '@rijkshuisstijl-community/components-react';
import OverheidNlLanguageNavigation from './language-navigation';
import megaMenuContent from './megamenu-content';
import './header-overheid-nl.css';

const Header = () => (
  <PageHeader className="overheid-nl-header">
    <div className="rhc-page-section">
      <div className="rhc-page-section__content">
        <Logo organisation="Organisatie" subtitle="Wat wij doen">
          <Icon className="dutch-map" icon="nederland-map" />
        </Logo>
        <NavBar aria-label="Overheid.nl">
          <NavBarStart>
            <NavBarIdentity primary href="/">
              Overheid.nl
            </NavBarIdentity>
            <NavBarMegaMenu>
              <div className="rhc-backdrop" />
              <NavBarMegaMenuTrigger target="onderwerpen">Kies een onderwerp of dienst</NavBarMegaMenuTrigger>
              <NavBarMegaMenuPanel id="onderwerpen">
                {megaMenuContent}
                <NavBarMegaMenuClose target="onderwerpen" />
              </NavBarMegaMenuPanel>
            </NavBarMegaMenu>
          </NavBarStart>
          <NavBarEnd className="overheid-nl-primary-navbar-end">
            <NavBarItem>
              <OverheidNlLanguageNavigation />
            </NavBarItem>
            <NavBarItem>
              <NavBarLink href="/" iconEnd={<Icon icon="comment" />}>
                Contact
              </NavBarLink>
            </NavBarItem>
          </NavBarEnd>
        </NavBar>
        <Separator className="overheid-nl-nav-bar__separator" />
        <NavBar aria-label="Dataregister">
          <NavBarStart>
            <NavBarIdentity href="/">Dataregister</NavBarIdentity>
            <NavBarItem>
              <NavBarLink href="/">Data</NavBarLink>
            </NavBarItem>
            <NavBarItem>
              <NavBarLink href="/">Impact</NavBarLink>
            </NavBarItem>
            <NavBarItem>
              <NavBarLink current href="/">
                Voorbeeldpagina
              </NavBarLink>
            </NavBarItem>
          </NavBarStart>
          <NavBarEnd>
            <NavBarItem className="overheid-nl-header__button-item overheid-nl-header__button-item--secondary">
              <NavBarLink href="/" icon={<Icon icon="zoek" />}>
                Zoeken
              </NavBarLink>
            </NavBarItem>
            <NavBarItem className="overheid-nl-header__button-item overheid-nl-header__button-item--primary">
              <NavBarLink href="/" icon={<Icon icon="inloggen" />}>
                Inloggen
              </NavBarLink>
            </NavBarItem>
          </NavBarEnd>
        </NavBar>
      </div>
    </div>
  </PageHeader>
);

export default Header;
