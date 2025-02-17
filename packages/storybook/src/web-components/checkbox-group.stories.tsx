import { CheckboxGroupWebComponent, CheckboxWebComponent } from '@rijkshuisstijl-community/web-components';
import { Meta, StoryObj } from '@storybook/web-components';
import { createElement } from 'react';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/checkbox-group.md?raw';

CheckboxGroupWebComponent.define();
CheckboxWebComponent.define();

const meta = {
  title: 'Web Components/CheckboxGroup',
  id: 'rhc-checkbox-group-web',
  component: 'rhc-checkbox-group',
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
    github: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues/462',
    nldesignsystem: 'https://www.nldesignsystem.nl/checkbox-group/',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} as Meta<typeof CheckboxGroupWebComponent>;

export default meta;

export const Default = {
  args: {
    children: [
      createElement('rhc-Checkbox', {
        key: 'checkbox-1',
        label: 'Checkbox 1',
      }),
      createElement('rhc-Checkbox', {
        key: 'checkbox-2',
        label: 'Checkbox 2',
      }),
      createElement('rhc-Checkbox', {
        key: 'checkbox-2',
        label: 'Checkbox 2',
      }),
      // <FormFieldCheckboxOption key="checkbox-1" label="Checkbox 1" />,
      // <FormFieldCheckboxOption key="checkbox-2" label="Checkbox 2" />,
      // <FormFieldCheckboxOption key="checkbox-3" label="Checkbox 3" />,
    ],
  },
} as StoryObj<typeof meta>;
