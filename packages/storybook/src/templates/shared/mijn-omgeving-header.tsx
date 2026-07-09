import { Icon, Logo, PageHeader, SkipLink } from '@rijkshuisstijl-community/components-react';
import './header.css';
import './mijn-omgeving-header.css';
import { ReactNode } from 'react';
import SharedRijkshuisstijlDisclaimer from './rijkshuisstijl-disclaimer';

/**
 * Kop voor de MijnOmgeving-voorbeeldpagina's: het hoofdmenu van de applicatie zelf
 * (sitenaam + ingelogde gebruiker), niet het community-websitemenu.
 */
export default function MijnOmgevingHeader({
  organisation = 'Rijksoverheid',
  siteName = 'MijnDashboard',
  userName = 'J. Janssen',
}: { organisation?: ReactNode; siteName?: ReactNode; userName?: ReactNode } = {}) {
  return (
    <PageHeader>
      <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
        Ga naar hoofdinhoud
      </SkipLink>
      <div className="rhc-page-header-layout">
        <Logo organisation={organisation}>
          <Icon className={'dutch-map'} icon={'nederland-map'} />
        </Logo>
        <SharedRijkshuisstijlDisclaimer />
        <nav aria-label="Hoofdmenu" className="rhc-mijn-omgeving-menu">
          <a className="rhc-mijn-omgeving-menu__site" href="/mijn-omgeving/">
            {siteName}
          </a>
          <button aria-haspopup="menu" className="rhc-mijn-omgeving-menu__user" type="button">
            <Icon icon="user" />
            {userName}
            <Icon icon="chevron-down" />
          </button>
          {/* Slot voor de mobiele Menu-knop (SharedSideNav-drawer); vervangt op mobiel het user-element. */}
          <div className="rhc-page-header-layout__mobile-menu" />
        </nav>
      </div>
    </PageHeader>
  );
}
