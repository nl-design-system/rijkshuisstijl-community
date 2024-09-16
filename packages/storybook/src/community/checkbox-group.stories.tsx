import { Checkbox, CheckboxGroup } from '@rijkshuisstijl-community/components-react';
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
    children: [<Checkbox />, <Checkbox />, <Checkbox />],
  },
};
