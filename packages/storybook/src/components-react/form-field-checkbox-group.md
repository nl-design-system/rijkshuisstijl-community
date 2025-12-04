# Rijkshuisstijl Community FormFieldCheckboxGroup component

Deze component is deel van [FormField](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0)

Het doel van de `FormFieldCheckboxGroup` component is om een gestructureerde en toegankelijke manier te bieden om meerdere keuzemogelijkheden binnen een formulier te groeperen.

## Terminologie

- **Checkbox:** Een invoerelement waarmee de gebruiker meerdere opties kan selecteren.
- **Checkbox Group:** Een gegroepeerde set van checkboxes met een gedeeld label.
- **Form Field:** Een veld binnen een formulier dat invoer van de gebruiker accepteert.

## Usage

```jsx
import { FormFieldCheckboxGroup, FormFieldCheckbox } from '@rijkshuisstijl-community/components-react';

<FormFieldCheckboxGroup>
  <FormFieldCheckbox label="Checkbox 1" />
  <FormFieldCheckbox label="Checkbox 2" />
  <FormFieldCheckbox label="Checkbox 3" />
</FormFieldCheckboxGroup>;
```

## Voorbeelden met verkeerde implementatie

- Directe children geen `FormFieldCheckbox`

```jsx
<FormFieldCheckboxGroup>
  <div>Ongeldig element</div>
  <FormFieldCheckbox label="Checkbox 1" />
</FormFieldCheckboxGroup>
```

- Ontbrekende label prop in `FormFieldCheckbox`

```jsx
<FormFieldCheckboxGroup>
  <FormFieldCheckbox />
</FormFieldCheckboxGroup>
```

- Geen `FormFieldCheckboxGroup` gebruiken

```jsx
<FormFieldCheckbox label="Checkbox 1" />
<FormFieldCheckbox label="Checkbox 2" />
```
