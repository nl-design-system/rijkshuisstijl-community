import '@rijkshuisstijl-community/components-css/index.scss';

import { FormFieldRadio } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react';

const RadioGroupStory = () => (
  <div className="rhc-radio-group">
    <FormFieldRadio label="Radio option" name="radio-option" />
    <FormFieldRadio label="Radio option" name="radio-option" />
    <FormFieldRadio label="Radio option" name="radio-option" />
    <FormFieldRadio label="Radio option" name="radio-option" />
  </div>
);

const meta = {
  title: 'Rijkshuisstijl/Radio Group',
  id: 'rhc-radio-group',
  component: RadioGroupStory,
  render: RadioGroupStory,
  parameters: {
    // TODO: add documentation
    status: {
      type: 'STABLE',
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof RadioGroupStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
