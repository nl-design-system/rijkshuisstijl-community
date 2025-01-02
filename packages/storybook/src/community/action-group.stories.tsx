import { ActionGroup, Button } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';
import readme from './action-group.md?raw';
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
        component: readme,
      },
    },
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof ActionGroup>;

export default meta;

type Story = StoryObj<typeof ActionGroup>;

export const Default: Story = {
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
  name: 'Default',
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
