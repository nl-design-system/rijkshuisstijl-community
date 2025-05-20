<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community FormFieldCheckboxOption component

De `FormFieldCheckboxOption` component is een uitbreidingscomponent van `FormFieldCheckbox` uit de `@utrecht/component-library-react`. Deze component voegt extra functionaliteit toe, zoals foutmeldingen met een icoon en toegankelijke beschrijvingen.

## Functionaliteit

De FormFieldCheckboxOption component biedt:

- Een checkbox met een optionele beschrijving.
- Weergave van foutmeldingen inclusief een foutmelding icoon.
- Automatische generatie van toegankelijke ID's voor beschrijvingen en foutmeldingen.

## Terminologie

- **Checkbox:** Een invoerelement waarmee een gebruiker een optie kan aan- of uitvinken.
- **description:** Een extra tekst onder de checkbox om context te bieden.
- **errorMessage:** Een visuele indicatie van een ongeldig invoerveld, inclusief een foutmelding-icoon.

## Usage

```tsx
import { FormFieldCheckboxOption } from '@rijkshuisstijl-community/components-react';

<FormFieldCheckboxOption label="Checkbox" />;
```

## Voorbeelden met verkeerde implementatie

- Ontbrekende label prop

```jsx
<FormFieldCheckboxOption />
```

- Geen gebruik van `invalid` bij een foutmelding

```jsx
// Fout
<FormFieldCheckboxOption errorMessage="Dit veld is verplicht" />

// Correct
<FormFieldCheckboxOption invalid errorMessage="Dit veld is verplicht" />
```
