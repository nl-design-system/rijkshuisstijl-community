<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Card As Link component

Gebruik een card op een overzichtspagina om te linken naar een artikelpagina, zoals een nieuwsartikel, een vacature of een zoekresultaat.
De card bevat doorgaans de titel, inleiding en een afbeelding van de content.
De link is verplicht.

## Richtlijnen

- De heading van een card is een heading die eruit ziet als een link (maar zelf geen link is).
- De card is zelf geen anchor maar bevat een anchor die over de hele card heen valt met behulp van CSS. De link is dus actief in het hele gebied van de card. Dit zorgt ervoor dat een e-reader niet de hele content van de card opleest alsof het een link is maar de structuur van de card behoudt.
- De title prop vult zowel de title attribute als de aria-label van de anchor. Title zorgt dus voor zowel een beschrijvend label voor screen readers als een tooltip die verschijnt wanneer een gebruiker over de link hovered. Verwar titel niet met heading.
- Een card heeft meer content nodig dan alleen een heading. Vul dit aan met tekstuele en/of visuele content.
- De description wordt behandeld als een paragraaf in de card.
- De LinkLabel kan worden gebruikt bij de default-card om extra informatie te geven over de link/verwijzing van de card.

## Zo moet het niet

- Maak van de card zelf geen anchor of wrap de card niet in een anchor. Dit zorgt ervoor dat de content van de card niet meer op een juiste manier wordt opgelezen door een screen reader.

Niet:

```html
<a className="rhc-card-as-link">
  <div className="rhc-card-as-link__content">...</div>
</a>
```

Wel:

```html
<div className="rhc-card-as-link">
  <span className="rhc-card-as-link__anchor">
    <a aria-label="aria-label" href="href" />
  </span>
  <div className="rhc-card-as-link__content">...</div>
</div>
```

### Schermlezers

Met een schermlezer kan worden genavigeerd met behulp van koppen en links in een document.
De card is een link met een kop, dus beide navigatiemethoden kunnen worden gebruikt.
Een schermlezer leest eerst de heading, gevolgd door de rest van de inhoud.
