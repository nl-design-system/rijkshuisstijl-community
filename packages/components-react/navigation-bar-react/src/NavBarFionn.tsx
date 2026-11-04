import LanguageNavigation from '@rijkshuisstijl-community/language-navigation-react';
import { LinkButton } from '@rijkshuisstijl-community/link-button-react/no-side-effects';
import { LinkList, LinkListLink } from '@rijkshuisstijl-community/link-list-react';

export default function NavBarFionn() {
  return (
    <div className="__rhc-nav-bar">
      <div className="__rhc-nav-bar__identity">Organisation</div>
      <div className="__rhc-nav-bar__items">
        <div>
          <LinkButton className="__rhc-nav-bar-megamenu__trigger" popoverTarget="navbar-megamenu">
            menu
          </LinkButton>
          <div className="__rhc-nav-bar-megamenu__content" id="navbar-megamenu" popover="auto">
            coolio
          </div>
        </div>
        <LinkList style={{ flexDirection: 'row', gap: '1rem' }}>
          <LanguageNavigation defaultSelectedLanguage="Nederlands">
            <LanguageNavigation.Trigger />
            <LanguageNavigation.Content>
              <LanguageNavigation.Item href="#" lang="nl" languageName="Nederlands" />
              <LanguageNavigation.Item href="#" lang="en" languageName="English" />
              <LanguageNavigation.Item href="#" lang="de" languageName="Deutsch" />
            </LanguageNavigation.Content>
          </LanguageNavigation>
          <LinkListLink>Link</LinkListLink>
          <LinkListLink>Link</LinkListLink>
          <LinkListLink>Link</LinkListLink>
        </LinkList>
      </div>
    </div>
  );
}
