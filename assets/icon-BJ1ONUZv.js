import{c as e}from"./createReactComponent-2Nv4yEc_.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var o=e("outline","brand-x","IconBrandX",[["path",{d:"M4 4l11.733 16h4.267l-11.733 -16z",key:"svg-0"}],["path",{d:"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772",key:"svg-1"}]]);const t=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community icon component

Dit component is een wrapper om een SVG element. Door dit component te gebruiken heeft deze constant dezelfde styling en grootte.

## Usage

Dit component kan op verschillende manieren worden gebruikt. Hieronder staan de verschillende manieren beschreven, beginnend met de makkelijkste manier.

- Standaard is er de optie om een icon property mee te geven met dit component, wat staat voor een van de ondersteunde icon IDs uit de [icon set](?path=/docs/rhc-templates-default-icon-set--docs) van de Rijkshuisstijl Community.

\`\`\`tsx
import { Icon } from from '@rijkshuisstijl-community/components-react';

<Icon icon="home" />
\`\`\`

- Als tweede optie is het mogelijk om een SVG element/React Node mee te geven, dit hoeft dus geen icoon uit een icon set te zijn.

\`\`\`tsx
import { Icon } from from '@rijkshuisstijl-community/components-react';
import { IconBrandX } from '@tabler/icons-react';

<Icon><IconBrandX /></Icon>
\`\`\`

- Als je veel eigen icons hebt kan je eigen icons toevoegen aan de icon set. Als deze hetzelfde icon ID hebben als een bestaande uit de [Rijkshuisstijl community icon set](?path=/docs/rhc-templates-default-icon-set--docs), wordt deze overschreven met je eigen icon.

\`\`\`tsx
import { Icon, registerIconSet } from from '@rijkshuisstijl-community/components-react';
import { MijnEigenIcon, NogEenIcon, EnEenDerdeIcon } from 'mijn-icon-package';

registerIconSet({
  'mijn-eigen-icon': <MijnEigenIcon />,
  'nog-een-icon': <NogEenIcon />,
  'en-een-derde-icon': <EnEenDerdeIcon />,
});

<Icon icon="mijn-eigen-icon" />
<Icon icon="nog-een-icon" />
<Icon icon="en-een-derde-icon" />

\`\`\`
`;export{o as I,t as r};
