<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD033 -->

# Rijkshuisstijl Community rounded border

Binnen de nieuwe rijkshuisstijl wordt op veel componenten een rond hoekje toegevoegd.
Om het makkelijk te maken om dit hoekje toe te voegen, hebben we deze helper component gemaakt, die gebruikt kunnen worden om dit consistent toe te voegen.
Let op: je moet de hoekjes niet zomaar overal toevoegen, om een hoekje ergens toe te voegen moet je aan een aantal eisen voldoen. Zie voor meer informatie de [styleguide van de officiële rijkshuisstijl](https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=10517).

## Gebruik

Er zijn verschillende rounded border utility classes voor verschillende toepassingen. Je kunt op deze pagina ook zien hoe deze toepassingen er dan in de praktijk uit zien. Daarnaast kunnen deze classes verder worden aangepast door het overschrijven van de design tokens.

Deze tokens zijn gericht op de border radius en de kant van de hoek. De content vul je zelf in.

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
    <td>.rhc-rounded-corner--position-start-start</td>
    <td>Linksboven</td>
    <td rowspan="4">Geeft aan welke hoek afgerond moet worden.</td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--position-start-end</td>
    <td>Rechtsboven</td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--position-end-start</td>
    <td>Linksonder</td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--position-end-end</td>
    <td>Rechtsonder</td>
  </tr>
  <tr>
    <td rowspan="3">Grootte van hoek</td>
    <td>.rhc-rounded-corner--size-sm</td>
    <td>Halve lint-breedte (--rhc-rounded-corner-sm-border-radius -> --rhc-size-half-lint -> 24px)</td>
    <td rowspan="3">
      Geeft aan hoe groot de hoek moet zijn. Standaard wordt `md` gebruikt als
      er geen size gedefinieerd is.
    </td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--size-md</td>
    <td>Volledige lint-breedte (--rhc-rounded-corner-md-border-radius -> --rhc-size-lint -> 48px)</td>
  </tr>
  <tr>
    <td>.rhc-rounded-corner--size-lg</td>
    <td>Anderhalve lint-breedte (--rhc-rounded-corner-lg-border-radius -> --rhc-size-3-lint -> 72px)</td>
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
    <td>--rhc-rounded-corner-border-radius</td>
    <td></td>
    <td>Grootte van de hoek. Als deze leeg is wordt naar de rhc-rounded-corner-size-\* classes gekeken. Als die class er ook niet is wordt de volledige lint-breedte gebruikt.</td>
  </tr>
  <tr>
    <td>--rhc-rounded-corner-overflow</td>
    <td></td>
    <td>Gedrag van de overflow. Als deze leeg is wordt hidden gebruikt om alles achter de hoek te verbergen.</td>
  </tr>
</table>
