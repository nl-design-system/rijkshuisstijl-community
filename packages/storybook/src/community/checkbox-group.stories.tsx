import { CheckboxGroup, FormFieldCheckboxOption } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './checkbox-group.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'CheckboxGroup',
  id: 'rhc-checkbox-group',
  component: CheckboxGroup,
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=954-2226&node-type=canvas&t=HiNKOQhf1hQtLZrr-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/CheckboxGroup.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/checkbox-group/',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
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
