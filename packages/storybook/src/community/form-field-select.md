# Rijkshuisstijl Community FormFieldTextarea component

## Usage

- Using `options` prop

```jsx
import { FormFieldSelect } from '@rijkshuisstijl-community/components-react';

<FormFieldSelect
  label="Select option"
  name="select"
  description="Select option"
  errorMessage=""
  required={false}
  disabled={false}
  invalid={false}
  defaultValue=""
  options={['option 1', 'option 2', 'option 3']}
/>;
```

- Using `children` prop (options are not required)

```jsx
import { FormFieldSelect } from '@rijkshuisstijl-community/components-react';

<FormFieldSelect
  label="Select option"
  name="select"
  description="Select option"
  errorMessage=""
  required={false}
  disabled={false}
  invalid={false}
  defaultValue=""
>
  <SelectOption value="option 1" id="option1">
    option 1
  </SelectOption>
  <SelectOption value="option 2" id="option2">
    option 2
  </SelectOption>
  <SelectOption value="option 3" id="option3">
    option 3
  </SelectOption>
</FormFieldSelect>;
```
