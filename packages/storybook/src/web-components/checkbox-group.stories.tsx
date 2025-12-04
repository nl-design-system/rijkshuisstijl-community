import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import {
  CheckboxGroupWebComponent,
  FormFieldCheckboxOptionWebComponent,
} from '@rijkshuisstijl-community/web-components';
import { Meta, StoryObj } from '@storybook/web-components-vite';
import { createElement } from 'react';
import readme from '../components-react/checkbox-group.md?raw';

CheckboxGroupWebComponent.define();
FormFieldCheckboxOptionWebComponent.define();

const meta = {
  title: 'Checkbox Group',
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
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/CheckboxGroup.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/checkbox-group/',
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
  },
} as Meta<typeof CheckboxGroupWebComponent>;

export default meta;

export const Default = {
  args: {
    children: [
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-1',
        label: 'Checkbox 1',
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-2',
        label: 'Checkbox 2',
      }),
      createElement('rhc-form-checkbox-option', {
        key: 'checkbox-2',
        label: 'Checkbox 2',
      }),
    ],
  },
} as StoryObj<typeof meta>;
