import { FormFieldRadio, type FormFieldRadioProps } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from './radio-group.md?raw';

const RadioGroupStory = ({ ...args }: FormFieldRadioProps) => (
  <div className="rhc-radio-group">
    <FormFieldRadio {...args} />
    <FormFieldRadio {...args} />
    <FormFieldRadio {...args} />
    <FormFieldRadio {...args} />
  </div>
);

const meta = {
  title: 'Radio Group',
  id: 'rhc-radio-group',
  component: FormFieldRadio,
  render: RadioGroupStory,
  parameters: {
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma and NL DesignSystem links
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/RadioGroup.tsx',
  },
} satisfies Meta<typeof RadioGroupStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio option',
    name: 'radio-group',
  },
};
