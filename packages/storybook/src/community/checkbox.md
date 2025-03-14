<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Checkbox component

Checkboxes worden meestal gebruikt om gebruikers de mogelijkheid te geven een reeks keuzes te maken (nul, één of meer). Ze kunnen ook worden gebruikt om gebruikers te laten aangeven dat ze akkoord gaan met specifieke voorwaarden."

## Hoe te gebruiken

Checkboxes worden gebruikt voor meerdere keuzes, niet voor wederzijds exclusieve keuzes. Elk selectievakje functioneert onafhankelijk van de andere vakjes in de lijst, waardoor het aanvinken van een extra vakje geen invloed heeft op andere selecties.

```tsx
import { Checkbox } from '@rijkshuisstijl-community/components-react';

<Checkbox>Checkbox</Checkbox>;
```

## Containers

Checkboxes kunnen worden gebruikt in forms op pagina's of in modals.

## Best practices

### Do's

Checkboxes moeten:

- Onafhankelijk van elkaar werken: het selecteren van een checkbox mag de selectie van een andere checkbox in de lijst niet veranderen.
- Positief geformuleerd zijn: bijvoorbeeld "Meldingen inschakelen" in plaats van "Meldingen uitschakelen".
- Altijd een label hebben wanneer je ze gebruikt om een instelling aan of uit te zetten.
- Label-tags gebruiken als klikbare elementen.
- In een logische volgorde worden geplaatst, bijvoorbeeld alfabetisch, numeriek, op tijdsbasis, of volgens een ander duidelijk systeem.
- Een link bevatten naar meer informatie of een subtitel hebben voor extra uitleg. Vertrouw niet op tooltips om een checkbox uit te leggen.
- Indien te lang, over de tweede regel doorlopen. Dit heeft de voorkeur boven afkorten.
- Indien te lang, links worden uitgelijnd.
- Indien te lang, laat de tekst onder de checkbox doorlopen zodat de controle en het label bovenaan zijn uitgelijnd.

### Don'ts

Checkboxes mogen niet:

- Niet worden afgebroken door een taak over te slaan als het label te lang is en over 2 regels doorloopt.

## Content guidelines

### Checkboxlabels moeten

- Beginnen met een hoofdletter.
- Niet eindigen met een leesteken als het een enkele zin, woord of fragment is.
- In het geval dat de checkbox vraagt om akkoord te gaan met de voorwaarden, de eerste persoon gebruiken (bijvoorbeeld: "Ik ga akkoord met de voorwaarden").

## Keyboard support

Gebruik de tab-toets om de focus naar elke checkbox te verplaatsen (of shift + tab om achteruit te navigeren).
Activeer of deactiveer checkboxes met de spatiebalk.

## Alternatives and related components

- Gebruik radio buttons om een lijst met opties weer te geven waarbij gebruikers slechts één keuze kunnen maken.

### Referenties

- [NNGroup: Checkboxes vs. Radio Buttons](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)
- [UX Planet: Checkbox and Toggle in Forms](https://uxplanet.org/checkbox-and-toggle-in-forms-f0de6086ac41)
