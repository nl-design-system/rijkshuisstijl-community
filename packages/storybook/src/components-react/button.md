<!-- @license CC0-1.0 -->

# Button op basis van nl-button

De Button gebruikt de Button candidate van NL Design System (`nl-button`) als basis. Kies de variant met de `purpose` property:

```tsx
<Button purpose="primary">Verstuur</Button>
<Button purpose="secondary">Vorige stap</Button>
<Button purpose="subtle">Annuleer</Button>
```

De `appearance` property uit de eerdere Utrecht-basis blijft werken en wordt vertaald naar de overeenkomstige `purpose`, maar is deprecated.

## Disabled

`disabled` gebruikt `aria-disabled` zodat de button focusbaar blijft voor toetsenbord- en screenreadergebruikers. Wil je per se het HTML-attribuut `disabled`, gebruik dan `htmlDisabled`.

## Icon Only

```tsx
<IconButton icon="kalender" label="Kies een datum" />
```

Het label blijft toegankelijk voor hulptechnologie, alleen het icoon is zichtbaar.
