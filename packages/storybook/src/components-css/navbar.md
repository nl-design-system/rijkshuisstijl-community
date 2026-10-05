# Navigation Bar

De Navigation Bar is de hoofdnavigatie van een pagina, opgebouwd met CSS classes. Op smalle schermen klapt de balk in achter een menuknop.

## Anatomie

De Navigation Bar bestaat uit de volgende onderdelen:

- **Identity**: de naam of titel van de site, aan het begin van de balk.
- **Slot**: een navigatiegedeelte met links. Je kunt meerdere slots naast elkaar plaatsen.
- **Megamenu**: een optioneel uitklapmenu met links in kolommen, dat opent via een menuknop. Vervangt de gewone slot-indeling door een menuknop, maar kan samen met `identity` gebruikt worden.
- **Link met huidige pagina**: een link met `aria-current="page"` krijgt een eigen kleur en onderstreping.

## Gebruik

### Eenvoudig voorbeeld

```html
<div class="rhc-nav-bar">
  <div class="rhc-nav-bar__slot-main">
    <div class="rhc-nav-bar__slots">
      <div class="rhc-nav-bar__slot">
        <nav class="rhc-nav-bar__nav" aria-label="Hoofdnavigatie">
          <ul class="rhc-nav-bar__list">
            <li class="rhc-nav-bar__item">
              <a class="rhc-nav-bar__link" href="/">Home</a>
            </li>
            <li class="rhc-nav-bar__item">
              <a class="rhc-nav-bar__link" aria-current="page" href="/nieuws">Nieuws</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
```

### Met identity en meerdere slots

```html
<div class="rhc-nav-bar">
  <div class="rhc-nav-bar__slot-identity">
    <div class="rhc-nav-bar__identity">
      <a class="rhc-link" href="/">Dataregister</a>
    </div>
  </div>
  <div class="rhc-nav-bar__slot-main">
    <div class="rhc-nav-bar__slots">
      <div class="rhc-nav-bar__slot">
        <nav class="rhc-nav-bar__nav" aria-label="Hoofdnavigatie">
          <ul class="rhc-nav-bar__list">
            <li class="rhc-nav-bar__item">
              <a class="rhc-nav-bar__link" href="/">Data</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="rhc-nav-bar__slot">
        <nav class="rhc-nav-bar__nav" aria-label="Overige links">
          <ul class="rhc-nav-bar__list">
            <li class="rhc-nav-bar__item rhc-nav-bar__item--button-on-mobile rhc-nav-bar__item--button-on-mobile--primary">
              <a class="rhc-nav-bar__link" href="/inloggen">Inloggen</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
```

De classes `rhc-nav-bar__item--button-on-mobile--secondary` en `rhc-nav-bar__item--button-on-mobile--primary` tonen een item op smalle schermen als knop, in plaats van als link.

Gebruik een duidelijke `aria-label` die past bij de inhoud van de balk, zoals "Hoofdnavigatie" of "Overige links".

### Identity primary

Gebruik `rhc-nav-bar__identity--primary` voor een grotere, opvallende identity, bijvoorbeeld op de eerste balk boven een tweede balk.

```html
<div class="rhc-nav-bar__identity rhc-nav-bar__identity--primary">
  <a class="rhc-link" href="/">Overheid.nl</a>
</div>
```

Zie de Navigation Bar in React voor het megamenu, dat is opgebouwd uit meerdere onderdelen.
