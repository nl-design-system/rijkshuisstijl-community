<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Navigation List component

NL design system - geen | [Figma](https://www.figma.com/design/Nv5EsCW9ioWBUSi9m9JqOa/Local---Rijkshuisstijl---Bibliotheek?node-id=4074-1580&node-type=canvas&t=HuDzyBW9wHdB2QVh-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/557)

## Usage

```tsx
import { NavigationList, NavigationListItem, NavigationListLink } from '@rijkshuisstijl-community/components-react';

<NavigationList>
  <NavigationListItem description="Uw gegevens, familie en identiteitsbewijs" href="#" icon="user" label="Identiteit" />
  <NavigationListItem
    description="Uw inkomen, toeslagen, bijdragen en belastingen"
    href="#"
    icon="currency-euro"
    label="Financiën"
  />
</NavigationList>;
```
