<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community FormFieldRadioGroup component

Deze component is deel van [FormField](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0)

## FormFieldRadioGroup met [FormFieldRadio](/docs/rijkhuisstijl-form-field-radio--docs)

### Usage

```jsx
import { FormFieldRadioGroup, FormFieldRadio } from '@rijkshuisstijl-community/components-react';

<FormFieldRadioGroup>
  <FormFieldRadio name="radio-group-name" label="Radio 1" />
  <FormFieldRadio name="radio-group-name" label="Radio 2" />
  <FormFieldRadio name="radio-group-name" label="Radio 3" />
</FormFieldRadioGroup>;
```

Om ervoor te zorgen dat er maar een van de radio options wordt geselecteerd, moet de name property in elke radio option dezelfde waarde worden geven.
