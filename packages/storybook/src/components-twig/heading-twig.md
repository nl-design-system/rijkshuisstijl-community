<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Twig heading component

## Gebruik en toegankelijkheid van headings (koppen)

- Gebruik altijd maar één H1-heading op een pagina met digitale content.
- Gebruik alleen een heading als er content onder staat.
- Gebruikers van screenreaders gebruiken headings vaak om een indruk te krijgen van de structuur van een pagina.
- Gebruik headings niet voor de opmaak maar alleen voor de tekstuele hiërarchie van de content.
- Sla geen niveaus over bij het gebruik van headings, bijvoorbeeld geen H3 gebruiken zonder dat er een voorgaande H2 is.
- Beperk het aantal headings op een pagina. In de meeste gevallen hebben teksten niet meer dan `<h2>`-koppen nodig en heel soms een `<h3>`. Alleen voor uitzonderlijk lange of complexe pagina's zouden `<h5>` en `<h6>` nodig zijn.

### De heading component beschikt over properties `level` en `appearanceLevel`

**level (verplicht)**  
Dit wijzigt de HTML-tag naar het overeenkomende niveau, bijvoorbeeld: `1` transformeert de HTML naar de `<h1>`-tag, `2` naar `<h2>` enzovoort.

**appearanceLevel (optioneel)**  
Dit wijzigt geen onderliggend HTML-element, maar verandert wel het uiterlijk. Dit is nog steeds een `<h1>` en wordt zo ook door screenreaders gelezen, maar ziet er visueel uit als een `<h3>`.

```twig
{% include '@rhc/heading.twig' %}
```
