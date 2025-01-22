# Rijkshuisstijl Community Flag Icon Set

Onderstaande iconen komen uit een losse icon set van de Rijkshuisstijl Commmunity. Voor gebruik moet deze set eerst geregistreerd worden. Zie ook de storybook pagina over de [Icon component](?path=/docs/rhc-icon--docs) en de [Standaard Icon set](?path=/docs/rhc-templates-default-icon-set--docs)

## Usage

```tsx
import { Icon, registerIconSet } from '@rijkshuisstijl-community/components-react';
import { iconSet } from '@rijkshuisstijl-community/components-react/src/icon-sets/flag-icons/icon-set';

registerIconSet(iconSet);

<Icon icon="nl-flag" />;
```
