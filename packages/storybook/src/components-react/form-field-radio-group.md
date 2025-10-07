<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community FormFieldRadioGroup component

Deze component is deel van [FormField](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0)

## FormFieldRadioGroup met [FormFieldRadio](/docs/rijkhuisstijl-form-field-radio--docs)

### Usage

```jsx
import { FormFieldRadioGroup, Radio } from '@rijkshuisstijl-community/components-react';
import { FormLabel } from '@utrecht/component-library-react';

<FormFieldRadioGroup>
  <FormLabel type="radio">
    <Radio name="radio-demo" value="option1" />
    Option 1
  </FormLabel>
  <FormLabel type="radio">
    <Radio name="radio-demo" value="option2" />
    Option 2
  </FormLabel>
  <FormLabel type="radio">
    <Radio name="radio-demo" value="option3" />
    Option 3
  </FormLabel>
</FormFieldRadioGroup>;
```

Om ervoor te zorgen dat er maar een van de radio options wordt geselecteerd, moet de name property in elke radio option dezelfde waarde worden geven.
