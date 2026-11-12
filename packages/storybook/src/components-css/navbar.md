# Navigation Bar

De Navigation Bar is de hoofdnavigatie van een pagina, opgebouwd met CSS classes. Op smalle schermen klapt de balk in achter een menuknop.

## Anatomie

De Navigation Bar bestaat uit de volgende onderdelen:

- **Menu** (`rhc-nav-bar__menu`): een popover die gesloten gewoon als balk wordt getoond. Op smalle schermen opent de menuknop hem als paneel over de pagina.
- **Lijsten** (`rhc-nav-bar__list`): een lijst aan het begin en een lijst aan het einde (`rhc-nav-bar__list--end`) van de balk.
- **Identity** (`rhc-nav-bar-identity`): de naam of titel van de site, als item in een lijst.
- **Menuknop** (`rhc-nav-bar__toggle`): alleen zichtbaar op smalle schermen.
- **Link met huidige pagina**: een link met `aria-current="page"` krijgt een eigen kleur en onderstreping.

Op smalle schermen staan alleen items met `rhc-nav-bar__item--persistent` en de menuknop in de balk. De andere items staan in het menu. Openen, sluiten met `Escape` en klikken buiten het menu regelt de native Popover API, zonder JavaScript.

Geef de balk een unieke anchor-naam via `--rhc-nav-bar-anchor`. Het menu en het megamenu positioneren zich daarmee ten opzichte van de juiste balk.

## Gebruik

### Eenvoudig voorbeeld

```html
<nav class="rhc-nav-bar" aria-label="Hoofdnavigatie" style="--rhc-nav-bar-anchor: --hoofdnavigatie">
  <div class="rhc-nav-bar__menu" id="hoofdnavigatie-menu" popover="auto">
    <ul class="rhc-nav-bar__list rhc-nav-bar__list--start">
      <li class="rhc-nav-bar__item">
        <a class="rhc-nav-bar__link" href="/">Home</a>
      </li>
      <li class="rhc-nav-bar__item">
        <a class="rhc-nav-bar__link" aria-current="page" href="/nieuws">Nieuws</a>
      </li>
    </ul>
    <ul class="rhc-nav-bar__list rhc-nav-bar__list--end"></ul>
    <button class="rhc-nav-bar__toggle rhc-nav-bar__link" popovertarget="hoofdnavigatie-menu">
      <span class="utrecht-icon rhc-nav-bar__toggle-icon-open"><!-- menu-icoon --></span>
      <span class="utrecht-icon rhc-nav-bar__toggle-icon-close"><!-- kruis-icoon --></span>
      <span class="rhc-visually-hidden">Menu</span>
    </button>
  </div>
</nav>
```

### Met identity en end items

```html
<nav class="rhc-nav-bar" aria-label="Dataregister" style="--rhc-nav-bar-anchor: --dataregister">
  <div class="rhc-nav-bar__menu" id="dataregister-menu" popover="auto">
    <ul class="rhc-nav-bar__list rhc-nav-bar__list--start">
      <li class="rhc-nav-bar__item rhc-nav-bar__item--persistent rhc-nav-bar-identity">
        <a class="rhc-link rhc-nav-bar-identity__link" href="/">Dataregister</a>
      </li>
      <li class="rhc-nav-bar__item">
        <a class="rhc-nav-bar__link" href="/">Data</a>
      </li>
    </ul>
    <ul class="rhc-nav-bar__list rhc-nav-bar__list--end">
      <li class="rhc-nav-bar__item rhc-nav-bar__item--button-on-mobile rhc-nav-bar__item--button-on-mobile--primary">
        <a class="rhc-nav-bar__link" href="/inloggen">Inloggen</a>
      </li>
    </ul>
    <button class="rhc-nav-bar__toggle rhc-nav-bar__link" popovertarget="dataregister-menu">
      <span class="utrecht-icon rhc-nav-bar__toggle-icon-open"><!-- menu-icoon --></span>
      <span class="utrecht-icon rhc-nav-bar__toggle-icon-close"><!-- kruis-icoon --></span>
      <span class="rhc-visually-hidden">Menu</span>
    </button>
  </div>
</nav>
```

De classes `rhc-nav-bar__item--button-on-mobile--secondary` en `rhc-nav-bar__item--button-on-mobile--primary` tonen een item op smalle schermen als knop, in plaats van als link.

Gebruik een duidelijke `aria-label` die past bij de inhoud van de balk, zoals "Hoofdnavigatie" of "Dataregister".

### Identity primary

Gebruik `rhc-nav-bar-identity--primary` voor een grotere, opvallende identity, bijvoorbeeld op de eerste balk boven een tweede balk.

```html
<li class="rhc-nav-bar__item rhc-nav-bar__item--persistent rhc-nav-bar-identity rhc-nav-bar-identity--primary">
  <a class="rhc-link rhc-nav-bar-identity__link" href="/">Overheid.nl</a>
</li>
```

Zie de Navigation Bar in React voor het megamenu (`rhc-nav-bar__megamenu-item`), dat is opgebouwd uit meerdere onderdelen.
