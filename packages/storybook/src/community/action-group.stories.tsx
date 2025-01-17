import { ActionGroup, Button } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';
import readme from './action-group.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/ActionGroup',
  id: 'rhc-action-group',
  component: ActionGroup,
  argTypes: {
    direction: {
      description: 'Layout of the action group',
      control: 'select',
      options: ['column', 'row'],
    },
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source. Use our own documentation to correctly show its name as "Action Group" instead of "Button Group"
        component: mergeMarkdown([readme]),
      },
    },
    nldesignsystem: 'https://www.nldesignsystem.nl/action-group/',
    github: 'https://github.com/nl-design-system/rijkshuisstijl-community/issues/479',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=4626-10492&p=f&t=MHYw4lXBHCryrwek-0',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof ActionGroup>;

export default meta;

type Story = StoryObj<typeof ActionGroup>;

export const Row: Story = {
  args: {
    children: [
      <Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>,
      <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>,
    ],
  },
};

export const Column: Story = {
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
};
