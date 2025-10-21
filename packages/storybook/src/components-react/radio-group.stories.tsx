import '@rijkshuisstijl-community/components-css/index.scss';

import { FormFieldRadio } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './radio-group.md?raw';

const RadioGroupStory = () => (
  <div className="rhc-radio-group">
    <FormFieldRadio label="Radio option" name="radio-option" />
    <FormFieldRadio label="Radio option" name="radio-option" />
    <FormFieldRadio label="Radio option" name="radio-option" />
    <FormFieldRadio label="Radio option" name="radio-option" />
  </div>
);

const meta = {
  title: 'Radio Group',
  id: 'rhc-radio-group',
  component: RadioGroupStory,
  render: RadioGroupStory,
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    status: {
      type: 'STABLE',
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/RadioGroup.tsx',
  },
} satisfies Meta<typeof RadioGroupStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
