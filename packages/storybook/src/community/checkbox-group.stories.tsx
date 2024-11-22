import { CheckboxGroup, FormFieldCheckboxOption } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './checkbox-group.md?raw';

const meta = {
  title: 'Rijkshuisstijl/CheckboxGroup',
  id: 'rhc-checkbox-group',
  component: CheckboxGroup,
  parameters: {
    status: {
      type: 'STABLE',
    },
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
      <FormFieldCheckboxOption key="checkbox-1" label="Checkbox 1" />,
      <FormFieldCheckboxOption key="checkbox-2" label="Checkbox 2" />,
      <FormFieldCheckboxOption key="checkbox-3" label="Checkbox 3" />,
    ],
  },
};
