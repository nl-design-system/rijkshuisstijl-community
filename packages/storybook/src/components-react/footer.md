# Rijkshuisstijl Community Footer component

De footer bestaat uit kolommen met als eerste de tagline en daarna `LinkList` componenten met handige bronnen.

De kolommen lijsten kunnen worden toegevoegd door middel van properties aan het `<Footer>` component.

## Varianten

De Page Footer heeft twee varianten: `default` en `compact`.

### Compact

De compacte variant is een lichte footer met alleen een tagline en enkele links. Gebruik deze wanneer de footer visueel naar de achtergrond mag treden, zoals bij formulieren, zoekresultaten of pagina's met een sterke taakfocus.

- De tagline is decoratieve tekst en gebruikt bewust geen Heading component.
- De links worden als children meegegeven en naast elkaar getoond; op smalle schermen lopen ze door naar een volgende regel.
- De kleuren en witruimte komen uit de `rhc.page-footer.compact.*` design tokens.

```tsx
<Footer variant="compact" tagline="De rijksoverheid. Voor Nederland">
  <Link href="#">Privacy</Link>
  <Link href="#">Toegankelijkheid</Link>
  <Link href="#">Kwetsbaarheid melden</Link>
</Footer>
```

## level

De heading kolom is de titel level +1, omdat deze een subsectie vormt van de titel. Hierdoor staan de kolomtitels altijd één niveau hoger dan de titel. Echter, wanneer de heading niveau 6 bereikt, wordt er geen niveau 7 gebruikt. In dat geval blijven zowel de titel als de kolommen op niveau 6.

### Belangrijkste punten

De heading kolom heeft altijd een niveau meer dan de titel.
Dit geldt voor alle niveaus behalve niveau 6.
Bij niveau 6 worden zowel de titel als de kolommen op niveau 6 gehouden.
Er bestaat geen niveau 7 heading in HTML.

```tsx
columns={[
    {
      children: <LinkList><LinkListLink href="#" icon={<UtrechtIconChevronRight />}>Contact</LinkListLink> etc...</LinkList>,
      heading: 'Service'
    }
  ]}
  tagline="Footer tagline"
```
