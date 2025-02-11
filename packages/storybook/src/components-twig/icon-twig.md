<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Twig icon component

Dit component is een wrapper om een SVG element. Door dit component te gebruiken heeft deze constant dezelfde styling en grootte.

## Usage

TODO: Duidelijke omschrijving hoe het Twig icon component te gebruiken in een Drupal omgeving.

Het Twig icon component kan op gelimiteerde manieren worden gebruikt veregeleken met het [React icon component](?path=/docs/rhc-icon--docs). Hieronder staan de verschillende manieren beschreven, beginnend met de makkelijkste manier.

- Standaard is er de optie om een icon property mee te geven met dit component, wat staat voor een van de ondersteunde icon IDs uit de [icon set](?path=/docs/rhc-templates-default-icon-set--docs) van de Rijkshuisstijl Community.

```twig
{% include "icon.twig" with { icon: 'home' } %}
```
