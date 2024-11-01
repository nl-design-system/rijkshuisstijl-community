import '@rijkshuisstijl-community/components-css/index.scss';

import { FormFieldRadioOption } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';

const RadioGroupStory = () => (
  <div className="rhc-radio-group">
    <FormFieldRadioOption label="Radio option" name="radio-option" />
    <FormFieldRadioOption label="Radio option" name="radio-option" />
    <FormFieldRadioOption label="Radio option" name="radio-option" />
    <FormFieldRadioOption label="Radio option" name="radio-option" />
  </div>
);

const meta = {
  title: 'Rijkshuisstijl/Radio Group',
  id: 'rhc-radio-group',
  component: RadioGroupStory,
  render: RadioGroupStory,
  parameters: {
    status: {
      type: 'STABLE',
    },
  },
} satisfies Meta<typeof RadioGroupStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
