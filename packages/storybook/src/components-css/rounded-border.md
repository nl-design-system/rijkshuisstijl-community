<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD033 -->

# Rijkshuisstijl Community rounded border

Binnen de nieuwe rijkshuisstijl wordt op veel componenten een rond hoekje toegevoegd.
Om het makkelijk te maken om dit hoekje toe te voegen, exporten we verschillende CSS classes, die gebruikt kunnen worden om dit consistent toe te voegen.
Let op: je moet de hoekjes niet zomaar overal toevoegen, om een hoekje ergens toe te voegen moet je aan een aantal eisen voldoen. Zie voor meer informatie de [styleguide van de officiële rijkshuisstijl](https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=10517).

## Gebruik

Er zijn verschillende rounded border utility classes voor verschillende toepassingen. Je kunt op deze pagina ook zien hoe deze toepassingen er dan in de praktijk uit zien. Daarnaast kunnen deze classes verder worden aangepast door het overschrijven van de design tokens.

### Classes

<table>
  <tr>
    <th>Doel</th>
    <th>Class</th>
    <th colspan="2">Beschrijving</th>
  </tr>
  <tr>
    <td>Afgeronde hoek</td>
    <td>.rhc-rounded-corner</td>
    <td></td>
    <td>
      Altijd vereist. Zet de standaard CSS variabelen op en voegt standaard wat
      padding toe.
    </td>
  </tr>
  <tr>
    <td rowspan="4">Plaats van hoek</td>
    <td>.rhc-rounded-corner--corner-start-start</td>
    <td>Linksboven</td>
    <td rowspan="4">Geeft aan welke hoek afgerond moet worden.</td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--corner-start-end</td>
    <td>Rechtsboven</td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--corner-end-start</td>
    <td>Linksonder</td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--corner-end-end</td>
    <td>Rechtsonder</td>
  </tr>
  <tr>
    <td rowspan="3">Grootte van hoek</td>
    <td>.rhc-rounded-corner--size-sm</td>
    <td>Halve lint-breedte (--rhc-rounded-corner-size-sm -> --rhc-size-half-lint -> 24px)</td>
    <td rowspan="3">
      Geeft aan hoe groot de hoek moet zijn. Standaard wordt `md` gebruikt als
      er geen size gedefinieerd is.
    </td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--size-md</td>
    <td>Volledige lint-breedte (rhc-rounded-corner-size-md -> --rhc-size-lint -> 48px)</td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--size-lg</td>
    <td>Anderhalve lint-breedte (--rhc-rounded-corner-size-lg -> --rhc-size-half-lint * 3 -> 72px)</td>
  </tr>
  <tr>
    <td>Rand</td>
    <td>.rhc-rounded-corner--border</td>
    <td></td>
    <td>
      Geef aan dat er een border moet worden toegevoegd, aan dezelfde kant als
      afgeronde de hoek. De kleur kan met border-color classes of met de
      `--rhc-rounded-corner-border-color` token worden ingesteld.
    </td>
  </tr>
  <tr>
    <td rowspan="2">Kleur van rand</td>
    <td>.rhc-rounded-corner--border-color-blue</td>
    <td>--rhc-rounded-corner-color-blue -> Lintblauw (#154273)</td>
    <td rowspan="2">
      Geeft aan dat er een bepaalde gekleurde rand moet worden toegevoegd. Deze
      is niet nodig als de `--rhc-rounded-corner-border-color` token al
      gedefinieerd is.
    </td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--border-color-pink</td>
    <td>--rhc-rounded-corner-color-pink -> Roze (#F6BDE1)</td>
  </tr>
  <tr>
    <td>Dikkere rand</td>
    <td>.rhc-rounded-corner--thick-border</td>
    <td>--rhc-rounded-corner-border-thick-width -> 0.25rem</td>
    <td>
      Maakt de border dikker. Deze is niet nodig als de
      `--rhc-rounded-corner-border-width` token al gedifinieerd is.
    </td>
  </tr>
  <tr>
    <td rowspan="2">Achtergrondkleur</td>
    <td>.rhc-rounded-corner--background-color-blue</td>
    <td>--rhc-rounded-corner-color-blue -> Lintblauw (#154273)</td>
    <td rowspan="2">
      Geeft aan dat er een bepaalde gekleurde rand moet worden toegevoegd. Deze
      is niet nodig als de `--rhc-rounded-corner-border-color` token
      gedefinieerd is.
    </td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--background-color-pink</td>
    <td>--rhc-rounded-corner-color-pink -> Roze (#F6BDE1)</td>
  </tr>
  <tr>
    <td>Geen padding</td>
    <td>.rhc-rounded-corner--no-padding</td>
    <td></td>
    <td>
      Soms is het niet nodig dat een element met een rond hoekje een bepaalde
      padding heeft, in dat geval kan deze class worden gebruikt. In plaats van
      deze class kunnen ook de `--rhc-rounded-corner-padding`,
      `--rhc-rounded-corner-padding-inline` en
      `--rhc-rounded-corner-padding-block` tokens worden gebruikt om de padding
      in te stellen.
    </td>
  </tr>
</table>

### Design tokens

<table>
  <tr>
    <th>Token</th>
    <th>Standaard waarde</th>
    <th>Beschrijving</th>
  </tr>
  <tr>
    <td>--rhc-rounded-corner-radius</td>
    <td></td>
    <td>Grootte van de hoek. Als deze leeg is wordt naar de rhc-rounded-corner-size-\* classes gekeken. Als die class er ook niet is wordt de volledige lint-breedte gebruikt.</td>
  </tr>
  <tr>
    <td>--rhc-rounded-corner-border-width</td>
    <td>--rhc-border-width-m -> 2px</td>
    <td>De grootte van de border van de afgeronde hoek. Deze token wordt alleen gebruikt als de .rhc-rounded-corner--corner-\* en .rhc-rounded-corner--border of .rhc-rounded-corner--border-color-\* op het element staan om expliciet een border toe te voegen.</td>
  </tr>
  <tr>
    <td>--rhc-rounded-corner-border-color</td>
    <td></td>
    <td>De kleur van de border van de afgeronde hoek. Deze token wordt alleen gebruikt als de .rhc-rounded-corner--corner-\* en .rhc-rounded-corner--border op het element staan om expliciet een border toe te voegen. Als hij leeg blijft wordt de kleur die gedefinieerd is door de .rhc-rounded-corner-border-color-\* class op het element gebruikt.</td>
  </tr>
  <tr>
    <td>--rhc-rounded-corner-background-color</td>
    <td></td>
    <td>De kleur van de achtergrond van het element. Als hij leeg blijft wordt de kleur die gedefinieerd is door .rhc-rounded-corner--background-color-\* class op het element gebruikt.</td>
  </tr>
  <tr>
    <td>--rhc-rounded-corner-padding</td>
    <td>--rhc-space-500 -> 2.5rem</td>
    <td>Geeft de spacing aan aan de binnenkant van het element. Kan ook worden gedefinieerd met --rhc-rounded-corner-padding-block en --rhc-rounded-corner-padding-inline. Wordt genegeerd als de .rhc-rounded-corner--no-padding class op het element is toegevoegd.</td>
  </tr>
</table>

### Voorbeelden

#### Alleen een afgerond hoekje

- .rhc-rounded-corner -> hoofd class name
- .rhc-rhc-rounded-corner--corner-start-start -> geeft de hoek aan die afgerond moet worden
- .rhc-rounded-corner--no-padding -> een plaatje heeft geen padding nodig, naast dat dit met de tokens kan worden ingesteld is er ook een class voor

```html
<img
  class="rhc-rounded-corner rhc-rounded-corner--corner-start-start rhc-rounded-corner--no-padding"
  src="example.jpg"
  ...
/>
```

<img class="rhc-rounded-corner rhc-rounded-corner--corner-start-start rhc-rounded-corner--no-padding" src="./placeholder.jpg" width="300" height="100" alt="Veld met bloemen">

### Een gekleurde border met een afgerond hoekje

```html
<div class="rhc-rounded-corner rhc-rounded-corner--corner-start-start rhc-rounded-corner--border-color-blue"></div>
```

<div class="rhc-rounded-corner rhc-rounded-corner--corner-start-start rhc-rounded-corner--border-color-blue"></div>
