const n=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community action group component

De action group is een container voor een aantal buttons, of voor een losstaande button.

## Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **group**: van \`role=group\` in ARIA.

## Verticale variant

Voor smalle schermen bij plaatsing in smalle panelen (zoals een sidebar) is er een variant waar buttons onder elkaar staan, in plaats van naast elkaar. Gebruik deze variant niet wanneer er voldoende ruimte is voor de standaard variant. Je kunt bijvoorbeeld CSS media queries gebruiken om deze variant toe te passen voor kleine schermen.

## Usage

\`\`\`tsx
import { ActionGroup } from '@rijkshuisstijl-community/components-react';

<ActionGroup direction="row">
  <Button appearance="primary-action-button" key="primary-action-button">
    Save and continue
  </Button>
  <Button appearance="secondary-action-button" key="secondary-action-button">
    Back
  </Button>
</ActionGroup>;
\`\`\`
`;export{n as r};
