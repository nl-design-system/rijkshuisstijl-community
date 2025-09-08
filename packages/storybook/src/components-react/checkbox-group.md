<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community CheckboxGroup component

`CheckboxGroup` biedt de mogelijkheid om één of meerdere opties te selecteren uit een lijst. Het doel van de component is om een gestructureerde en toegankelijke manier te bieden om meerdere keuzemogelijkheden te groeperen.

`CheckboxGroup` bevat één of meerdere `FormFieldCheckboxOption` componenten.

## Terminologie

- **Checkbox:** Een invoerelement waarmee de gebruiker een optie kan selecteren of deselecteren.
- **Checkbox Group:** Een gegroepeerde set van checkboxes met een gedeelde label.

## Usage

```tsx
import { CheckboxGroup, FormFieldCheckboxOption } from '@rijkshuisstijl-community/components-react';

<CheckboxGroup>
  <FormFieldCheckboxOption label="Checkbox 1" />,
  <FormFieldCheckboxOption label="Checkbox 2" />,
</CheckboxGroup>;
```

## Voorbeelden met een verkeerde implementatie

Directe children zijn geen `FormFieldCheckboxOption`:

```jsx
<CheckboxGroup>
  <div>Ongeldig element</div>
  <FormFieldCheckboxOption label="Checkbox 1" />,
</CheckboxGroup>
```

Ontbrekende label property wanneer `FormFieldCheckbox` wordt gebruikt:

```jsx
<CheckboxGroup>
  <FormFieldCheckboxOption />,
</CheckboxGroup>
```

Geen `CheckboxGroup` gebruiken:

```jsx
  <FormFieldCheckboxOption label="Checkbox 1" />,
<FormFieldCheckboxOption label="Checkbox 2" />,
```
