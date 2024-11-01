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
        component: readme,
      },
    },
  },
} as Meta<typeof ActionGroup>;

export default meta;

type Story = StoryObj<typeof ActionGroup>;

export const Default: Story = {
  args: {
    children: [
      <Button appearance="primary-action-button">Save and continue</Button>,
      <Button appearance="secondary-action-button">Back</Button>,
    ],
  },
  name: 'Default',
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: [
      <Button appearance="primary-action-button">Save and continue</Button>,
      <Button appearance="secondary-action-button">Back</Button>,
    ],
  },
  name: 'Column',
};
