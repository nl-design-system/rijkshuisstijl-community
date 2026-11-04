import { LinkButton } from '@rijkshuisstijl-community/link-button-react/no-side-effects';

export default function NavBarFionn() {
  return (
    <div className="rhc-nav-bar">
      <div className="rhc-nav-menu">
        <LinkButton className="rhc-nav-menu__trigger" popoverTarget="menu">
          menu
        </LinkButton>
        <div className="rhc-nav-menu__content" id="menu" popover="auto">
          coolio
        </div>
      </div>
    </div>
  );
}
