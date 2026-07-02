# Rijkshuisstijl Community Footer component

De footer (Page Footer) bestaat uit twee delen: de hoofdinhoud met een optionele tagline en kolommen met vrije content (zoals `LinkList` componenten), en een optionele sub-footer voor wettelijk verplichte links zoals Privacy, Toegankelijkheid en Kwetsbaarheid melden. Tussen beide delen staat een scheidingslijn met dezelfde inline padding als de content.

De kolommen kunnen worden toegevoegd via de `columns` property van het `<Footer>` component.

## Tagline

De tagline is decoratieve tekst en gebruikt geen Heading component. De styling komt uit de `rhc.page-footer.tagline.*` design tokens; cursief is de standaard.

## Heading niveau en appearance

De headings boven de kolommen krijgen standaard de appearance van heading niveau 4. Semantisch zijn het niveau 3 headings wanneer een verborgen `heading` voor de hele footer is opgegeven; zonder `heading` zijn het niveau 2 headings. De footer is een `contentinfo` landmark. Geef je een `heading` op, dan krijgt die landmark daarmee een naam (via `aria-labelledby`), zodat de footer te vinden is in de lijst met landmarks. De kop zelf wordt niet getoond en is niet via koppennavigatie bereikbaar.

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
