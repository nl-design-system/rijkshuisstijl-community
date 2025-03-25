<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community heading component

## Gebruik en toegankelijkheid van headings (koppen)

- Gebruik altijd maar één H1-heading op een pagina met digitale content.
- Gebruik alleen een heading als er content onder staat.
- Gebruikers van screenreaders gebruiken headings vaak om een indruk te krijgen van de structuur van een pagina.
- Gebruik headings niet voor de opmaak maar alleen voor de tekstuele hiërarchie van de content.
- Sla geen niveaus over bij het gebruik van headings, bijvoorbeeld geen H3 gebruiken zonder dat er een voorgaande H2 is.
- Beperk het aantal headings op een pagina. In de meeste gevallen hebben teksten niet meer dan `<h2>`-koppen nodig en heel soms een `<h3>`. Alleen voor uitzonderlijk lange of complexe pagina's zouden `<h5>` en `<h6>` nodig zijn.

### De heading component beschikt over properties `level` en `appearanceLevel`

**level (verplicht)**  
Dit wijzigt de HTML-tag naar het overeenkomende niveau, bijvoorbeeld: `level` met waarde `1` transformeert de HTML naar de `<h1>`-tag, `level` met waarde `2` naar `<h2>` enzovoort.

**appearanceLevel (optioneel)**  
Dit wijzigt geen onderliggend HTML-element, maar verandert wel het uiterlijk. Dit is nog steeds een `<h1>` en wordt zo ook door screenreaders gelezen, maar ziet er visueel uit als een `<h3>`.

## Gebruik

Onderstaand staat omschreven hoe je dit component gebruikt in verschillende frameworks.

### React

```tsx
<Heading appearanceLevel={3} level={1}>
  Lorem ipsum
</Heading>
```

### Twig

```twig
{% include '@rhc/Heading.twig' with {
  level: 1,
  appearance: 3,
  children: 'Lorem ipsum'
} %}
```
