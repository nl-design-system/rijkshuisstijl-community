# Rijkshuisstijl Community Footer component

De footer (Page Footer) bestaat uit twee delen: de hoofdinhoud met een optionele tagline en kolommen met vrije content (zoals `LinkList` componenten), en een optionele sub-footer voor wettelijk verplichte links zoals Privacy, Toegankelijkheid en Kwetsbaarheid melden. Tussen beide delen staat een scheidingslijn met dezelfde inline padding als de content.

De kolommen kunnen worden toegevoegd via de `columns` property van het `<Footer>` component.

## Varianten

De Page Footer heeft twee varianten: `default` en `compact`.

### Compact

De compacte variant is een lichte footer met alleen een tagline en enkele links. Gebruik deze wanneer de footer visueel naar de achtergrond mag treden, zoals bij formulieren, zoekresultaten of pagina's met een sterke taakfocus.

- De tagline is gewone tekst en bewust geen Heading component: het is geen kop in de documentstructuur.
- De links worden als children meegegeven en naast elkaar getoond; op smalle schermen lopen ze door naar een volgende regel.
- De kleuren en witruimte komen uit de `rhc.page-footer.compact.*` design tokens.
- De props van de standaardvariant (`heading`, `columns`, `subFooter`, `backtotop`, `preFooter`) hebben in de compacte variant geen effect.

```tsx
<Footer variant="compact" tagline="De rijksoverheid. Voor Nederland">
  <Link href="#">Privacy</Link>
  <Link href="#">Toegankelijkheid</Link>
  <Link href="#">Kwetsbaarheid melden</Link>
</Footer>
```

## Tagline

De tagline is decoratieve tekst en gebruikt geen Heading component. De styling komt uit de `rhc.page-footer.tagline.*` design tokens; cursief is de standaard.

## Heading niveau en appearance

De headings boven de kolommen krijgen standaard de appearance van heading niveau 4. Semantisch zijn het niveau 3 headings wanneer een `heading` voor de hele footer is opgegeven; zonder `heading` zijn het niveau 2 headings. De footer is een `contentinfo` landmark. Geef je een `heading` op, dan krijgt die landmark daarmee een naam (via `aria-labelledby`), zodat de footer te vinden is in de lijst met landmarks. De kop is visueel verborgen, maar telt wel mee in de koppenstructuur: de footer is daardoor ook via koppennavigatie bereikbaar en de kolomkoppen (h3) volgen netjes op de footerkop (h2).

```tsx
<Footer
  heading="Colofon"
  tagline="Footer tagline"
  columns={[
    {
      children: (
        <LinkList>
          <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
            Contact
          </LinkListLink>
        </LinkList>
      ),
      heading: 'Service',
    },
  ]}
  subFooter={
    <LinkList>
      <LinkListLink href="#">Privacy</LinkListLink>
    </LinkList>
  }
/>
```

## Terug naar boven

Een terug-naar-boven-knop is bewust geen onderdeel van de Page Footer. Plaats die als los component buiten de footer, na de content maar voor het footer-element.
