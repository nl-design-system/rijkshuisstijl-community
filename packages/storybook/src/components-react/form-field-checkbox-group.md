# Rijkshuisstijl Community FormFieldCheckboxGroup component

Deze component is deel van [FormField](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0)

Het doel van de `FormFieldCheckboxGroup` component is om een gestructureerde en toegankelijke manier te bieden om meerdere keuzemogelijkheden binnen een formulier te groeperen.

## Terminologie

- **Checkbox:** Een invoerelement waarmee de gebruiker meerdere opties kan selecteren.
- **Checkbox Group:** Een gegroepeerde set van checkboxes met een gedeeld label.
- **Form Field:** Een veld binnen een formulier dat invoer van de gebruiker accepteert.

## Usage

```jsx
import { FormFieldCheckboxGroup } from '@rijkshuisstijl-community/components-react';
import { Checkbox, FormLabel } from '@utrecht/component-library-react';

<FormFieldCheckboxGroup>
  <FormLabel key="1" type="checkbox">
    <Checkbox />
    Checkbox 1
  </FormLabel>
  <FormLabel key="2" type="checkbox">
    <Checkbox />
    Checkbox 2
  </FormLabel>
  <FormLabel key="3" type="checkbox">
    <Checkbox />
    Checkbox 3
  </FormLabel>
</FormFieldCheckboxGroup>;
```

## Voorbeelden met verkeerde implementatie

- Directe children geen `FormFieldCheckbox`

```jsx
<FormFieldCheckboxGroup>
  <div>Ongeldig element</div>
  <FormLabel key="1" type="checkbox">
    <Checkbox />
    Checkbox 1
  </FormLabel>
</FormFieldCheckboxGroup>
```

- Ontbrekend label in `FormFieldCheckbox`

```jsx
<FormFieldCheckboxGroup>
  <Checkbox />
</FormFieldCheckboxGroup>
```

- Geen `FormFieldCheckboxGroup` gebruiken

```jsx
<FormLabel key="1" type="checkbox">
  <Checkbox />
  Checkbox 1
</FormLabel>
<FormLabel key="2" type="checkbox">
  <Checkbox />
  Checkbox 2
</FormLabel>
```
