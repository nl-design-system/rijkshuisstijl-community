import { ActionGroup, Button } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/button-group/README.md?raw';
import usageDocs from './action-group.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import { replaceMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/ActionGroup',
  id: 'rhc-action-group',
  component: ActionGroup,
  argTypes: {
    direction: {
      description: 'Layout of the action group',
      control: 'select',
      options: ['column', 'row', 'column-stretch'],
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
        component: replaceMarkdown(
          mergeMarkdown([readme, usageDocs], 'Button Group', 'Action Group')
            .replace('Button Group', 'Action Group')
            .replace('Button group', 'Action group')
            .replace('button group', 'action group'),
        ),
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
