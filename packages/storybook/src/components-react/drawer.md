<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Drawer component

## Usage

Importeer `Drawer` en vul deze met de slot-elementen. Default is `open={false}` en `align="inline-start"`. De drawer staat 48px van de bovenkant en heeft een vaste paneelbreedte (600px) bij de zij-varianten.

```tsx
import { Drawer } from '@rijkshuisstijl-community/components-react';

<Drawer open={true} modal={false} align={'block-end' | 'block-start' | 'inline-end' | 'inline-start'} />;
```

## Structuur (header / body / footer)

De drawer levert alleen de container. De opmaak (padding, separators, scroll) komt van drie slot-elementen die je zelf als children meegeeft:

- `.utrecht-drawer__header`: blijft staan (scrollt niet mee). Bevat de titel (`.utrecht-drawer__title`) en de sluitknop, met een ingesprongen separator eronder.
- `.utrecht-drawer__body`: de scroll-container. Alleen dit deel scrollt bij overflow.
- `.utrecht-drawer__footer`: blijft staan, met een ingesprongen separator erboven.

```tsx
import { Button, Drawer, Heading, IconButton } from '@rijkshuisstijl-community/components-react';

<Drawer open align="inline-start">
  <header className="utrecht-drawer__header">
    <Heading appearanceLevel={3} className="utrecht-drawer__title" level={2}>
      Drawer title
    </Heading>
    <form className="utrecht-drawer__header-actions" method="dialog">
      <IconButton icon="kruis" label="Sluiten" purpose="secondary" type="submit" />
    </form>
  </header>
  <div className="utrecht-drawer__body">{/* scrollbare content */}</div>
  <footer className="utrecht-drawer__footer">
    <Button appearance="primary-action-button">Ja ik doe mee</Button>
  </footer>
</Drawer>;
```

De sluitknop gebruikt de native `<form method="dialog">` met een `type="submit"`-knop, zodat de drawer zonder JavaScript sluit. `label="Sluiten"` levert een toegankelijke naam (visueel verborgen bij de icon-only variant).

## Afgeronde hoek

De afgeronde hoek loopt via de `rhc-rounded-corner` utility op de `Drawer` (`utrecht.drawer.border-radius` staat daarom op `none`). Rond alleen de bovenhoek af die naar de content wijst:

- `inline-start`: top-right (`rhc-rounded-corner--position-start-end`)
- `inline-end`: top-left (`rhc-rounded-corner--position-start-start`)
- `block-end`: beide bovenhoeken (`--position-start-start` en `--position-start-end`)

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

Met `modal={true}` opent de drawer als modale dialog (`showModal()`) en krijgt de achtergrond een donkere overlay (backdrop).
