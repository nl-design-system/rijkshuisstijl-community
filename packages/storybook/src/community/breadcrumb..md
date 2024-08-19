<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Breadcrumb navigation component

[NL Design System](https://www.nldesignsystem.nl/breadcrumb-navigation/) | [Figma](https://www.nldesignsystem.nl/breadcrumb-navigation/) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/443)

Breadcrumb navigation, ook wel "kruimelpad" genoemd, gebruik je als de pagina's van je site georganiseerd zijn in een boomstructuur. Als je site teveel pagina's heeft om naar elke pagina een link te maken op de homepage bijvoorbeeld. De eerste link is altijd naar de homepage.

Het kruimelpad moet alleen links bevatten naar hogere niveau's of eerdere stappen. De pagina zelf is niet onderdeel van het kruimelpad. Gebruik geen breadcrumb navigation op de homepage, want die heeft geen hogere niveaus.

## Usage

```tsx
import { BreadcrumbNav, BreadcrumbNavLink, BreadcrumbNavSeparator } from '@rijkshuisstijl-community/components-react';

<BreadcrumbNav>
  <BreadcrumbNavLink href="/" rel="home" index={0}>
    Home
  </BreadcrumbNavLink>
  <BreadcrumbNavLink href="/a/" index={1}>
    Label
  </BreadcrumbNavLink>
  <BreadcrumbNavLink href="/a/b/" index={2}>
    Label
  </BreadcrumbNavLink>
</BreadcrumbNav>;
```

## Rel

Stel je voor: je hebt _breacrumb navigation_ op de derde pagina met zoekresultaten voor “openingstijden zwembad”.
De huidige URL is `https://example.com/search?q=example?page=3`.
Dan kan het handig zijn om terug te gaan naar de eerste pagina van de zoekresultaten.
Het kan ook handig zijn om terug te gaan naar de zoekpagina, om andere zoektermen te kiezen.

- **Home**: `rel="home"`
- **Zoeken**: `rel="up"`
- **Example 1** van “example”: `rel="first"`
