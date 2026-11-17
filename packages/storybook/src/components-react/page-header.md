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
        <NavBarStart>
          <NavBarIdentity primary href="/">
            Dataregister
          </NavBarIdentity>
          <NavBarItem href="/" id="home" label="Home" />
          <NavBarItem href="/" id="contact" label="Contact" />
        </NavBarStart>
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
        <NavBarStart>
          <NavBarIdentity primary href="/">
            Overheid.nl
          </NavBarIdentity>
          <NavBarMegaMenu>
            <NavBarMegaMenuTrigger target="onderwerpen">Kies een onderwerp of dienst</NavBarMegaMenuTrigger>
            <NavBarMegaMenuPanel id="onderwerpen">
              <NavBarMegaMenuTagline>Ingang naar informatie en diensten van alle overheden</NavBarMegaMenuTagline>
              <NavBarMegaMenuSeparator />
              <div className="rhc-grid">
                <div className="rhc-grid__cell rhc-grid__cell-d-3">
                  <Heading appearanceLevel={5} level={3}>
                    Diensten van de overheid
                  </Heading>
                  <LinkList>
                    <LinkListLink href="/">Dienstenoverzicht</LinkListLink>
                  </LinkList>
                </div>
              </div>

              <NavBarMegaMenuClose target="onderwerpen" />
            </NavBarMegaMenuPanel>
          </NavBarMegaMenu>
        </NavBarStart>
      </NavBar>
      <NavBar aria-label="Dataregister">
        <NavBarStart>
          <NavBarIdentity href="/">Dataregister</NavBarIdentity>
          <NavBarItem href="/" id="data" label="Data" />
          <NavBarItem href="/" id="impact" label="Impact" />
        </NavBarStart>
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
