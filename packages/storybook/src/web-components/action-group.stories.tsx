import { ActionGroupWebComponent, ButtonWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components';
import { createElement } from 'react';
import { mergeMarkdown, replaceMarkdown } from '../../helpers/merge-markdown';
import usageDocs from '../community/action-group.md?raw';
import readme from '../community/action-group.md?raw';

ActionGroupWebComponent.define();
ButtonWebComponent.define();

const meta = {
  title: 'Web Components/Action Group',
  id: 'rhc-action-group-web',
  component: 'rhc-action-group',
  argTypes: {
    direction: {
      description: 'Layout of the action group',
      control: 'select',
      options: ['column', 'row'],
      table: {
        defaultValue: { summary: 'row' },
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([
          replaceMarkdown(readme, 'Button Group', 'Action Group', true).replace('Button Group', 'Action Group'),
          usageDocs,
        ]),
      },
    },
    nldesignsystem: 'https://www.nldesignsystem.nl/action-group/',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/ActionGroup.tsx',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=4626-10492&p=f&t=MHYw4lXBHCryrwek-0',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof ActionGroupWebComponent>;

export default meta;

export const Row = {
  args: {
    children: [
      createElement(
        'rhc-button',
        {
          appearance: 'primary-action-button',
          key: 'primary-action-button',
        },
        'Save and continue',
      ),
      createElement(
        'rhc-button',
        {
          appearance: 'secondary-action-button',
          key: 'secondary-action-button',
        },
        'Back',
      ),
    ],
    direction: 'row',
  },
} as StoryObj<typeof meta>;

export const Column = {
  args: {
    direction: 'column',
    children: [
      createElement(
        'rhc-button',
        {
          appearance: 'primary-action-button',
          key: 'primary-action-button',
        },
        'Save and continue',
      ),
      createElement(
        'rhc-button',
        {
          appearance: 'secondary-action-button',
          key: 'secondary-action-button',
        },
        'Back',
      ),
    ],
  },
  name: 'Column',
} as StoryObj<typeof meta>;

export const ColumnStretch = {
  args: {
    direction: 'column-stretch',
    children: [
      createElement(
        'rhc-button',
        {
          appearance: 'primary-action-button',
          key: 'primary-action-button',
        },
        'Save and continue',
      ),
      createElement(
        'rhc-button',
        {
          appearance: 'secondary-action-button',
          key: 'secondary-action-button',
        },
        'Back',
      ),
    ],
  },
  name: 'Column',
} as StoryObj<typeof meta>;
