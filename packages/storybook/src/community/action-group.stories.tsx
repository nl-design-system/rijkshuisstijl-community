import { Meta, StoryObj } from '@storybook/react/*';
import { ButtonGroup as ActionGroup } from '@utrecht/component-library-react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import readme from './action-group.md?raw';
const meta = {
  title: 'Rijkshuisstijl/ActionGroup',
  id: 'rijkshuisstijl-action-group',
  component: ActionGroup,
  argTypes: {
    direction: {
      description: 'Layout of the button group',
      control: 'select',
      options: ['column', 'row'],
    },
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-button-group',
    // tokens,
    // tokensDefinition,
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
