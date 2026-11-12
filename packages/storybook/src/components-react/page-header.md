<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Page Header component

Consistente plek bovenaan elke pagina, vaak met een logo, navigation bar en zoekfunctie, taal switch.

De component zelf voegt geen logo of navigatie toe: je geeft de inhoud mee als children, meestal een Logo en een of twee NavBar's.

## Anatomie

De Page Header bestaat uit de volgende onderdelen:

- **Header**: de `<header>` met de rhc-page-header-class, als buitenste wrapper.
- **Children**: de inhoud die je zelf meegeeft, bijvoorbeeld een `Logo` en een of meerdere `NavBar`'s.

## Gebruik

### Eenvoudig voorbeeld

```tsx
import { Logo, NavBar, PageHeader } from '@rijkshuisstijl-community/components-react';

<PageHeader>
  <div className="rhc-page-section">
    <div className="rhc-page-section__content">
      <Logo organisation="Organisatie" subtitle="Wat wij doen" />
      <NavBar aria-label="Dataregister">
        <NavBar.Start>
          <NavBar.Identity primary href="/">
            Dataregister
          </NavBar.Identity>
          <NavBar.Item href="/" id="home" label="Home" />
          <NavBar.Item href="/" id="contact" label="Contact" />
        </NavBar.Start>
      </NavBar>
    </div>
  </div>
</PageHeader>;
```

### Uitgebreid voorbeeld

Voor een pagina met een megamenu en een tweede navigatiebalk geef je meerdere `NavBar`'s mee als `children`.

```tsx
import {
  Heading,
  Icon,
  LinkList,
  LinkListLink,
  Logo,
  NavBar,
  PageHeader,
} from '@rijkshuisstijl-community/components-react';

<PageHeader>
  <div className="rhc-page-section">
    <div className="rhc-page-section__content">
      <Logo organisation="Organisatie" subtitle="Wat wij doen">
        <Icon className="dutch-map" icon="nederland-map" />
      </Logo>
      <NavBar aria-label="Overheid.nl">
        <NavBar.Start>
          <NavBar.Identity primary href="/">
            Overheid.nl
          </NavBar.Identity>
          <NavBar.MegaMenu>
            <NavBar.MegaMenu.Trigger target="onderwerpen">Kies een onderwerp of dienst</NavBar.MegaMenu.Trigger>
            <NavBar.MegaMenu.Panel id="onderwerpen">
              <NavBar.MegaMenu.Tagline>Ingang naar informatie en diensten van alle overheden</NavBar.MegaMenu.Tagline>
              <NavBar.MegaMenu.Separator />
              <div className="rhc-grid">
                <div className="rhc-grid__cell rhc-grid__cell-d-3">
                  <Heading appearanceLevel={5} className="rhc-nav-bar__megamenu-column-heading" level={3}>
                    Diensten van de overheid
                  </Heading>
                  <LinkList className="rhc-nav-bar__megamenu__link-list">
                    <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="/">
                      Dienstenoverzicht
                    </LinkListLink>
                  </LinkList>
                </div>
              </div>

              <NavBar.MegaMenu.Close target="onderwerpen" />
            </NavBar.MegaMenu.Panel>
          </NavBar.MegaMenu>
        </NavBar.Start>
      </NavBar>
      <NavBar aria-label="Dataregister">
        <NavBar.Start>
          <NavBar.Identity href="/">Dataregister</NavBar.Identity>
          <NavBar.Item href="/" id="data" label="Data" />
          <NavBar.Item href="/" id="impact" label="Impact" />
        </NavBar.Start>
      </NavBar>
    </div>
  </div>
</PageHeader>;
```

Zie SharedHeaderOverheidNl in het header-footer -template voor een volledig voorbeeld.

## API Referentie

### PageHeader

| Prop        | Type      | Default   | Beschrijving             |
| ----------- | --------- | --------- | ------------------------ |
| `children`  | ReactNode | verplicht | De inhoud van de header. |
| `className` | string    | -         | Extra CSS class names    |
