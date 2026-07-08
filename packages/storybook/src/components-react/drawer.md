<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Drawer component

## Usage

Importeer `Drawer` en vul deze met de slot-elementen. `open` bepaalt de zichtbaarheid, `align` de positie. Bij de zij-varianten `inline-start` en `inline-end` staat de drawer 48px van de bovenkant en is de breedte begrensd tot 600px.

```tsx
import { Drawer } from '@rijkshuisstijl-community/components-react';

<Drawer open={true} modal={false} align={'block-end' | 'block-start' | 'inline-end' | 'inline-start'} />;
```

## Structuur (header / body / footer)

De drawer levert alleen de container. De opmaak van padding, separators en scroll komt van drie slot-elementen die je als children meegeeft:

- `.utrecht-drawer__header`: blijft staan en scrollt niet mee. Bevat de titel `.utrecht-drawer__title` en de sluitknop, met een ingesprongen separator eronder.
- `.utrecht-drawer__body`: de scroll-container. Alleen dit deel scrollt bij overflow. Geef het een `tabIndex={0}` zodat toetsenbordgebruikers de inhoud kunnen scrollen.
- `.utrecht-drawer__footer`: blijft staan, met een ingesprongen separator erboven.

```tsx
import { Button, Drawer, Heading, IconButton } from '@rijkshuisstijl-community/components-react';

<Drawer open align="inline-start">
  <header className="utrecht-drawer__header">
    <Heading appearanceLevel={3} className="utrecht-drawer__title" level={2}>
      Drawer title
    </Heading>
    <form method="dialog">
      <IconButton icon="kruis" label="Sluiten" purpose="secondary" type="submit" />
    </form>
  </header>
  <div aria-label="Inhoud" className="utrecht-drawer__body" role="group" tabIndex={0}>
    {/* scrollbare content */}
  </div>
  <footer className="utrecht-drawer__footer">
    <Button purpose="primary">Ja ik doe mee</Button>
  </footer>
</Drawer>;
```

De sluitknop gebruikt een native `<form method="dialog">` met een `type="submit"`-knop, zodat de drawer zonder JavaScript sluit. `label="Sluiten"` levert een toegankelijke naam, visueel verborgen bij de icon-only variant.

## Afgeronde hoek

De afgeronde hoek wordt geregeld door de `rhc-rounded-corner` utility op de `Drawer`; `utrecht.drawer.border-radius` staat daarom op `none`. Rond alleen de bovenhoek aan de contentzijde af:

- `inline-start`: top-right, met `rhc-rounded-corner--position-start-end`
- `inline-end`: top-left, met `rhc-rounded-corner--position-start-start`
- `block-end`: beide bovenhoeken, met `--position-start-start` en `--position-start-end`

```tsx
<Drawer
  open
  align="inline-start"
  className="rhc-rounded-corner rhc-rounded-corner--size-md rhc-rounded-corner--position-start-end"
>
  {/* header / body / footer */}
</Drawer>
```

## Modal

Met `modal={true}` opent de drawer als modale dialog met `showModal()` en verschijnt er een backdrop-overlay over de achtergrond. De kleur daarvan is themebaar via de backdrop-tokens.
