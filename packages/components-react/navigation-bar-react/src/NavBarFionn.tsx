import { Heading } from '@rijkshuisstijl-community/heading-react/no-side-effects';
import { Icon } from '@rijkshuisstijl-community/icon-react';
import { LanguageNavigation } from '@rijkshuisstijl-community/language-navigation-react';
import { LinkButton } from '@rijkshuisstijl-community/link-button-react/no-side-effects';
import { LinkList, LinkListLink } from '@rijkshuisstijl-community/link-list-react';

const MegaMenuContent = () => (
  <div className="rhc-grid">
    <div className="rhc-grid__cell rhc-grid__cell-d-3">
      <Heading
        appearanceLevel={5}
        className="rhc-nav-bar__megamenu-column-heading"
        level={3}
      >
        Diensten van de overheid
      </Heading>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Dienstenoverzicht
        </LinkListLink>
      </LinkList>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Berichten over uw buurt
        </LinkListLink>
      </LinkList>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Gegevens bij besluiten
        </LinkListLink>
      </LinkList>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Internetconsultatie
        </LinkListLink>
      </LinkList>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Levensgebeurtenissen
        </LinkListLink>
      </LinkList>
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-d-3">
      <Heading
        appearanceLevel={5}
        className="rhc-nav-bar__megamenu-column-heading"
        level={3}
      >
        Beleid en regelgeving
      </Heading>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Overzicht
        </LinkListLink>
      </LinkList>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Wetten
        </LinkListLink>
      </LinkList>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Verdragen
        </LinkListLink>
      </LinkList>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Lokale regelgeving
        </LinkListLink>
      </LinkList>
    </div>
    <div className="rhc-grid__cell rhc-grid__cell-d-3">
      <Heading
        appearanceLevel={5}
        className="rhc-nav-bar__megamenu-column-heading"
        level={3}
      >
        Transparantie
      </Heading>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Standaarden
        </LinkListLink>
      </LinkList>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Open Data
        </LinkListLink>
      </LinkList>
      <LinkList className="rhc-nav-bar__megamenu__link-list">
        <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="#">
          Linked data
        </LinkListLink>
      </LinkList>
    </div>
  </div>
);

export default () => (
  <div className="__rhc-nav-bar">
    <div className="__rhc-nav-bar__identity">Organisation</div>
    <div className="__rhc-nav-bar__items">
      <div className='__rhc-nav-bar-megamenu'>
        <LinkButton className="__rhc-nav-bar-megamenu__trigger" popoverTarget="navbar-megamenu" type="checkbox">
          <Icon icon={false ? 'kruis' : 'menu'} />
          Kies een onderwerp of dienst
        </LinkButton>
        <div className="__rhc-nav-bar-megamenu__content" id="navbar-megamenu" popover="auto">
          <MegaMenuContent />
        </div>
      </div>
      <LinkList className="fd-row">
        <LanguageNavigation defaultSelectedLanguage="Nederlands">
          <LanguageNavigation.Trigger />
          <LanguageNavigation.Content>
            <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
            <LanguageNavigation.Item href="#" lang="en" languageName="English" />
            <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" />
          </LanguageNavigation.Content>
        </LanguageNavigation>
        <LinkListLink>Contact</LinkListLink>
      </LinkList>
    </div>
  </div>
);
