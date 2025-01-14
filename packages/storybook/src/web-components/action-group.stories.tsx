import { Button } from '@rijkshuisstijl-community/components-react';
import { ActionGroupWebComponent } from '@rijkshuisstijl-community/web-components';
import type { Meta, StoryObj } from '@storybook/web-components';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../community/action-group.md?raw';

ActionGroupWebComponent.define();

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
        component: mergeMarkdown([readme]),
      },
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof ActionGroupWebComponent>;

export default meta;

export const Default = {
  args: {
    children: [
      <Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>,
      <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>,
    ],
    direction: 'row',
  },
} as StoryObj<typeof meta>;

export const Column = {
  args: {
    direction: 'column',
    children: [
      <Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>,
      <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>,
    ],
  },
  name: 'Column',
} as StoryObj<typeof meta>;
