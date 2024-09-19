import { CheckboxGroup, FormFieldCheckboxOption } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './checkbox-group.md?raw';

const meta = {
  title: 'Rijkshuisstijl/CheckboxGroup',
  id: 'rhc-checkbox-group',
  component: CheckboxGroup,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: [
      <FormFieldCheckboxOption label="Checkbox 1" />,
      <FormFieldCheckboxOption label="Checkbox 2" />,
      <FormFieldCheckboxOption label="Checkbox 3" />,
    ],
  },
};
